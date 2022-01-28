<template>
   <q-dialog
      v-model="dialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-black">
        <q-bar class="bg-primary">
          <div class="text-caption text-weight-bold text-white">{{String($route.meta.mode).charAt(0).toUpperCase() + String($route.meta.mode).slice(1)}} {{String($route.meta.name)}}</div>
          <q-space />
          <q-btn dense flat icon="close" color="white" @click="onClose()">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="q-pa-md q-mb-md">
          <q-card v-if="record">
            <q-card-section class="q-pb-none">
              <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
                <div
                  class="text-h6 bg-primary text-white self-center q-pl-md q-pr-xs q-px-lg"
                  :style="{'marginLeft': $q.screen.lt.md ? '0' : '-8px'}"
                >
                  Form {{$route.meta.name}}
                </div>
                <q-space />
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row q-col-gutter-sm">
                <div class="col">
                  <q-select :options="employees" option-label="nama" option-value="id" label="Nama" v-model="record.name" stack-label></q-select>
                </div>

                <div class="col">
                  <q-input label="Date" type="date" v-model="record.date" stack-label></q-input>
                </div>
              </div>

              <q-input stack-label label="Category" v-model="record.category" ></q-input>

              <q-input stack-label disable label="Status" v-model="record.status" ></q-input>

              <q-input stack-label label="Notes" type="textarea" v-model="record.note" ></q-input>
            </q-card-section>
          </q-card>
        </div>
        <div class="full-width bg-white-7 absolute" style="bottom:0px;box-shadow:2000px;">
            <q-btn flat class="q-ml-md text-red text-weight-medium" label="Back" v-close-popup></q-btn>
            <q-btn flat class="q-ml-lg text-purple text-weight-medium" label="Reset" @click="refreshRecord()"></q-btn>
            <q-btn flat class="q-ml-xs text-primary text-weight-medium" label="Save" @click="() => $route.meta.mode === 'create' ? submitPost() : submitUpdate()"></q-btn>
        </div>
      </q-card>
    </q-dialog>
</template>

<script>
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, onMounted, ref } from 'vue'
import { stringify } from 'qs'

export default defineComponent({
  name: 'CreateHakAkses',
  setup () {
    const $router = useRouter()
    const $route = useRoute()
    const url = 'http://localhost:3000/api/v1/sick-submission'
    const urlUpdate = ref('')
    const dialog = ref(true)
    const form = ref(false)
    const isUpdate = ref(false)
    const rows = ref([])
    const status = ref([
      'Aktif',
      'Tidak Aktif'
    ])

    const employees = ref([
      { nama: 'Niko Junian', id: 1 },
      { nama: 'Rita Manawari', id: 2 },
      { nama: 'Frisca Sihombing', id: 3 },
      { nama: 'Ghozali Wibowo', id: 4 }
    ])

    const record = ref({
      employee_id: null,
      date: null,
      status: 'Not Approve',
      category: null,
      note: null
    })

    const newRecord = ref({
      employee_id: null,
      date: null,
      status: 'Not Approve',
      category: null,
      note: null
    })

    const fetchData = () => {
      urlUpdate.value = url + '/' + String($route.params.id)
      void api.get(urlUpdate.value)
        .then((response) => {
          record.value = response.data.data
          console.log(response, 'update data')
          const newArr = String(record.value.permission).split(',')
          record.value.permission = newArr
          console.log(newArr, 'Data Baru')
        })
    }
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const submitPost = () => {
      void api.post(url, stringify(record.value, config))
        .then((response) => {
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          $router.push('/sakit/')
        })
        .catch((error) => {
          console.error(error.response, stringify(record.value))
          Notify.create({ message: 'Added Data Failed', color: 'Negative' })
        })
    }

    const submitUpdate = () => {
      void api.put(urlUpdate.value, stringify({ name: record.value.name, permission: record.value.permission }, { arrayFormat: 'comma' }), config)
        .then((response) => {
          console.log(stringify(record.value))
          Notify.create({ message: 'Update Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          onClose()
        })
        .catch((error) => {
          console.error(error.response, stringify(record.value))
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
        })
        .finally(() => {
          onClose()
        })
    }

    const onClose = () => {
      dialog.value = false
      $router.push('/sakit/')
    }

    onMounted(() => {
      if ($route.params.id) {
        fetchData()
      }
    })

    return {
      dialog,
      newRecord,
      rows,
      record,
      employees,
      status,
      form,
      isUpdate,
      submitPost,
      submitUpdate,
      onClose
    }
  }
})
</script>

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
                  <q-input label="Nama Shift" v-model="record.name" stack-label></q-input>
                </div>
              </div>

              <q-markup-table class="q-mt-md">
                  <thead>
                      <tr>
                          <th>MONDAY</th>
                          <th>TUESDAY</th>
                          <th>WEDNESDAY</th>
                          <th>THURSDAY</th>
                          <th>FRIDAY</th>
                          <th>SATURDAY</th>
                          <th>SUNDAY</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <q-input dense stack-label v-model="record.monday_in_time" @update:model-value="(x) => hitungJam(record.monday_out_time, x)" type="time" label="Monday in" />
                              <q-input dense stack-label v-model="record.monday_out_time" @update:model-value="(x) => hitungJam(x, record.monday_in_time)" type="time" label="Monday out" />
                              <q-input dense stack-label v-model="hitung" label="Monday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.tuesday_in_time" type="time" label="Tuesday in" />
                              <q-input dense stack-label v-model="record.tuesday_out_time" type="time" label="Tuesday out" />
                              <q-input dense stack-label v-model="record.tuesday_working_hours" type="number" label="Tuesday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.wednesday_in_time" type="time" label="Wednesday in" />
                              <q-input dense stack-label v-model="record.wednesday_out_time" type="time" label="Wednesday out" />
                              <q-input dense stack-label v-model="record.wednesday_working_hours" type="number" label="Wednesday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.thursday_in_time" type="time" label="Thursday in" />
                              <q-input dense stack-label v-model="record.thursday_out_time" type="time" label="Thursday out" />
                              <q-input dense stack-label v-model="record.thursday_working_hours" type="number" label="Thursday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.friday_in_time" type="time" label="Friday in" />
                              <q-input dense stack-label v-model="record.friday_out_time" type="time" label="Friday out" />
                              <q-input dense stack-label v-model="record.friday_working_hours" type="number" label="Friday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.saturday_in_time" type="time" label="Saturday in" />
                              <q-input dense stack-label v-model="record.saturday_out_time" type="time" label="Saturday out" />
                              <q-input dense stack-label v-model="record.saturday_working_hours" type="number" label="Saturday Working Hours" />
                          </td>
                          <td>
                              <q-input dense stack-label v-model="record.sunday_in_time" type="time" label="Sunday in" />
                              <q-input dense stack-label v-model="record.sunday_out_time" type="time" label="Sunday out" />
                              <q-input dense stack-label v-model="record.sunday_working_hours" type="number" label="Sunday Working Hours" />
                          </td>
                      </tr>
                  </tbody>
              </q-markup-table>
            </q-card-section>
          </q-card>
        </div>
        <div class="full-width bg-white-7 absolute" style="bottom:0px;box-shadow:2000px;">
            <q-btn flat class="q-ml-md text-red text-weight-medium" label="Back" @click="onClose()"></q-btn>
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
import { defineComponent, ref, onMounted } from 'vue'
import { stringify } from 'qs'

export default defineComponent({
  name: 'CreateHakAkses',
  setup () {
    const $router = useRouter()
    const $route = useRoute()
    const url = 'http://localhost:3000/api/v1/office-shift'
    const urlUpdate = ref('')
    const dialog = ref(true)
    const form = ref(false)
    const isUpdate = ref(false)
    const rows = ref([])
    // const hitung = computed(() => {
    //   let hasil = 0
    //   return hasil
    // })

    const record = ref({
      monday_in_time: null,
      monday_out_time: null,
      monday_working_time: null,
      tuesday_in_time: null,
      tuesday_out_time: null,
      tuesday_working_time: null,
      wednesday_in_time: null,
      wednesday_out_time: null,
      wednesday_working_time: null,
      thursday_in_time: null,
      thursday_out_time: null,
      thursday_working_time: null,
      friday_in_time: null,
      friday_out_time: null,
      friday_working_time: null,
      saturday_in_time: null,
      saturday_out_time: null,
      saturday_working_time: null,
      sunday_in_time: null,
      sunday_out_time: null,
      sunday_working_time: null
    })

    const newRecord = ref({
    })

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const fetchData = () => {
      urlUpdate.value = url + '/' + String($route.params.id)
      void api.get(urlUpdate.value)
        .then((response) => {
          record.value = response.data.data
          console.log(response, 'update data')
        })
    }

    const submitPost = () => {
      void api.post(url, stringify(record.value), config)
        .then((response) => {
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          $router.push('/shift-kerja/')
        })
        .catch((error) => {
          console.error(error.response, record.value)
          Notify.create({ message: 'Added Data Failed', color: 'Negative' })
        })
    }

    const submitUpdate = () => {
      void api.put(urlUpdate.value, record.value)
        .then((response) => {
          Notify.create({ message: 'Update Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          onClose()
        })
        .catch((error) => {
          console.error(error.response)
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
        })
        .finally(() => {
          onClose()
        })
    }

    const onClose = () => {
      dialog.value = false
      $router.push('/shift-kerja/')
    }

    // const hitungJam = (x, y) => {
    //   if (record.value.monday_in_time)
    //   console.log(x, y)
    // }

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
      form,
      isUpdate,
      // hitung,
      // hitungJam,
      submitPost,
      submitUpdate,
      onClose
    }
  }
})
</script>

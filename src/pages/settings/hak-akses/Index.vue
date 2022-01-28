<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
    >

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <q-btn label="Tamban Role" icon="add_circle_outline" class="bg-primary text-white" :to="'/hak-akses/create'"></q-btn>
      </template>

      <template v-slot:body-cell-lampiran='cell'>
        <q-td class="text-center" v-bind='cell'>
          <q-btn
            round
            dense
            flat
            color="primary"
            icon='description'
          />
        </q-td>
      </template>
      <template v-slot:body-cell-action='cell'>
        <q-td class="text-center" v-bind='cell'>
          <q-btn
            round
            dense
            flat
            color="blue"
            icon='edit'
            :to="`/hak-akses/edit/${cell.row.id}`"
          />
            <!-- @click="onUpdateShow(cell.row.id)" -->

          <q-btn
            round
            dense
            flat
            color="red"
            icon='delete'
            @click="deleteData(cell.row.id)"
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="form">
      <q-card style="width:450px;height:400px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-medium">Hak Akses Form</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input label="Nama" v-model="record.name" stack-label></q-input>
        </q-card-section>

        <q-card-section>
          <q-select :options="status" label="Status" v-model="record.status" stack-label></q-select>
        </q-card-section>

        <q-card-section>
          <q-select multiple use-chips :options="roles" label="Permission" v-model="record.permission" stack-label></q-select>
        </q-card-section>

         <q-card-actions align="right">
          <q-btn flat label="SAVE" color="primary" @click="() => { isUpdate === true ? submitUpdate() :  submitPost() }" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Dialog, Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { stringify } from 'qs'

const columns = [
  { name: 'role_name', align: 'center', label: 'Role Name', field: 'name', sortable: true, headerStyle: 'width:40%' },
  { name: 'permission', align: 'center', label: 'Permission', field: 'permission', sortable: true },
  { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
]

export default {
  setup () {
    const url = 'http://localhost:3000/api/v1/role'
    const urlUpdate = ref('')
    const form = ref(false)
    const isUpdate = ref(false)
    const rows = ref([])
    const status = ref([
      'Aktif',
      'Tidak Aktif'
    ])

    const roles = ref([
      'Absensi',
      'Pegawai',
      'Perusahaan',
      'Sakit-Izin',
      'Settings'
    ])

    const record = ref({
      name: null,
      status: 'Tidak Aktif',
      permission: []
    })

    const newRecord = ref({
      name: null,
      status: 'Tidak Aktif',
      permission: []
    })

    const onUpdateShow = (id) => {
      const urlId = url + '/' + id
      console.log(urlId, id, 'data')
      isUpdate.value = true
      getDetailData(urlId)
      form.value = true
    }

    const showDialog = () => {
      isUpdate.value = false
      form.value = true
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const submitPost = () => {
      void api.post(url, stringify({ name: record.value.name, permission: record.value.permission }, { arrayFormat: 'comma' }), config)
        .then((response) => {
          console.log(stringify(record.value))
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          getData()
          record.value = newRecord.value
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
          getData()
          record.value = newRecord.value
        })
        .catch((error) => {
          console.error(error.response, stringify(record.value))
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
        })
    }

    const getData = () => {
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const getDetailData = (urlBaru) => {
      console.log(isUpdate.value, 'isUpdate')
      urlUpdate.value = urlBaru
      void api.get(urlBaru)
        .then((response) => {
          record.value = response.data.data
          console.log(record.value, 'update data')
          const newArr = String(record.value.permission).split(',')
          record.value.permission = newArr
          console.log(newArr, 'Data Baru')
        })
    }

    const deleteData = (id) => {
      Dialog.create({
        title: 'Delete',
        message: 'Are U sure to delete this ?'
      }).onOk(() => {
        const updateUrl = url + '/' + id
        void api.delete(updateUrl)
          .then((response) => {
            console.log(response)
            Notify.create({ message: 'Delete Data Successfully ', color: 'positive' })
            getData()
          })
          .catch((error) => {
            console.error(error, error.response)
            Notify.create({ message: 'Delete Data Failed', color: 'Negative' })
          })
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    onMounted(() => {
      getData()
    })

    return {
      rows,
      record,
      roles,
      status,
      form,
      columns,
      isUpdate,
      getDetailData,
      onUpdateShow,
      submitPost,
      submitUpdate,
      showDialog,
      deleteData
    }
  }
}
</script>

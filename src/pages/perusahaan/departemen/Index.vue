<template>
  <q-page padding class="bg-grey-2 ">
    <div class="q-pa-md bg-white rounded-xl shadow-md">
      <div class="row full-width q-mt-xs">
        <div class="text-h6 text-weight-bold">Department Company</div>
        <q-space />
        <q-btn size="sm" label="Tambah Departemen" icon="add_circle_outline" class="bg-primary text-white" @click="showDialog()"></q-btn>
      </div>
      <q-table
        flat
        :rows="rows"
        :columns="columns"
        row-key="name"
      >

        <template v-slot:body-cell-lokasi='cell'>
          <q-td class="text-center" v-bind='cell'>
            <q-btn
              round
              dense
              flat
              color="primary"
              icon='my_location'
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
              @click="onUpdateShow(cell.row.id)"
            />

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
        <!-- <q-card style="width:450px;height:300px">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h5 text-weight-medium">Departemen Form</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-input label="Nama" v-model="record.name" stack-label></q-input>
          </q-card-section>

          <q-card-section>
            <q-input label="Kode" v-model="record.code" stack-label></q-input>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="SAVE" color="primary" @click="() => { isUpdate === true ? submitUpdate() :  submitPost() }" v-close-popup />
          </q-card-actions>
        </q-card> -->
        <div class="grid grid-cols-7 bg-white rounded-xl" style="width:500px; height:300px">
          <div class="col-span-7 md:col-span-7 lg:col-span-7 full-width">
            <div class=" bg-white q-pa-md mx-4">
              <div class="row">
                <div class="text-md font-semibold">
                  Form Table
                </div>
                <q-space />
                <q-btn round flat class="mb-4" size="sm" icon="restart_alt" />
                <q-btn round flat class="mb-4" size="sm" icon="close" v-close-popup />
              </div>
              <div class="q-pa-md">
                <q-input outlined  label="Nama" v-model="record.name" stack-label></q-input>
                <q-input outlined  class="mt-2" label="Kode" v-model="record.code" stack-label></q-input>
              </div>

              <div class="row justify-end">
                <q-btn flat color="primary" label="save"  @click="() => { isUpdate === true ? submitUpdate() :  submitPost() }" />
              </div>
            </div>
          </div>
        </div>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'
const columns = [
  {
    name: 'nama',
    required: true,
    label: 'NAMA',
    align: 'center',
    field: 'name',
    format: val => `${val}`,
    sortable: true,
    headerStyle: 'width:30%'
  },
  { name: 'kode', align: 'center', label: 'KODE', field: 'code', sortable: true },
  { name: 'action', label: 'ACTION', align: 'center' }
]

export default {
  setup () {
    const form = ref(false)
    const isUpdate = ref(false)
    const idColumn = ref()
    const url = 'http://localhost:3000/api/v1/department'
    const record = ref({
      name: null,
      code: null
    })
    const newRecord = ref({
      name: null,
      code: null
    })
    const rows = ref([])

    const submitPost = () => {
      void api.post(url, record.value)
        .then((response) => {
          console.log(response)
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          getData()
        })
        .catch((error) => {
          console.error(error)
          Notify.create({ message: 'Added Data Failed', color: 'Negative' })
        })
      record.value = newRecord.value
    }

    const getData = () => {
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const onUpdateShow = (id) => {
      idColumn.value = id
      isUpdate.value = true
      form.value = true
      getDataId()
    }

    const getDataId = () => {
      const newUrl = url + '/' + idColumn.value
      void api.get(newUrl)
        .then((response) => {
          record.value = response.data.data
          console.log(response, 'getData')
        })
    }

    const submitUpdate = () => {
      const updateUrl = url + '/' + idColumn.value
      void api.put(updateUrl, record.value)
        .then((response) => {
          console.log(response)
          Notify.create({ message: 'Update Data Successfully ', color: 'positive' })
          getData()
          isUpdate.value = false
          record.value = newRecord.value
        })
        .catch((error) => {
          console.error(error, error.response)
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
          isUpdate.value = false
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

    const showDialog = () => {
      isUpdate.value = false
      form.value = true
    }

    onMounted(() => {
      getData()
    })
    return {
      isUpdate,
      record,
      form,
      columns,
      rows,
      showDialog,
      deleteData,
      onUpdateShow,
      getDataId,
      submitPost,
      submitUpdate
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <q-table title="Data Sakit" :rows="rows" :columns="columns" row-key="name">
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-name="cell">
        <q-td class="text-center" v-bind="cell">
          {{getEmployee(cell.row.employee_id)}}
        </q-td>
      </template>

      <template v-slot:body-cell-lampiran="cell">
        <q-td class="text-center" v-bind="cell">
          <q-btn round dense flat color="primary" icon="description" />
        </q-td>
      </template>

      <template v-slot:body-cell-approval="cell">
        <q-td class="text-center" v-bind="cell">
          <div v-if="cell.row.status === 'pending'" class="row justify-center">
            <q-btn round dense flat color="green" icon="done" @click="updateData(cell.row.id, 'accept')" />

            <q-btn round dense flat color="red" icon="close" @click="updateData(cell.row.id, 'reject')" />
          </div>

          <div v-else-if="cell.row.status === 'accept'">
            <q-badge color="green">
              Accepted
            </q-badge>
          </div>

          <div v-else>
            <q-badge color="ref">
              Rejected
            </q-badge>
          </div>
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="form">
      <q-card style="width: 450px; height: 300px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5 text-weight-medium">Departemen Form</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input label="Nama" stack-label></q-input>
        </q-card-section>

        <q-card-section>
          <q-input label="Kode" stack-label></q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="SAVE" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'
const columns = [
  {
    name: 'name',
    align: 'center',
    label: 'Nama',
    field: 'employee_id',
    sortable: true
  },
  {
    name: 'tanggal_sakit',
    align: 'center',
    label: 'TANGGAL SAKIT',
    field: 'permission_dates',
    sortable: true
  },
  {
    name: 'keterangan',
    align: 'center',
    label: 'KETERANGAN',
    field: 'description',
    sortable: true
  },
  {
    name: 'status',
    align: 'center',
    label: 'STATUS',
    field: 'status',
    sortable: true
  },
  {
    name: 'lampiran',
    align: 'center',
    label: 'LAMPIRAN',
    field: 'attachment',
    sortable: true
  },
  {
    name: 'approval',
    align: 'center',
    label: 'APPROVAL',
    field: 'approval',
    sortable: true
  }
]

export default {
  setup () {
    const nama = ref('')
    const rows = ref([])
    const form = ref(false)
    const record = ref({
      employee_id: null,
      permission_date: null,
      number_of_days: null,
      attachment: null,
      description: null,
      status: null,
      sick_date_dates: null
    })
    const url = 'http://localhost:3000/api/v1/sick-submission'
    const getData = () => {
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const getDataId = (id) => {
      const urlUpdate = url + '/' + id
      void api.get(urlUpdate)
        .then((response) => {
          record.value = (response.data.data)
          console.log(response.data.data, record.value, 'getData')
        })
    }

    const getEmployee = (id) => {
      const urlBaru = 'http://localhost:3000/api/v1/employee/' + id
      void api.get(urlBaru)
        .then((response) => {
          nama.value = (response.data.data.name)
          console.log(response, 'getData')
        })
      const name = nama.value
      return name
    }

    const submitUpdate = (id) => {
      const urlBaru = 'http://localhost:3000/api/v1/sick-submission/' + id
      void api.put(urlBaru, record.value)
        .then((response) => {
          Notify.create({ message: 'Data berhasil di update', color: 'green' })
          console.log(response, 'getData')
        })
    }

    const updateData = (id, type) => {
      console.log(id, type)
      getDataId(id)
      record.value.status = type
      record.value.permission_date_dates = Date.now()
      Dialog.create({
        title: 'Confirm',
        message: `Are u sure to ${type} this permission ?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        submitUpdate(id)
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    onMounted(() => {
      getData()
    })
    return {
      submitUpdate,
      getDataId,
      updateData,
      getEmployee,
      getData,
      record,
      form,
      columns,
      rows
    }
  }
}
</script>

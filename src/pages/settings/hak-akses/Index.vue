<template>
  <div class="q-pa-md">
    <q-table
      title="Hak Akses"
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
      <template v-slot:body-cell-approval='cell'>
        <q-td class="text-center" v-bind='cell'>
          <q-btn
            round
            dense
            flat
            color="green"
            icon='done'
          />

          <q-btn
            round
            dense
            flat
            color="red"
            icon='close'
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="form">
      <q-card style="width:450px;height:300px">
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
import { ref } from 'vue'
const columns = [
  {
    name: 'role_id',
    required: true,
    label: 'Role Id',
    align: 'center',
    field: row => row.role_id,
    format: val => `${val}`,
    sortable: true,
    headerStyle: 'width:10%'
  },
  { name: 'role_name', align: 'center', label: 'Role Name', field: 'role_name', sortable: true, headerStyle: 'width:40%' },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
  { name: 'approval', align: 'center', label: 'Approval', field: 'approval', sortable: true }
]

const rows = [
  {
    role_id: 'Rizki',
    role_name: 'Staff',
    status: 'Active'
  },
  {
    role_id: 'Deri Agria',
    role_name: 'Staff',
    status: 'Active'
  }
]

export default {
  setup () {
    const form = ref(false)
    return {
      form,
      columns,
      rows
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <q-table
      title="Lokasi Perusahaan"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top-left>
        <q-btn label="Tambah Lokasi" icon="add_circle_outline" class="bg-primary text-white" @click="form = true"></q-btn>
      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

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
            color="green"
            icon='visibility'
          />

          <q-btn
            round
            dense
            flat
            color="purple"
            icon='edit'
          />

          <q-btn
            round
            dense
            flat
            color="red"
            icon='delete'
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
    name: 'nama',
    required: true,
    label: 'NAMA',
    align: 'center',
    field: row => row.nama,
    format: val => `${val}`,
    sortable: true,
    headerStyle: 'width:30%'
  },
  { name: 'kode', align: 'center', label: 'KODE', field: 'kode', sortable: true },
  { name: 'action', label: 'ACTION', align: 'center' }
]

const rows = [
  {
    nama: 'Departemen IT',
    kode: 'IT0987'
  },
  {
    nama: 'Departemen Legal & Law',
    kode: 'LA0937'
  },
  {
    nama: 'Departemen Ekonomi',
    kode: 'EK0283'
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

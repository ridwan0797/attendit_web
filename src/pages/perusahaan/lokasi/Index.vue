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

      <template v-slot:top-rig ht>
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
    <FormLokasi v-model="form"></FormLokasi>
  </div>
</template>

<script>
import FormLokasi from './Form.vue'
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
    headerStyle: 'width:5%'
  },
  { name: 'kota', align: 'center', label: 'KOTA', field: 'kota', sortable: true },
  { name: 'provinsi', align: 'center', label: 'PROVINSI', field: 'provinsi', sortable: true },
  { name: 'kode_pos', align: 'center', label: 'KODE POS', field: 'kode_pos' },
  { name: 'lokasi', align: 'center', label: 'LOKASI' },
  { name: 'action', label: 'ACTION', align: 'center' }
]

const rows = [
  {
    nama: 'District Bisnis dan Manajemen Langit Company',
    kota: 'Jakarta',
    provinsi: 'DKI JAKARTA',
    kode_pos: '450187'
  },
  {
    nama: 'District Pembuatan Barang',
    kota: 'Cikarang',
    provinsi: 'JAWA BARAT',
    kode_pos: '450187'
  },
  {
    nama: 'Store Cabang 1',
    kota: 'Bandung',
    provinsi: 'JAWA BARAT',
    kode_pos: '450187'
  },
  {
    nama: 'Store Cabang 2',
    kota: 'Jakarta',
    provinsi: 'DKI JAKARTA',
    kode_pos: '42087'
  },
  {
    nama: 'Store Cabang 3',
    kota: 'Surabaya',
    provinsi: 'JAWA TIMUR',
    kode_pos: '36789'
  }
]

export default {
  components: {
    FormLokasi
  },
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

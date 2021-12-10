<template>
  <div class="q-pa-md">
    <q-table
      title="Lokasi Perusahaan"
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
    name: 'nama',
    required: true,
    label: 'NAMA',
    align: 'center',
    field: row => row.nama,
    format: val => `${val}`,
    sortable: true,
    headerStyle: 'width:30%'
  },
  { name: 'tanggal_izin', align: 'center', label: 'TANGGAL IZIN', field: 'tgl_izin', sortable: true },
  { name: 'keterangan', align: 'center', label: 'KETERANGAN', field: 'keterangan', sortable: true },
  { name: 'status', align: 'center', label: 'STATUS', field: 'status', sortable: true },
  { name: 'lampiran', align: 'center', label: 'LAMPIRAN', field: 'lampiran', sortable: true },
  { name: 'approval', align: 'center', label: 'APPROVAL', field: 'approval', sortable: true }
]

const rows = [
  {
    nama: 'Rizki',
    tgl_izin: '25-09-2021',
    keterangan: 'cuti istri hamil',
    status: 'Pending',
    lampiran: ''
  },
  {
    nama: 'Deri Agria',
    tgl_izin: '28-09-2021',
    keterangan: 'perpanjang surat ke kepolisian',
    status: 'Approve',
    lampiran: ''
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

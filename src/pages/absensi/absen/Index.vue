<template>
  <div class="q-pa-md">
    <q-table
      title="Lokasi Perusahaan"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <div class="q-ml-lg q-mb-sm">
          <q-input color="primary" type="date" dense filled label="Tanggal" stack-label>
            <template v-slot:prepend>
              <q-icon name="event" />
            </template>
          </q-input>
        </div>
        <div class="full-width q-pa-sm row q-col-gutter-md">
          <div class="col">
            <q-card>
              <q-card-section>
                <div>Tidak Hadir</div>
              </q-card-section>

              <q-card-section>
                <div>0</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-card>
              <q-card-section>
                <div>Total Sakit</div>
              </q-card-section>

              <q-card-section>
                <div>0</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-card>
              <q-card-section>
                <div>Total Izin</div>
              </q-card-section>

              <q-card-section>
                <div>0</div>
              </q-card-section>
            </q-card>
          </div>

          <div class="col">
            <q-card>
              <q-card-section>
                <div>Belum Ada Status</div>
              </q-card-section>

              <q-card-section>
                <div>0</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
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
      <template v-slot:body-cell-lampiran='cell'>
        <q-td class="text-center" v-bind='cell'>
          <q-btn
            dense
            color="white"
            text-color="primary"
            label="lampiran"
          />
        </q-td>
      </template>
    </q-table>
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
    headerStyle: 'width:5%'
  },
  { name: 'departemen', align: 'center', label: 'DEPARTEMEN', field: 'departemen', sortable: true },
  { name: 'status', align: 'center', label: 'STATUS', field: 'status', sortable: true },
  { name: 'jam_masuk', align: 'center', label: 'JAM MASUK', field: 'jam_masuk' },
  { name: 'jam_keluar', align: 'center', label: 'JAM KELUAR', field: 'jam_keluar' },
  { name: 'durasi_lembur', align: 'center', label: 'DURASI LEMBUR', field: 'durasi_lembur' },
  { name: 'lampiran', align: 'center', label: 'LAMPIRAN' }
]

const rows = [
  {
    nama: 'Tiara Juliana',
    departemen: 'ACCOUNTANT',
    jam_masuk: '07.00',
    jam_keluar: '16.00',
    status: 'hadir',
    durasi_lembur: '0',
    lampiran: ''
  },
  {
    nama: 'Pevita Lia Wicaksono',
    departemen: 'ACCOUNTANT',
    jam_masuk: '07.00',
    jam_keluar: '16.00',
    status: 'hadir',
    durasi_lembur: '0',
    lampiran: ''
  },
  {
    nama: 'Rizky',
    departemen: 'LAW AND FIRM',
    jam_masuk: '07.00',
    jam_keluar: '16.00',
    status: 'hadir',
    durasi_lembur: '0',
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

<template>
  <q-page padding class="bg-grey-2">
    <div class="q-pa-md bg-white rounded-xl shadow-md">
      <div class="row full-width q-mt-xs">
        <div class="text-h6 text-weight-bold">Attendance Data</div>
      </div>
      <div class="row q-ml-md q-col-gutter-sm">
        <q-input  class="" color="primary" type="date" v-model="tanggal" @update:model-value="(x) => getData('date', x)" dense filled label="Tanggal" stack-label>
          <template v-slot:prepend>
            <q-icon name="event" />
          </template>
        </q-input>
        <q-select style="width:200px;" :options="statusOpt" v-model="status" @update:model-value="(x) => getData('status', x)" dense filled label="Status" stack-label />
      </div>
      <q-card flat>
        <q-table
          flat
          title="Lokasi Perusahaan"
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
          <template v-slot:top>
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

          <template v-slot:body-cell-name="cell">
            <q-td class="text-center" v-bind="cell">
              {{getEmployee(cell.row.employee_id)}}
            </q-td>
          </template>
        </q-table>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'

const columns = [
  { name: 'nama', align: 'center', label: 'Nama Employee', field: 'employee_id', sortable: true },
  { name: 'departemen', align: 'center', label: 'Waktu Masuk', field: 'departemen', sortable: true },
  { name: 'status', align: 'center', label: 'Waktu Keluar', field: 'status', sortable: true },
  { name: 'jam_masuk', align: 'center', label: 'Tanggal', field: 'jam_masuk' },
  { name: 'jam_keluar', align: 'center', label: 'Izin', field: 'jam_keluar' },
  { name: 'durasi_lembur', align: 'center', label: 'Sakit', field: 'durasi_lembur' },
  { name: 'lampiran', align: 'center', label: 'Lampiran' }
]

export default {
  setup () {
    const nama = ref('')
    const date = ref('')
    const status = ref('')
    const statusOpt = ref([
      'approved',
      'reject'
    ])
    const form = ref(false)
    const rows = ref([])
    const url = 'http://localhost:3000/api/v1/attendance'

    const getData = (type, value) => {
      let generalUrl = url
      if (type === 'date') {
        generalUrl = url + `?date=${value}`
      } else if (type === 'status') {
        generalUrl = url + `?status=${value}`
      } else {
        generalUrl = url
      }
      void api.get(generalUrl)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(generalUrl)
          console.log(response, 'getData')
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
    onMounted(() => {
      getData('general', 'ok')
    })
    return {
      getData,
      getEmployee,
      statusOpt,
      status,
      date,
      form,
      columns,
      rows
    }
  }
}
</script>

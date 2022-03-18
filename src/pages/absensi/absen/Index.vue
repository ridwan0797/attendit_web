<template>
  <q-page padding class="bg-grey-2">

    <div class="flex flex-row justify-end mb-2">
      <div>
        <q-btn-dropdown flat size="xs" class="capitalize" text-color="grey-6" label="this month" />
      </div>
    </div>

    <div class="container mx-auto mb-5">
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        <div class="p-5 bg-white rounded-md shadow-md border-l-4 border-purple-500">
          <div class="mb-2">
            <q-avatar color="deep-purple-2">
              <q-icon name="groups" color="deep-purple-8" />
            </q-avatar>
          </div>
          <div class="text-base text-black font-semibold ">Total Employees</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-black ">275 <span class="text-xl ml-1">People</span></div>
            <span class="flex items-center ml-20 mt-2  px-2 py-0.5 mx-2 text-xs text-green-600 bg-green-100 rounded-full">
                          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <span>1.8%</span>
            </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-md shadow-md border-l-4 border-purple-500">
          <div class="mb-2">
            <q-avatar color="deep-purple-2">
              <q-icon name="sick" color="deep-purple-8" />
            </q-avatar>
          </div>
          <div class="text-base text-black font-semibold ">Sicked Employees</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-black ">0 <span class="text-xl ml-1">People</span></div>
            <span class="flex items-center ml-20 mt-2  px-2 py-0.5 mx-2 text-xs text-red-600 bg-red-100 rounded-full">
                          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <span>2.5%</span>
            </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-md shadow-md border-l-4 border-purple-500">
          <div class="mb-2">
            <q-avatar color="deep-purple-2">
              <q-icon name="contact_page" color="deep-purple-8" />
            </q-avatar>
          </div>
          <div class="text-base font-semibold text-black ">Permission Employee</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-black ">0 <span class="text-xl ml-1">People</span></div>
            <span class="flex items-center px-2 py-0.5 ml-20 mt-2 mx-2 text-xs text-green-600 bg-green-100 rounded-full">
                          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <span>5.2% </span>
            </span>
          </div>
        </div>
        <div class="p-5 bg-white rounded-md shadow-md border-l-4 border-purple-500">
          <div class="mb-2">
            <q-avatar color="deep-purple-2">
              <q-icon name="visibility_off" color="deep-purple-8" />
            </q-avatar>
          </div>
          <div class="text-base font-semibold text-black ">Unreview Permission</div>
          <div class="flex items-center pt-1">
            <div class="text-2xl font-bold text-black ">3 <span class="text-xl ml-1">People</span></div>
            <span class="flex items-center ml-20 mt-2 px-2 py-0.5 mx-2 text-xs text-green-600 bg-green-100 rounded-full">
                          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          <span>2.2%</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pa-md bg-white rounded-xl shadow-md">
      <div class="row full-width q-mt-xs">
        <div class="text-h6 text-weight-bold">Attendance Data</div>
      </div>
      <q-card flat>
        <q-table
          flat
          :rows="rows"
          :columns="columns"
          row-key="name"
        >
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

<style>
.bg-gradient-1 {
  background: rgb(255,255,255);
  background: linear-gradient(262deg, rgba(255,255,255,1) 0%, rgba(82,71,255,1) 100%);
}

.bg-gradient-2  {
  background: rgb(255,255,255);
background: linear-gradient(262deg, rgba(255,255,255,1) 0%, rgba(113,71,255,1) 100%);
}

.bg-gradient-3 {
  background: rgb(255,255,255);
background: linear-gradient(262deg, rgba(255,255,255,1) 0%, rgba(86,196,247,1) 100%);
}

.bg-gradient-4 {
  background: rgb(255,255,255);
background: linear-gradient(262deg, rgba(255,255,255,1) 0%, rgba(5,144,208,1) 100%);
}
</style>

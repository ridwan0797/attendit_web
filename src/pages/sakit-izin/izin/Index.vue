<template>
  <q-page padding class="bg-grey-2">
    <div class="q-pa-md bg-white rounded-xl shadow-md">
      <!-- <q-table title="Data Izin" :rows="rows" :columns="columns" row-key="name">
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
      </q-table> -->

      <q-table
        grid
        :rows="rows"
        :columns="columns"
      >
        <template v-slot:top-left>
          <div class="text-h6 text-weight-bold">Permission Data</div>
        </template>

        <template v-slot:item="props">
          <div class="bg-white w-2/5 p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
              <div class="flex space-x-6 items-center">
                  <q-img fit="contain" src="data:image/jpeg;base64,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" class="w-16 h-25 rounded-lg"/>
                  <div>
                      <div class="q-gutter-sm" v-if="props.row.status === 'approved'">
                        <q-badge outline color="positive">Approved </q-badge>
                      </div>

                      <div class="q-gutter-sm" v-else-if="props.row.status === 'rejected'">
                        <q-badge outline color="negative">Rejected </q-badge>
                      </div>
                      <p class="font-semibold text-base">{{getEmployee(props.row.employee_id)}}{{ nama }}</p>
                      <p class="font-semibold text-sm text-gray-500">{{props.row.description}}</p>
                      <p class="font-normal text-xs text-gray-400">{{props.row.sick_dates || '27 November 2022'}}</p>
                  </div>
              </div>

              <div class="flex space-x-2 items-center">
                  <div class=" rounded-md p-2 flex items-center">
                    <div class="q-gutter-sm" v-if="props.row.status === 'pending'">
                      <q-btn dense outline color="green" icon="done" @click="updateData(props.row.id, 'approved')" />

                      <q-btn dense outline color="red" icon="close" @click="updateData(props.row.id, 'rejected')" />
                    </div>
                  </div>
              </div>
          </div>
          <!-- <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
            <q-card>
              <q-card-section>
                <q-badge v-if="props.row.status === 'pending'" color="red" rounded floating />
                <div class="row">
                  <div>
                    <div>
                      <b>Permission Submission #{{props.row.id}}</b>
                    </div>

                    <div class="text-weight-thin text-grey-9">
                      {{props.row.sick_dates}}
                    </div>

                  </div>
                  <q-space />
                  <div>
                    <q-avatar class="q-mt-xs" size="40px">
                        <q-img  src="data:image/jpeg;base64,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" />
                    </q-avatar>
                  </div>
                </div>
                <br>
                <div class="row">
                <div>
                  <strong>{{getEmployee(props.row.employee_id)}}{{ nama }} </strong>
                  <div class="text-weight-thin text-caption text-grey-7">({{ number }})</div>
                </div>

                <q-space />

                <div>
                  <q-btn flat round unelevated color="primary" icon="visibility" @click="onEmit(props.row, 'permission-submission')" />
                </div>
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="text-right">
                <div class="q-gutter-sm" v-if="props.row.status === 'pending'">
                  <q-btn dense outline color="green" icon="done" @click="updateData(props.row.id, 'approved')" />

                  <q-btn dense outline color="red" icon="close" @click="updateData(props.row.id, 'rejected')" />
                </div>

                <div class="q-gutter-sm" v-else-if="props.row.status === 'approved'">
                  <q-badge outline color="positive">Approved <q-icon class="q-ml-xs q-mb-xs" size="xs" name="done" /></q-badge>
                </div>

                <div class="q-gutter-sm" v-else-if="props.row.status === 'rejected'">
                  <q-badge outline color="negative">Rejected <q-icon class="q-ml-xs q-mb-xs" size="xs" name="clear" /></q-badge>
                </div>
              </q-card-section>
            </q-card>
          </div> -->
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
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'
import { stringify } from 'qs'
const columns = [
  {
    name: 'name',
    align: 'center',
    label: 'Nama',
    field: 'employee_id',
    sortable: true
  },
  {
    name: 'tanggal_izin',
    align: 'center',
    label: 'TANGGAL IZIN',
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
  setup (props, vm) {
    const number = ref('')
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
      permission_date_dates: null
    })
    const url = 'http://localhost:3000/api/v1/permission-submission'
    const getData = () => {
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const getDataId = (id, type) => {
      const urlUpdate = url + '/' + id
      void api.get(urlUpdate)
        .then((response) => {
          record.value = (response.data.data[0])
          record.value.status = type
          console.log(response.data.data, record.value, 'getData')
        })
    }

    const getEmployee = (id) => {
      const urlBaru = 'http://localhost:3000/api/v1/employee/' + id
      void api.get(urlBaru)
        .then((response) => {
          nama.value = (response.data.data.name)
          number.value = String(response.data.data.number)
          console.log(response, 'getData')
        })
      const name = nama.value
      return name
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const submitUpdate = (id) => {
      const urlBaru = 'http://localhost:3000/api/v1/permission-submission/' + id + '/approval'
      void api.put(urlBaru, stringify({
        employee_id: record.value.employee_id,
        sick_dates: record.value.sick_date_dates,
        number_of_days: record.value.number_of_day,
        id: record.value.id,
        dates: Date.now(),
        status: record.value.status

      }), config)
        .then((response) => {
          Notify.create({ message: 'Data berhasil di update', color: 'green' })
          getData()
          console.log(response, 'getData')
        })
    }

    const updateData = (id, type) => {
      console.log(id, type)
      getDataId(id, type)
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

    const onEmit = (data, type) => {
      console.log(data, 'data')
      vm.emit('onEmited', data, type)
    }

    onMounted(() => {
      getData()
    })
    return {
      onEmit,
      submitUpdate,
      getDataId,
      updateData,
      getEmployee,
      getData,
      number,
      record,
      form,
      columns,
      rows
    }
  }
}
</script>

<template>
  <q-page padding class="bg-grey-3">
    <!-- <div class="q-pa-md q-mb-md">
      <q-card v-if="record">
        <q-card-section class="q-pb-none">
          <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
            <div
              class="text-h6 bg-primary text-white self-center q-pl-md q-pr-xs q-px-lg"
              :style="{'marginLeft': $q.screen.lt.md ? '0' : '-8px'}"
            >
              Form {{$route.meta.name}}
            </div>
            <q-space />
          </div>
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-sm">
            <div class="col">
              <q-input label="Nama Shift" v-model="record.name" stack-label></q-input>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          {{rangeHour()}}
        </q-card-section>
      </q-card>
    </div> -->

    <div class="">
     <div class="row">
        <div class="font-bold text-xl">
          Shift Form
        </div>

        <q-space />

        <div class="mr-3 ">
          <q-btn label="save" color="primary" class="q-py-xs" ></q-btn>
        </div>
     </div>

      <div class="grid grid-cols-1 justify-items-center mt-8 q-px-sm">
        <div class="bg-white rounded-md shadow-md full-width" style="">
          <div class="row">
            <div class="font-normal mt-3 mb-3 ml-3 text-md">
              Shift Working
            </div>

            <q-space />

            <div class="mt-2">
              <q-btn flat size="xs" :icon="!taxTab ? 'add' : 'horizontal_rule'" @click="companyTab === true ? companyTab = false : companyTab = true" ></q-btn>
              <q-btn flat size="xs" icon="crop_free"></q-btn>
              <q-btn flat size="xs" icon="restart_alt" ></q-btn>
            </div>
          </div>

          <div class="q-pa-md">
            <div class="text-caption text-grey-5">Detail</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Shift Name"
              />
            </div>

            <div class="text-caption text-grey-5 mt-5">Shifting Schedule</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-2">

          <q-markup-table flat bordered class="q-mt-md">
              <thead>
                  <tr class="bg-blue-grey-1">
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="q-gutter-sm" style="height:150px">
                          <q-input outlined dense stack-label color="primary" v-model="record.monday_in_time" @update:model-value="(x) => record.monday_out_time ? record.monday_working_time = rangeHour(record.monday_in_time, record.monday_out_time) : '' " type="time" label="Monday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.monday_out_time" @update:model-value="(x) => record.monday_working_time = rangeHour(record.monday_in_time, record.monday_out_time)" type="time" label="Monday out" />
                          <q-input outlined dense stack-label disable v-model="record.monday_working_time" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.tuesday_in_time" @update:model-value="(x) => record.tuesday_out_time ? record.tuesday_working_time = rangeHour(record.tuesday_in_time, record.tuesday_out_time) : '' " type="time" label="Tuesday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.tuesday_out_time" @update:model-value="(x) => record.tuesday_working_time = rangeHour(record.tuesday_in_time, record.tuesday_out_time)" type="time" label="Tuesday out" />
                          <q-input outlined dense stack-label disable color="primary" v-model="record.tuesday_working_time" type="number" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.wednesday_in_time" @update:model-value="(x) => record.wednesday_out_time ? record.wednesday_working_time = rangeHour(record.wednesday_in_time, record.wednesday_out_time) : '' " type="time" label="Wednesday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.wednesday_out_time" @update:model-value="(x) => record.wednesday_working_time = rangeHour(record.wednesday_in_time, record.wednesday_out_time)" type="time" label="Wednesday out" />
                          <q-input outlined dense stack-label disable color="primary" v-model="record.wednesday_working_time" type="number" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.thursday_in_time" @update:model-value="(x) => record.thursday_out_time ? record.thursday_working_time = rangeHour(record.thursday_in_time, record.thursday_out_time) : '' " type="time" label="Thursday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.thursday_out_time" @update:model-value="(x) => record.thursday_working_time = rangeHour(record.thursday_in_time, record.thursday_out_time)" type="time" label="Thursday out" />
                          <q-input outlined dense stack-label color="primary" disable v-model="record.thursday_working_time" type="number" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.friday_in_time" @update:model-value="(x) => record.friday_out_time ? record.friday_working_time = rangeHour(record.friday_in_time, record.friday_out_time) : '' " type="time" label="Friday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.friday_out_time" @update:model-value="(x) => record.friday_working_time = rangeHour(record.friday_in_time, record.friday_out_time)" type="time" label="Friday out" />
                          <q-input outlined dense stack-label color="primary" disable v-model="record.friday_working_time" type="number" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.saturday_in_time" @update:model-value="(x) => record.saturday_out_time ? record.saturday_working_time = rangeHour(record.saturday_in_time, record.saturday_out_time) : '' " type="time" label="Saturday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.saturday_out_time" @update:model-value="(x) => record.saturday_working_time = rangeHour(record.saturday_in_time, record.saturday_out_time)" type="time" label="Saturday out" />
                          <q-input outlined dense stack-label color="primary" disable autofocusv-model="record.saturday_working_time" type="number" label="Working Hours" />
                      </td>
                      <td class="q-gutter-sm">
                          <q-input outlined dense stack-label color="primary" v-model="record.sunday_in_time" @update:model-value="(x) => record.sunday_out_time ? record.sunday_working_time = rangeHour(record.sunday_in_time, record.sunday_out_time) : '' " type="time" label="Sunday in" />
                          <q-input outlined dense stack-label color="primary" v-model="record.sunday_out_time" @update:model-value="(x) => record.sunday_working_time = rangeHour(record.sunday_in_time, record.sunday_out_time)" type="time" label="Sunday out" />
                          <q-input outlined dense stack-label color="primary"  disable v-model="record.sunday_working_time" type="number" label="Working Hours" />
                      </td>
                  </tr>
              </tbody>
          </q-markup-table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
      <!-- <q-card class="text-black"> -->
        <!-- <q-bar class="bg-primary">
          <div class="text-caption text-weight-bold text-white">{{String($route.meta.mode).charAt(0).toUpperCase() + String($route.meta.mode).slice(1)}} {{String($route.meta.name)}}</div>
          <q-space />
          <q-btn dense flat icon="close" color="white" @click="onClose()">
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar> -->
        <!-- <div class="full-width bg-white-7 absolute" style="bottom:0px;box-shadow:2000px;">
            <q-btn flat class="q-ml-md text-red text-weight-medium" label="Back" @click="onClose()"></q-btn>
            <q-btn flat class="q-ml-lg text-purple text-weight-medium" label="Reset" @click="refreshRecord()"></q-btn>
            <q-btn flat class="q-ml-xs text-primary text-weight-medium" label="Save" @click="() => $route.meta.mode === 'create' ? submitPost() : submitUpdate()"></q-btn>
        </div> -->
</template>

<script>
import { Notify } from 'quasar'
import { api } from 'src/boot/axios'
import { useRouter, useRoute } from 'vue-router'
import { defineComponent, ref, onMounted } from 'vue'
import { stringify } from 'qs'

export default defineComponent({
  name: 'CreateHakAkses',
  setup () {
    const $router = useRouter()
    const $route = useRoute()
    const url = 'http://localhost:3000/api/v1/office-shift'
    const urlUpdate = ref('')
    const dialog = ref(true)
    const form = ref(false)
    const isUpdate = ref(false)
    const rows = ref([])
    // const hitung = computed(() => {
    //   let hasil = 0
    //   return hasil
    // })

    const record = ref({
      monday_in_time: null,
      monday_out_time: null,
      monday_working_time: null,
      tuesday_in_time: null,
      tuesday_out_time: null,
      tuesday_working_time: null,
      wednesday_in_time: null,
      wednesday_out_time: null,
      wednesday_working_time: null,
      thursday_in_time: null,
      thursday_out_time: null,
      thursday_working_time: null,
      friday_in_time: null,
      friday_out_time: null,
      friday_working_time: null,
      saturday_in_time: null,
      saturday_out_time: null,
      saturday_working_time: null,
      sunday_in_time: null,
      sunday_out_time: null,
      sunday_working_time: null
    })

    const newRecord = ref({
    })

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const fetchData = () => {
      urlUpdate.value = url + '/' + String($route.params.id)
      void api.get(urlUpdate.value)
        .then((response) => {
          record.value = response.data.data
          console.log(response, 'update data')
        })
    }

    const submitPost = () => {
      void api.post(url, stringify(record.value), config)
        .then((response) => {
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          $router.push('/shift-kerja/')
        })
        .catch((error) => {
          console.error(error.response, record.value)
          Notify.create({ message: 'Added Data Failed', color: 'Negative' })
        })
    }

    const submitUpdate = () => {
      void api.put(urlUpdate.value, record.value)
        .then((response) => {
          Notify.create({ message: 'Update Data Successfully ', color: 'positive' })
          record.value = newRecord.value
          onClose()
        })
        .catch((error) => {
          console.error(error.response)
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
        })
        .finally(() => {
          onClose()
        })
    }

    const onClose = () => {
      dialog.value = false
      $router.push('/shift-kerja/')
    }

    const rangeHour = (startHour, endHour) => {
      const cutStartHour = String(startHour).split(':')
      const hour1 = Number(cutStartHour[0]) * 60
      const minute1 = Number(cutStartHour[1])
      const startMinutes = hour1 + minute1

      const cutEndHour = String(endHour).split(':')
      const hour2 = Number(cutEndHour[0]) * 60
      const minute2 = Number(cutEndHour[1])
      const endMinutes = hour2 + minute2

      const resultRange = (endMinutes - startMinutes) / 60
      const kk = String(Number(resultRange).toFixed(2)).split('.')
      const minute = Number(Number(kk[1])) / 60
      const hour = Number(kk[0])
      const resultHour = minute.toFixed(0) + hour
      return Number(resultHour)
    }

    // const hitungJam = (x, y) => {
    //   if (record.value.monday_in_time)
    //   console.log(x, y)
    // }

    onMounted(() => {
      if ($route.params.id) {
        fetchData()
      }
    })

    return {
      dialog,
      newRecord,
      rows,
      record,
      form,
      isUpdate,
      // hitung,
      // hitungJam,
      rangeHour,
      submitPost,
      submitUpdate,
      onClose
    }
  }
})
</script>

<template>
<q-dialog maximized v-model="dialog">
  <div class="column bg-white full-height">
    <div class="column bg-white">
      <q-card class="q-ma-md">
        <q-card-section class="q-pb-none">
          <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
            <div
              class="text-h6 bg-primary text-white self-center q-pl-md q-pr-xs q-px-lg"
              :style="{'marginLeft': $q.screen.lt.md ? '0' : '-8px'}"
            >
              Form Pegawai
            </div>
            <q-space />
          </div>
        </q-card-section>
        <q-card-section>
          <q-splitter
            v-model="splitterModel"
          >

            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="text-black"
                active-color="black"
                indicator-color="primary"
              >
                <q-tab name="profil" icon="person" label="Profil" />
                <q-tab name="informasi" icon="info" label="Informasi" />
                <q-tab name="rekening" icon="account_balance" label="Rekening" />
                <q-tab name="photo" icon="portrait" label="Upload Photo" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="profil">
                  <div class="text-h4 q-mb-md">Profil</div>
                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nama Pegawai" class="col" v-model="record.name" stack-label></q-input>
                  </div>

                  <div class="row q-pa-md full-width">
                    <q-select class="full-width" v-model="record.employee_type" :options="tipeJabatan" label="Tipe Pegawai" stack-label />
                  </div>

                  <div class="row q-pa-md full-width">
                    <q-select class="full-width" v-model="record.gender" :options="options" label="Jenis Kelamin" stack-label />
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  type="date" label="Tanggal Lahir" v-model="record.date_of_birth" class="col" stack-label></q-input>
                    <q-input  label="Tempat Lahir" class="col" v-model="record.place_of_birth" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Kewarganegaraan" class="col" v-model="record.citizenship" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-select class="col" v-model="record.identity_type" :options="identitas" label="Identitas Diri" stack-label />
                    <q-input  label="No Identitas Diri" v-model="record.identity_number" class="col" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Status Perkawinan" class="col" v-model="record.marital_status" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Agama" class="col" v-model="record.religion" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Golongan Darah" class="col" v-model="record.blood_group" stack-label></q-input>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="informasi">
                  <div class="text-h4 q-mb-md">Informasi</div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Pendidikan Terakhir" class="col" v-model="record.last_education" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nama Institusi Pendidikan" class="col" v-model="record.last_education" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Email" class="col" v-model="record.email" stack-label></q-input>
                    <q-input  label="No. HP" class="col" v-model="record.contact_number" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  type="textarea" label="Alamat" class="col" v-model="record.address" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nama Kontak Darurat" class="col" v-model="record.emergency_contact_name" stack-label></q-input>
                    <q-input  label="Hubungan Kontak Darurat" class="col" v-model="record.emergency_contact_relation" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nomor Kontak Darurat" class="col" v-model="record.emergency_contact_number" stack-label></q-input>
                  </div>
                  </q-tab-panel>

                <q-tab-panel name="rekening">
                  <div class="text-h4 q-mb-md">Rekening dan Bank</div>
                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nama Bank" class="col" v-model="record.bank_account_name" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Nama Pemegang Rekening" class="col" v-model="record.bank_account_owner" stack-label></q-input>
                    <q-input  label="No. Rekening" class="col" v-model="record.bank_account_number"  stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-sm q-pa-md">
                    <q-input  label="Cabang" class="col" v-model="record.bank_account_branch" stack-label></q-input>
                  </div>
                  </q-tab-panel>

                <q-tab-panel name="photo">
                  <div class="text-h4 q-mb-md">Upload Photo</div>
                  <div class="row full-width full-height justify-center">
                    <q-uploader></q-uploader>
                  </div>
                  </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>

        </q-card-section>
      </q-card>
      <div class="full-width bg-white shadow-20 absolute" style="bottom:0px;">
          <q-btn flat class="q-ml-md text-red text-weight-bold" label="Back" :to="'/pegawai/'"></q-btn>
          <q-btn flat class="q-ml-lg text-purple text-weight-bold" label="Reset" @click="refreshRecord()"></q-btn>
          <q-btn flat class="q-ml-xs text-primary text-weight-bold" label="Save" @click="submitPost()"></q-btn>
      </div>
    </div>
  </div>
</q-dialog>
</template>

<script>
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { api } from 'src/boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Notify } from 'quasar'

// const newJurnal = () => {
//   const jurnalItem =
//   {
//     name: null,
//     debit: 0,
//     kredit: 0,
//     memo: null
//   }
//   return Object.assign({}, jurnalItem)
// }

export default defineComponent({
  name: 'FormPegawai',
  props: {
    dataItem: {
      type: Object
    },
    recordModel: {
      type: Object
    },
    updateMode: {
      type: Boolean
    }
  },
  setup (props, vm) {
    const $route = useRoute()
    const $router = useRouter()
    const dialog = ref(true)
    const record = ref({
      name: null,
      date_of_birth: null,
      place_of_birth: null,
      citizenship: null,
      identity_type: null,
      identity_number: null,
      marital_status: null,
      religion: null,
      blood_group: null,
      last_education: null,
      last_education_name: null,
      employee_type: null,
      gender: null,
      contact_number: null,
      email: null,
      address: null,
      emergency_contact_name: null,
      emergency_contact_number: null,
      emergency_contact_relation: null,
      bank_account_name: null,
      bank_account_owner: null,
      bank_account_number: null,
      bank_account_branch: null,
      npwp_name: null,
      npwp_start_date: null,
      npwp_number: null,
      taxpayer_status: null,
      bpjs: null,
      bpjs_ketenagakerjaan_number: null,
      bpjs_ketenagakerjaan_effective_date: null,
      bpjs_kesehatan_number: null,
      bpjs_kesehatan_effective_date: null,
      photo: null,
      is_active: 1
    })
    const options = ref([
      'Laki-laki', 'Perempuan'
    ])
    const tipeJabatan = ref([
      'Back Office', 'Accountant', 'Staff', 'IT Staff', 'OB'
    ])
    const identitas = ref([
      'SIM', 'KTP', 'KK'
    ])
    onUpdated(() => {
      record.value = props.recordModel
      console.log(record.value, props.updateMode, 'update')
    })

    onMounted(() => {
      if ($route.meta.mode === 'edit') {
        getData()
      }
    })

    const getData = () => {
      const createUrl = 'http://localhost:3000/api/v1/employee/' + String($route.params.id)
      const urlAddress = createUrl
      void api.get(urlAddress)
        .then((response) => {
          record.value = (response.data.data)
          console.log(response, 'getDataUpdate')
          console.log($route.params.id, 'id')
        })
    }

    const submitPost = () => {
      if ($route.meta.mode === 'edit') {
        const url = 'http://localhost:3000/api/v1/employee/' + record.value.id
        void api.put(url, record.value)
          .then((response) => {
            console.log(response, record.value)
            Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          })
          .catch((error) => {
            console.error(error.response, error)
            Notify.create({ message: 'Added Data Failed', color: 'nxegative' })
          })
      } else {
        const url = 'http://localhost:3000/api/v1/employee'
        void api.post(url, record.value)
          .then((response) => {
            console.log(response, record.value)
            Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          })
          .catch((error) => {
            console.error(error.response, error)
            Notify.create({ message: 'Added Data Failed', color: 'nxegative' })
          })
      }
      void $router.push('/pegawai/')
    }

    return {
      submitPost,
      record,
      tab: ref('profil'),
      splitterModel: ref(10),
      options,
      identitas,
      tipeJabatan,
      dialog
    }
  }
})
</script>

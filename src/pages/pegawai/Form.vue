<template>
  <q-dialog maximized v-bind="$attrs" class="scroll" style="max-height: 1050vh">
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
                      class="text-primary"
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
                          <q-input  type="text" label="ID Pegawai" class="col" stack-label></q-input>
                          <q-input  label="Nama Pegawai" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-pa-md full-width">
                          <q-select class="full-width" v-model="model" :options="options" label="Tipe Pegawai" stack-label />
                        </div>

                        <div class="row q-pa-md full-width">
                          <q-select class="full-width" v-model="model" :options="options" label="Jenis Kelamin" stack-label />
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  type="date" label="Tanggal Lahir" class="col" stack-label></q-input>
                          <q-input  label="Tempat Lahir" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Kewarganegaraan" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-select class="col" v-model="model" :options="identitas" label="Identitas Diri" stack-label />
                          <q-input  label="No Identitas Diri" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Status Perkawinan" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Agama" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Golongan Darah" class="col" stack-label></q-input>
                        </div>
                      </q-tab-panel>

                      <q-tab-panel name="informasi">
                        <div class="text-h4 q-mb-md">Informasi</div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Pendidikan Terakhir" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Nama Institusi Pendidikan" class="col" stack-label></q-input>
                          <q-input  label="Jurusan / Program Studi" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Email" class="col" stack-label></q-input>
                          <q-input  label="No. HP" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  type="textarea" label="Alamat" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Nama Kontak Darurat" class="col" stack-label></q-input>
                          <q-input  label="Hubungan Kontak Darurat" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Nomor Kontak Darurat" class="col" stack-label></q-input>
                        </div>
                       </q-tab-panel>

                      <q-tab-panel name="rekening">
                        <div class="text-h4 q-mb-md">Rekening dan Bank</div>
                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Nama Bank" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Nama Pemegang Rekening" class="col" stack-label></q-input>
                          <q-input  label="No. Rekening" class="col" stack-label></q-input>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <q-input  label="Cabang" class="col" stack-label></q-input>
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
                <q-btn flat class="q-ml-md text-red text-weight-bold" label="Back" v-close-popup></q-btn>
                <q-btn flat class="q-ml-lg text-purple text-weight-bold" label="Reset" @click="refreshRecord()"></q-btn>
                <q-btn flat class="q-ml-xs text-primary text-weight-bold" label="Save" @click="submitPost()"></q-btn>
            </div>
          </div>
        </div>
      </q-dialog>
</template>

<script>
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

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
    }
  },
  setup () {
    const options = ref([
      'Laki-laki', 'Perempuan'
    ])
    const identitas = ref([
      'SIM', 'KTP', 'KK'
    ])
    onUpdated(() => {
    })

    onMounted(() => {
    })

    return {
      tab: ref('profil'),
      splitterModel: ref(10),
      options,
      identitas
    }
  }
})
</script>

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
                    Form Lokasi Perusahaan
                  </div>
                  <q-space />
                </div>
              </q-card-section>

              <q-card-section>
                <div class="column q-gutter-md full-width full-height">
                  <div class="row full-width">
                    <q-input class="full-width" label="Nama Perusahan" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-select  class="full-width" label="Kepala Kantor" stack-label></q-select>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Telepon" stack-label></q-input>
                    <q-input class="col full-width" label="Email" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="NPWP" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Provinsi" stack-label></q-input>
                    <q-input class="col full-width" label="Kota" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-input class="full-width" label="Kode Pos" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-input type="textarea" class="full-width" label="Alamat" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Latitude" stack-label></q-input>
                    <q-input class="col full-width" label="Longitude" stack-label></q-input>
                    <div class="col-1">
                      <q-btn dense flat class="q-mt-lg text-primary" icon="navigation" label="Lokasi"></q-btn>
                    </div>
                  </div>
                </div>
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
  name: 'FormLokasi',
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

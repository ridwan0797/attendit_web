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
                    <q-input class="full-width" label="Nama Perusahan" v-model="record.name" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-select  class="full-width" label="Kepala Kantor" option-label="name" option-value="code" map-options :options="branchHeads" v-model="record.brand_head" @update:model-value="(x) => record.brand_head = x.code" stack-label></q-select>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Telepon" v-model="record.phone" stack-label></q-input>
                    <q-input class="col full-width" label="Email" v-model="record.email" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="NPWP" v-model="record.npwp" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Provinsi" v-model="record.province" stack-label></q-input>
                    <q-input class="col full-width" label="Kota" v-model="record.city" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-input class="full-width" label="Kode Pos" v-model="record.zip_code" stack-label></q-input>
                  </div>

                  <div class="row full-width">
                    <q-input type="textarea" class="full-width" label="Alamat" v-model="record.address" stack-label></q-input>
                  </div>

                  <div class="row q-col-gutter-xs full-width">
                    <q-input class="col full-width" label="Latitude" v-model="record.latitude" stack-label></q-input>
                    <q-input class="col full-width" label="Longitude" v-model="record.longitude" stack-label></q-input>
                    <div class="col-1">
                      <q-btn dense flat class="q-mt-lg text-primary" icon="navigation" label="Lokasi"></q-btn>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <div class="full-width bg-white shadow-20 absolute" style="bottom:0px;">
                <q-btn flat class="q-ml-md text-red text-weight-bold" label="Back" v-close-popup></q-btn>
                <q-btn flat class="q-ml-lg text-purple text-weight-bold" label="Reset" @click="onHide()"></q-btn>
                <q-btn flat class="q-ml-xs text-primary text-weight-bold" label="Save" @click="$props.isUpdate === 'update' ? submitUpdate() : submitPost()"></q-btn>
            </div>
          </div>
        </div>
      </q-dialog>
</template>

<script>
import { Notify } from 'quasar'
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'

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
    },
    isUpdate: {
      type: String
    }
  },
  setup (props, vm) {
    const $router = useRouter()
    const record = ref({
      id: null,
      brand_head: null,
      name: null,
      phone: null,
      email: null,
      npwp: null,
      address: null,
      province: null,
      city: null,
      zip_code: null,
      country: null,
      latitude: null,
      longitude: null
    })
    const newRecord = ref({
      brand_head: null,
      name: null,
      phone: null,
      email: null,
      npwp: null,
      address: null,
      province: null,
      city: null,
      zip_code: null,
      country: null,
      latitude: null,
      longitude: null
    })
    const rows = ref([])
    const options = ref([
      'Laki-laki', 'Perempuan'
    ])

    const identitas = ref([
      'SIM', 'KTP', 'KK'
    ])

    const branchHeads = ref([
      { name: 'William Soedibjoe', code: 99810 },
      { name: 'Hawa Natania', code: 87610 }
    ])

    const getData = () => {
      const url = 'http://localhost:3000/api/v1/company-location'
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const onHide = () => {
      vm.emit('onHide', 'cek')
    }

    onUpdated(() => {
      if (props.isUpdate === 'update') {
        record.value = props.dataItem
      }
      if (props.isUpdate === 'create') {
        record.value = newRecord.value
      }
    })

    onMounted(() => {
      getData()
    })

    const submitPost = () => {
      const url = 'http://localhost:3000/api/v1/company-location'
      void api.post(url, record.value)
        .then((response) => {
          console.log(response, record.value)
          Notify.create({ message: 'Added Data Successfully ', color: 'positive' })
          $router.push('/perusahaan/lokasi/')
          onHide()
        })
        .catch((error) => {
          console.error(error, error.response)
          Notify.create({ message: 'Added Data Failed', color: 'Negative' })
        })
    }

    const submitUpdate = () => {
      const url = 'http://localhost:3000/api/v1/company-location/' + record.value.id
      void api.put(url, record.value)
        .then((response) => {
          console.log(response, record.value)
          Notify.create({ message: 'Update Data Successfully ', color: 'positive' })
          onHide()
        })
        .catch((error) => {
          console.error(error, error.response)
          Notify.create({ message: 'Update Data Failed', color: 'Negative' })
          onHide()
        })
    }

    return {
      record,
      tab: ref('profil'),
      splitterModel: ref(10),
      options,
      identitas,
      branchHeads,
      submitUpdate,
      onHide,
      getData,
      submitPost
    }
  }
})
</script>

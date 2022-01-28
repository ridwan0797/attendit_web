<template>
  <q-dialog maximized
    v-bind="$attrs"
    class="scroll"
    style="max-height: 1050vh"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <div class="row">
      <q-btn @click="markerGeoActive()" class="absolute" :class="!markerGeo ? 'bg-white' : 'bg-grey text-grey-9'" size="md" icon="my_location" style="left:10px;top:100px;width:40px;z-index:1">
        <q-tooltip anchor="center right" self="center start">
          {{!markerGeo ? 'Active' : 'Non-Active'}}
        </q-tooltip>
      </q-btn>
      <div class="col full-width" style="z-index:0;">
        <l-map
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[Number(record.latitude ? record.latitude : mapConfig.lat), Number(record.longitude ? record.longitude : mapConfig.lng)]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />

          <div v-if="$props.isUpdate === 'update'">
            <l-marker draggable :lat-lng="[record.latitude, record.longitude]" @dragend="(e) => log(e)">
              <q-tolltip>
                edit
              </q-tolltip>
            </l-marker>
          </div>

          <div v-else-if="$props.isUpdate === 'create'">
            <l-marker v-if="markerGeo" :lat-lng="[Number(markerDefault.lat), Number(markerDefault.lng)]">
            </l-marker>

            <l-marker v-else draggable :lat-lng="[Number(mapConfig.lat), Number(mapConfig.lng)]" @dragend="(e) => log(e)">
              <q-tolltip>
                edit
              </q-tolltip>
            </l-marker>
          </div>

        </l-map>
      </div>

      <div class="col-4 bg-white">
        <!-- style="z-index:3;top:15px;right:10px;width:450px" -->
        <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
          <div
            class="text-h6 bg-primary text-weight-bold text-white self-center q-pl-md q-pr-xs q-px-lg q-mt-lg"
            :style="{'marginLeft': $q.screen.lt.md ? '0' : '-8px'}"
          >
            Form Lokasi Perusahaan
          </div>
          <q-space />
        </div>

        <div class="q-ma-md bg-purple-2" style="border-radius:5px">
          <q-banner rounded class="q-mx-xs bg-purple-1 text-black text-caption text-weight-thick">
            TIP
            <div class="col">
              Hold And Drag <span class="text-purple-5">Marker </span>to Drop Point Longitude & Latitude
            </div>
          </q-banner>
        </div>

        <q-card flat class="q-pa-xs q-pt-sm">
          <q-card-section>
            <div class="q-gutter-md">
              <q-input dense filled stack-label v-model="record.name" label="Company Name" ></q-input>

              <q-select stack-label dense filled v-model="record.brand_head" :options="branchHeads" option-label="name" option-value="name" @update:model-value="(x) => record.brand_head = x.id" label="Branch Head" />

              <q-input dense filled stack-label v-model="record.npwp" label="NPWP" ></q-input>

              <q-input dense filled stack-label v-model="record.phone" label="Phone" ></q-input>

              <q-input dense filled stack-label v-model="record.email" label="Email" ></q-input>

              <div class="row q-col-gutter-xs">
                <q-input class="col" dense filled stack-label v-model="record.province" label="Province" ></q-input>

                <q-input class="col" dense filled stack-label v-model="record.city" label="City" ></q-input>
              </div>

              <q-input dense filled stack-label v-model="record.zip_code" label="Zip Code" ></q-input>

              <div class="row q-col-gutter-xs">
                <q-input class="col" v-model="record.latitude" disable dense filled stack-label label="latitude" ></q-input>

                <q-input class="col"  v-model="record.longitude"  disable dense filled stack-label label="longitude" ></q-input>
              </div>

              <q-input dense filled stack-label autogrow v-model="record.address" type="textarea" label="Address" ></q-input>
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="full-width q-px-md q-pb-md q-gutter-sm">
              <q-btn dense outline class="full-width" color="primary" label="save" @click="$props.isUpdate === 'update'? submitUpdate() : submitPost()"></q-btn>

              <q-btn dense outline class="full-width" color="negative" label="cancel" @click="onHide()"></q-btn>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { Notify } from 'quasar'
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

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
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers
  },
  setup (props, vm) {
    const $router = useRouter()
    const mapConfig = ref({
      lat: -6.1779036146186055,
      lng: 106.82651630174949
    })
    const markerDefault = ref({
      lat: 0,
      lng: 0
    })
    const markerGeo = ref(false)

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
      latitude: -6.1779036146186055,
      longitude: 106.82651630174949
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

    // const coord = ref(null)

    const fetchCoords = ref(null)

    const getGeoLocation = () => {
      fetchCoords.value = true
      navigator.geolocation.getCurrentPosition(setCoords, getLocError)
    }
    const setCoords = (pos) => {
      console.log(pos)
      markerDefault.value.lat = pos.coords.latitude
      markerDefault.value.lng = pos.coords.longitude
      record.value.longitude = pos.coords.longitude
      record.value.latitude = pos.coords.latitude
    }
    const getLocError = (error) => {
      console.log(error)
    }

    const branchHeads = ref([
      { name: 'William Soedibjoe', id: 99810 },
      { name: 'Hawa Natania', id: 87610 }
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
      console.log(record.value)
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
    const log = (event) => {
      console.log(event.target.dragging._marker._latlng, 'dragend')
      mapConfig.value = event.target.dragging._marker._latlng
      record.value.latitude = event.target.dragging._marker._latlng.lat
      record.value.longitude = event.target.dragging._marker._latlng.lng
      console.log(mapConfig.value, 'latlng')
    }

    const cek = (a) => {
      console.log(a)
    }

    const markerGeoActive = () => {
      if (markerGeo.value === false) {
        getGeoLocation()
        markerGeo.value = true
      } else {
        markerGeo.value = false
        record.value.longitude = mapConfig.value.lng
        record.value.latitude = mapConfig.value.lat
      }
    }
    return {
      markerGeo,
      markerDefault,
      markerGeoActive,
      getGeoLocation,
      cek,
      log,
      mapConfig,
      record,
      tab: ref('profil'),
      splitterModel: ref(10),
      branchHeads,
      submitUpdate,
      onHide,
      getData,
      submitPost,
      zoom: 15,
      iconWidth: 25,
      iconHeight: 40
    }
  }
})
</script>

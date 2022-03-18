<template>
  <q-page class="bg-grey-3">
    <div  class="row">
      <div class="full-width" style="height:1200px;z-index:5">
         <l-map
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[Number(record.latitude ? record.latitude :  mapConfig.lat), Number(record.longitude ? record.longitude : mapConfig.lng)]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-control-layers />

          <div>
            <l-marker :lat-lng="[mapConfig.lat, mapConfig.lng]">
            </l-marker>
          </div>
        </l-map>
      </div>

      <div class="absolute right-16 top-10 bg-white rounded-xl shadow-lg" style="width:500px">
        <div class="row">
          <div class="text-md font-semibold q-pa-md">Form Location</div>
          <q-space />
          <div class="">
            <q-btn flat dense size="sm" icon="restart_alt" class="mt-3 mr-1" />
            <q-btn flat dense size="sm" icon="clear" class="mt-3 mr-3"/>
          </div>
        </div>
        <!-- style="z-index:3;top:15px;right:10px;width:450px" -->
        <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
          <q-space />
        </div>

        <q-card flat class="q-pa-xs q-pt-sm">
          <q-card-section>
            <div class="q-gutter-md">
              <div>{{record.latitude}}</div>
              <q-input dense filled stack-label v-model="record.name" label="Company Name" ></q-input>

              <q-select stack-label dense filled v-model="record.brand_head" option-label="name" option-value="name" @update:model-value="(x) => record.brand_head = x.id" label="Branch Head" />

              <q-input dense filled stack-label v-model="record.npwp" label="NPWP" ></q-input>

              <q-input dense filled stack-label v-model="record.phone" label="Phone" ></q-input>

              <q-input dense filled stack-label v-model="record.email" label="Email" ></q-input>

              <q-input dense filled stack-label v-model="record.country" label="Country" ></q-input>

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

            <div class="grid grid-cols-1 space-y-2">
                <label class="text-xs font-bold text-gray-400 tracking-wide">Logo Company</label>
                <div class="flex items-center justify-center w-full">
                    <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-32 p-10 group text-center">
                        <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                            <!---<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>-->
                            <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                            <img class="has-mask h-24 mt-5 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image">
                            </div>
                            <p class="pointer-none text-gray-500 mr-10 text-xs "><span class="text-xs">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline text-caption">select a file</a> from your computer</p>
                        </div>
                        <input type="file" class="hidden">
                    </label>
                </div>
              </div>
              <p class="text-sm text-gray-300">
                    <span>File type: doc,pdf,types of images</span>
              </p>
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="full-width q-px-md q-pb-md q-gutter-sm">
              <q-btn dense class="gradient-primary full-width text-white" label="save" @click="$props.isUpdate === 'update'? submitUpdate() : submitPost()"></q-btn>
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { Notify } from 'quasar'
import { defineComponent, onMounted, ref, onUpdated } from 'vue'
import { api } from 'src/boot/axios'
import { useRoute } from 'vue-router'
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
    const $route = useRoute()
    const record = ref({})

    const mapConfig = ref({
      lat: -9.1779036146186055,
      lng: 110.8265163017494
    })
    const getData = () => {
      const url = `http://localhost:3000/api/v1/company-location/${$route.params.id}`
      void api.get(url)
        .then((response) => {
          record.value = (response.data.data)
          console.log(response, 'getData')
          mapConfig.value.lat = Number(response.data.data.latitude)
          mapConfig.value.lng = Number(response.data.data.longitude)
        })
    }

    onMounted(() => {
      getData()
    })

    onUpdated(() => {
      getData()
    })

    return {
      tab: ref('profil'),
      splitterModel: ref(10),
      getData,
      zoom: 15,
      iconWidth: 25,
      iconHeight: 40,
      record,
      mapConfig
    }
  }
})
</script>

<template>
  <div class="q-mt-md">
    <div>
     <div class="text-h6 text-center text-weight-bold">Location {{$props.data.name}}</div>
    </div>
      <q-card v-if="$props.data" class="q-ma-xs bg-transparent" flat>
        <q-card-section>
          <div class="col full-width" style="z-index:2;height:400px;width:300px">
            <l-map
              v-model="zoom"
              v-model:zoom="zoom"
              :center="[Number($props.data?.latitude ? $props.data?.latitude : -2.181811187698891), Number($props.data?.longitude ? $props.data?.longitude : 99.83545206954172)]"
            >
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-control-layers />

              <div>
                <l-marker :lat-lng="[Number($props.data?.latitude ? $props.data?.latitude : -2.181811187698891), Number($props.data?.longitude ? $props.data?.longitude : 99.83545206954172)]">
                </l-marker>
              </div>
            </l-map>
          </div>
        </q-card-section>

        <q-card-section>
          <q-markup-table dense separator="none" class="q-pa-sm full-width" flat>
            <tbody>
              <tr >
                <td>Company Name</td>
                <td>: {{$props.data.name}}</td>
              </tr>
              <tr class="bg-grey-1">
                <td>Email</td>
                <td>: {{$props.data.email}}</td>
              </tr>
              <tr >
                <td>Number</td>
                <td>: {{$props.data.phone}}</td>
              </tr>
              <tr class="bg-grey-1">
                <td>City</td>
                <td>: {{$props.data.city}}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>

        <q-card-section class="column full-height justify-center" >
          <q-btn class="q-mx-xl" color="primary" @click="emitLocation()" label="See Full Information"></q-btn>
        </q-card-section>
      </q-card>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers
} from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'LocationCompany',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers
  },
  props: {
    data: Object
  },
  setup (props, vm) {
    const emitLocation = () => {
      vm.emit('onProfile')
    }
    return {
      zoom: 16,
      emitLocation

    }
  }
}
</script>

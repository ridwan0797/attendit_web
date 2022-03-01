<template>
  <q-page padding class="bg-grey-2">
    <div class="q-pa-md bg-white rounded-xl shadow-md">
      <div class="row full-width q-mt-xs">
        <div class="text-h6 text-weight-bold">Location Company</div>
        <q-space />
          <q-btn
            size="sm"
            label="Tambah Lokasi"
            icon="add_circle_outline"
            class="bg-primary text-white"
            @click="
              form = true;
              tipe = 'create';
            "
          ></q-btn>
      </div>
      <q-table
        flat
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-lokasi="cell">
          <q-td class="text-center" v-bind="cell">
            <q-btn round dense flat color="primary" icon="my_location" />
          </q-td>
        </template>
        <template v-slot:body-cell-action="cell">
          <q-td class="text-center" v-bind="cell">
            <q-btn round dense flat color="green" icon="visibility" @click="onEmit(cell.row)" />

            <q-btn
              round
              dense
              flat
              color="purple"
              icon="edit"
              @click="onUpdateForm(cell.row)"
            />

            <q-btn
              round
              dense
              flat
              color="red"
              icon="delete"
              @click="deleteData(cell.row.id)"
            />
          </q-td>
        </template>
      </q-table>
      <FormLokasi
        v-model="form"
        :isUpdate="tipe"
        :dataItem="itemData"
        @onHide="(x) => emitCek(x)"
      ></FormLokasi>
    </div>
  </q-page>
</template>

<script>
import FormLokasi from './Form.vue'
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'
const columns = [
  {
    name: 'nama',
    required: true,
    label: 'NAMA',
    align: 'center',
    field: 'name',
    format: (val) => `${val}`,
    sortable: true,
    headerStyle: 'width:5%'
  },
  {
    name: 'kota',
    align: 'center',
    label: 'KOTA',
    field: 'city',
    sortable: true
  },
  {
    name: 'provinsi',
    align: 'center',
    label: 'PROVINSI',
    field: 'province',
    sortable: true
  },
  { name: 'kode_pos', align: 'center', label: 'KODE POS', field: 'zip_code' },
  { name: 'action', label: 'ACTION', align: 'center' }
]

export default {
  components: {
    FormLokasi
  },
  setup (props, vm) {
    const form = ref(false)
    const rows = ref([])
    const itemData = ref({})
    const tipe = ref('')

    const getData = () => {
      const url = 'http://localhost:3000/api/v1/company-location'
      void api.get(url).then((response) => {
        rows.value = response.data.data
        console.log(response, 'getData')
      })
    }

    const deleteData = (id) => {
      const url = 'http://localhost:3000/api/v1/company-location'
      Dialog.create({
        title: 'Delete',
        message: 'Are U sure to delete this ?'
      })
        .onOk(() => {
          const updateUrl = url + '/' + id
          void api
            .delete(updateUrl)
            .then((response) => {
              console.log(response)
              Notify.create({
                message: 'Delete Data Successfully ',
                color: 'positive'
              })
              getData()
            })
            .catch((error) => {
              console.error(error, error.response)
              Notify.create({
                message: 'Delete Data Failed',
                color: 'Negative'
              })
            })
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
    }

    const emitCek = (cek) => {
      form.value = false
      getData()
    }

    const onEmit = (data) => {
      console.log(data, 'data')
      vm.emit('onEmited', data, 'company-location')
    }

    const onUpdateForm = (item) => {
      itemData.value = item
      tipe.value = 'update'
      form.value = true
      console.log(item)
    }

    onMounted(() => {
      getData()
    })
    return {
      tipe,
      form,
      columns,
      rows,
      itemData,
      onEmit,
      onUpdateForm,
      emitCek,
      getData,
      deleteData
    }
  }
}
</script>

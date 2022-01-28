<template>
  <div class="q-pa-md">
    <q-table
      grid
      title="Pegawai"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:item="props">
          <q-card style="width:325px;height:140px" class="q-ma-md">
            <div class="row full-width">
              <div class="col-3 col-md-4 q-mt-sm q-ml-md">
                <q-avatar rounded size="70px">
                  <q-img :ratio="3/4" :src="props.row.photo"></q-img>
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-subtitle2 text-weight-bold q-mt-md text-no-wrap">{{props.row.name}}</div>
                <div class="text-body2 text-primary">{{props.row.divisi}}</div>
                <div class="text-caption">{{props.row.id}}</div>
              </div>
            </div>
            <q-card-actions align="right" class="q-ml-md">
              <q-btn flat :to="`/pegawai/edit/${props.row.id}`" icon="edit"></q-btn>
              <q-btn flat icon="visibility"></q-btn>
              <q-btn flat icon="delete" @click="deleteData(props.row.id)"></q-btn>
            </q-card-actions>
          </q-card>
      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-left>
        <q-btn label="Tambah Pegawai" icon="add_circle_outline" class="bg-primary text-white" :to="'/pegawai/create'">
        </q-btn>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'

const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Nama',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'divisi', align: 'center', label: 'Divisi', field: 'divisi', sortable: true },
  { name: 'umur', label: 'Umur', field: 'umur', sortable: true },
  { name: 'kontak', label: 'Kontak', field: 'kontak' }
]
export default {
  setup () {
    // const $router = useRouter()
    const rows = ref()
    const row = ref()
    const form = ref(false)
    const val = ref(false)
    const createForm = () => {
      form.value = true
    }
    const getData = () => {
      const url = 'http://localhost:3000/api/v1/employee'
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const updateClick = (item) => {
      console.log(item)
      val.value = true
      row.value = item
      form.value = true
    }
    const deleteData = (id) => {
      Dialog.create({
        title: 'Delete',
        message: 'Are U sure to delete this ?'
      }).onOk(() => {
        const url = 'http://localhost:3000/api/v1/employee'
        const updateUrl = url + '/' + id
        void api.delete(updateUrl)
          .then((response) => {
            console.log(response)
            Notify.create({ message: 'Delete Data Successfully ', color: 'positive' })
            getData()
          })
          .catch((error) => {
            console.error(error, error.response)
            Notify.create({ message: 'Delete Data Failed', color: 'Negative' })
          })
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    onMounted(() => {
      getData()
    })
    return {
      updateClick,
      getData,
      createForm,
      deleteData,
      filter: ref(''),
      val,
      row,
      form,
      columns,
      rows
    }
  }
}
</script>

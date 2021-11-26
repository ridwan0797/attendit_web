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
              <q-btn flat icon="edit"></q-btn>
              <q-btn flat icon="visibility"></q-btn>
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
        <q-btn label="Tambah Pegawai" icon="add_circle_outline" class="bg-primary text-white" @click="createForm()">
        </q-btn>
      </template>
    </q-table>
  <form-pegawai v-model="form"></form-pegawai>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import FormPegawai from 'src/pages/pegawai/Form.vue'

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

const rows = [
  {
    name: 'Rizki Febriansyah',
    id: 99876,
    umur: 23,
    divisi: 'Admin',
    kontak: '0899912821',
    photo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Doni Wilson Sinaga',
    umur: 27,
    id: 98912,
    divisi: 'Teknisi',
    kontak: '08999926232',
    photo: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Pevita Liamura Wicaksono',
    id: 89476,
    umur: 24,
    divisi: 'Staff',
    kontak: '08521876212',
    photo: 'https://i.pinimg.com/564x/f8/e1/1b/f8e11b1f59918a42eb00c59c78eb4dee.jpg'
  },
  {
    name: 'Tiara Juliana',
    id: 92576,
    umur: 22,
    divisi: 'Staff',
    kontak: '08521876212',
    photo: 'https://i.pinimg.com/564x/d2/63/50/d263502d06e2316039bf319962d6a52b.jpg'
  },
  {
    name: 'Eko Dedi Tirmizi',
    id: 98126,
    umur: 31,
    divisi: 'Akuntan',
    kontak: '08129182121',
    photo: 'https://cerahnews.com/wp-content/uploads/2019/04/Pas-Foto-Nasrullah-Nasir-225x300-1.jpg'
  },
  {
    name: 'Farhan Amirullah',
    id: 76543,
    umur: 29,
    divisi: 'Office Boy',
    kontak: '0897654216',
    photo: 'https://akademik.undiksha.ac.id/wp-content/uploads/2017/10/pas-photo.jpg'
  },
  {
    name: 'Gery Laksana',
    id: 10982,
    umur: 27,
    divisi: 'IT Support',
    kontak: '08766543212',
    photo: 'https://cdn.keepo.me/images/post/lists/2019/08/27/main-list-image2nd-b016a720-04e2-4536-bcac-b82f60ee00a3-7.jpeg'
  }
]

export default {
  components: {
    FormPegawai
  },
  setup () {
    // const $router = useRouter()
    const form = ref(false)
    const createForm = () => {
      form.value = true
    }
    return {
      createForm,
      filter: ref(''),
      form,
      columns,
      rows
    }
  }
}
</script>

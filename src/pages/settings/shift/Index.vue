<template>
    <q-markup-table class="mt-3" flat>
      <thead>
        <tr>
          <th>Shift Name</th>
          <th class="capitalize">Monday</th>
          <th class="capitalize">Tuesday</th>
          <th class="capitalize">Wednesday</th>
          <th class="capitalize">Thursday</th>
          <th class="capitalize">Friday</th>
          <th class="capitalize">Saturday</th>
          <th class="capitalize">Sunday</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in rows " :key="key" style="cursor:pointer" @click="$router.push(`/shift-kerja/edit/${item.id}`)">
          <td class="text-center">{{item.name}}</td>
          <td class="text-center">{{item.monday_in_time}} - {{item.monday_out_time}}</td>
          <td class="text-center">{{item.tuesday_in_time}} - {{item.tuesday_out_time}}</td>
          <td class="text-center">{{item.wednesday_in_time}} - {{item.wednesday_out_time}}</td>
          <td class="text-center">{{item.thursday_in_time}} - {{item.thursday_out_time}}</td>
          <td class="text-center">{{item.friday_in_time}} - {{item.friday_out_time}}</td>
          <td class="text-center">{{item.saturday_in_time}} - {{item.saturday_out_time}}</td>
          <td class="text-center">{{item.sunday_in_time}} - {{item.sunday_out_time}}</td>
          <td>
            <q-btn
              round
              dense
              flat
              color="red"
              icon='delete'
              @click="deleteData(item.id)"
            /></td>
        </tr>
      </tbody>
    </q-markup-table>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'
import { Dialog, Notify } from 'quasar'

export default {
  setup () {
    const form = ref(false)
    const rows = ref([])
    const url = 'http://localhost:3000/api/v1/office-shift'

    const getData = () => {
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    const deleteData = (id) => {
      Dialog.create({
        title: 'Delete',
        message: 'Are U sure to delete this ?'
      }).onOk(() => {
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
      deleteData,
      getData,
      form,
      rows
    }
  }
}
</script>

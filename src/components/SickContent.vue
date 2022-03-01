<template>
  <div>
    <div class="text-h6 text-center text-weight-bold">Sick Submission ID#{{$props.data.id}}</div>
    <span>
      <div class="text-center">
        <div class="q-gutter-sm" v-if="$props.data.status === 'pending'">
            <q-badge outline color="grey-6">Pending </q-badge>
        </div>

        <div class="q-gutter-sm" v-else-if="$props.data.status === 'approved'">
            <q-badge outline color="positive">Approved </q-badge>
        </div>

        <div class="q-gutter-sm" v-else-if="$props.data.status === 'rejected'">
            <q-badge outline color="negative">Rejected</q-badge>
        </div>
      </div>

    </span>
  </div>
  <div class="q-mt-xl">
    <div class="row full-width justify-center">
      <q-avatar class="q-mt-xs" size="100px">
          <q-img :fit="contain" src="data:image/jpeg;base64,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" />
      </q-avatar>
    </div>

    <div class="text-center text-weight-bold q-mt-sm text-h6">
      {{getEmployee($props.data.employee_id)}}{{nama}}
    </div>

    <div class="text-center text-weight-thin text-subtitle1 text-grey-7">({{number}})</div>

    <div class="text-center text-caption">
      {{$props.data.employee_type}}
    </div>

    <div class="q-mt-lg q-mx-lg">
      <q-markup-table flat>
        <tbody>
          <tr>
            <td style="width:1%">Date</td>
            <td >:  {{$props.data.sick_dates || 1}}</td>
          </tr>
          <tr>
            <td>Number Of Day</td>
            <td>:  {{$props.data.number_of_days || 1}} Day</td>
          </tr>
          <tr>
            <td>Desc</td>
            <td>:  {{$props.data.description}}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>

    <div class="row fulll-width text-subtitle1 q-mt-xl">
      <div class="col text-center text-weight-bold">
        Attachment Document
      </div>
    </div>
    <div class="row full-width text-weight-thin">
      <div class="col text-center text-weight-bold">
        <q-card flat class="q-ma-md" style="height:150px">
          <q-card-section class="column full-height justify-center" >
            <q-btn class="q-mx-xl" color="primary" icon-right="attachment" label="Attachment"></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'src/boot/axios'

export default {
  name: 'SickContent',
  props: {
    data: Object
  },
  setup (props) {
    const nama = ref('')
    const number = ref('')

    const getEmployee = (id) => {
      const urlBaru = 'http://localhost:3000/api/v1/employee/' + id
      void api.get(urlBaru)
        .then((response) => {
          console.log(response, 'getData')
          nama.value = String(response.data.data.name)
          number.value = String(response.data.data.number)
        })
    }

    onMounted(() => {
      getEmployee(props.data.employee_id)
    })

    return {
      nama,
      number,
      getEmployee

    }
  }
}
</script>

<template>
  <q-page padding class="bg-grey-2">
    <div class="row">
      <div class="q-pa-md font-bold text-3xl ml-3 mb-3">Settings</div>
      <q-space />
      <div>
        <q-btn size="sm" class="mr-5 mt-5" color="primary" icon="add" label="add data" @click="addData()" />
      </div>
    </div>

    <div class="grid grid-cols-8 gap-4">
      <div class="col-span-2 bg-white shadow-sm rounded-xl q-mx-lg" style="height:240px;">
        <div class="font-medium text-md text-center mt-3">Main Menu</div>
        <q-separator class="mt-3" inset />
        <div class="q-pa-md">
          <q-list>
            <q-item active-class="active" :active="menuTo === 'Roles'" class="q-py-md" style="height:10px" @click="menuTo = 'Roles'" clickable>
              <q-item-section avatar>
                <q-icon name="accessibility" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  Roles
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item active-class="active" :active="menuTo === 'Shift'"   class="mt-1" @click="menuTo = 'Shift'" clickable>

              <q-item-section avatar>
                <q-icon name="date_range" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  Working Shift
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="mt-1" active-class="active" :active="menuTo === 'Company'" @click="menuTo = 'Company'" clickable>
              <q-item-section avatar>
                <q-icon name="local_convenience_store" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  Company
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="col-span-6 bg-white shadow-xl rounded-xl q-mx-lg" style="height:700px">
        <Roles class="q-pa-md" v-if="menuTo === 'Roles'" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Roles from 'src/pages/settings/hak-akses/Index.vue'

export default defineComponent({
  components: { Roles },
  setup () {
    const $router = useRouter()
    const menuTo = ref('Roles')
    const addData = () => {
      if (menuTo.value === 'Roles') {
        void $router.push('/hak-akses/create')
      }
    }

    return {
      addData,
      menuTo
    }
  }
})
</script>

<style>
.active {
  color: white;
  background-color: var(--q-primary);
  border-radius: 10px;
}
</style>

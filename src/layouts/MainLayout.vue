<template>
  <q-layout view="lhh LpR fFf">

    <q-header class="bg-white border-l-2 border-gray-100 text-grey-7">
      <q-toolbar class="q-py-sm q-px-md">
         <q-btn dense flat round color="grey-7" icon="menu" @click="toggleLeftDrawer" />

        <q-select
          ref="search" dark dense standout use-input hide-selected
          class="rounded-lg ml-4"
          bg-color="grey-2 text-grey-5"
          label-color="black"
          color="black" :stack-label="false" label="Search or jump to..."
          v-model="text" :options="filteredOptions" @filter="filter"
          style="width: 300px"
        >

          <template v-slot:no-option>
            <q-item class="bg-white">
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie
                    color="grey-8"
                    size="24px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="scope">
            <q-item
              v-bind="scope.itemProps"
              class="GL__select-GL__menu-link"
            >
              <q-item-section side>
                <q-icon name="collections_bookmark" />
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
              </q-item-section>
              <q-item-section side :class="{ 'default-type': !scope.opt.type }">
                <q-btn outline dense no-caps text-color="blue-grey-5" size="12px" class="bg-grey-1 q-px-sm">
                  {{ scope.opt.type || 'Jump to' }}
                  <q-icon name="subdirectory_arrow_left" size="14px" />
                </q-btn>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <div v-if="$q.screen.gt.sm" class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
          <a href="javascript:void(0)" class="text-white">
            Pull requests
          </a>
          <a href="javascript:void(0)" class="text-white">
            Issues
          </a>
          <a href="javascript:void(0)" class="text-white">
            Marketplace
          </a>
          <a href="javascript:void(0)" class="text-white">
            Explore
          </a>
        </div>

        <q-space />

        <q-btn v-if="$q.screen.gt.xs" class="border-l-2 border-gray-100" dense flat round size="sm" icon="notifications" />
        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Mary</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" color="blue-9" size="18px" />
                      Set your status
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your repositories</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your projects</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your stars</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your gists</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="" show-if-above v-model="leftDrawerOpen" side="left">
      <!-- drawer content -->
       <div class="full-width text-h5 q-my-lg text-weight-bold text-center text-primary bg-" >
        <q-img src="~assets/letter.png"  width="135px"></q-img>
      </div>
      <q-list class="q-mt-lg q-ma-sm font-medium">
        <q-item  clickable to="/dashboard" v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section >
            Dashboard
          </q-item-section>
        </q-item>
      </q-list>

      <q-list class="q-ma-sm font-medium">
        <q-item  clickable to="/pegawai" v-ripple>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>

          <q-item-section >
            Pegawai
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Perusahaan -->
      <q-list class="font-medium">
         <q-item
          class="q-ma-sm"
          v-for="(item, index) in perusahaan"
          :key="index"
          clickable v-ripple
          :to="item.to"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section >
            {{item.title}}
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Absensi -->

      <q-list class="font-medium">
         <q-item
          class="q-ma-sm"
          v-for="(item, index) in absensi"
          :key="index"
          clickable v-ripple
          :to="item.to"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section >
            {{item.title}}
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Sakit dan Izin -->
      <q-list class="font-medium">
         <q-item
          class="q-ma-sm"
          v-for="(item, index) in absen"
          :key="index"
          clickable v-ripple
          :to="item.to"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section >
            {{item.title}}
          </q-item-section>
        </q-item>
      </q-list>

      <!-- Pengaturan -->
      <q-list class="font-medium">
         <q-item
          class="q-ma-sm"
          v-for="(item, index) in pengaturan"
          :key="index"
          clickable v-ripple
          :to="item.to"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section >
            {{item.title}}
          </q-item-section>
        </q-item>
      </q-list>

      <q-list class="font-medium mt-10">
        <q-item clickable v-ripple @click="$router.replace('')">
          <q-item-section avatar>
            <q-icon color="grey-7" name="logout" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Logout
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

     <q-drawer class="bg-white" :width="370" v-model="rightDrawerOpen" side="right">
       <div class="row justify-end full-width">
         <q-btn flat round unelevated icon="clear" @click=" rightDrawerOpen = false"></q-btn>
       </div>

       <employee-content v-if="typeContent === 'employee'" :dataEmployee="detail" @onProfile="cekProfile()"></employee-content>
       <sick-content v-else-if="typeContent === 'sick-submission'" :data="detail"></sick-content>
       <permission-content v-else-if="typeContent === 'permission-submission'" :data="detail"></permission-content>
       <location-content v-else-if="typeContent === 'company-location'" :data="detail" @onProfile="onLocation()"></location-content>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view @onEmited="(x, y) => cek(x, y)" />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// import EssentialLink from 'components/EssentialLink.vue'
import EmployeeContent from 'components/EmployeeContent.vue'
import SickContent from 'components/SickContent.vue'
import PermissionContent from 'components/PermissionContent.vue'
import LocationContent from 'components/LocationContent.vue'

const perusahaan = [
  {
    title: 'Lokasi Perusahaan',
    caption: '',
    icon: 'place',
    to: '/perusahaan/lokasi'
  },
  {
    title: 'Departemen',
    caption: '',
    icon: 'business',
    to: '/perusahaan/departemen'
  }
]

const absensi = [
  {
    title: 'Absensi',
    caption: '',
    icon: 'contact_page',
    to: '/absensi'
  }
  // {
  //   title: 'Import Absensi',
  //   caption: '',
  //   icon: 'import_export',
  //   to: '/absensi/import-absensi'
  // }
]

const absen = [
  {
    title: 'Data Sakit',
    caption: '',
    icon: 'sick',
    to: '/sakit'
  },
  {
    title: 'Data Izin',
    caption: '',
    icon: 'personal_injury',
    to: '/izin'
  },
  {
    title: 'Announcements',
    caption: '',
    icon: 'campaign',
    to: '/announcements'
  }
]

const pengaturan = [
  {
    title: 'Settings',
    caption: '',
    icon: 'tune',
    to: '/hak-akses/'
  }
  // {
  //   title: 'Shift kerja',
  //   caption: '',
  //   icon: 'date_range',
  //   to: '/shift-kerja/'
  // },
  // {
  //   title: 'Company',
  //   caption: '',
  //   icon: 'local_convenience_store',
  //   to: 'company'
  // }
]

export default {
  components: {
    EmployeeContent,
    SickContent,
    PermissionContent,
    LocationContent
  },
  setup () {
    const $router = useRouter()
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const detail = ref({})
    const typeContent = ref('')

    const cek = (data, type) => {
      console.log('emit', data, type)
      rightDrawerOpen.value = true
      detail.value = data
      typeContent.value = type
    }

    const cekProfile = () => {
      rightDrawerOpen.value = false
      void $router.push(`/pegawai/${detail.value.id}`)
      console.log('berhasil')
    }

    const onLocation = () => {
      rightDrawerOpen.value = false
      void $router.push(`/perusahaan/lokasi/${detail.value.id}`)
      console.log('berhasil')
    }

    return {
      typeContent,
      detail,
      cekProfile,
      onLocation,
      cek,
      absensi,
      perusahaan,
      absen,
      pengaturan,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.q-item.q-router-link--active, .q-item--active {
    color: white;
    background-image: linear-gradient(to right, #5247ff, #7147ff, #56c4f7 );
    border-radius: 10px;
}
</style>

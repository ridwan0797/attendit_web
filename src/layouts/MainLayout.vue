<template>
  <q-layout view="lhr LpR fFf">

    <q-header bordered class="bg-white text-grey-7">
      <q-toolbar>
        <q-btn dense flat round color="grey-7" icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-space />
        <q-btn flat rounded dense size="14px" icon="notifications_none"></q-btn>
        <div class="row q-pr-md">
          <q-btn-dropdown
            flat
          >
          <div>
            <div class="row no-wrap q-pa-md" style="width:250px;" >
              <div class="row">
                <div class="col">
                  <q-avatar size="72px">
                    <q-icon name="account_circle" color="grey-7" size="75px" />
                  </q-avatar>
                </div>

                <div class="col q-ml-sm">
                  <div class="text-subtitle1 q-mt-sm q-mb-xs text-weight-bold">Admin</div>
                  <div class="text-caption q-pa-none">Administrator</div>
                </div>
              </div>
              <!-- <div class="column" style="max-width: 300px;">
                <div class="text-h6 q-mb-md">Settings</div>

                <q-item to="/admin/account" clickable>
                  <q-item-section>
                    <q-item-label>Account Settings</q-item-label>
                  </q-item-section>
                </q-item>
              </div>

              <div class="column items-center" style="max-width: 300px;">
                <q-avatar size="72px">
                  <q-icon name="account_circle" color="grey-7" size="75px" />
                </q-avatar>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div> -->
            </div>
            <div class="column">
              <div class="full-width">
                <q-separator class="full-width"></q-separator>
              </div>
                <div  class="text-subtitle2 q-mt-md q-ml-md q-pb-md">Logout Administrator</div>
            </div>
          </div>
            <template v-slot:label>
              <div class="row">
                <div class="text-subtitle2 text-grey-7 q-mt-xs">Admin</div>
                <q-icon name="account_circle" class="q-mt-xs q-ml-sm"></q-icon>
              </div>
            </template>
          </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
       <div class="full-width text-h5 q-my-lg text-weight-bold text-center text-primary bg-" >
        Abcent.
      </div>
      <q-list class="q-mt-lg">
        <q-item  clickable to="/dashboard" v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section >
            Dashboard
          </q-item-section>
        </q-item>
<!--
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="apartment" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Company
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="people" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Employees
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="summarize" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Report
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="map" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Map Abcent
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="note_alt" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Attandace
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="grey-7" name="settings" />
          </q-item-section>

          <q-item-section class="text-grey-7">
            Settings
          </q-item-section>
        </q-item> -->
      </q-list>

      <q-list>
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
      <q-list>
        <q-expansion-item icon="apartment" label="Perusahaan">
          <EssentialLink
            v-for="(item, index) in perusahaan"
            :key="index"
            v-bind="item"
          />
        </q-expansion-item>
      </q-list>

      <!-- Absensi -->
      <q-list>
        <q-expansion-item icon="text_snippet" label="Absensi">
          <EssentialLink
            v-for="(item, index) in absensi"
            :key="index"
            v-bind="item"
          />
        </q-expansion-item>
      </q-list>

      <!-- Sakit dan Izin -->
      <q-list>
        <q-expansion-item icon="masks" label="Sakit dan Izin">
          <EssentialLink
            v-for="(item, index) in absen"
            :key="index"
            v-bind="item"
          />
        </q-expansion-item>
      </q-list>

      <!-- Pengaturan -->
      <q-list>
        <q-expansion-item icon="settings" label="Pengaturan">
          <EssentialLink
            v-for="(item, index) in pengaturan"
            :key="index"
            v-bind="item"
          />
        </q-expansion-item>
      </q-list>

      <q-list class="q-pt-lg">
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

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

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
  },
  {
    title: 'Import Absensi',
    caption: '',
    icon: 'import_export',
    to: 'import-absensi'
  }
]

const absen = [
  {
    title: 'Data Sakit',
    caption: '',
    icon: 'sick',
    to: 'data-sakit'
  },
  {
    title: 'Data Izin',
    caption: '',
    icon: 'personal_injury',
    to: 'data-izin'
  }
]

const pengaturan = [
  {
    title: 'Hak Akses',
    caption: '',
    icon: 'accessibility',
    to: 'hak-akses'
  },
  {
    title: 'Shift kerja',
    caption: '',
    icon: 'date_range',
    to: 'shift-kerja'
  },
  {
    title: 'Company',
    caption: '',
    icon: 'local_convenience_store',
    to: 'company'
  }
]

export default {
  components: {
    EssentialLink
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      absensi,
      perusahaan,
      absen,
      pengaturan,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.q-item.q-router-link--active, .q-item--active {
    color: var(-q--primary);
    border-right-width: 3px;
    border-right-style: solid;
    border-right-color: var(-q--primary);
}
</style>

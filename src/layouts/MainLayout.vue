
<template>
  <q-layout view="hhh LpR lff">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="bg-primary"  >
      <div class="full-width text-h5 q-my-lg text-weight-bold text-center text-white bg-" >
        Abcent.
      </div>
      <q-list class="q-pb-lg">
        <q-item>
          <q-item-section avatar>
          <q-avatar>
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg" />
          </q-avatar>
        </q-item-section>

          <q-item-section>
            <q-item-label class="text-white text-weight-bold">Dave Panduwinata</q-item-label>
            <q-item-label class="text-white" caption lines="1">Admin</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-list class="q-mt-md ">
        <q-item  clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="dashboard" />
          </q-item-section>

          <q-item-section class="text-white">
            Dashboard
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="apartment" />
          </q-item-section>

          <q-item-section class="text-white">
            Company
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="people" />
          </q-item-section>

          <q-item-section class="text-white">
            Employees
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="summarize" />
          </q-item-section>

          <q-item-section class="text-white">
            Report
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="map" />
          </q-item-section>
\
          <q-item-section class="text-white">
            Map Abcent
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="note_alt" />
          </q-item-section>

          <q-item-section class="text-white">
            Attandace
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="white" name="settings" />
          </q-item-section>

          <q-item-section class="text-white">
            Settings
          </q-item-section>
        </q-item>
      </q-list>

      <q-list class="q-pt-lg">
        <q-item clickable v-ripple @click="$router.replace('')">
          <q-item-section avatar>
            <q-icon color="white" name="logout" />
          </q-item-section>

          <q-item-section class="text-white">
            Logout
          </q-item-section>
        </q-item>
      </q-list>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<template>
  <q-page>
    <div class="row window-width window-height">
      <div class="col-8 col-md-8 col-sm-8 q-pa-sm bg-white">
        <div class="full-width  ">
          <div class="q-ml-lg" style="color:#20406e">
            <q-img src="~assets/letter.png"  width="150px"></q-img>
          </div>
          <div class="q-ml-lg q-mt-md text-h3 text-weight-bold text-primary" style="color:#20406e">
            <div>Unlock Your</div>
            <div class="q-mt-sm row">
              <span> Team </span>
              <span class="q-ml-sm text-dark"> Performance </span>
            </div>
          </div>
          <div class="row q-mt-lg justify-center items-center">
            <div class="col-lg-11">
            <q-img src="~assets/a.svg" class="" style="width:100%"></q-img>
            </div>
          </div>
      </div>
      </div>

      <div class="col col-md-4 col-sm-4 bg-primary">
        <div class="row justify-center items-center full-height full-width">
          <div>
            <q-card class="bg-primary" flat>
              <q-card-section>
                <div class="q-ml-xl" style="color:#20406e">
                  <q-img src="~assets/white_icon.png" class="q-ml-xl"  width="100px"></q-img>
                </div>
                <div class="text-left text-weight-bold text-h4 font-primary text-white q-mt-md">Welcome to attendit</div>
                <div class="text-left text-subtitle1 q-mt-sm q-ml-sm text-white" style="font-weight:100">Unlock your team performance</div>
              </q-card-section>

              <q-card-section class="q-mt-xl">
                <div class="text-subtitle text-weight-medium q-mt-lg text-white">Email</div>
                <q-input color="white" outlined bg-color="white" stack-label></q-input>

                <div class="text-subtitle text-weight-regular q-mt-lg text-white" >Password</div>
                <q-input color="white" outlined bg-color="white" type="password" stack-label></q-input>
              </q-card-section>

              <q-card-section>
                <div class="text-subtitle text-weight-bold q-my-lg text-white">Forget Password?</div>
                <q-btn class="bg-accent text-white full-width q-pa-sm" label="login" @click="$router.replace('/dashboard')"></q-btn>
                <div class="full-width text-center text-weight-thin text-caption q-mt-xl text-white">@2021 By Ridwan Maulana</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLogin'
})
</script>

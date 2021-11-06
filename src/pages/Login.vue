<template>
  <q-page>
    <div class="row window-width window-height">
      <div class="col-8 col-md-8 col-sm-8 q-pa-sm bg-primary">
        <div class="full-width  ">
          <div class="q-ml-xl q-mt-md text-h4 text-weight-bold text-white" style="color:#20406e">
            Abcent.
          </div>
          <div class="q-ml-xl q-mt-xl text-h3 text-weight-bold text-white" style="color:#20406e">
            <div>Unlock Your</div>
            <div class="q-mt-sm row">
              <span> Team </span>
              <span class="q-ml-sm" style="color:#20406e"> Performance </span>
            </div>
          </div>
          <div class="row justify-center items-center">
            <div class="col-lg-11">
            <q-img src="~assets/a.svg" class="" style="width:100%"></q-img>
            </div>
          </div>
      </div>
      </div>

      <div class="col col-md-4 col-sm-4 ">
        <div class="row justify-center items-center full-height full-width">
          <div>
            <q-card flat>
              <q-card-section>
                <div class="text-left text-weight-bold text-h4 font-primary" style="color:#20406e">Welcome to Abcent</div>
                <div class="text-left text-subtitle1 q-mt-sm text-grey-6" style="font-weight:100">Unlock your team performance</div>
              </q-card-section>

              <q-card-section class="q-mt-xl">
                <div class="text-subtitle text-weight-medium q-mt-lg text-grey-6">Email</div>
                <q-input outlined stack-label></q-input>

                <div class="text-subtitle text-weight-regular q-mt-lg text-grey-6" >Password</div>
                <q-input outlined type="password" stack-label></q-input>
              </q-card-section>

              <q-card-section>
                <div class="text-subtitle text-weight-bold q-my-lg" style="color:#20406e" >Forget Password?</div>
                <q-btn class="bg-primary text-white full-width q-pa-sm" label="login" @click="$router.replace('/dashboard')"></q-btn>
                <div class="full-width text-center text-weight-thin text-caption q-mt-xl text-grey-6">@2021 By Ridwan Maulana</div>
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

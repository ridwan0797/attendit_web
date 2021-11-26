<template>
  <q-page>
    <div class="row full-width q-pt-md">
      <div class="col-9">
        <div class="row q-gutter-md full-width full-height">
          <q-card  square bordered flat class="col q-mt-md" style="width:25%;height:170px;">
            <q-card-section>
              <div class="column q-gutter-sm">
                <div class="text-subtitle2 text-weight-bold">
                  Sessions
                </div>
                <div class="text-h6 text-weight-bold">
                  24K
                </div>
                <div class="row text-caption text-weight-bold">
                  <div class="text-primary">8,5%</div>
                  <div class="text-grey-8 q-ml-xs">New Sessions Today</div>
                </div>
                <div class="row full-width justify-center q-mb-md">
                  <q-avatar>
                    <q-icon name="people" color="blue"></q-icon>
                  </q-avatar>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card  square bordered flat class="col q-mt-md" style="width:25%;height:170px;">
            <q-card-section>
              <div class="column q-gutter-sm">
                <div class="text-subtitle2 text-weight-bold">
                  Avg. Sessions
                </div>
                <div class="text-h6 text-weight-bold">
                  00:22
                </div>
                <div class="row text-caption text-weight-bold">
                  <div class="text-primary">1,5%</div>
                  <div class="text-grey-8 q-ml-xs">Weekly Avg Sessions</div>
                </div>
                <div class="row full-width justify-center q-mb-md">
                  <q-avatar>
                    <q-icon name="query_builder" color="blue"></q-icon>
                  </q-avatar>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card  square bordered flat class="col q-mt-md" style="width:25%;height:170px;">
            <q-card-section>
              <div class="column q-gutter-sm">
                <div class="text-subtitle2 text-weight-bold">
                  Bounce Rate
                </div>
                <div class="text-h6 text-weight-bold">
                  $15000
                </div>
                <div class="row text-caption text-weight-bold">
                  <div class="text-red">25%</div>
                  <div class="text-grey-8 q-ml-xs">Bounce Rate Weekly</div>
                </div>
                <div class="row full-width justify-center q-mb-md">
                  <q-avatar>
                    <q-icon name="work" color="blue"></q-icon>
                  </q-avatar>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-card  square bordered flat class="col q-mt-md" style="width:200px;height:170px;">
            <q-card-section>
              <div class="column q-gutter-sm">
                <div class="text-subtitle2 text-weight-bold">
                  Goal Completions
                </div>
                <div class="text-h6 text-weight-bold">
                  894
                </div>
                <div class="row text-caption text-weight-bold">
                  <div class="text-primary">85%</div>
                  <div class="text-grey-8 q-ml-xs">Completion Weekly</div>
                </div>
                <div class="row full-width justify-center q-mb-md">
                  <q-avatar>
                    <q-icon name="trending_up" color="primary"></q-icon>
                  </q-avatar>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-grow"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLogin',
  setup () {}
})
</script>

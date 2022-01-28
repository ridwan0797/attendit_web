<template>
  <q-dialog maximized v-bind="$attrs" class="scroll" style="max-height: 1050vh">
        <div class="column bg-white full-height">
          <div class="column bg-white">
            <q-card class="q-ma-md">
              <q-card-section class="q-pb-none">
                <div :class="{ 'row q-gutter-sm': !$q.screen.lt.md }">
                  <div
                    class="text-h6 bg-primary text-white self-center q-pl-md q-pr-xs q-px-lg"
                    :style="{'marginLeft': '-8px'}"
                  >
                    JURNAL UMUM
                  </div>
                  <q-space/>
                </div>
              </q-card-section>
            </q-card>
            <div class="full-width bg-white shadow-20 absolute" style="bottom:0px;">
                <q-btn flat class="q-ml-md text-red" label="Back" v-close-popup></q-btn>
                <q-btn flat class="q-ml-lg text-purple" label="Reset"></q-btn>
                <q-btn flat class="q-ml-xs text-primary" label="Save"></q-btn>
            </div>
          </div>
        </div>
      </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormTemplate'
})
</script>

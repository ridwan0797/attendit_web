<template>
  <q-page class="bg-grey-3">
    <div class="q-pa-md">
     <div class="row">
        <div class="font-bold text-xl">
          Employee Form
        </div>

        <q-space />

        <div class="mr-3 ">
          <q-btn label="save" color="primary" class="q-py-xs" ></q-btn>
        </div>
     </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 justify-items-center mt-16 q-pa-md">
       <div class="bg-white rounded-md shadow-md" style="width:650px;height:585px">
         <div class="row">
          <div class="font-normal mt-3 ml-3 text-md">
            Profile Form
          </div>

          <q-space />

          <div class="mt-2">
            <q-btn flat size="xs" icon="horizontal_rule" ></q-btn>
            <q-btn flat size="xs" icon="crop_free"></q-btn>
            <q-btn flat size="xs" icon="restart_alt" ></q-btn>
          </div>
         </div>

         <div class="q-pa-md">
          <div class="text-caption text-grey-5">Detail Employee</div>
          <q-separator class="mt-1 mb-1" />

           <div class="mb-2 mt-3">
            <q-select dense outlined stack-label
              class="col"
              label="Employee Position"
            />
           </div>

           <div class="grid grid-cols-2 gap-3">
             <q-input outlined stack-label dense
              class="col"
              label="Name"
            />

            <q-select dense outlined stack-label
              class="col"
              label="Gender"
            />
           </div>

           <div class="grid grid-cols-2 gap-3 mt-3">
             <q-input outlined stack-label dense
              class="col"
              type="date"
              label="Date of Birth"
            />

            <q-input dense outlined stack-label
              class="col"
              label="Place of Birth"
            />
           </div>

           <div class="mt-3">
            <q-input dense outlined stack-label
              class="col"
              label="Blood type"
            />
           </div>

           <div class="mt-3">
            <q-input dense outlined stack-label
              class="col"
              label="Religion"
            />
           </div>

           <div class="mt-3">
            <q-input dense outlined stack-label
              class="col"
              label="Marital Status"
            />
           </div>

           <div class="grid grid-cols-2 gap-3 mt-3">
             <q-input outlined stack-label dense
              class="col"
              label="Email"
            />

            <q-input dense outlined stack-label
              class="col"
              label="Phone"
            />
           </div>

           <div class="mt-3">
            <q-input dense outlined stack-label
              type="textarea"
              class="col"
              label="Address"
            />
           </div>
         </div>
       </div>

      <div class="bg-white rounded-md shadow-md" style="width:650px;height:585px">
          <div class="row">
            <div class="font-normal mt-3 ml-3 text-md">
              Formal Form
            </div>

            <q-space />

            <div class="mt-2">
              <q-btn flat size="xs" icon="horizontal_rule" ></q-btn>
              <q-btn flat size="xs" icon="crop_free"></q-btn>
              <q-btn flat size="xs" icon="restart_alt" ></q-btn>
            </div>
          </div>

          <div class="q-pa-md">
            <div class="text-caption text-grey-5">State Administration</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-3 mb-2">
              <q-input dense outlined stack-label
                class="col"
                label="Citizenship"
              />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <q-select outlined stack-label dense
                class="col"
                label="Personal Identity"
              />

              <q-input dense outlined stack-label
                class="col"
                label="ID Number"
              />
            </div>

            <div class="mt-3 text-caption text-grey-5">Education</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-3">
              <q-select outlined stack-label dense
                class="col"
                label="Last Education"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Study Program"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Name of Educational Institution"
              />
            </div>

            <div class=" mt-3 text-caption text-grey-5">Emergency Contact</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Emergency Contact Name"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Emergency Contact Relation"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Number Emergency Contact"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 justify-items-center mt-2 q-px-sm">
        <div class="bg-white rounded-md shadow-md full-width" style="">
          <div class="row">
            <div class="font-normal mt-3 ml-3 text-md">
              Tax & Insurance Form
            </div>

            <q-space />

            <div class="mt-2 mb-3">
              <q-btn flat size="xs" :icon="!taxTab ? 'add' : 'horizontal_rule'" @click="taxTab === true ? taxTab = false : taxTab = true" ></q-btn>
              <q-btn flat size="xs" icon="crop_free"></q-btn>
              <q-btn flat size="xs" icon="restart_alt" ></q-btn>
            </div>
          </div>

          <div v-if="taxTab" class="q-pa-md">
            <div class="text-caption text-grey-5">Bank Account Data</div>
            <q-separator class="mt-1 mb-1" />
            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Bank Account Name"
              />

              <q-input dense outlined stack-label
                class="col"
                label="Bank Account Owner"
              />
            </div>

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Bank Account Number"
              />
            </div>

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Bank Account Branch"
              />
            </div>

            <div class="text-caption text-grey-5">NPWP Data</div>
            <q-separator class="mt-1 mb-1" />

            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="NPWP Name"
              />

              <q-input dense outlined stack-label
                class="col"
                label="NPWP Number"
              />
            </div>

            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                type="date"
                label="NPWP Start Date"
              />

              <q-input dense outlined stack-label
                class="col"
                label="NPWP Tax Collector"
              />
            </div>

            <div class="mt-3">
              <q-input outlined dense stack-label
                label="Tax Payer Status"
              />
            </div>

            <div class="text-caption text-grey-5 mt-3">BPJS Data</div>
            <q-separator class="mt-1 mb-1" />

            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="BPJS Ketenagakerjaan Number"
              />

              <q-input dense outlined stack-label
                class="col"
                label="BPJS Ketenagakerjaan Effective Date"
              />
            </div>

            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="BPJS Kesehatan Number"
              />

              <q-input dense outlined stack-label
                class="col"
                label="BPJS Kesehatan Effective Date"
              />
            </div>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-1 justify-items-center mt-3 q-px-sm">
        <div class="bg-white rounded-md shadow-md full-width" style="">
          <div class="row">
            <div class="font-normal mt-3 mb-3 ml-3 text-md">
              Company Relation Form
            </div>

            <q-space />

            <div class="mt-2">
              <q-btn flat size="xs" :icon="!taxTab ? 'add' : 'horizontal_rule'" @click="companyTab === true ? companyTab = false : companyTab = true" ></q-btn>
              <q-btn flat size="xs" icon="crop_free"></q-btn>
              <q-btn flat size="xs" icon="restart_alt" ></q-btn>
            </div>
          </div>

          <div v-if="companyTab" class="q-pa-md">
            <div class="text-caption text-grey-5">Account</div>
            <q-separator class="mt-1 mb-1" />
            <div class="grid grid-cols-2 gap-3 mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Username"
              />

              <q-input dense outlined stack-label
                class="col"
                label="Password"
              />
            </div>

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Role"
              />
            </div>

            <div class="text-caption text-grey-5 mt-3">Company Type</div>
            <q-separator class="mt-1 mb-1" />

            <div class="mt-3">
              <q-input outlined stack-label dense
                class="col"
                label="Department"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Company Location"
              />
            </div>

            <div class="mt-3">
              <q-input dense outlined stack-label
                class="col"
                label="Office Shift"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </q-page>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const taxTab = ref(false)
    const companyTab = ref(false)
    const profileTab = ref(false)
    const formalTab = ref(false)

    return {
      taxTab,
      companyTab,
      profileTab,
      formalTab
    }
  }
}
</script>

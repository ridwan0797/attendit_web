<template>
  <q-page class="bg-grey-3" padding>
    <div class="full-width bg-white rounded-md shadow-md" style="height:235px">
      <div class="grid grid-cols-3 gap-3 place-content-center h-48 border-b border-gray-200">
        <div class="flex flex-row border-r border-gray-200" style="width:400px">
          <div class="q-pa-md">
            <q-avatar class="q-mt-xs" size="100px">
                <q-img :fit="contain" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgYGBgYGhgYGRgYGBgaGRoYGRgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrISw0MTQ1ODQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ1NDQ0NDQ0NDY0NDU0MTQ0NDQ0NDQ0NDQ0NP/AABEIARMAuAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUGBwj/xAA8EAACAQIDBgQDBQYHAQEAAAABAgADEQQSIQUGMUFRcSJhgZGhscETMkJScgcUI9Hh8DNic4KSsvGiFv/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/xAAoEQACAgEDAgYDAQEAAAAAAAAAAQIRAwQhMRJBBSIyUWGBE3HRsSP/2gAMAwEAAhEDEQA/AORiInmn3YiIgCIiAIiIAlVQnXSUiAUIlYiCBERBIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAJGUqVAouf/AHtMJ8Vfnp0/nO443IxarW48Gz3ft/TKfEKPM+XD1mOa7Hjw9pivVlDWmmOOMT5/Pr82R7ul7IuvU7j1MLi2HO/eYzVbyN504p8ozxz5Iu1Jp/s2tHGK3HQ+f85kA31BB7GaC+sy6DEc5XLDF8Ho4vF8saUkn/ptJKYoxduIJ+BEvo4YXB0/vjKJY3E9jTa3Hn2Wz9icRE4NgiIgCIiAIiIAiIgCIiAJBmsLmTmFtF/CB1MmMeqSRRqMv4scp+yMLEYku3lyHlIh7SAWVW03JJKkfH5JyySc5Pdk/tJB3vJCmWNgLmbHD7v1W5W566SbOFFs09pJZsk2c6uFZSNbfSbTDbqVXXNa3QfKSFFs5tV1l+1v6zOxmx6icVOnEzAdLTkOLRTMZcoV8pvyPETHvAhpNUzvFkljkpRe6N5JSzhnug7W9pemGSptH2eKfXjjJd1YiIkFgiIgCIiAIiIAiIgCa/aI1HabCYW0F0HeWYn5kYPEY3p5fRrTL+FolmAA46SyZ0m7mBuVcj8VvUg5fjb3mtuj5aEep0dJutsBQodhcnhO5wuzUUfdGvGYWxaQCKByHxvN9RE4LpbbIwa2x6bEFkBI4H+sn+6gCwE2Zll1knNmix+zka91Bv1E4neHdkAF0Hdf5T0qqswMTTFoO072Z4ViaOUkTHAnX757OCPnUWDfAzklE7RRONSo2Gzjo3f6TNmLgUsnck/T6TKmHI7kz63QRcdPFP2ERE5NYiIgCIiAIiIAiIgCWMSl17a+0vyqIWYKBckgADiSdLSYummVZoLJjlF90aJFuQOpno2xERKRD6ZWs19LEKOfrf1nEV8E9KuEdSGDrcHoSCPhPUa2x0qfevlbKXANrleB/voOk2vc+ShHpbRh7P3roIxVmNr/AHgNOl/b5TpsDvPhX0FVbnrpNRUw2AoAZ0pLpzUE6ak9Zdw1PZ1c+AIWHQFSPl0MbBpt7nXUnVxdWBHkZDE10RczsAPOYuBpKmi6CW8fTRzZhcdJByonObR30QErRpvVbh4QbX7zUPtzGsb/ALs+XplPzHObnaW8WGwtlWmSTmAyhVXwWzDMbDS4lnDbzLUyXR0zqGS9iCD1I4SbOlHejA2pT/ecOxKMjW1VhYqRPMVTW3Se44ilnU+YnmW72xDVxTqw8FN2Z/MK2i+pHsDCYnG2jCpplUDoB78/jeXJtt6MKtLEuiKFFlaw4AsNbeU1MxS5Z9bgr8ca4pCIiQWiIiAIiIAiIgCIiAJn7AcDE0SeGdR76D4mYEytkm1el/qJ/wBhJXJxkVwkvhnUb/7PUGjXtrnyH9N8y37WNu5nVUKd19Ji74YEVcMbcaRWovdRc/8AzmHrM3ZrZkU9QD8Js7HyL2NRX3fzFzoRUUo1xrlItoeMjsrdJKIYKztnChi2W/gvbLppxnWIkuEQHK9zBRSpAvFUeMdpVTmftK41SpB6fKQQYNfYNJ7ZkVlFyFYZgCeJAPCE2LTUiyAW4ADQduk3OHGgPKScCB1M11SnYTmd3MMRjMXlXwlkJOnEqTa3qZ1VfgZo9mUir1XA1dyS3IAALbzOh94fB1Hc5PfqgVxIJ4Mi2PYkfIrOdnS794lWrqg/AmvdrEDvYA+s5qZJepn1Gkv8Mb9hERINAiIgCIiAIiIAiIgCFYggjQggg+Y1ERAPVNi4/wDeaKvwJXK4B/EuhBB4gy/svwjJ+UlfaeUUcQ6XyOy345WIv3tOv3Exv36ZOoOYdm4/H5y+GS3R4Or0DgnOL2vj4O/RpeBmLTeXM2kuPJNdiaVfOhpsiqCc4ZSxcHowIyyuLp4h3Qh1VF++uXMX6DNfwiXq20UQ6tftMetvBRH4vciRsWxhN7pG3wwsoBkKjTCwO16VU2RwW4lb6+0yKrSStpp7mPiW0M5P/wDWUqWdCjl0ZgLWysbnmTpOg2liQiM7cFUsewF55K7liWPFiWPcm5+cqyScao9Tw/SxypuS22LmNxDVHeo3FmLHoLngOwsPSWoiZz3kklSEREEiIiAIiIAiIgCIiAIiIAmbsTFGlXRx+YK36WNj9D6TClA1temvtCdOzjJFSi0+57Jhq1xM0AMCDznOJUKgONVNifK/ObfB4kMNDNqPkpwpmDU3eS91Ate9iL8fOVbY4IyhQPO03lMy+WEUdR1GSKpM1WztnpRvbieJPEy5XeX6riabGYu5yJqfl5mDjeTtmq3qr3w9TpZR7sBPPZ229fhw5HVkv/yv9JxMzZX5j6Dw2NYX+xERKz0RERAEREAREQBERAEREAREQBI5SdALk6ADUkngAJKdbu1g1w+HfH1BciyUFP5nYIHt5s1h5A9Z1CLk6M+pzxwwcpfXyzqcBT8CgjXKAR6TGfCPTa6HQ8uUzsFewv0mTiEuJqo+Xc9zFpY9+msuHF1OgHcySUAe8uvTAHWCLRq69Wo2ha3bj7yeHw4QefMyTLdpdYRR03tsczvkf4P+9frOKnoe3sCa1NkH3rZkH5nXUL3Oo7kTzsTPlTuz3vDZp4qXKZWIiVnoiIiAIiIAiIgCIiAIiIAkZn7J2RWxL5KKFrfebgi/qbgO3Gei7D3BpUrPXP2rjXLwQH9P4vX2ncMcpcGTUa3Fh5e/suTgtj7uYjEEZEKqSP4jeFbcyt9W9J6PvPsEHBU6SHKtF6DEc2p0mBZSethm7jznSUaYBsBa3CZD0gylTwImyGJQXyfPavWy1DVqkuxymEGgmxCXExaeHKEoeKm3pyMzKRkcGduyNGmJN6UlllGvAMIUNTzlqqOUz8thMNlzGCUzFpUS1VB0cN7f2JxO/Oxjh8QXUfw6pLKRwVjqy++o8j5T07ZGFGZnOtrqvQfmPe+npL+0tnpXQpUUMp1seo5jmD5iJY+qJo0uq/Bk6u3DPB4nc7W/Z+2rYZrj8j/JXH1HrOMxmDqUmy1UZG6MLX7HgfSY5QlHlH0eLVYsy8r+u5ZiInJoEREAREQBEIpJAAJJ0AAuSegA4zrNh7jVqtnrH7JPy8XI7cF9bnynUYSk6RTlz48Ubm6OWw9BnYKis7ngqgkn0HLzne7v7gDR8Ubnj9kp0Hk7Dj2X3M7LZOxaOGXLSQKOZ4s3mzcTNiFmqGBLeW54ep8Ulk8uPZe/chhaKU1CIqqoFgqgAD2mQqyKLaXlGs0Hkt27ZBF19JcAhhqJO0NkGv2lhc3jA1A18xNeg1nQianGYbK2YfdPwlcl3Ji+xALKFYRwTJ1HAE4OzGxA0luhhy3hXifh5mXHfMRbU8BNrg8NlFz94/DykxViTorSoKihF5DjzJ5k+ZjLLtocWVux+UuK7MegmkjisElQZXVGU8nUMD6GZKJb2kqo0v0hkqTTtHC7Y/Z9h3uaRNFug8SH/aeHoROC2vu1icPcvTJUfjS7LbqSNV9QJ7sVBEttSlMsMZcbHoYPE82PZu18/wBPnUGSnsW3NzMPiLtl+zfjnpgKT+ocG+fnOC2xuTiaF2UfbIOaA5gPNOPteZpYZR+T2NP4jhy7XT9n/TmolCOR0I4g8R3ErKjeez7E3doYcDInitYu2rnrry7Cwm8VZbEuienGKSpHxU8kpu5O2TKyQEX6yQE6OCgEuIJQSayGQUcadtfaTtKPwlKZuBIBMSLqCLGSnK74byfu6/ZUiDXYDW2b7NT+Ijm1uA9TpxJW6ILmMqJ9o6UnVnTLnQMMy5+B1+XnIpgqzDM1kHVtPhy9bTztNNdbklix1YsTcsSdSSdbzMGOqkW+1ew1HjbQ+8selTfIWdpcHo2ympBvsw16gF9dLgWuVHQEj3E25njD1nDrWV2+0Q3RySzDS1teItoRwIJnqG7m1jiaKuy5Wt4l5EjTMvVTIlj6OOApdW5twJCuPDbqQPcy4JbrHVR539pwSXbSNQaGTlCIBaThKyiHlDaSQCstskukSDQSc/t7dfD4kEslntYVF0YdL/mHkYm9AvEreOLd0aIarNBVGToslOB8hKg6yVrgdpRBrLSguVEzAg6X6cZcUaQIYyCATJ05ZGsvJDBNuEt0Doe8uHhLNiBpIXByY+0cbkGVdXPDy8zOIxOwDmd3JLPcknU5jzvO3p4QZi51J6ymNoArwncWkT8HlRSxtI2E2m8OEyVLjg+vrzmsoIWYAczaabtWUNU6Npu9sc4h/EPAOPmOk7qphctinhy8APlKbu4IU6YsLXmzZZnlK2XRVEMNiQw6HmP5RWHiHlKrhgDeXit5XsmSVEqYAlZBBjvobyZ1EVBpKKbidEkVPKUqGwLdAZVuMjiT4D/fOCStAeERKYY3URBBCkbqJVRLWD+7boT85fMkkpeRY3lSZRFgF1BJrIXkk4yGQXTIkSUoZBBES3X4S4ZZrGSiTz3etr18v5VUepux/wCwmm2M+SsSxuufS/JSALenGZu16uetUb/OwHZbKPlMELxtzmqK8tGeT81nreAcFB5TJAnO7sYstTQniRY910PynRgzLJUy8rEROQIiIBbaW10MuPLbdZ0iSTCQxI8JlwSGIPhgIsYclViW1q2lJ1RJXCHj3l9jMbDcTMkiQQwFvLiiRAlTAKMZJBIKJdAgkuLDSKGC05OQZh46plRmP4QT7C8zJp95qmXD1D1XL/yOX6zqK3D4PN819TxJJ97SQaWwdB6y4omyjMzpd1K9lZfyvcdmH8wZ3FJrgTzvdp7VGXqt/Y/1ne4N7gTNkW5fHgzJSUiUnRWUlCZQGTRJSoZEyrShkglTlrGfdlynNbtbFZcvfWFyEWc/jCxLWzWz1bjgBE6JM3DHxHtMyYGFbxekzoZDKgyjSolGkAnTEmTIpDGQwVBgSMqBAKzmt9KtqAX8zj4XP0nSTjt+X1pr+o/IfWd415kcy9LOQtrLgMsl5cTWazObTYL2rL5hh8L/AEne7Peed7MOWqh/zge+n1nfbPbWZ8q3LsfpNvKExeQGsoLCcgslbzkQpHSSA3EQ0ic3T4xnPMEQCNRrCaDbLXX1m2xL305TUbW+6O86RKRmbuUrIzHnp6D/ANlJm4SnkoqvOwv3OplJBJiYB7kTaCaPAPZ7TeLJIZKRMrIjjBBcEoTKyJMgEhKkyl4gFeU4nfdvGg/yt8xO1nD75m9RP0n5yzF6iufBzjKIGkts0qGvNJQZOFezoejp/wBhO/wLeKecobG/TWehbOPivKMvKL8XDN2xhDLZMnbSUlhJ3AFybDmTwHeRp1VbVSCOoII95zX7QHtgXH52poR1DuoYHyteeO4LF1KTBqTsjX0+zJS5OmoWwbsQZy2kdRg5I+is0hUbSeO4fbu1FIAetctlyutJrNYGxVkDLoRqSBrLp/aDjFBR/smYEi5plSLXHAOQ2vS0jridvDJb0emuZgV0zuq9X+A4/WaXcnaNStRqVars5zka2sFVFbwqAAPvefDjNnurinrZncABScltDZjfXztLE9jhqjocQeAiRtdrxIINJR/xV7/Sb5YiSGVMLEQQTkIiQCRlREQAZwe+H+Kv6T8zESzF6iufBzbSCxE1FJcM9E2Z+HsPlKRKMvYuxdzbS6eERKCw439pjkYVBfjVW/nZKrfMA+k873UoK+LpK4DDNex8gSPkIiVZDVp+/wCmdrVUGitQgFiwBJAOmUaAHQDtOa3u/wANP9Um/PVKXPjzPw6CInn4n/2+i6PC+/8ADqt0BbZ9xzFYnzPiF/gPab7dIfwR3MRPVjwYpG8pxEQcn//Z" />
            </q-avatar>
          </div>
          <div class="flex items-center q-pl-md ">
            <div>
              <div class="font-semibold text-2xl">{{rows.name}}</div>
              <div class="font-light">{{rows.employee_type}}</div>
            </div>
          </div>
        </div>

        <div class=" border-r border-gray-200" style="width:400px">
          <div class="q-pl-sm">
            <div class="text-lg font-semibold">Contact Detail</div>
            <div class="flex flex-row full-width mt-3">
              <q-icon name="email" color="black" class="mt-1" />
              <div class="ml-2">{{rows.email}}</div>
            </div>

            <div class="flex flex-row full-width mt-3">
              <q-icon name="phone" color="black" class="mt-1" />
              <div class="ml-2">{{rows.contact_number}}</div>
            </div>

            <div class="flex flex-row full-width mt-3">
              <q-icon name="whatsapp" color="black" class="mt-1" />
              <div class="ml-2">Whats App {{rows.name}}</div>
            </div>
          </div>
        </div>

        <div class=" " style="width:400px">
          <div class="q-pl-sm">
            <div class="flex flex-row full-width mt-3">
              <div class="ml-1 font-medium">Attendance  <span class="font-normal text-grey-7">(95%)</span></div>
              <q-linear-progress :value="0.95" color="primary" class="q-mt-sm" />
            </div>

            <div class="flex flex-row full-width mt-5">
              <div class="ml-1 font-medium">Permission Submission <span class="font-normal text-grey-7">(2%)</span></div>
              <q-linear-progress :value="0.02" color="yellow" class="q-mt-sm" />
            </div>

            <div class="flex flex-row full-width mt-5">
              <div class="ml-1 font-medium">Sick Submission <span class="font-normal text-grey-7">(3%)</span></div>
              <q-linear-progress :value="0.03" color="warning" class="q-mt-sm" />
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="overview" label="Overview" />
          <q-tab name="profile" label="Profile" />
          <q-tab name="security" label="Security" />
        </q-tabs>
      </div>
    </div>

    <div class="mt-5">
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="overview" class="bg-grey-3 no-padding">
          <div class="grid grid-cols-8 gap-5">
            <div class="col-span-2">
              <div class="grid grid-cols-1 gap-5">
                <div class="bg-white rounded-lg" style="">
                    <div class="font-semibold text-sm q-pa-sm">Shift Working</div>
                    <q-separator />

                    <div class="q-pa-sm">
                      <div class="q-pa-sm">
                        <div class="text-xs font-medium text-grey-7">Morning Shift</div>
                        <div class="mt-2 text-lg font-semibold">Monday - Saturday </div>
                        <div class="text-xs mb-1">(08.00 -16.30)</div>
                      </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg" style="">
                    <div class="font-semibold text-sm q-pa-sm">Company & Position</div>
                    <q-separator />

                    <div class="flex flex-row full-width q-pa-md rounded-lg mb-2">
                      <div class="flex-grow">
                        <div class="text-lg font-semibold">Daikin Jakarta Branch</div>
                        <div class="text-sm text-grey-7">IT & Security Dept</div>
                      </div>
                      <div>
                        <q-img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                          width="70px"
                          height="50px"
                          class="rounded-md"
                        />
                      </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg" style="">
                    <div class="font-semibold text-sm q-pa-sm">More from IT Staff</div>
                    <div class="q-pa-md ml-5">
                      <q-avatar>
                        <q-img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                      </q-avatar>

                      <q-avatar>
                        <q-img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                      </q-avatar>

                      <q-avatar>
                        <q-img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                      </q-avatar>

                      <q-avatar>
                        <q-img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
                      </q-avatar>

                      <q-avatar>
                        <div class="bg-deep-purple-2 full-width full-height">
                          <div class="mt-4 ml-2 text-deep-purple-8">+2</div>
                        </div>
                      </q-avatar>
                    </div>
                </div>
              </div>

            </div>

            <div class="col-span-6">
              <div class="bg-white rounded-md shadow-md" style="">
                <div class="text-h6 font-semibold q-pa-md">Attendance Detail</div>
                <div class="q-px-lg q-pb-md">
                  <q-timeline :layout="layout" color="secondary">

                    <q-timeline-entry
                      title="Sick Submission"
                      side="left"
                      icon="sick"
                      color="red"
                    >
                      <template v-slot:title>
                        <div class="flex flex-row">
                          <div class="flex-grow font-semibold">Sick Submission</div>
                          <div class="underline text-xs text-primary cursor-pointer font-normal ">Download Attachment</div>
                        </div>
                        <div class="text-grey-5 font-semibold text-caption"> 20 February 2022</div>
                        <div><q-badge color="green">Accept</q-badge></div>
                        <div class="bg-gray-100 rounded-lg h-32" >
                          <div class="mt-3 q-pa-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eaque accusamus omnis. Facere ex sint in esse dolorum eligendi amet odit quibusdam officiis incidunt, eaque itaque magni veritatis adipisci quod!</div>
                        </div>
                      </template>
                    </q-timeline-entry>

                    <q-timeline-entry
                      side="right"
                      icon="sick"
                      color="red"
                    >
                      <template v-slot:title>
                        <div class="flex flex-row">
                          <div class="flex-grow font-semibold">Sick Submission</div>
                          <div class="underline text-xs text-primary cursor-pointer font-normal ">Download Attachment</div>
                        </div>
                        <div class="text-grey-5 font-semibold text-caption"> 01 March 2022</div>
                        <div><q-badge color="green">Accept</q-badge></div>
                        <div class="bg-gray-100 rounded-lg h-32" >
                          <div class="mt-3 q-pa-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eaque accusamus omnis. Facere ex sint in esse dolorum eligendi amet odit quibusdam officiis incidunt, eaque itaque magni veritatis adipisci quod!</div>
                        </div>
                      </template>
                    </q-timeline-entry>

                    <q-timeline-entry
                      side="right"
                      icon="personal_injury"
                      color="orange"
                    >
                      <template v-slot:title>
                        <div class="flex flex-row">
                          <div class="flex-grow font-semibold">Permission Submission</div>
                          <div class="underline text-xs text-primary cursor-pointer font-normal ">Download Attachment</div>
                        </div>
                        <div class="text-grey-5 font-semibold text-caption"> 20 March 2022</div>
                        <div><q-badge color="green">Accept</q-badge></div>
                        <div class="bg-gray-100 rounded-lg h-32" >
                          <div class="mt-3 q-pa-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eaque accusamus omnis. Facere ex sint in esse dolorum eligendi amet odit quibusdam officiis incidunt, eaque itaque magni veritatis adipisci quod!</div>
                        </div>
                      </template>
                    </q-timeline-entry>
                  </q-timeline>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="profile" class="no-padding bg-grey-3">
          <div class="bg-white rounded-lg ">
            <div class="text-h6 font-semibold q-pa-md">Profile & Detail</div>
            <div class="q-pa-md">
              <!-- <div class="text-h6">Profile Employee</div> -->
              <div class="full-width">
                <div class="text-caption text-grey-7"> Detail </div>
                <q-separator />
                <div class="grid grid-cols-2 gap-5">
                  <q-markup-table flat separator="none" class="mt-3">
                    <tbody>
                      <tr class="bg-gray-100">
                        <td style="width:20%">
                          Name
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.name}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:20%">
                        Gender
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.gender}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:20%">
                        Address
                        </td>
                        <td class="font-semibold">
                          : {{rows.address}}
                        </td>
                      </tr>

                      <tr >
                        <td style="width:20%">
                        Birth
                        </td>
                        <td class="font-semibold">
                          : {{rows.place_of_birth}}, {{rows.date_of_birth}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:20%">
                        Religion
                        </td>
                        <td class="font-semibold">
                          : {{rows.religion}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:20%">
                        Marital Status
                        </td>
                        <td class="font-semibold">
                          : {{rows.marital_status}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:20%">
                        Email
                        </td>
                        <td class="font-semibold">
                          : {{rows.email}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:20%">
                        Phone
                        </td>
                        <td class="font-semibold">
                          : {{rows.contact_number}}
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>

                  <q-markup-table flat separator="none" class="mt-3">
                    <tbody>
                      <tr class="bg-gray-100">
                        <td style="width:30%">
                          Citizenship
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.citizenship || ''}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:30%">
                          Identity Type
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.identity_type || ''}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:30%">
                          Identity Number
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.identity_number || ''}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:30%">
                          Last Education
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.last_education || ''}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:30%">
                          Education Institute
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.last_education_name || ''}} {{`( ${rows.study_program || 'No Data'} )`}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:30%">
                          Emergency Contact Name
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.emergency_contact_name || ''}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:30%">
                          Emergency Contact Number
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.emergency_contact_number || ''}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:30%">
                          Emergency Contact Relation
                        </td>
                        <td class="font-semibold" style="width:20%">
                          : {{rows.emergency_contact_relation || ''}}
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="bg-white rounded-lg mt-5">
              <div class="q-pa-md">
                <div class="full-width">
                  <div class="text-caption text-grey-7"> Administration Bank </div>
                  <q-separator />
                  <div class="grid grid-cols-1 gap-5">
                    <q-markup-table flat separator="none" class="mt-3">
                      <tbody>
                        <tr class="bg-gray-100">
                          <td style="width:20%">
                            Bank Account Name
                          </td>
                          <td class="font-semibold" style="width:30%">
                            : {{rows.bank_account_name}}
                          </td>
                        </tr>

                        <tr>
                          <td style="width:20%">
                            Bank Account Number
                          </td>
                          <td class="font-semibold" style="width:30%">
                            : {{rows.bank_account_number}}
                          </td>
                        </tr>

                        <tr>
                          <td style="width:20%">
                            Bank Account Owner
                          </td>
                          <td class="font-semibold" style="width:30%">
                            : {{rows.bank_account_owner}}
                          </td>
                        </tr>

                        <tr class="bg-gray-100">
                          <td style="width:20%">
                          Bank Account Branch
                          </td>
                          <td class="font-semibold">
                            : {{rows.bank_account_branch}}
                          </td>
                        </tr>
                      </tbody>
                    </q-markup-table>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg mt-5">
              <div class="q-pa-md">
                <div class="full-width">
                  <div class="text-caption text-grey-7"> NPWP Administration </div>
                  <q-separator />
                  <div class="grid grid-cols-1 gap-5">
                    <q-markup-table flat separator="none" class="mt-3">
                      <tbody>
                        <tr class="bg-gray-100">
                          <td style="width:20%">
                            NPWP Name
                          </td>
                          <td class="font-semibold" style="width:30%">
                            : {{rows.npwp_name}}
                          </td>
                        </tr>

                        <tr>
                          <td style="width:20%">
                            NPWP Number
                          </td>
                          <td class="font-semibold" style="width:30%">
                            : {{rows.npwp_number}}
                          </td>
                        </tr>

                        <tr class="bg-gray-100">
                          <td style="width:20%">
                          NPWP Start Date
                          </td>
                          <td class="font-semibold">
                            : {{rows.npwp_start_date}}
                          </td>
                        </tr>

                        <tr class="">
                          <td style="width:20%">
                          NPWP Tax Payer
                          </td>
                          <td class="font-semibold">
                            : {{rows.npwp_tax_payer}}
                          </td>
                        </tr>
                      </tbody>
                    </q-markup-table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg mt-5">
            <div class="q-pa-md">
              <div class="full-width">
                <div class="text-caption text-grey-7"> Asurance </div>
                <q-separator />
                <div class="grid grid-cols-1 gap-5">
                  <q-markup-table flat separator="none" class="mt-3">
                    <tbody>
                      <tr class="bg-gray-100">
                        <td style="width:20%">
                          BPJS Ketenagakerjaan Number
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.bpjs_ketenagakerjaan_number}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:20%">
                          BPJS Ketenagakerjaan Effective Date
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.bpjs_ketenagakerjaan_effective_date}}
                        </td>
                      </tr>

                      <tr class="bg-gray-100">
                        <td style="width:20%">
                          BPJS Kesehatan Number
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.bpjs_kesehatan_number}}
                        </td>
                      </tr>

                      <tr>
                        <td style="width:20%">
                          BPJS Kesehatan Effective Date
                        </td>
                        <td class="font-semibold" style="width:30%">
                          : {{rows.bpjs_kesehatan_effective_date}}
                        </td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="security" class="no-padding bg-grey-3">
          <div class="bg-white rounded-md shadow-md">
            <div class="q-pa-md">
              <div class="text-h6 font-semibold">Change Password</div>

              <div class=" q-pa-md">
                <div class="q-pa-md bg-purple-100 text-purple-500  border-l-4 border-purple-300 rounded-md">
                  <div class="m-auto text-lg font-medium">
                    Ensure that these requirements are met
                  </div>
                  <div class="m-auto text-sm font-light">
                    Minimum 8 characters long, uppercase & symbol
                  </div>
                </div>
              </div>

              <div class="q-pa-md grid grid-cols-2 gap-3">
                <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" hint="New Password">
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>

                <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" hint="Confirm New Password">
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>

              <div class="q-pa-md">
                <q-btn label="Change Password" color="primary" />
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'src/boot/axios'
// import {
//   LMap,
//   LTileLayer,
//   LMarker,
//   LControlLayers
// } from '@vue-leaflet/vue-leaflet'
// import 'leaflet/dist/leaflet.css'

export default {
  components: {
    // LMap,
    // LTileLayer,
    // LMarker,
    // LControlLayers
  },
  setup () {
    const rows = ref({})
    const $route = useRoute()

    const getData = () => {
      const url = `http://localhost:3000/api/v1/employee/${String($route.params.id)}`
      void api.get(url)
        .then((response) => {
          rows.value = (response.data.data)
          console.log(response, 'getData')
        })
    }

    onMounted(() => {
      getData()
    })

    return {
      password: ref(''),
      isPwd: ref(true),
      getData,
      rows,
      tab: ref('overview'),
      zoom: 16
    }
  }
}
</script>

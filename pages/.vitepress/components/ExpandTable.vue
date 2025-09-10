<script lang="ts">

export default {
  // name: 'ExpandTable',
  props: {
    // title: { type: String, required: true, default: "Title" },
  },
  data() {
    return {
      expanded: false,
    }
  },
  // watch: {
  //   variableName: function(after, before) {
  //     console.log(after);
  //   },
  // },
  mounted() {
    // console.log('expand table')
  },
  computed: {
    // TODO
  },
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-sheet color="transparent">
        <v-expand-transition>
          <div :class="{ 'content-preview': !expanded, 'content-full': expanded }">
            <v-row>
              <v-col cols="12">
                <v-table color="transparent">
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Details</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Number of digital labs</td>
                      <td><font-awesome-icon :icon="['fas', 'infinity']" /><v-tooltip activator="parent" location="start">Unlimited</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Number of lab users</td>
                      <td><font-awesome-icon :icon="['fas', 'infinity']" /><v-tooltip activator="parent" location="start">Unlimited</v-tooltip></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Analytical Features</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AI ready</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">All that you need to train and finetune your AI models.</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Machine learning / Deep learning</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Big data ready</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Digital laboratory equipment</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GPU Cards</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">NVidia GPUs available in variety VRAM sizes and number of CUDA cores</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Browser based access</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">All you need to run your analysis is your web browser. Unless you want more, we have that too.</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Python / Jupyterlab</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Tensorflow / Pytorch</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>R / RStudio</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>MATLAB / STATA</td>
                      <td>BYOL<v-tooltip activator="parent" location="start">Bring your own license</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Remote desktop</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Workbench</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Data import tools</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Data exports tools</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Storage</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Storage sizes</td>
                      <td><font-awesome-icon :icon="['fas', 'infinity']" /><v-tooltip activator="parent" location="start">From small labs up to hundreds of terabytes.</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Multiple tiers</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Fast storage</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">NVME backed storage cluster</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Long term storage</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">Our tape storage service is perfect for long term storage.</v-tooltip></td>
                    </tr>
                    <tr>
                      <td>Data storage in Norway, EU</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /><v-tooltip activator="parent" location="start">Our server rooms are located in Norway.</v-tooltip></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <!-- <thead>
                    <tr>
                      <th class="text-left">
                        <b>Data</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sensitive data</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Personally identifiable data</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody> -->
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Compliance</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ISO 9001 Certified</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>ISO 27001 Certified</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>ISO 27701 Certified</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Solid agreement framework</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Security</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Multitenancy</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Full network isolation of labs</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Documented data transfers</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody>
                  <!-- ------------------------------------- -->
                  <thead>
                    <tr>
                      <th class="text-left">
                        <b>Account & Support</b>
                      </th>
                      <th class="text-left">
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tailored onboarding guides</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                    <tr>
                      <td>Video guides</td>
                      <td><font-awesome-icon :icon="['fas', 'check']" color="green" /></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>
        <v-row v-show="!expanded" class="mt--0">
          <v-col cols="12">
            <v-btn rounded="xl" size="x-large" block text @click="expanded = !expanded">
              Read more
              <!-- {{ expanded ? 'Read Less' : 'Read More' }} -->
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style scoped>

.content-preview {
  transition: auto 5s ease;
  max-height: 500px;
  overflow: hidden;
}

.content-full {
  transition: auto 5s ease;
  max-height: unset;
  overflow: visible;
}

</style>

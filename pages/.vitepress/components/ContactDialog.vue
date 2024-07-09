<script lang="ts">

export default {
  name: 'ContactDialog',
  props: {
    title: { type: String, required: true, default: "Title" },
    elevation: { type: String, default: "1" },
    size: { type: String, default: "" },
    subject: { type: String, default: "" },
    block: { type: Boolean, default: false },
    blue: { type: Boolean, default: false },
  },
  emits: [
    'input',  // used to update value prop assigned from parent using v-model
  ],
  data() {
    return {
      emailRecipient: "cloud@hunt.ntnu.no",
      emailTitle: "Contact HUNT Cloud",
      requirements: ["<b>We care about your privacy.</b> Read our <a href='https://docs.hdc.ntnu.no/govern-science/privacy-statement/#privacy-statement-for-services-users' target='_blank' style='color: #00509e; font-weight: bold;;'>privacy statement</a> to learn how we process your personal data when you send us a request."],
      fields: [{ label: "Request topic", key: "topic", field: "textfield" }],
      attachments: [],
      messageSubject: "",
      subjectPlaceholder: "Remember to write something in a subject",
      messageBody: `Hi HUNT Cloud team,

...
`,
      loadingEmailButtons: true,
      panel: 0,
      dialog: false,
      sendClicked: false,
      confirmedRequirements: false,
      formData: {},
    }
  },
  // watch: {
  //   variableName: function(after, before) {
  //     console.log(after);
  //   },
  // },
  mounted() {
    this.panel = 0;
    this.loadingEmailButtons = true;
    this.messageSubject = this.subject
  },
  computed: {
    // formFilled() {
    //   return this.fields.every((item) =>
    //     this.formData[item.key] || item.optional ? true : false
    //   );
    // },
    encodedSubject() {
      return this.messageSubject ? this.encode(this.messageSubject) : null;
    },
    encodedBody() {
      return this.messageBody ? this.encode(this.messageBody) : null;
    },
    encodedRecipient() {
      return this.emailRecipient ? this.encode(this.emailRecipient) : this.emailRecipient;
    },
    mailto() {
      const redir = `mailto:${this.encodedRecipient}?subject=${this.encodedSubject}&body=${this.encodedBody}`;
      console.log(redir);
      return redir;
    },
    outlookDoubleEncodedTo() {
      // Outlook does not seem to follow RFCs for mailto with deeplinks - they are double decoding TO field
      // https://www.rfc-editor.org/rfc/rfc6068#:~:text=double%2Descape%20or%20double%2Dunescape%20%27mailto%27%20URIs
      return this.recipient ? this.encode(this.encode(this.recipient)) : this.recipient;
    },
    wrapRecipient() {
      // Same as outlookDoubleEncodedTo works only if double encoded
      return this.recipient ? this.encode(this.encode(`HUNT Cloud <${this.recipient}>`)) : this.recipient;
    },
    deeplinkUrl() {
      const url = 'https://outlook.office.com/mail/deeplink/compose';
      // return `${url}?to=${this.outlookDoubleEncodedTo}&subject=${this.encodedSubject}&body=${this.encodedBody}`;
      const redir = `${url}?to=${this.wrapRecipient}&subject=${this.encodedSubject}&body=${this.encodedBody}`;
      console.log(redir);
      return redir;
    },
  },
  methods: {
    closeBtn() {
      this.panel = 0;
      this.dialog = false;
      this.$emit('input', false);
    },
    activateSendButtons() {
      this.loadingEmailButtons = false
    },
    confirmRequirements() {
      this.confirmedRequirements = true
      this.panel = 1
      // setTimeout(this.activateSendButtons, 1200)
      setTimeout(this.activateSendButtons, 100)
    },
    actionSend() {
      this.sendClicked = true;
      this.panel = 2;
      window.location.href = this.mailto;
    },
    actionSendOutlook() {
      this.sendClicked = true;
      this.panel = 2;
      window.location.href = this.deeplinkUrl;
    },
    actionSendOutlookPopup() {
      this.sendClicked = true;
      this.panel = 2;
      // window.location.href = this.deeplinkUrl;
      window.open(this.deeplinkUrl, '_blank');
    },
    encode(template) {
      return template ? encodeURIComponent(this.wrap(template)) : null;
    },
    wrap(template) {
      let text = template;
      for (const [key, value] of Object.entries(this.formData)) {
        if (value || value === '') {
          if (Array.isArray(value)) {
            text = text.replaceAll(`{${key}}`, value.join(", "));
          } else {
            text = text.replaceAll(`{${key}}`, value);
          }
        }
      }
      text = text.replaceAll('\n---\n', '\n```\n');
      return text;
    },
  },
}
</script>

<template>
  <div>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <!-- rgba(37, 58, 85, 1) -->
        <v-btn
          v-bind="props"
          rounded="sm"
          :class="{
            'hc-text-dark': blue ? false : true,
            'hc-text-light': blue ? true : false,
          }"
          :block="block"
          :color="blue ? '#253a55' : '#fff'"
          :size="size"
          :elevation="elevation"
          :append-icon="isHovering ? 'mdi-chevron-triple-right' : 'mdi-chevron-right'"
          @click="dialog = true"
        >
          {{ title }}
          <template v-slot:append>
            <v-icon color="#ef8114" style="margin-top: 1px !important"></v-icon>
          </template>
        </v-btn>
      </template>
    </v-hover>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="960px"
    >
      <v-card>
        <v-toolbar dark color="#00509e">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon fab @click="closeBtn">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-sheet class="pa-4">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title>
                Privacy policy
              </v-expansion-panel-title>
              <v-expansion-panel-text class="mt-6">
                <v-row justify="center">
                  <v-col v-for="item in requirements" class="pb-0 pt-0" cols="12" :key="item" dense>
                    <p class="mb-2" v-html="item"></p>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" class="v-col-xs-12 v-col-sm-8 v-col-md-4">
                    <v-btn
                      color="success"
                      block
                      @click="confirmRequirements"
                    >
                      Continue
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel :disabled="!confirmedRequirements">
              <v-expansion-panel-title>
                Email request
              </v-expansion-panel-title>
              <v-expansion-panel-text class="mt-2">
                <v-row justify="center">
                  <v-col cols="10">
                    <v-text-field
                      :value="emailRecipient"
                      label="HUNT Cloud email address"
                      class="py-2"
                      placeholder=""
                      persistent-placeholder
                      variant="outlined"
                      dense
                      readonly
                      hide-details
                    >
                      <template v-slot:prepend-inner>
                        <v-icon>mdi-mail</v-icon>
                      </template>
                    </v-text-field>
                    <v-text-field
                      label="Your email subject"
                      v-model="messageSubject"
                      :placeholder="subjectPlaceholder"
                      persistent-placeholder
                      class="py-2"
                      variant="outlined"
                      dense
                      hide-details
                    />
                    <v-textarea
                      v-model="messageBody"
                      label="Your message"
                      class="py-2"
                      rows="8"
                      placeholder=""
                      persistent-placeholder
                      variant="outlined"
                      dense
                      hide-details
                    />
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="10">
                    <p class="text-center body-1">
                      Send the email using your email client or use one of our shortcuts.
                    </p>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" class="v-col-xs-10 v-col-sm-6 v-col-md-5">
                    <v-btn color="link" block :disabled="loadingEmailButtons" @click="actionSend">
                      Open in Email Client
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="v-col-xs-10 v-col-sm-6 v-col-md-5">
                    <v-btn color="link" block :disabled="loadingEmailButtons" @click="actionSendOutlookPopup">
                    <!-- <v-btn color="primary" block disabled @click="actionSendOutlookPopup"> -->
                      Open in Outlook Web
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel :disabled="!sendClicked">
              <v-expansion-panel-title>
                Review
              </v-expansion-panel-title>
              <v-expansion-panel-text class="mt-2">
                <v-row justify="center">
                  <v-col cols="10"> </v-col>
                </v-row>
                <v-row class="mb-6" justify="center">
                  <v-col cols="10">
                    <p class="text-center body-1">
                      Now your Email client should open and you can follow up
                      sending Service desk request there.
                    </p>
                  </v-col>
                  <v-col cols="10">
                    <p class="text-center body-1">
                      In case your <b>Email client did not open</b> and you want to
                      send email manually feel free to hit Review button and
                      copy the message contents and use our service desk email
                      address.
                    </p>
                  </v-col>
                </v-row>
                <v-row justify="center" dense>
                  <v-col cols="12" class="v-col-xs-10 v-col-sm-3 v-col-md-3">
                    <v-btn color="primary" block @click="panel = panel - 1">
                      Review
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="d-none d-xs-none d-sm-inline v-col-sm-6 v-col-md-4">
                    <v-btn color="link" block @click="panel = panel - 1">
                      No default email client
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="v-col-xs-10 v-col-sm-3 v-col-md-3">
                    <v-btn color="link" block @click="closeBtn">
                      Close
                    </v-btn>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>

<template>
  <div class="container">
    <div class="d-flex justify-center col-md-12 pa-0">
      <div class="d-flex align-top col-md-11 flex-wrap">
        <div class="col-md-8 col-sm-12 d-flex">
          <div>
            <div class="col-md-12">
              <h3 class="display-1 font-weight-bold title-color  mb-3">
                GET IN TOUCH
              </h3>
              <p>
                If you want to get in touch, talk to me about a project
                collaboration or just say hi, fill up the form below or send an
                email to
                <strong class="darkblue--text">{{
                  this.$store.state.user.email
                }}</strong>
                and ~let's talk.
              </p>
            </div>
            <div class="col-md-12">
              <form>
                <div class="d-flex  flex-wrap">
                  <div class="col-md-6">
                    <v-text-field
                      v-model="name"
                      label="Name"
                      :error-messages="nameErrors"
                      :counter="25"
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                    ></v-text-field>
                  </div>
                  <div class="col-md-6">
                    <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="E-mail"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-text-field
                      v-model="subject"
                      label="Subject"
                      :error-messages="subjectErrors"
                      :counter="45"
                      required
                      @input="$v.subject.$touch()"
                      @blur="$v.subject.$touch()"
                    ></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-textarea
                      v-model="message"
                      rows="1"
                      label="Message"
                      :error-messages="messageErrors"
                      :counter="365"
                      required
                      @input="$v.message.$touch()"
                      @blur="$v.message.$touch()"
                    ></v-textarea>
                  </div>
                </div>
                <div class="text-end">
                  <v-btn
                    @click="sendEmail()"
                    large
                    color="page-color"
                    :loading="btnLoading"
                    class="ma-2 white--text"
                  >
                    <v-icon left dark>email</v-icon>Send</v-btn
                  >
                </div>
              </form>
            </div>
          </div>
          <v-snackbar
            :color="snackbar_color"
            v-model="snackbar"
            :timeout="timeout"
            top="top"
          >
            {{ snackbar_text }}
            <v-btn color="white" text @click="snackbar = false">
              Close
            </v-btn>
          </v-snackbar>
          <v-divider class="mx-4 d-none d-md-flex" vertical></v-divider>
        </div>
        <div class="col-md-4 col-sm-12 d-flex">
          <div>
            <div class="col-md-12">
              <h4 class="title font-weight-bold darkblue--text mb-3">
                Let's get social
              </h4>
              <p class="mb-0">
                Follow my online fan page on Facebook and profiles on Twitter,
                GitHub and Linkedin.
              </p>
            </div>
            <div class="col-md-12">
              <a href="https://www.facebook.com/izzuddinraffar" target="_blank">
                <v-btn
                  width="44"
                  min-width="44"
                  large
                  color="fb"
                  class="ma-2 white--text"
                >
                  <font-awesome-icon size="2x" :icon="['fab', 'facebook-f']" />
                </v-btn>
              </a>
              <a href="https://linkedin.com/in/izzuddinraffar" target="_blank">
                <v-btn
                  width="44"
                  min-width="44"
                  large
                  color="linked"
                  class="ma-2 white--text"
                >
                  <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']" />
                </v-btn>
              </a>
              <a href="https://github.com/izzuddinraffar" target="_blank">
                <v-btn
                  width="44"
                  min-width="44"
                  large
                  color="github"
                  class="ma-2 white--text"
                >
                  <font-awesome-icon size="2x" :icon="['fab', 'github']" />
                </v-btn>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.v-application.profile .container.pa-4 {
  padding: 0px !important;
  margin: 0px !important;
  width: 100% !important;
  max-width: 100% !important;
}
</style>

<style lang="scss" scooped>
@import "@/css/variable.scss";
.contact {
  .container {
    padding: 0px !important;
    .header-banner {
      // height: 137px;
      width: 100%;
      // background-color: #007791;
      // color: #fff;
    }
    .btn-skill {
      min-width: 200px !important;
    }
  }
  header {
    background-color: $bluelight--color;
    border-color: $bluelight--color;
    color: #fff !important;

    .v-tab {
      color: rgba(255, 255, 255, 0.84) !important;
    }
    button,
    i,
    .v-toolbar__title,
    .v-tab--active {
      color: #fff !important;
    }
  }
  .title-color {
    color: $bluelight--color;
  }
  .fb {
    background: rgb(47, 67, 112) none repeat scroll 0% 0% !important;
  }
  .linked {
    background: rgb(0, 119, 181) none repeat scroll 0% 0% !important;
  }
  .github {
    background: rgb(53, 53, 53) none repeat scroll 0% 0% !important;
  }
  .page-color {
    background-color: $bluelight--color;
  }
}
</style>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email
} from "vuelidate/lib/validators";

library.add(faFacebookF);
library.add(faLinkedinIn);
library.add(faGithub);
export default {
  data: () => ({
    name: "",
    message: "",
    email: "",
    subject: "",
    snackbar: false,
    snackbar_text: "",
    snackbar_color: "",
    btnLoading: false
  }),
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(6), maxLength: maxLength(25) },
    email: { required, email },
    subject: { required, minLength: minLength(10), maxLength: maxLength(45) },
    message: { required, minLength: minLength(20), maxLength: maxLength(365) }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength &&
        errors.push("Name must be at least 6 characters long");
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 25 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.subject.$dirty) return errors;
      !this.$v.subject.minLength &&
        errors.push("Subject must be at most 20 characters long");
      !this.$v.subject.maxLength &&
        errors.push("Subject must be at most 45 characters long");
      !this.$v.subject.required && errors.push("Subject is required.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) return errors;
      !this.$v.message.minLength &&
        errors.push("Message must be at least 25 characters long.");
      !this.$v.message.maxLength &&
        errors.push("Message must be at most 365 characters long");
      !this.$v.message.required && errors.push("Message is required.");
      return errors;
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    sendEmail() {
      this.$v.$touch();
      if (
        this.$v.name.$error ||
        this.$v.email.$error ||
        this.$v.subject.$error ||
        this.$v.message.$error
      ) {
        return false;
      }
      this.btnLoading = true;
      this.axios
        .post(
          `https://izzuddinraffar.herokuapp.com/send-mail/?name=${this.name}&email=${this.email}&subject=${this.subject}&message=${this.message}`
        )
        .then(response => {
          this.btnLoading = false;
          const resp = response.data;
          if (resp.status) {
            this.snackbar_text = "Your mail has been sent successfully.";
            this.snackbar_color = "success";
          } else {
            this.snackbar_text = "Oops...your mail is not being delivered.";
            this.snackbar_color = "error";
          }
          this.snackbar = true;
          this.clearInput();
        });
    },
    clearInput() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

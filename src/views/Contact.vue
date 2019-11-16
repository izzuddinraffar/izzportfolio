<template>
  <div class="container">
    <!-- <div class="header-banner d-flex justify-center col-md-12">
      <div class=" d-flex align-center col-md-11">
        <div>
          <h3 class="display-1 font-weight-bold title-color">
            See My Profile <br />
            Looks like...
          </h3>
        </div>
      </div>
    </div> -->
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-11">
        <div class="col-md-8 d-flex">
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
                    <v-text-field label="Name" required></v-text-field>
                  </div>
                  <div class="col-md-6">
                    <v-text-field label="E-mail" required></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-text-field label="Subject" required></v-text-field>
                  </div>
                  <div class="col-md-12">
                    <v-textarea rows="1" label="Message"></v-textarea>
                  </div>
                </div>
                <div class="text-end">
                  <v-btn large color="error" class="ma-2 white--text">
                    <v-icon left dark>email</v-icon>Send</v-btn
                  >
                </div>
              </form>
            </div>
          </div>
          <v-divider class="mx-4" vertical></v-divider>
        </div>
        <div class="col-md-4 d-flex">
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
              <v-btn
                width="44"
                min-width="44"
                large
                color="fb"
                class="ma-2 white--text"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'facebook-f']" />
              </v-btn>
              <v-btn
                width="44"
                min-width="44"
                large
                color="linked"
                class="ma-2 white--text"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']" />
              </v-btn>
              <v-btn
                width="44"
                min-width="44"
                large
                color="github"
                class="ma-2 white--text"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'github']" />
              </v-btn>
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
    background-color: #627d8c !important;
    border-color: #627d8c !important;
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
    color: #627d8c !important;
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

library.add(faFacebookF);
library.add(faLinkedinIn);
library.add(faGithub);
export default {
  name: "App",

  components: {
    FontAwesomeIcon
  }
};
</script>

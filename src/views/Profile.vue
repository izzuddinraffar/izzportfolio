<template>
  <div class="container">
    <div class="header-banner d-flex justify-center col-md-12">
      <div class=" d-flex align-center col-md-9">
        <div>
          <h4 class="subtitle-1 grey--text">Profile</h4>
           <h3 class="display-1 font-weight-bold darkblue--text">See My Profile <br/> Looks like...</h3>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center col-md-12">
      <div class="d-flex align-top col-md-9">
        <div class="d-flex col-md-3">
          <div class="col-md-12">
            <div class="d-flex align-center flex-column">
              <v-avatar size="120">
                <img src="@/assets/avatar.jpg" alt="Izzuddin" />
              </v-avatar>
              <v-btn large color="error" class="white--text mt-5 btn-skill">
                <v-icon left dark>mouse</v-icon>LOOK AT MY SKILLS
              </v-btn>
            </div>
          </div>
        </div>
        <div class="d-flex col-md-9">
          <div class="col-md-12">
            <p class="darkblue--text font-weight-bold mb-3">
              Experience as (Web) Developer
            </p>
            <p>
              Starting out at the age of 13 I never stopped learning new
              programming skills and languages. Early I started creating
              websites for friends and just for fun as well. Besides web
              development I also explored Python and other non-web-only
              languages. This passion has since lasted and lead to my decision
              of working as a freelance web developer and consultant. The
              success and fun I have in this job is immense and really keeps
              that passion burningly alive.
            </p>
            <p>
              Starting web development on the backend (PHP with Laravel, NodeJS,
              Python) I also became more and more of a frontend developer using
              modern frameworks like React, Angular or VueJS 2 in a lot of
              projects. I love both worlds nowadays!
            </p>
            <p>
              As a self-taught developer I had the chance to broaden my horizon
              by studying Business Administration where I hold a Master's
              degree. That enabled me to work in a major strategy consultancy as
              well as a bank. While learning, that I enjoy development more than
              these fields, the time in this sector greatly improved my overall
              experience and skills.
            </p>
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
.profile{
  .container {
  padding: 0px !important;
  .header-banner {
    height: 137px;
    width: 100%;
    // background-color: #007791;
    // color: #fff;
  }
  .btn-skill{
    min-width: 200px !important;
  }

}

}

.darkblue--text {
  color: #5f7987 !important;
}
</style>

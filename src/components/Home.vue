<template>
  <div>
    <section class="headline-container">
      <img class="cv-image" src="../assets/resumeImage.png" />
      <div class="headline-body">
        <div>
          <h1>Shahaf Shmuel</h1>
          <p>
            Front-End Web Developer
            <br />Over 3 years of experience developing Mobile & Web
            applications <br />Eager to learn. Able to grasp new concepts
            quickly and eciently <br />Fluent in English, excellent
            communication skills
          </p>
          <p>
            Shahaf.ssh@gmail.com
            <br />052-6810410 <br />Binyamina, Israel
          </p>
        </div>
      </div>
    </section>
    <hr />
    <section class="work-experience">
      <h2>Work Experience</h2>
      <div>
        <ul>
          <li :class="{ expanded: conExpanded }" @click="expand(`con`)">
            <h3>2019, Full Stack Web Developer - Confetti</h3>
            <p>
              In this young startup I had the opportunity to work side by side
              with brilliant developers who
              <br />have taught me a lot on web development - Client & Server
              side. <br />In this role I have built many new features using
              VueJS framework. <br />Areas of responsibility including:
            </p>
            <ol>
              <li>Building new web app features in a VueJS framework</li>
              <li>Working with NodeJS & express for the server side</li>
              <li>Working with Redis & Postgres databases</li>
              <li>Fixing bugs and functionality issues</li>
              <li>Building automated End-to-End tests using 'Mabl'</li>
            </ol>
          </li>
          <li :class="{ expanded: mobExpanded }" @click="expand(`mob`)">
            <h3>2018 ~ 2019, Android SDK Developer - Market Group/Mobfox</h3>
            <p>
              As a part of the R&D team I’ve contributed to the development of
              the Android Ads SDK as well as the iOS SDK.
              <br />In this role I was responsible for building many new
              features, updating and maintaining existing ones, fixing issues,
              analysing and improving performance. <br />Areas of responsibility
              including:
            </p>
            <ol>
              <li>Writing new features of SDK</li>
              <li>
                Building adapters to work with MoPub, AdMob, DFP and other Ad
                SDKs
              </li>
              <li>
                Maintaining, updating and improving the SDK code and libraries
              </li>
              <li>Tier 3 technical support</li>
            </ol>
          </li>
          <li :class="{ expanded: matExpanded }" @click="expand(`mat`)">
            <h3>
              2016 ~ 2018, Developers Tech Support (Tier 2) - Matomy Media Group
            </h3>
            <p>
              In this role I was required to help mobile app developers
              (Android, iOS, Web) implement SDKs into their applications, As
              well as understanding their difficulties, finding the SDK weak
              points in terms of performance, locating bugs and competitors
              research. Areas of responsibility including:
            </p>
            <ol>
              <li>
                Providing step-by-step guidance to app developers though the
                whole process of implementing the SDK
              </li>
              <li>Giving technical support through ticket system</li>
              <li>Personal support for clients through voice chat</li>
              <li>
                Analyzing clients technical issues and providing solutions
              </li>
              <li>
                Writing full documentation of the SDK implementation process
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </section>
    <section class="prog-lang">
      <h2>Programming Languages & Technologies</h2>
      <div class="grid">
        <div class="col">
          <hr />
          <ul>
            <li>
              Javascript(ES6)
            </li>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              TypeScript
            </li>
            <li>
              Java
            </li>
            <li>
              XML
            </li>
            <li>
              JSON
            </li>
          </ul>
        </div>
        <div class="col">
          <hr />
          <ul>
            <li>
              VueJS
            </li>
            <li>
              NodeJS
            </li>
            <li>
              Android Studio
            </li>
            <li>
              Git
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="skills">
      <h2>Skills</h2>
      <div class="grid">
        <div class="col">
          <hr />
          <h3>Web Development</h3>
          <ul>
            <li>
              Hands on experience developing Vue.js SPA - Vuex, Nuxt.js, Axios
            </li>
            <li>
              Well versed in Javascript ES6, HTML5 & CSS3.
            </li>
            <li>
              Experience with NodeJS & express as a server
            </li>
            <li>
              Experience with Redis, Mongo and other noSQL databases.
            </li>
          </ul>
        </div>
        <div class="col">
          <hr />
          <h3>Mobile Development</h3>
          <ul>
            <li>
              2+ years of experience developing Java applications & SDK.
            </li>
            <li>
              Experience building an app from scratch and publishing to the
              store.
            </li>
            <li>
              Experience with integrating 3rd party dependencies
            </li>
            <li>
              Experience with Google Location Services & Firebase
            </li>
            <li>
              Graduated from John-Bryce Android development course
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      conExpanded: false,
      mobExpanded: false,
      matExpanded: false
    };
  },
  methods: {
    expand(index) {
      switch (index) {
        case "con":
          this.conExpanded = !this.conExpanded;
          break;
        case "mob":
          this.mobExpanded = !this.mobExpanded;
          break;
        case "mat":
          this.matExpanded = !this.matExpanded;
          break;
      }
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
.headline-container {
  display: flex;

  .cv-image {
    height: 12rem;
    width: 12rem;
    border-radius: 100px;
    overflow: hidden;
  }

  .headline-body {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }
}

.work-experience {
  ul {
    list-style-type: none;

    > li {
      margin-top: 1rem;
      cursor: pointer;
      overflow: hidden;
      max-height: 28px;
      transition: all 1s ease;

      &.expanded {
        height: auto;
        max-height: 220px;
      }

      h3 {
        font-weight: 200;
        margin: 0;
      }
      p {
        margin: 1.5rem 0;
      }
    }
  }
}

.prog-lang {
  .grid {
    display: grid;
    grid-template-columns: 25rem 25rem;

    .col {
      padding: 0px 50px;
      margin-left: -3rem;
    }
  }
}

.skills {
  .grid {
    display: grid;
    grid-template-columns: 25rem 25rem;

    .col {
      padding: 0px 50px;
      margin-left: -3rem;
    }
  }
}
</style>

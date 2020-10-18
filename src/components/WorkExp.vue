<template>
  <div class="work-experience">
    <h2>Work Experience</h2>
    <ul>
      <transition-group name="list">
        <li
          class="exp-li"
          :class="{
            expanded: confetti.expanded,
            hidden: shouldHide(confetti)
          }"
          :key="confetti.name"
        >
          <h3 @click="expand(confetti)">2019, Full Stack Web Developer - Confetti</h3>
          <p>
            In this young startup I had the opportunity to work side by side
            with brilliant developers who
            <br />have taught me a lot on web development - Client & Server
            side.
            <br />In this role I have built many new features using VueJS
            framework.
            <br />Areas of responsibility including:
          </p>
          <ol>
            <li>Building new web app features in a VueJS framework</li>
            <li>Working with NodeJS & express for the server side</li>
            <li>Working with Redis & Postgres databases</li>
            <li>Fixing bugs and functionality issues</li>
            <li>Building automated End-to-End tests using 'Mabl'</li>
          </ol>
        </li>
        <li
          class="exp-li"
          :class="{
            expanded: mobfox.expanded,
            hidden: shouldHide(mobfox)
          }"
          :key="mobfox.name"
        >
          <h3 @click="expand(mobfox)">2018 ~ 2019, Android SDK Developer - Market Group/Mobfox</h3>
          <p>
            As a part of the R&D team I’ve contributed to the development of the
            Android Ads SDK as well as the iOS SDK.
            <br />In this role I was responsible for building many new features,
            updating and maintaining existing ones, fixing issues, analysing and
            improving performance.
            <br />Areas of responsibility including:
          </p>
          <ol>
            <li>Writing new features of SDK</li>
            <li>Building adapters to work with MoPub, AdMob, DFP and other Ad SDKs</li>
            <li>Maintaining, updating and improving the SDK code and libraries</li>
            <li>Tier 3 technical support</li>
          </ol>
        </li>
        <li
          class="exp-li"
          :class="{
            expanded: matomy.expanded,
            hidden: shouldHide(matomy)
          }"
          :key="matomy.name"
        >
          <h3
            @click="expand(matomy)"
          >2016 ~ 2018, Developers Tech Support (Tier 2) - Matomy Media Group</h3>
          <p>
            In this role I was required to help mobile app developers (Android,
            iOS, Web) implement SDKs into their applications, As well as
            understanding their difficulties, finding the SDK weak points in
            terms of performance, locating bugs and competitors research. Areas
            of responsibility including:
          </p>
          <ol>
            <li>
              Providing step-by-step guidance to app developers though the whole
              process of implementing the SDK
            </li>
            <li>Giving technical support through ticket system</li>
            <li>Personal support for clients through voice chat</li>
            <li>Analyzing clients technical issues and providing solutions</li>
            <li>Writing full documentation of the SDK implementation process</li>
          </ol>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confetti: { name: "con", expanded: false },
      mobfox: { name: "mob", expanded: false },
      matomy: { name: "mat", expanded: false },
      selected: null
    };
  },
  methods: {
    expand(exp) {
      exp.expanded = !exp.expanded;
      this.selected == null
        ? (this.selected = exp.name)
        : (this.selected = null);
    },
    shouldHide(exp) {
      return this.selected != null && this.selected != exp.name;
    }
  }
};
</script>

<style lang="scss" scoped>
.work-experience {
  ul {
    list-style-type: none;
    position: relative;
    height: 12rem;

    .exp-li {
      margin-top: 1rem;
      overflow: hidden;
      max-height: 28px;
      transition: all 1s ease;
      position: relative;

      &.expanded {
        position: absolute;
        top: -60px;
        height: auto;
        max-height: 230px;
        transition: all 1s ease;
        margin-left: 33.33%;

        h3 {
          background-color: #ccc;
        }
      }

      &.hidden {
        pointer-events: none;
        opacity: 0;
        margin-left: -10rem;
      }

      h3 {
        width: fit-content;
        border-radius: 8px;
        padding: 3px;
        cursor: pointer;
        font-weight: 200;
        margin: 0;
        transition: all 0.3s ease;
      }
      h3:hover {
        background-color: #ccc;
      }
      p {
        margin: 1rem 0;
        width: 50rem;
      }
    }
  }
}

.list-enter-active {
  transition: all 1s ease;
}
.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-200px);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

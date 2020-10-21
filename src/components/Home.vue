<template>
  <div class="container">
    <section class="headline-container">
      <img class="cv-image" src="../assets/resumeImage.png" />
      <div class="headline-body">
        <div>
          <h1>Shahaf Shmuel</h1>
          <p>
            Front-End Web Developer
            <br />Over 3 years of experience developing Mobile & Web
            applications <br />Eager to learn. Able to grasp new concepts
            quickly and efficiently <br />Fluent English, excellent
            communication skills
          </p>
          <p>
            <a href="mailto:shahaf.ssh@gmail.com">Shahaf.ssh@gmail.com</a>
            <br />
            <a href="tel:052-6810410">052-6810410</a>
            <br /><a
              href="http://maps.google.com/maps?q=Binyamina,Israel"
              target="_blank"
              rel="noopener noreferrer"
              >Binyamina, Israel</a
            >
          </p>
        </div>
      </div>
    </section>
    <hr />
    <section class="work-experience">
      <WorkExp></WorkExp>
    </section>
    <section class="prog-lang">
      <h2>Programming Languages & Technologies</h2>
      <div class="grid">
        <div class="col">
          <hr />
          <ul>
            <li>Javascript(ES6)</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>XML</li>
            <li>JSON</li>
          </ul>
        </div>
        <div class="col">
          <hr />
          <ul>
            <li>VueJS</li>
            <li>NodeJS</li>
            <li>Android Studio</li>
            <li>Git</li>
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
            <li>Well versed in Javascript ES6, HTML5 & CSS3.</li>
            <li>Experience with NodeJS & express as a server</li>
            <li>Experience with Redis, Mongo and other noSQL databases.</li>
          </ul>
        </div>
        <div class="col">
          <hr />
          <h3>Mobile Development</h3>
          <ul>
            <li>2+ years of experience developing Java applications & SDK.</li>
            <li>
              Experience building an app from scratch and publishing to the
              store.
            </li>
            <li>Experience with integrating 3rd party dependencies</li>
            <li>Experience with Google Location Services & Firebase</li>
            <li>Graduated from John-Bryce Android development course</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import WorkExp from "./WorkExp";

export default {
  data() {
    return {};
  },
  components: {
    WorkExp,
  },
};
</script>

<style lang="scss" scoped>
.headline-container {
  display: flex;
  line-height: 1.3rem;

  a {
    color: #42b883;
  }

  .cv-image {
    max-height: 12rem;
    max-width: 12rem;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    overflow: hidden;
  }

  .headline-body {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }
}

.grid {
  display: flex;

  .col {
    width: 350px;
    padding: 0px 40px;
    line-height: 1.3rem;
  }
}
@media (max-width: 480px) {
  .col {
    padding: 0 3px !important;
    line-height: 1.5rem !important;
  }
}
</style>

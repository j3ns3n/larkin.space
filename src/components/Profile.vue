<template>
  <div class="profile">
    <h1>Hi! Welcome to my page.</h1>
    <p>I'm Jensen, a full stack developer based in the UK. I mainly specialize in backend development with the NodeJS platform.</p>
    <p>Want to see more?<br /> Here are my links:</p>
    <Link v-for="link in links" :links="link" :key="link.name" />
    <p>And here are some projects:</p>
    <div class="projects">
      <Project v-for="project in projects" :project="project" :key="project.name" />
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link.vue'
import Project from '@/components/Project.vue'

export default {
  name: 'Profile',
  components: {
    Link,
    Project
  },
  props: {
    links: Array,
    projects: Array
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  text-align: center;
  font-family: Arial;
}
/* h1 {
  padding: 2em 0 0;
} */
p {
  font-size: 1.5em;
}

.projects {
  height: 15em;
}

.profile {
  padding: 2em 0 0;
  height: 100%;
}

/* unvisited link */
a:link {
  color: black;
}
/* visited link */
a:visited {
  color: black;
}
/* mouse over link */
a:hover {
  color: #696969;
}
/* selected link */
a:active {
  color: black;
}
</style>

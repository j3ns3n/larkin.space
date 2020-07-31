<template>
  <a :href="links.link" :alt="links.name" class="circle" :style="{ 'background-color': links.colour }" target="_blank">
    <div class="overlay">
      <font-awesome-icon :icon="['fab', links.icon]" size="2x"></font-awesome-icon>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    links: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;
  /* size: 100em; */
  margin: 0.5em;
}

.circle:hover {
  opacity:0.5;
}

/* unvisited link */
a:link {
  color: white !important;
}
/* visited link */
a:visited {
  color: white !important;
}
/* mouse over link */
a:hover {
  color: white !important;
}
/* selected link */
a:active {
  color: white !important;
}

</style>

<template>
  <div>
    <h3>
      <a :href="project.link" target="_blank">
        {{ project.name }}
      </a>
    </h3>
    <p class="desc">{{ project.desc }}</p>
    <p class="small">{{ project.tags.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: Object
  }
}
</script>

<style scoped>
div {
  display: inline-block;
  width: 18em;
  border: 0.1em solid grey;
  padding: 0.3em;
  margin: 2em;
  height: 15em;
  vertical-align: top;
  position: relative;
}

h3 {
  font-size: 1.4em
}

.desc {
  font-size: 1.1em;
}

.small {
  font-size: 0.8em;
  position: absolute;
	bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>

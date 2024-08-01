<template>
  <div class="work-experience">
    <h2>{{ experience.position }} at {{ experience.company }}</h2>
    <p>{{ experience.location }} | {{ experience.duration }}</p>
    <ul>
      <li v-for="(responsibility, index) in experience.responsibilities" :key="index"> <p class="responsibility">{{ responsibility }}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.work-experience {
  background-color: #364652;
  color: #ABE188;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.work-experience:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2, p {
  color: white;
  margin: 0 0 8px 0;
}

.responsibility {
  color: #399E5A;
}

li {
  display: block;
  text-align: left;
  font-size: small;
}
</style>

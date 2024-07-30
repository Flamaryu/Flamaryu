<template>
    <div class="work-experience">
      <h2>{{ experience.position }} at {{ experience.company }}</h2>
      <p>{{ experience.location }} | {{ experience.duration }}</p>
      <ul>
        <li v-for="(responsibility, index) in experience.responsibilities" :key="index">{{ responsibility }}</li>
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
    color: white;
    padding: 5px;
    margin: 8px;
  }

  li{
    text-align: left;
    font-size: small;
  }
  </style>
  
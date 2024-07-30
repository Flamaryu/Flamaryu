<template>
    <div class="grid">
      <WorkExperience
        v-for="(experience, index) in workExperience"
        :key="index"
        :experience="experience"
      />
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import WorkExperience from './WorkExperience.vue';
  
  export default {
    name: 'WorkExperienceGrid',
    components: {
      WorkExperience
    },
    computed: {
      ...mapGetters(['getWorkExperience']),
      workExperience() {
        return this.getWorkExperience;
      }
    }
  };
  </script>
  
  <style scoped>
  .grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
 /* background: linear-gradient(to left, #ff7f50, #1e90ff); /* Reverse gradient */
  padding: 5px;
  border-radius: 8px;
  border: 2px solid #ccc; /* Add a border */
  max-width: 80%; /* Ensure grid doesn't touch the edges */
  font-size: small;
}


  </style>
  
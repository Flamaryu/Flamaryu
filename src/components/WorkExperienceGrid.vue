<template>
  <div class="work-experience-list">
    <WorkExperience
      v-for="(experience, index) in workExperiences"
      :key="index"
      :experience="experience"
    />
  </div>
</template>

<script>
import WorkExperience from './WorkExperience.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WorkExperienceList',
  components: {
    WorkExperience
  },
  computed: {
    ...mapGetters(['getWorkExperience']),
    workExperiences() {
      return this.getWorkExperience;
    }
  }
};
</script>

<style scoped>
.work-experience-list {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 16px;
  padding: 16px;
}
</style>

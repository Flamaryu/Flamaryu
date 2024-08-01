<template>
  <div class="app-container">
    <app-header><h1>MarKevis Williams</h1></app-header>
    <div >
      <h3>{{ msg }}</h3>
      <img :src="mypic" alt="Profile Picture" class="profile-pic" />
      <div class="container">
        <h3>Work History</h3>
        <WorkExperienceGrid/>
        <SkillsGrid  />
        <h4>Projects</h4>
        <ProjectCarousel />
      </div>
     
    </div>
  </div>
</template>




<script>
import WorkExperienceGrid from '@/components/WorkExperienceGrid.vue'; // Import the WorkExperienceGrid component
import ProjectCarousel from '@/components/ProjectCarousel.vue'; // Import the ProjectCarousel component
import SkillsGrid from '@/components/SkillsGrid.vue'; // Import the SkillGrid component
export default {
  name: 'HomeView',
  components: {
    WorkExperienceGrid, // Register the WorkExperienceGrid component
    SkillsGrid,
    ProjectCarousel
  },
  data() {
    return {
      mypic: require('@/assets/mypic.png')
    };
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  
 
};
</script>

<style scoped>
/* App container to hold the header and content */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

/* Container to center the content */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

h1{
  margin: 0;
  padding: 0;
  color: white;
}

h3{
  color: white;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 2px solid #fff; /* Optional: Add a white border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow */
}
</style>@/services/getIconsService

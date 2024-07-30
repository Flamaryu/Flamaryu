<template>
    <div class="carousel" @mouseover="showArrows = true" @mouseleave="showArrows = false">
      <div class="carousel-photo">
        <img :src="projects[currentProject].photos[currentPhoto]" alt="Project Image" />
        <button v-if="showArrows" class="arrow left" @click="prevPhoto">‹</button>
        <button v-if="showArrows" class="arrow right" @click="nextPhoto">›</button>
      </div>
      <div class="carousel-description">
        <p>{{ projects[currentProject].description }}</p>
        <a :href="projects[currentProject].githubLink" target="_blank" class="custom-link">View on GitHub</a>
      </div>
      <div class="carousel-navigation">
        <button v-for="(project, index) in projects" :key="index" @click="setCurrentProject(index)">
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'ProjectCarousel',
    data() {
      return {
        currentProject: 0,
        currentPhoto: 0,
        showArrows: false
      };
    },
    computed: {
      ...mapGetters(['getProjects']),
      projects() {
        return this.getProjects;
      }
    },
    methods: {
      nextPhoto() {
        this.currentPhoto = (this.currentPhoto + 1) % this.projects[this.currentProject].photos.length;
      },
      prevPhoto() {
        this.currentPhoto = (this.currentPhoto - 1 + this.projects[this.currentProject].photos.length) % this.projects[this.currentProject].photos.length;
      },
      setCurrentProject(index) {
        this.currentProject = index;
        this.currentPhoto = 0; // Reset photo index when switching projects
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .carousel-photo {
    position: relative;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .arrow.left {
    left: 10px;
  }
  
  .arrow.right {
    right: 10px;
  }
  
  .carousel:hover .arrow {
    opacity: 1;
  }
  
  .carousel-description {
    text-align: center;
    margin-top: 10px;
  }
  
  .carousel-description p {
    margin: 0;
  }
  
  .carousel-description a {
    color: #1e90ff;
    text-decoration: none;
  }
  
  .carousel-description a:hover {
    text-decoration: underline;
  }
  
  .carousel-navigation {
    margin-top: 10px;
  }
  
  .carousel-navigation button {
    background-color: #1e90ff;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
  }
  .custom-link {
  
  padding: 1px 2px;
  text-decoration: none;
  border-radius: 2px;
  transition: background-color 0.3s;
}
.custom-link:link{
  color:white;
}

.custom-link:visited{ 
  color:white;
}
  
  .carousel-navigation button:hover {
    background-color: #ff7f50;
  }
  </style>

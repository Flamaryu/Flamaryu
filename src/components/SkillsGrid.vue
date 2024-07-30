<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Skills</h2>
        </v-col>
        <v-col v-for="(category, index) in skills" :key="index" cols="12" md="6">
          <h3>{{ category.name }}</h3>
          <v-row>
            <v-col v-for="(skill, idx) in category.skills" :key="idx" cols="6" md="4">
              <v-chip class="ma-2" color="primary" text-color="white">
                <v-icon left>{{ skill.icon }}</v-icon>
                {{ skill.name }}
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getSkills']),
      skills() {
        return this.getSkills;
      },
    },
  };
  </script>
  
  <style>
  h2, h3 {
    margin-top: 24px;
  }
  </style>
  
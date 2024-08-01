<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Skills</h2>
      </v-col>
      <v-col v-for="(category, index) in skills" :key="index" cols="12" md="6">
        <h3>{{ category.name }}</h3>
        <v-row class="skills-row">
          <v-col
            v-for="(skill, idx) in category.skills"
            :key="idx"
            cols="auto"
            class="skill-col"
          >
            <v-chip class="skill-chip" color="primary" text-color="white">
              <div class="chip-content">
                <img :src="getSkillIcon(skill.icon)" alt="" class="icon" />
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getSkills', 'getSkillIcon']),
    skills() {
      return this.getSkills;
    }
  },
  methods: {
    ...mapActions(['fetchSkillIcon']),
  getSkillIcon(icon) {
    const skillIcon = this.$store.getters.getSkillIcon(icon);
    if (!skillIcon) {
      this.fetchSkillIcon(icon);
      return ''; // Return an empty string while the icon is being fetched
    }
    // If the icon is a local path, use require to load it
    if (!skillIcon.startsWith('http')) {
      return require(`@/assets/${skillIcon}`);
    }
    return skillIcon;
  }
  },
  created() {
    this.skills.forEach(category => {
      category.skills.forEach(skill => {
        this.fetchSkillIcon(skill.icon);
      });
    });
  }
};
</script>

<style scoped>
h2, h3 {
  margin-top: 24px;
  color: white;
}

span {
  color: #399E5A;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
}

.skill-col {
  display: flex;
  justify-content: center;
}

.skill-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
}

.chip-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  width: 24px;
  height: 24px;
  margin: 0 8px;
}

.skill-name {
  display: inline-block;
}
</style>

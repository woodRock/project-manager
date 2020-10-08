<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Projects</h4></li>
      <li
        v-for="project in projects"
        v-bind:key="project.id"
        class="collection-item"
      >
        <div class="chip">
          {{ project.title }}
        </div>
        {{ project.description }}
        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-project',
            params: { project_id: project.id }
          }"
        >
          <i class="material-icons">remove_red_eye</i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="projects/new" class="btn-floating btn-large red">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseInit";

const db = firebase.firestore();

export default {
  name: "project",
  data() {
    return {
      projects: []
    };
  },
  created() {
    db.collection("projects")
      .orderBy("time")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            project_id: doc.id,
            title: doc.data().title,
            description: doc.data().description
          };
          // unshift() add an element to the start of the array
          this.projects.unshift(data);
        });
      });
  }
};
</script>

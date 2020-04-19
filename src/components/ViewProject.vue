<template>
  <div id="view-project">
    <h3>View Project</h3>
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{ project.title }}</h4></li>
      <li class="collection-item"><img :src="project.image" alt="project banner" height="50" width="50"></li>
      <li class="collection-item">{{ project.description }}</li>
      <li class="collection-item"><a :href="project.link"></a>{{ project.link }}</li>
      <li class="collection-item">{{ project.time }}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteProject" class="btn red">Delete</button>
    <div class="fixed-action-btn">
      <router-link :to="{name: 'edit-project', params: {project_id: project.id}}" class="btn-floating btn-large red">
        <i class="material-icons">edit</i>
      </router-link>
    </div>
  </div>
</template>
<script>
  import firebase from './firebaseInit'

  const db = firebase.firestore()
  
  export default {
    name: "view-project",
    data() {
      return {
        project: null
      }
    },
    created() {
      db.collection('projects').orderBy('title').get().then(
        querySnapshot => {
            querySnapshot.forEach(doc => {
              const data = {
                'id': doc.id,
                'project_id': doc.id,
                'title': doc.data().title,
                'description': doc.data().description,
                'image': doc.data().image,
                'link': doc.data().link,
                'time': doc.data().time
              }
              if (data.id === this.$route.params.project_id) {
                this.project = data
              }
            })
          }
        )
    },
    methods: {
      deleteProject() {
        if (confirm('Are you sure?')){
          db.collection('projects').doc(this.$route.params.project_id).delete()
          this.$router.push('/')
        }
      }
    }
  }
</script>

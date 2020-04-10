<template>
  <div id="edit-project">
    <div class="container">
      <h3>Edit Project</h3>
      <div class="row">
        <form @submit.prevent="updateProject" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="title" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="description" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="image" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="link" required>
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/" class="btn grey">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import db from './firebaseInit'

  function serialize(object) {
    return JSON.parse(JSON.stringify(object));
  }

  export default {
    name: "edit-project",
    data() {
      return {
        title: null,
        description: null,
        image: null,
        link: null,
        date: new Date()
      }
    },
    created() {
      db.collection('projects').orderBy('title').get().then(
        querySnapshot => {
            querySnapshot.forEach(doc => {
              const id = doc.id;
              if (id === this.$route.params.project_id) {
                this.project_id = doc.id
                this.title = doc.data().title
                this.description = doc.data().description
                this.image = doc.data().image
                this.link = doc.data().link
                this.date = new Date()
              }
            })
          }
        )
    },
    methods: {
      updateProject() {
        db.collection('projects').orderBy('title').get().then(
          querySnapshot => {
              querySnapshot.forEach(doc => {
                const id = doc.id
                const project = {
                  title: this.title,
                  description: this.description,
                  image: this.image,
                  link:this.link,
                  time:this.date
                }
                if ( id === this.$route.params.project_id) {
                  doc.ref.update(serialize(project))
                  .then(() => {
                    this.$router.push({name: 'view-project', params: {project_id: id}})
                  })
                }
              })
            }
          )
      }
    }
  }
</script>

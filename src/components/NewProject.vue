<template>
  <div id="new-project">
    <div class="container">
      <h3>New Project</h3>
      <div class="row">
        <form @submit.prevent="saveProject" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="title" required>
              <label for="">Title</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="description" required>
              <label for="">Description</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="image" required>
              <label for="">Image</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="link" required>
              <label for="">Link</label>
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
    name: "new-project",
    data() {
      return {
        title: null,
        description: null,
        image: null,
        link: null,
        time: new Date()
      }
    },
    methods: {
      saveProject() {
        const project = {
          title: this.title,
          description: this.description,
          image: this.image,
          link: this.link,
          time: this.time
        }
        db.collection('projects').add(serialize(project))
        .then(() => this.$router.push('/'))
        .catch(error => console.log(error))
      }
    }
  }
</script>

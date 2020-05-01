<template>
  <div id="new-blog">
    <div class="container">
      <h3>New Blog</h3>
      <div class="row">
        <form @submit.prevent="saveBlog" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="title" required>
              <label for="">Title</label>
            </div>
          </div>
          <div class="row box">
            <div class="input-field col s12">
              <textarea class="description" v-model="markdown" placeholder="Markdown here" required></textarea>
              <label for="">Description</label>
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          <router-link to="/blog" class="btn grey">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  height: 400px;
}
.description {
  width: 100%;
  line-height: 1;
  height: 100% !important;
}
</style>

<script>
  import firebase from '../firebaseInit'

  function serialize(object) {
    return JSON.parse(JSON.stringify(object));
  }

  const db = firebase.firestore()

  export default {
    name: "new-blog",
    data() {
      return {
        title: null,
        markdown: null,
        time: new Date()
      }
    },
    methods: {
      saveBlog() {
        const blog = {
          title: this.title,
          markdown: this.markdown,
          time: this.time
        }
        db.collection('blog').add(serialize(blog))
        .then(() => this.$router.push('/blog'))
        .catch(error => console.log(error))
      }
    }
  }
</script>

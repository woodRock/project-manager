<template>
  <div id="edit-blog">
    <div class="container">
      <h3>Edit blog</h3>
      <div class="row">
        <form @submit.prevent="updateblog" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="title" required>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea class="box" type="textarea" v-model="markdown" required></textarea>
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
  width: 100%;
  height: 400px;
  vertical-align: top;
}
</style>

<script>
  import firebase from '../firebaseInit'

  function serialize(object) {
    return JSON.parse(JSON.stringify(object));
  }

  const db = firebase.firestore()

  export default {
    name: "edit-blog",
    data() {
      return {
        title: null,
        markdown: null,
        time: null
      }
    },
    created() {
      db.collection('blog').orderBy('title').get().then(
        querySnapshot => {
            querySnapshot.forEach(doc => {
              const id = doc.id;
              if (id === this.$route.params.blog_id) {
                this.blog_id = doc.id
                this.title = doc.data().title
                this.markdown = doc.data().markdown
                this.time = doc.data().time
              }
            })
          }
        )
    },
    methods: {
      updateblog() {
        db.collection('blog').orderBy('title').get().then(
          querySnapshot => {
              querySnapshot.forEach(doc => {
                const id = doc.id
                const blog = {
                  title: this.title,
                  markdown: this.markdown,
                  time:this.time
                }
                if ( id === this.$route.params.blog_id) {
                  doc.ref.update(serialize(blog))
                  .then(() => {
                    this.$router.push({name: 'view-blog', params: {blog_id: id}})
                  })
                }
              })
            }
          )
      }
    }
  }
</script>

<template>
<div id="view-blog">
  <h1>{{blog.title}}</h1>
  <p>{{blog.markdown}}</p>
  <router-link to="/blog" class="btn grey">Back</router-link>
  <button @click="deleteBlog" class="btn red">Delete</button>
  <div class="fixed-action-btn">
    <router-link :to="{name: 'edit-blog', params: {blog_id: blog.id}}" class="btn-floating btn-large red">
      <i class="material-icons">edit</i>
    </router-link>
  </div>
</div>
</template>
<script>
import firebase from '../firebaseInit'

const db = firebase.firestore()

export default {
  name: "view-blog",
  data() {
    return {
      blog: null
    }
  },
  created() {
    db.collection('blog').orderBy('title').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'title': doc.data().title,
            'markdown': doc.data().markdown,
            'time': doc.data().time
          }
          if (data.id === this.$route.params.blog_id) {
            this.blog = data
          }
        })
      }
    )
  },
  methods: {
    deleteBlog() {
      if (confirm('Are you sure?')) {
        db.collection('blog').doc(this.$route.params.blog_id).delete()
        this.$router.push('/blog')
      }
    }
  }
}
</script>

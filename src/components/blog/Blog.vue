<template>
  <div id="blog">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Blog</h4>
      </li>
      <li v-for="b in blogs" v-bind:key="b.id" class="collection-item">
        <div class="chip">
          {{ b.title }}
        </div>
        <router-link
          class="secondary-content"
          v-bind:to="{ name: 'view-blog', params: { blog_id: b.id } }"
        >
          <i class="material-icons">remove_red_eye</i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/blog/new" class="btn-floating btn-large red">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseInit";

const db = firebase.firestore();

export default {
  name: "blog",
  data() {
    return {
      blogs: []
    };
  },
  created() {
    db.collection("blog")
      .orderBy("time")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            title: doc.data().title,
            markdown: doc.data().markdown
          };
          this.blogs.unshift(data);
        });
      });
  }
};
</script>

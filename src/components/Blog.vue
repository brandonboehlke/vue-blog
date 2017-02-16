<template>
  <div>
    <h3>{{ blog.title }}</h3>
    <p> {{ blog.content }} </p>
    <p @click="showEdit"><i class="fa fa-pencil"></i></p>
    <form v-if="displayEdit">
      <input type="text" v-model="blog.title">
      <textarea v-model="blog.content" cols="30" rows="10"></textarea>
    </form>
    <hr>
    <router-link to="/">Home</router-link>

  </div>
</template>

<script>
  import blogService from '../blog-service'

  export default {
    name: 'blog',
    data() {
      return {
        blog: blogService.getBlog(this.$route.params.blogTitle),
        displayEdit: false,
        // blogTitle: this.blog.title,
        // blogContent: this.blog.content
      }
    },
    methods: {
      showEdit() {
        this.displayEdit = !this.displayEdit
      }
    }
  }

</script>


<style>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
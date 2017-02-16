<template>
  <div>
    <h3>{{ blog.title }}</h3>
    <p> {{ blog.content }} </p>
  </div>
</template>

<script>
  import blogService from '../blog-service'

  export default {
    name: 'blog',
    data() {
      return {
        blog: blogService.getBlog(this.$route.params.blogTitle)
      }
    }
  }

</script>


<style scoped>
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
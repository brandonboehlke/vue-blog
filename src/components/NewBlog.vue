<template>
    <div>
        <form @submit.prevent="addBlog">
            <input type="text" v-model="blogTitle" placeholder="Blog Title ">
            <textarea v-model="blogContent" cols="30" rows="10" placeholder="Speak Freely!"></textarea>
            <button type="submit">Make Blog</button>
        </form>

    </div>

</template>


<script>
import blogService from '../blog-service'

export default {
    name: 'new-blog',
    data () {
        return {
            blogTitle: '',
            blogContent: ''
        }
    },
    methods: {
        addBlog: function (){
            blogService.addBlog(this.blogTitle, this.blogContent)
            this.blogTitle = ''
            this.blogContent = ''
            this.$parent.updateData()
        }
    }
}


</script>

<style>

</style>
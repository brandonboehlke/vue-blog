<template>
    <div>
        <ul>
            <li v-for="blog in blogs">
                <router-link :to="'blogs/' + blog.title">{{ blog.title }}</router-link>
                <span @click="recycle(blog.title)"><i class="fa fa-recycle"></i></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import blogService from '../blog-service'

    export default {
        name: 'blog-list',
        data() {
            return {
                // blogs: blogService.getBlogs()
            }
        },
        computed: {
            blogs: function () {
                this.$parent.lastUpdate;
                return blogService.getBlogs()
            }
        },
        methods: {
            recycle(blogTitle) {
                console.log('in recycle')
                blogService.recycleBlog(blogTitle)
                this.$parent.updateData()
            }
        }
    }

</script>

<style>

</style>
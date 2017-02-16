<template>
    <div>
        <ul>
            <li v-for="blog in blogs">
                <router-link :to="'blogs/' + blog.title">{{ blog.title }}</router-link>
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
                blogs: blogService.getBlogs()
            }
        }
    }

</script>

<style>

</style>
<template>
    <div>
        <NewBlog></NewBlog>
        <BlogList></BlogList>
    </div>
</template>

<script>
    import NewBlog from './NewBlog'
    import JumboTron from './JumboTron'
    import BlogList from './BlogList'
    import blogService from '../blog-service'

    export default {
        name: 'home',
        components: { NewBlog, JumboTron, BlogList },
        // data() {

        // }


    }

</script>

<style>

</style>
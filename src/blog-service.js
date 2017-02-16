let blogs = {
    'the blog': {
        title: 'the blog',
        content: '',
        comments: []
    }
}

let blogService = {
    getBlogs() {
        return blogs
    },
    getBlog(blogTitle) {
        return blogs[blogTitle]
    },
    addBlog(blogTitle, blogContent) {
        blogs[blogTitle] = {
            title: blogTitle,
            content: blogContent,
            comments: []
        }
    }
}


export default blogService
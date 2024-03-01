<template>
    <div>
        <h1>Deep Learning Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.slug">
                <nuxt-link :to="`/blog/${post.slug}`">{{
                    post.title
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    async asyncData({ $content }) {
        console.log("Fetching posts...");
        const posts = await $content("blog").fetch();
        console.log("Posts:", posts);
        return {
            posts,
        };
    },
};
</script>


<!-- <template>
    <div>
        <h2>{{ post.title }}</h2>
        <nuxt-content :document="post" />
    </div>
</template>
  
<script>
export default {
    async asyncData({ $content, params, error }) {
        let post;
        try {
            post = await $content("blog", params.slug).fetch();
            // OR const article = await $content(`articles/${params.slug}`).fetch()
        } catch (e) {
            error({ message: "Blog Post not found" });
        }

        return {
            post,
        };
    },
};
</script>-->
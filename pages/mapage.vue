<template>
    <div>
        <li v-for="post of posts" :key="post.slug">
            <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
        </li>
    </div>
</template>
  
<script>
export default {
    async asyncData({ $content }) {
        const posts = await $content("blog").fetch();

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
<script setup lang="ts">
const route = useRoute();
const params = route.params;
const slug = params.slug;
const post = await queryContent(`/blog/${slug}`).findOne();
</script>
<template>
    fre
    <v-container>qqqq
        <h2 class="mb-4">{{ post.title }}</h2>ffff
        <ContentRenderer :value="post" />dddd
        <br>vvv
    </v-container>
</template>
<template>
	<div v-if="posts.length > 0">
		<h3 class="text-3xl mb-5">Список пользователей</h3>
		<PostItem
			class="mb-2 border-2 border-fuchsia-950 w-1/2 p-5 bg-gray-600 text-white"
			v-for="post in props.posts"
			:post="post"
			:key="post.id"
			@remove="emit('remove', post)"
		/>
	</div>

	<div class="text-3xl text-red-600" v-else>Список постов пуст</div>
</template>

<script setup lang="ts">
import { Post } from "../types";
import PostItem from "./PostItem.vue";
const emit = defineEmits();

interface Props {
	posts: Post[];
}

const props = defineProps<Props>();
</script>

<style scoped></style>

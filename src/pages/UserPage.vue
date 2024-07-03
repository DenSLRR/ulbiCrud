<template>
	<h1 class="text-3xl mb-5 mt-5">Страница с постами</h1>

	<div class="flex justify-between w-1/2">
		<MyButton class="mb-5" @click="showDialog">create post</MyButton>
		<MySelect
			:options="sortOptions"
			:modelValue="selectedSort"
			@update:modelValue="(value) => (selectedSort = value)"
		/>
	</div>

	<MyDialog v-model:show="isVisible"
		><PostForm @create="createPost"
	/></MyDialog>
	<PostList @remove="removePost" :posts="posts" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyDialog from "../components/UI/MyDialog.vue";
import MyButton from "../components/UI/MyButton.vue";
import MyInput from "../components/UI/MyInput.vue";
import MySelect from "../components/UI/MySelect.vue";
import axios from "axios";
import type { Post } from "./types";

const posts = ref<Post[]>([]);

const isVisible = ref(false);
const selectedSort = ref("");

const some = (some) => {
	console.log(some);
};

const sortOptions = ref([
	{ value: "title", name: "По Названию" },
	{ value: "body", name: "По Описанию" },
]);

onMounted(() => {
	fetchUsers();
}),
	function createPost(post: Post) {
		posts.value.push(post);
		isVisible.value = false;
	};

function removePost(post: Post) {
	console.log(post);
	posts.value = posts.value.filter((p) => p.id !== post.id);
}

function showDialog() {
	isVisible.value = true;
}

watch(selectedSort, (newValue) => {
	posts.value = posts.value.sort((post1, post2) => {
		return post1[newValue]?.localeCompare(post2[newValue]);
	});
});

async function fetchUsers() {
	try {
		const res = await axios.get(
			"https://jsonplaceholder.typicode.com/posts?_limit=10"
		);
		posts.value = res.data;
	} catch (error) {
		alert(error);
	}
}
</script>

<style scoped></style>

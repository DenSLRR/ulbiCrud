<template>
	<form @submit.prevent class="flex flex-col w-1/2">
		<h4 class="text-2xl mb-5 mt-5 ml-5">Create post</h4>
		<MyInput
			class="w-full mb-5 h-12 bg-lime-200 text-center"
			type="text"
			placeholder="Name"
			v-model="post.name"
		/>
		<MyInput
			class="w-full mb-5 h-12 bg-lime-200 text-center"
			text-center
			type="text"
			placeholder="Body"
			v-model="post.body"
		/>
		<MyButton
			@click="createPost"
			class="self-end w-32 mb-5 h-12 text-black bg-lime-200"
		>
			Send post
		</MyButton>
	</form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Post } from "../types";
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";
const emit = defineEmits();

const post = ref<Omit<Post, "id">>({
	name: "",
	body: "",
});

function createPost() {
	const newPost = {
		id: Date.now(),
		name: post.value.name,
		body: post.value.body,
	};
	if (newPost.name.length < 3 || newPost.body.length < 3) {
		return;
	} else {
		emit("create", newPost);
	}
	post.value.name = "";
	post.value.body = "";
}
</script>

<style scoped></style>

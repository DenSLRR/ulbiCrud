<template>
	<div class="flex justify-between items-center">
		<div>
			<div>
				<strong class="mr-5">Название:</strong>{{ props.post.name }}
			</div>
			<div>
				<strong class="mr-5">Описание:</strong> {{ props.post.body }}
			</div>
		</div>

		<div>
			<MyButton
				@click="emit('remove', post)"
				class="self-end w-32 h-12 text-black bg-lime-200"
			>
				Delete
			</MyButton>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyButton from "./UI/MyButton.vue";
const emit = defineEmits();
const props = defineProps({
	post: Object,
});
</script>

<style scoped></style>

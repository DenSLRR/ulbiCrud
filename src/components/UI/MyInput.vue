<template>
	<input
		@input="updateInput"
		:value="props.modelValue"
		class="w-full mb-5 h-12 bg-lime-200 text-center"
		type="text"
	/>
</template>

<script setup lang="ts">
const emit = defineEmits();

const props = defineProps({
	modelValue: [String, Number],
});

function updateInput(e) {
	emit("update:modelValue", e.target.value);
}
</script>

<style scoped></style>

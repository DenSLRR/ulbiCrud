<template>
	<div
		class="top-0 bottom-0 right-0 left-0 bg-gray-900 bg-opacity-70 fixed flex"
		v-if="show"
		@click="hideDialog"
	>
		<div
			@click.stop
			class="bg-slate-100 m-auto p-5 rounded-xl w-1/2 flex justify-center"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits();
const props = defineProps({
	show: {
		type: Boolean,
		required: true,
	},
});

function hideDialog() {
	emit("update:show", false);
}
</script>

<style scoped></style>

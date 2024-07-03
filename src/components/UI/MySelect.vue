<template>
	<select
		@click="log"
		:value="modelValue"
		@change="changeOption"
		class="w-32 h-12 text-black bg-lime-200"
	>
		<option disabled value="">Выбери Чет</option>
		<option
			v-for="option in options"
			:key="option.value"
			:value="option.value"
		>
			{{ option.name }}
		</option>
	</select>
</template>

<script setup lang="ts">
interface IProps {
	modelValue: string;
	options: {
		name: string;
		value: string;
	}[];
}

const emit = defineEmits();
defineProps<IProps>();

function changeOption(option) {
	console.log();
	emit("update:modelValue", option.target.value);
}
</script>

<style scoped></style>

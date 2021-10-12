<template>
	<td :aria-colindex="colIndex + 1" role="cell">
		{{ value }}
	</td>
</template>

<script>
export default {
	name: 'TableData',
	props: {
		colIndex: {
			type: Number,
			required: true,
		},
		value: {
			type: [String, Number, Date],
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped></style>

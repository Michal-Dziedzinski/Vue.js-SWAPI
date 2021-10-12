<template>
	<!-- FIXME: Suspense -->
	<Suspense>
		<template #default>
			<router-view class="page-wrapper" />
		</template>
		<template #fallback>
			<BaseLoader />
		</template>
	</Suspense>
</template>

<script>
import BaseLoader from '@/components/atoms/BaseLoader';

export default {
	components: {
		BaseLoader,
	},
};
</script>

<style lang="scss">
.page-wrapper {
	max-width: 1024px;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	min-height: 100vh;
}
</style>

<template>
	<div>
		<img 
		class="traffic-light-img"
		:src="require(`../assets/images/${trafficLight}`)"  
		alt="traffic-light" >
	</div>
</template>

<script>

export default {
	name: 'v-traffic-light',
	data() {
		return {
			trafficLight: 'traffic-light.png'
		}
	}
}
</script>

<style lang="scss">

</style>
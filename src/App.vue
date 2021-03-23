<template>
	<div 
	id="app"
	:style="{'background-image': 'url(' + require(`@/assets/images/cartoon-street${backgroundNumber}.jpg` ) + ')'}"
	>
		<v-traffic-light-img />
		<router-view/>
		
	</div>
</template>

<script>
	import vTrafficLightImg from '@/components//v-traffic-light-img'
	export default {
		mounted () {
			if (this.$route.path == '/') {
				this.$router.push('yellow')
			}
		},
		components: {
			vTrafficLightImg
		},
		data() {
			return {
				wrapper: {
					backgroundImage: '@/assets/images/cartoon-street.jpg' 
				},
				backgroundNumber: null
			}
		},
		created() {
			const randomInteger = (min, max) => {
				let rand = min - 0.5 + Math.random() * (max - min + 1);
				return Math.round(rand);
			}
			this.backgroundNumber = randomInteger(1, 4)
		}
	}	
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap');

	#app {
		font-family: 'Roboto Mono', monospace;
		height: 100%;
		z-index: -1;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	body {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		margin: 0;
	}

</style>

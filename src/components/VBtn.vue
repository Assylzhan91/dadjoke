<template>
	<div>
		<button
			class="btn"
			:class="setTypeBtn"
			@click="$emit('handler')"
		>
			 <slot></slot>
		</button>
	</div>
</template>

<script>
export default {
  props: {
		colorType: {
      type: String,
			default: 'info'
		}
	},
  name: "VBtn",
	computed: {
		setTypeBtn (){
			return `btn-${this.colorType}`
		}
	}
}
</script>

<template>
	<button class="hc-button" :class="classObj"><slot></slot></button>
</template>

<script lang="ts">
// import Vue from 'vue'
import { Component, Watch } from "vue-property-decorator";
import Vue from 'vue'

const props = defineProps({
   HCButton: {
	ori: String,
	type: String,
	flat: {
		type: Boolean,
		default: false
	},
	air: {
		type: Boolean,
		default: true
	}
   }
})

const {HCButton}=props

const classObj = () => ({
			right: this.$props.ori === "right",
			primary: this.$props.type === "primary",
			info: this.$props.type === "info",
			white: this.$props.type === "white",
			flat: this.$props.flat === true,
			air: this.$props.air === true

})

</script>

<style lang="scss">
.hc-button {
    // background: red;
	border-radius: 7px 7px 7px 30px;
	border: none;
	padding: 14px 50px;
	font-size: 16px;
	color: #fff;

	&:hover {
		cursor: pointer;
	}
}

.hc-button.right {
	border-radius: 7px 7px 30px 7px;
}

.hc-button.primary {
	background: #1890ff;
	box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);

	&:hover {
		background: #1c95ff;
	}
}

.hc-button.info {
	background: #40C9C6;
}
.hc-button.info.flat {
	border: 1px solid #40C9C6;
	background: #fff;
}
</style>
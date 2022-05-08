<template>
	<section id="newsletter-section">
		<div class="desktop-container">
			<el-row class="nl-container">
				<el-col span="12">
					<img src="../../assets/img/landing-page/newsletter.svg" />
				</el-col>
				<el-col span="12">
					<h3>Newsletter</h3>
					<p>
						Join our newsletter to stay up to date with all of our
						updates
					</p>

					<el-input
						placeholder="Your email"
						v-model="input3"
						class="input-with-select"
					>
						<el-button
							slot="append"
							icon="el-icon-search"
						></el-button>
					</el-input>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script lang="ts">
export default {
	name: "NewsletterSection",
};
</script>

<style lang="scss">
#newsletter-section {
	padding-top: 160px;
	padding-bottom: 160px;

	.nl-container {
		background: #0066ff;
		border-radius: 35px;
		padding: 95px 60px;

		h3 {
			color: #fff;
			font-size: 55px;
			line-height: 70px;
			margin: 0;
		}

		p {
			color: #fff;
			font-size: 16px;
			line-height: 26px;
		}
	}
}
</style>
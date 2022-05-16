<template>
	<section id="newsletter-section">
		<div class="desktop-container">
			<el-row class="nl-container">
				<el-col span="12">
					<img src="../../assets/img/landing-page/newsletter/newsletter.png" />
				</el-col>
				<el-col span="12">
					<div class="newsletter-body">
						<h3>Newsletter</h3>
						<p>
							Join our newsletter to stay up to date with all of our
							updates
						</p>

						<input
							placeholder="Your email"
							v-model="input3"
							class="input-with-select" />
						<button class="input-button">Subscribe</button>
					
					</div>
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
	background-image: url('src/assets/img/landing-page/newsletter/bg_newsletter.png');
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	padding-top: 500px;
	padding-bottom: 200px;

	.nl-container {
		background: #fff;
		border-radius: 35px;
		padding: 95px 60px;
		width: 75%;
		margin: auto;
		display: flex;
		justify-content: center;
		.newsletter-body {
			width: 75%; 
			margin: auto;
		}
		h3 {
			color: #304156;
			font-size: 55px;
			line-height: 70px;
			margin: 0;
		}

		p {
			color: #97A8BE;
			font-size: 16px;
			line-height: 26px;
		}

		.input-with-select {
			padding: 10px;
			font-size: 14px;
			line-height: 20px;
			text-align: left;
			color: #737373;
			border: 2px solid #40C9C6;
			margin-right: -20px;
			box-shadow: 0px 10px 25px #E9F4F4;
		}

		.input-with-select:focus {
			outline: none;
		}

		.input-button {
			padding: 10px;
			font-size: 14px;
			line-height: 20px;
			color: #fff;
			background-color: #40C9C6;
			border: 2px solid #40C9C6;
			border-bottom-left-radius: 20px 20px;
			cursor: pointer;
		}
	}
}
/**************************/
/*      Mobile            */
/**************************/
@media screen and (max-width: 760px) {
	#newsletter-section {
		padding-top: 300px;
		padding-bottom: 120px;

		.nl-container {
			border-radius: 15px;
			padding: 40px 20px;
			width: 90%;
			margin: auto;
			display: flex;
			justify-content: center;
			img {
				width: 100%;
			}
			.newsletter-body {
				width: 100%; 
				margin: auto;
			}
			h3 {
				font-size: 35px;
			}

			p {
				font-size: 14px;
				line-height: 16px;
			}
			.input-with-select {
				width: 80%;
				padding: 6px;
				font-size: 12px;
			}
			.input-button {
				padding: 6px;
				font-size: 12px;
			}
		}
	}
}
</style>
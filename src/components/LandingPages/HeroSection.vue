<template>
	<section id="hero-section" style="">
		<div class="desktop-container">
			<div class="hero-main">
				<div class="hero-text">
					<p>HashCanvas <span>Beta</span></p>
					<h3>
						Free crypto alerts <br />
						forever for any<br />
						strategy
					</h3>
				</div>
				<div class="hero-img">
					<img src="../../assets/img/hero.svg" />
				</div>
			</div>

			<div class="hero-cards">
				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero-icon-1.svg" />
					<p>Free Alerts</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero-icon-1.svg" />
					<p>100% secure</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero-icon-1.svg" />
					<p>Unlimited symbols and timeframes</p>
				</div>
			</div>

			
		</div>

		<div class="hero-footer">
			<div class="desktop-container">
				<p class="text-center">
					<bold>Hashcanvas</bold> is on a journey to levelling up your
					<bold>Trading</bold>, we are bringing to you a industry
					leading auto trading <bold>Features</bold> to you, leading
					algorithms, robo trading, range and smart trades at
					<bold>your fingertips</bold>.
				</p>
			</div>
		</div>
	</section>
</template>

<script  lang="ts">

export default {
	name: "HeroSection",
	components: {},
	resize() {
		// Handle resize
	},

	data() {
		return {};
	}
}
</script>

<style lang="scss" scoped>
#hero-section {
	margin-top: 50px;
	// background-image: url(../../assets/img/landing-page/hero/bg.png);
	
	&::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255,255,255,0.5);
	z-index: -1;
}
}

.hero-main {
	display: flex;
	width: 100%;

	.hero-text {
		width: 50%;
		p {
			font-size: 25px;
			color: #304156;
			span {
				background: #1890ff;
				color: #fff;
				border-top-right-radius: 15px;
				padding: 5px;
			}
		}

		h3 {
			color: #1890ff;
			font-size: 55px;
			line-height: 70px;
			margin-top: 9px;
		}
	}

	.hero-img {
		width: 50%;
		img {
			width: 100%;
		}
	}
}

.mobile .hero-main {
	flex-direction: column;
	.hero-text {
		width: 100%;
		order: 2;
		padding: 20px;
	}

	.hero-img {
		width: 100%;
		order: 1;
		text-align: center;
		img {
			width: 70%;
		}
	}
}

.hero-cards {
	display: flex;
	justify-content: space-between;

	.hero-card {
		border: 1px solid #1890ff;
		background: #fff;
		border-radius: 30px;
		padding: 50px 0 30px;
		text-align: center;
		width: 30%;

		img {
			// margin-top: 65px;
		}

		p {
			min-height: 100px;
			font-size: 22px;
			font-weight: 500;
			line-height: 33px;
			text-align: center;
		}
	}
}

.mobile .hero-cards {
	flex-direction: column;
	align-items: center;
	.hero-card {
		width: 286px;
		margin-bottom: 27px;
		p {
			margin: 0;
		}
	}
}

.hero-button {
	border: 1px solid #1890ff;
	background: #fff;
	border-radius: 30px;
	margin: 0 20px;

	img {
		margin-top: 65px;
	}

	p {
		min-height: 100px;
		font-size: 22px;
		font-weight: 500;
		line-height: 33px;
	}
}

.hero-footer {
	background: #1890ff;
	padding: 10px 30px;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100px;
		left: 0;
		top: -100px;
		background: #1890ff;
		z-index: -1;
	}

	p {
		color: #f0f0f0;
		font-size: 25px;
		line-height: 45px;

		bold {
			font-weight: bold;
			color: #fff;
		}
	}
}
</style>

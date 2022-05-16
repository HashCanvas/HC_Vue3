<template>
	<section id="hero-section">
		<div class="desktop-container isDesktopHero">
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
					<img src="../../assets/img/landing-page/hero/icon-1.png" />
					<p>Free Alerts</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero/icon-2.png" />
					<p>100% secure</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero/icon-3.png" />
					<p>Unlimited symbols and timeframes</p>
				</div>
			</div>

		</div>
		<!-- Mobile Format Design -->
		<div class="isMobileHero">
			<div class="hero-main">
				<div class="hero-img">
					<img src="../../assets/img/hero.svg" />
				</div>
				<div class="hero-text">
					<p>HashCanvas <span>Beta</span></p>
					<h3>
						Free crypto alerts <br />
						forever for any<br />
						strategy
					</h3>
				</div>
			</div>

			<div class="hero-cards">
				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero/icon-1.png" />
					<p>Free Alerts</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero/icon-2.png" />
					<p>100% secure</p>
				</div>

				<div class="hero-card">
					<img src="../../assets/img/landing-page/hero/icon-3.png" />
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

	data() {
		return {};
	}
}
</script>

<style lang="scss" scoped>
#hero-section {
	position: relative;
	background-image: url('/src/assets/img/landing-page/hero/hero_circle.png'),url('/src/assets/img/landing-page/hero/bg_hero.png');
    background-repeat: no-repeat;
	background-position: top left, top center;
	background-size: origin, cover;
	padding-top: 300px;
	margin-top: -200px;
	z-index: -1;
	
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(255,255,255,0.5);
		z-index: 0;
	}

	.desktop-container {
		width: 70%;
		margin: auto;
		z-index: 1;
	}
}

.hero-main {
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	.hero-text {
		width: 50%;
		z-index: 1;
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
		z-index: 1;
		img {
			width: 100%;
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
			z-index: 2;
			

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
		z-index: 1;
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
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100px;
		left: 0;
		top: -100px;
		background: #1890ff;
		z-index: 0;
	}

	p {
		margin: 80px 80px 150px 80px;
		color: #f0f0f0;
		font-size: 25px;
		line-height: 45px;

		bold {
			font-weight: bold;
			color: #fff;
		}
	}
}
@media screen and (min-width: 801px) {
	.isMobileHero {
		display: none;
	}
	#hero-section {
	
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(255,255,255,0.5);
		z-index: 0;
	}

	.desktop-container {
		width: 90%;
		margin: auto;
		z-index: 1;
	}
}

.hero-main {
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	.hero-text {

		h3 {
			color: #1890ff;
			font-size: 35px;
			line-height: 50px;
			margin-top: 9px;
		}
	}

}

.hero-cards {
	display: flex;
	justify-content: space-between;
}

}

@media screen and (min-width: 1192px) {
	#hero-section {
		.desktop-container {
			width: 80%;
		}
	}

	.hero-main {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.hero-text {

			h3 {
				color: #1890ff;
				font-size: 45px;
				line-height: 70px;
				margin-top: 9px;
			}
		}
	}
}

@media screen and (min-width: 1500px) {
	#hero-section {
		.desktop-container {
			width: 70%;
		}
	}
	.hero-main {

		.hero-text {
			h3 {
				color: #1890ff;
				font-size: 55px;
				line-height: 70px;
				margin-top: 9px;
			}
		}
	}
}

@media screen and (max-width: 800px) {
	.isMobileHero {
		display: block;
	}
	.isDesktopHero {
		display: none;
	}
	#hero-section {
		padding-top: 200px;
		margin-top: -200px;
		.hero-main {
			flex-direction: column;
			.hero-text {
				width: 60%;
				margin: auto;
				p {
					font-size: 20px;
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
					font-size: 40px;
					line-height: 50px;
					margin-top: 9px;
				}
			}

			.hero-img {
				width: 60%;
				margin: auto;
				z-index: 1;
				img {
					width: 100%;
				}
			}
		}
		.hero-cards {
			flex-direction: column;
			justify-content: space-between;

			.hero-card {
				border: 1px solid #1890ff;
				background: #fff;
				border-radius: 30px;
				padding: 30px 0 20px;
				text-align: center;
				width: 70%;
				margin: auto;
				margin-top: 20px;
				margin-bottom: 20px;
				z-index: 2;
			
				p {
					min-height: 100px;
					font-size: 22px;
					font-weight: 500;
					line-height: 33px;
					text-align: center;
				}
			}
		}
		.hero-footer {
			.desktop-container {
				width: 100%;
				p {
					font-size: 20px;
					line-height:36px;
					margin: 2rem 2rem 5rem 2rem;
				}
			}
		}
	}
}


</style>

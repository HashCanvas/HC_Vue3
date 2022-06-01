<template>
	<div class="navbar isDesktopNavbar">
        <router-link to="#">
		    <img class="logo" src="../../assets/logo_light.svg" />
        </router-link>

		<div class="right-menu">
			<div class="navs">
				<router-link to="#">Product</router-link>
                <router-link to="#">Strategies</router-link>
                <router-link to="#">Roadmap</router-link>
                <router-link to="#">About</router-link>
                <router-link to="#">Contact</router-link>
			</div>
			<button class="input-button">Join Now</button>
		</div>
	</div>

	<div class="mobileNavbar isMobileNavbar">
		<div class="hamburger" @click="menuOpen = !menuOpen">
			<div class="hamburger__item hamburger__item--first"></div>
			<div class="hamburger__item hamburger__item--middle"></div>
			<div class="hamburger__item hamburger__item--last"></div>
		</div>
		<router-link to="#" class="bigger">
			<img class="logo" src="../../assets/logo1.svg" />
		</router-link>
		<router-link to="#" class="smaller">
		    <img class="logo" src="../../assets/logo_light2.svg" />
        </router-link>

		<div class="right-menu">
			<button class="input-button" @click="passEvent">Join Now</button>
		</div>
	</div>

	<div class="dropdown isMobileNavbar" :class="{ 'dropdown-after' : menuOpen }">
		<ul class="navlist">
			<li class="navlistitem hover-underline-animation">
				<a href="#">Product</a>
			</li>
			<li class="navlistitem hover-underline-animation">
				<a href="#">Strategies</a>
			</li>
			<li class="navlistitem hover-underline-animation">
				<a href="#">Roadmap</a>
			</li>
			<li class="navlistitem hover-underline-animation">
				<a href="#">About</a>
			</li>
			<li class="navlistitem hover-underline-animation">
				<a href="#">Contact</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		menuOpen: Boolean,
	},
	data() {
		return {
			menuOpen: false
		}
	},
	methods: {
	}
};
</script>

<style lang="scss" >
.navbar {
	background: #ffffff;
	box-shadow: 0px 5px 37px rgba(0, 0, 0, 0.08);
	border-radius: 15px 15px 15px 50px;
	margin: 40px 100px;
	z-index: 1;

	.logo {
		padding: 24px;
	}

	.right-menu {
		float: right;
		height: 100%;
        line-height: 108px;
        padding-right: 24px;

        .navs {
            display: inline-block;
			margin-right: 20px;

            a {
                display: inline-block;
                height: 100%;
                margin: 0 20px;
				font-size: 16px;
				font-weight: 400;

                &:hover {
                    color: #1890ff;
                }
            }
        }
	}
	.input-button {
		width: 158px;
		height: 50px;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
		line-height: 20px;
		color: #ffffff;
		background-color: #1890FF;
		border: 2px solid #1890FF;
		border-radius: 7px 7px 7px 35px;
		box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);
		cursor: pointer;
	}
}
.mobileNavbar {
	background: #ffffff;
	box-shadow: 0px 5px 37px rgba(0, 0, 0, 0.08);
	border-radius: 15px 15px 15px 50px;
	margin: 20px 20px;
	display: flex;
	justify-content: space-between;
	z-index: 1;

	.navbar-wrapper {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		.d-inline {
			display: inline !important;
		}
	}
	.logo {
		padding: 24px;
	}

	.right-menu {
		float: right;
		height: 100%;
        line-height: 108px;
        padding-right: 24px;

        .navs {
            display: inline-block;
			margin-right: 20px;

            a {
                display: inline-block;
                height: 100%;
                margin: 0 20px;
				font-size: 16px;
				font-weight: 400;

                &:hover {
                    color: #1890ff;
                }
            }
        }
	}

	.bg-blue-bright {
		background-color: blue;
	}

	.hamburger {
		height: 16px;
		width: 10%;
		margin: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		&:hover {
			cursor: pointer;
		}
  
		&__item {
			height: 3px;
			background: black;
    
			&--first {
				width: 18px;
			}
		
			&--middle {
				width: 14px;
			}
			
			&--last {
				width: 10px;
			}
		}
	}
	.right-menu {
		line-height: 80px;
		.input-button {
			width: 110px;
			height: 40px;
			padding: 10px;
			font-size: 12px;
			font-weight: 200;
			line-height: 20px;
			color: #ffffff;
			background-color: #1890FF;
			border: 2px solid #1890FF;
			border-radius: 7px 7px 7px 35px;
			box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);
			cursor: pointer;
		}	
	}	
}
@media screen and (min-width: 1050px)
{
	.navbar {
		margin: 40px 20px; 
	}
	.isMobileNavbar {
		display: none;
	}
}
@media screen and (max-width: 1050px)
{	.smaller {
		display: none;
	}
	.isDesktopNavbar {
		display: none;
	}
	.dropdown {
		margin-top: -20px;
		height: 0px;
		background-color: rgb(255, 255, 255);
		transition: height 0.2s ease;
		display: flex;
		align-items: center;
		overflow: hidden;
	}
	.dropdown-after {
		height: calc(50vh - 50px);
		transition: height 0.2s ease;
	}
	.navlist {
		list-style: none;
	}
	.navlistitem {
		text-transform: uppercase;
		padding: 20px;
	}
	.navlistitem a {
		color:  #1890FF;
	}
	.hover-underline-animation {
		position: relative;
		color: #0087ca;
	}
	.hover-underline-animation:after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #0087ca;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
		transition: transform 0.25s ease-out;
	}
	.hover-underline-animation:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
}
@media screen and (max-width: 768px) {
	.bigger {
		display: none;
	}
	.smaller {
		display: block;
	}
}
</style>


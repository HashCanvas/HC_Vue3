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
		<div class="hamburger">
			<div class="hamburger__item hamburger__item--first"></div>
			<div class="hamburger__item hamburger__item--middle"></div>
			<div class="hamburger__item hamburger__item--last"></div>
		</div>
		<router-link to="#">
		    <img class="logo" src="../../assets/logo_light2.svg" />
        </router-link>

		<div class="right-menu">
			<div class="navs">
				
			</div>
			<button class="input-button">Join Now</button>
		</div>
	</div>
</template>

<script setup lang="ts">
//import LangSelect from "@/components/LangSelect/index.vue";

import { ElMessage } from 'element-plus'


import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'

const settings = computed(() => {
  return appStore.settings
})

const opened = computed(() => {
  return appStore.sidebar.opened
})
const appStore = useAppStore()
const toggleSideBar = () => {
  appStore.M_toggleSideBar()
}

const router = useRouter()
const route = useRoute()
const loginOut = () => {
  const userStore = useUserStore()
  userStore.logout().then(() => {
    ElMessage({ message: 'Sign out and sign in successfully', type: 'success' })
    router.push(`/login?redirect=/`)
  })
}

/* export default class extends Vue {
	private activeName = "directly";
	private inputData =
		"https://github.com/Armour/vue-typescript-admin-template";

	login() {
		this.$auth.loginWithRedirect({});
	}

	// Log the user out
	logout1() {
		this.$auth.logout({
			returnTo: window.location.origin,
		});
	}

	data() {
		drawer: null;
		isXs: false;
		items: [
			["mdi-home-outline", "Home", "#hero"],
			["mdi-information-outline", "Sobre", "#features"],
			["mdi-download-box-outline", "Download", "#download"],
			["mdi-currency-usd", "Preços", "#pricing"],
			["mdi-email-outline", "Contatos", "#contact"]
		];
	}

	private myBackToTopStyle = {
		right: "50px",
		bottom: "50px",
		width: "40px",
		height: "40px",
		"border-radius": "4px",
		"line-height": "45px", // Please keep consistent with height to make it center vertically
		background: "#e7eaf1",
	};
	get sidebar() {
		return AppModule.sidebar;
	}

	get device() {
		return AppModule.device.toString();
	}

	get avatar() {
		return UserModule.avatar;
	}

	private toggleSideBar() {
		AppModule.ToggleSideBar(false);
	}

	private async logout() {
		await UserModule.LogOut();
		this.$router
			.push(`/login?redirect=${this.$route.fullPath}`)
			.catch((err) => {
				console.warn(err);
			});
	}
}*/
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
			width: 120px;
			height: 40px;
			padding: 10px;
			font-size: 16px;
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
{
	.isDesktopNavbar {
		display: none;
	}
	
}
</style>


<template>
	<div class="navbar">
        <router-link to="#">
		    <img class="logo" src="../../assets/logo_light.svg" />
        </router-link>

		<div class="right-menu">
			<div class="navs">
				<router-link to="#">
					Product
				</router-link>

                <router-link to="#">
					Strategies
				</router-link>

                <router-link to="#">
					Roadmap
				</router-link>

                <router-link to="#">
					About
				</router-link>

                <router-link to="#">
					Contact
				</router-link>
			</div>

			<!-- <hc-button ori="left">Join Now</hc-button> -->
            <!-- <el-button @click="onJoin">Join Now</el-button> -->
			<h-c-button ori="left" type="primary">Join Now</h-c-button>
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

                &:hover {
                    color: #1890ff;
                }
            }
        }
	}
}
</style>


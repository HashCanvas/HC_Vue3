<template>
	<div class="bg-gray-200 phil-white-button">
    <NavigationBar />
    <HeroSection />
    <ExchangeSection />
    <StopAlertSection />

    <AlertSubscriptions />

    <NewsletterSection />
    <FooterSection />
    <!--
      <StrategySection />
    <AlertSubscriptions />
    <NewsletterSection />
        <SaveHourSection />

      -->
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'
import NavigationBar from "./../../components/LandingPages/NavigationBar.vue"
import HeroSection from '../../components/LandingPages/HeroSection.vue'
import ExchangeSection from '../../components/LandingPages/ExchangeSection.vue'
import NewsletterSection from '../../components/LandingPages/NewsletterSection.vue'
import AlertSubscriptions from '../../components/LandingPages/AlertSubscriptions.vue'
//import SaveHourSection from '../../components/LandingPages/SaveHourSection.vue'
import StopAlertSection from '../../components/LandingPages/StopAlertSection.vue'
import FooterSection from '../../components/LandingPages/FooterSection.vue'
import { DeviceType, AppModule } from "@/store/modules/app";



const userStore = useUserStore()
const username = computed(() => {
  return userStore.username
})
const showObj = ref(GLOBAL_VAR)
// eslint-disable-next-line no-undef
const showObjString = ref(GLOBAL_STRING)

</script>

<style lang="scss" scoped>
body {
	font-family: "Poppins";
}
.desktop-container {
	width: 100%;
	max-width: 950px;
	margin-right: auto;
	margin-left: auto;
}
.mobile .desktop-container {
	width: 100%;
}
.phil-white-button {
	@apply px-6 py-3 bg-white text-green-600 rounded-full font-bold hover:bg-gray-100 hover:shadow-md;
}

.section-title {
	text-align: center;
	font-size: 55px;
	line-height: 70px;
	color: #304156;
	margin: 0;
}

</style>
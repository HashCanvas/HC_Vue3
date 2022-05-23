<template>
	<div class="bg-gray-200 phil-white-button">
    <NavigationBar />
    <HeroSection />
    <SaveHourSection />
    <GuideSection />
    <ExchangeSection />
    <StrategySection />
    <NewsletterSection />
    <StopAlertSection />
    <SymbolTradedSection />
    <ContactSection />
    <FooterSection @showModal="showM($event)" />

    <Modal v-show="isVisibleContact" @close="closeModal">
      <template v-slot:header>
        <b>Contact Us</b>
      </template>
      <template v-slot:body>
        <input
            placeholder="Name"
            v-model="name"
            class="input-card" />
        <input
            placeholder="Email"
            v-model="email"
            class="input-card" />
        <textarea 
            placeholder="Message" v-model="message" class="input-card" rows="4">Message</textarea>
      </template>
      <template v-slot:footer>
        <button class="input-button" @click="showSuccess">Send Message</button>
      </template>
    </Modal>

    <!-- <Modal v-show="isshowSuccess" @close="closeModal">
      <template v-slot:header>
      </template>
      <template v-slot:body>
        <img class="image" src="../../assets/img/landing-page/modal/success.png" />
        <h3 class="header">Success</h3>
        <p class="text">Thank you for your message<br />
        We'll get back to you as soon as we can</p>
      </template>
      <template v-slot:footer>
        <button class="input-button">Understood</button>
      </template>
    </Modal> -->

    <!-- <Modal v-show="isshowStrategy" @close="closeModal">
      <template v-slot:header>
        <b>Strategy EMA/MA</b>
      </template>
      <template v-slot:body>
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
        <input
            placeholder="input Field"
            v-model="title"
            class="input-field" />
      </template>
    </Modal> -->
  </div>
</template>

<script>


import NavigationBar from "./../../components/LandingPages/NavigationBar.vue"
import HeroSection from '../../components/LandingPages/HeroSection.vue'
import SaveHourSection from '../../components/LandingPages/SaveHourSection.vue'
import GuideSection from '../../components/LandingPages/GuideSection.vue'
import ExchangeSection from '../../components/LandingPages/ExchangeSection.vue'
import StrategySection from '../../components/LandingPages/StrategySection.vue'
import NewsletterSection from '../../components/LandingPages/NewsletterSection.vue'
import AlertSubscriptions from '../../components/LandingPages/AlertSubscriptions.vue'
import StopAlertSection from '../../components/LandingPages/StopAlertSection.vue'
import SymbolTradedSection from '../../components/LandingPages/SymbolTradedSection.vue'
import FooterSection from '../../components/LandingPages/FooterSection.vue'
import ContactSection from '../../components/LandingPages/ContactSection.vue'

import Modal from '../../components/LandingPages/Modals/Modal.vue'

export default  {
    components: {
      NavigationBar, HeroSection, SaveHourSection, GuideSection, ExchangeSection,
      StrategySection, NewsletterSection, AlertSubscriptions, StopAlertSection,
      SymbolTradedSection, FooterSection, ContactSection, Modal
    },
    data() {
        return {
          isVisibleContact: false,
          isOpen: false,
          isshowSuccess: false,
          isshowStrategy: false,
        };
    },
    computed: {
    },
    methods: {
      showM() {
        this.isVisibleContact = true;
        console.log('OKKKKKKKKKKKK' + this.isVisibleContact)
      },
      closeModal() {
        this.isVisibleContact = false;
      },
      // showSuccess() {
      //   this.isshowSuccess = true;
      // },
      // showStrategy() {
      //   this.isshowStrategy = true;
      // }
    }
}

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
.input-card {
    display: block;
    width: 70%;
    margin: auto;
    font-size: 16px;
    padding: 20px 20px 20px 0;
    margin-bottom: 40px;
    background-color: transparent;
    border: transparent;
    border-bottom: 1px solid #97A8BE;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }

    &:focus {
        opacity:1 ;
        outline: none;
    }
  }

  ::placeholder {
      color: #666666;
  }
  .input-button {
    width: 158px;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    margin: auto;
    color: #FFFFFF;
    background-color: #1890FF;
    border: 2px solid #1890FF;
    border-radius: 7px 7px 7px 35px;
    box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);
    cursor: pointer;
	}
  .header {
    color: #1890FF;
    font-size: 55px;
    font-weight: 600;
    text-align: center;
  }
  .text {
    color: #666666;
    line-height: 30px;
    text-align: center;
  }
  .image {
    width: 160px;
    margin-left: 40%;
  }
</style>
<template>
	<div class="bg-gray-200 phil-white-button" >
    <NavigationBar />
    <HeroSection />
    <SaveHourSection />
    <GuideSection />
    <ExchangeSection />
    <StrategySection @showStrategy="showS()" @showDetailStrategy="showD()" />
    <NewsletterSection />
    <StopAlertSection />
    <SymbolTradedSection />
    <ContactSection />
    <FooterSection @showModal="showM($event)" />

    // contact us
    <Modal v-show="isVisibleContact" @close="closeContactModal">
      <template v-slot:header>
        <b>Contact Us</b>
      </template>
      <template v-slot:body>
        <input
            placeholder="Name"
            class="input-card" />
        <input
            placeholder="Preffered Contact"
            class="input-card" />
        <textarea 
            placeholder="Message" class="input-card" rows="4">Message</textarea>
      </template>
      <template v-slot:footer>
        <button class="input-button bottom-button" @click="showSuccess">Send Message</button>
      </template>
    </Modal>

    <Modal v-show="isVisibleSuccess" @close="closeSuccessModal">
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
    </Modal>

    <Modal v-show="isVisibleStrategy" @close="closeStrategyModal">
      <template v-slot:header>
        <b>Strategy EMA/MA</b>
      </template>
      <template v-slot:body>
        <input
            placeholder="input Field"
            class="input-field" />
        <input
            placeholder="input Field"
            class="input-field" />
        <input
            placeholder="input Field"
            class="input-field" />
        <input
            placeholder="input Field"
            class="input-field" />
        <input
            placeholder="input Field"
            class="input-field" />
        <input
            placeholder="input Field"
            class="input-field" />
        <h3 class="modal-title">Symbols</h3>
          <smart-tagz
            autosuggest
            editable
            inputPlaceholder="Symbols ..."
            :sources="sources"
            :allowPaste="{delimiter: ','}"
            :allowDuplicates="false"
            :maxTags="20"
            :defaultTags="['Bitmex: All', 'Bitfinex: XBTUSD', 'Binance: BTCUSDT', 'Binance: Top 10']"
            :theme="{
              primary: 'white',
              background: '#bdbdbd',
              tagTextColor: '#666666',
            }"
          />
          <h3 class="modal-title">Timeframes</h3>
          <smart-tagz
            autosuggest
            editable
            inputPlaceholder="Timeframes ..."
            :sources="sources"
            :allowPaste="{delimiter: ','}"
            :allowDuplicates="false"
            :maxTags="20"
            :defaultTags="['Monthly', 'Weekly', '3 Day', 'Daily', '12 Hour', '1 Min']"
            :theme="{
              primary: 'white',
              background: '#bdbdbd',
              tagTextColor: '#666666',
              borderRaius: '20px',
            }"
          />
      </template>
      <template v-slot:footer>
        <button class="primary-button">Cancel</button>
        <button class="input-button" @click="showMessagingAlert">Subscribe</button>
      </template>
    </Modal>

    <Modal v-show="isVisibleDetail" @close="closeDetailModal">
      <template v-slot:header>
        <b>Strategy Name</b>
      </template>
      <template v-slot:body>
        <img class="strategy-image" src="../../assets/img/landing-page/modal/graph.png" />
        <h4 class="modal-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h4>
      </template>
      <template v-slot:footer>
        <button class="primary-button">Contact</button>
        <button class="input-button">Subscribe</button>
      </template>
    </Modal>
    // Select alert messaging method
    <Modal v-show="isVisibleMessageAlert" @close="closeMessageModal">
      <template v-slot:header>
        <b>Select alert messaging method</b>
      </template>
      <template v-slot:body>
        <div class="message-wrapper">
          <div v-for="item in messages" :key="item.id" class="message-item">
              <img class="message-image" :src=item.imageURL  @click="showLoginSignupModal(item)" />
              <p class="message-title">{{ item.title }}</p>
				  </div>
        </div>
      </template>
      <template v-slot:footer>
        <button class="primary-button" @click="showBack">Back</button>
        <button class="input-button" @click="showCheck">Subscribe</button>
      </template>
    </Modal>

    //Login and Signup Modal
    <Modal v-show="isVisibleLoginSignupModal" @close="closeLoginSignupModal">
      <template v-slot:header></template>
      <template v-slot:body>
        <div style="display: flex; flex-wrap: wrap;">
          <div class="login-part">
            <h3 class="modal-title ">Log In</h3>
            <input
              placeholder="Username*"
              class="input-card" style="width: 100%!important;" />

              <div class="is-expanded">
                <input v-if="showLoginPassword" type="text"
                  placeholder="Password" v-model="login_password"
                  class="input-card" style="width: 100%!important;" />
                <input v-else type="password"
                  placeholder="Password" v-model="login_password"
                  class="input-card" style="width: 100%!important;" />
                <button class="eye-button" @click="toggleLoginShow">
                  <span class="icon is-small is-right">
                    <i class="fa" :class="{ 'fa-eye-slash': showLoginPassword, 'fa-eye': !showLoginPassword }"></i>
                  </span>
                </button>
              </div>
            
            <button class="input-button" @click="showMessaging">Log in</button>
          </div>

          <div class="signup-part">
            <h3 class="modal-title">Sign Up</h3>
            <input
              placeholder="Username*"
              class="input-card" style="width: 100%!important;" />
            <input
              placeholder="Email*"
              class="input-card" style="width: 100%!important;" />
            <div class="is-expanded">
                <input v-if="showSignupPassword" type="text"
                  placeholder="Password" v-model="signup_password"
                  class="input-card" style="width: 100%!important;" />
                <input v-else type="password"
                  placeholder="Password" v-model="signup_password"
                  class="input-card" style="width: 100%!important;" />
                <button class="eye-button" @click="toggleSignupShow">
                  <span class="icon is-small is-right">
                    <i class="fa" :class="{ 'fa-eye-slash': showSignupPassword, 'fa-eye': !showSignupPassword }"></i>
                  </span>
                </button>
            </div>
            <button class="input-button" @click="showMessaging">Sign up</button>
          </div>
        </div>
          
      </template>
      <template v-slot:footer>
      </template>
    </Modal>

    // Messaging
    <Modal v-show="isVisibleMessaging" @close="closeMessagingModal">
      <template v-slot:header>
        <b>Telegram Messaging</b>
      </template>
      <template v-slot:body>
        <div class="message-wrapper">
          <div class="image-group">
              <img src="src/assets/img/landing-page/modal/telegram.png" class="object-left" />
              <img src="src/assets/img/landing-page/modal/arrow.png" class="main-image" />
              <img src="src/assets/img/landing-page/modal/social.png" class="object-right" />
          </div>
          <p class="check-modal-subtitle">Login to use your Telegram account with core.telegram.org and SampleBot.</p>
          <p class="check-modal-body">Please enter your Phone number in the internation format and we will send a confirmation message to yoru account via {{ this.messageAlertName }}.</p>
          <select v-model="selected" class="input-select">
            <option v-for="option in options" :value="option.id" :key="option.id">
              {{ option.name}}
            </option>
          </select>
          <input
            placeholder="" value="+91"
            class="input-card" />
        </div>
        
        
      </template>
      <template v-slot:footer>
        <button class="input-button bottom-button">Confirm</button>
      </template>
    </Modal>

    // success Message
     <Modal v-show="isVisibleMessageSuccess" @close="closeSuccessMessageModal">
      <template v-slot:header>
        
      </template>
      <template v-slot:body>
        <img style=" display: block;
  margin-left: auto;
  margin-right: auto; margin-bottom: 40px;" src="src/assets/img/landing-page/modal/check.png" />
        <h3 class="check-modal-title">Success</h3>
        <p class="check-modal-subtitle">You're all done kick but and relax until the alerts come</p>
        <p class="check-modal-body">Good luck on your trading with this alert</p>
        <input
          placeholder="Email*"
          class="input-card" />
      </template>
      <template v-slot:footer>
        <button class="primary-button bottom-button">Sign up</button>
        <button class="input-button bottom-button">Cancel</button>
      </template>
    </Modal>
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

import { SmartTagz } from "smart-tagz"
import "smart-tagz/dist/smart-tagz.css"

export default  {
    components: {
      SmartTagz, NavigationBar, HeroSection, SaveHourSection, GuideSection, ExchangeSection,
      StrategySection, NewsletterSection, AlertSubscriptions, StopAlertSection,
      SymbolTradedSection, FooterSection, ContactSection, Modal, 
    },
    props: {
		  // is readonly
      readOnly: {
        type: Boolean,
        default: false,
      },
      // custom styles here
      theme: {
        default: () => ({
          primary: "red",
          background: "#eaf1f8",
          tagTextColor: "#fff",
        }),
      },
    },
    data() {
        return {
          value: null,
          selected: 1,
          options: [
            { name: 'India', id: 1 },
            { name: 'United', id: 2 },
            { name: 'Kingdom', id: 3 }, 
            { name: 'United State', id: 4 },
            { name: 'Germany', id: 5 },
            { name: 'Japan', id:6 }
          ],
          // Modal state
          isVisibleContact: false,
          isOpen: false,
          isVisibleSuccess: false,
          isVisibleStrategy: false,
          isVisibleDetail: false,
          isVisibleMessageAlert: false,
          isVisibleMessageSuccess: false,
          isVisibleLoginSignupModal: false,
          isVisibleMessaging: false,
          messageAlertNumber: 0,
          messageAlertName: 'Line',
          showLoginPassword: false,
          showSignupPassword: false,
          login_password: null,
          signup_password: null,
          messages: [
                {
                    id: 0,
                    imageURL: "src/assets/img/landing-page/modal/line.png",
                    title: "Line",
                },
                {
                    id: 1,
                    imageURL: "src/assets/img/landing-page/modal/email.png",
                    title: "Email",
                },
                {
                    id: 2,
                    imageURL: "src/assets/img/landing-page/modal/messenger.png",
                    title: "Messenger"
                },
                {
                    id: 3,
                    imageURL: "src/assets/img/landing-page/modal/telegram.png",
                    title: "Telegram",
                },
                {
                    id: 4,
                    imageURL: "src/assets/img/landing-page/modal/browser.png",
                    title: "Browser",
                },
                {
                    id: 5,
                    imageURL: "src/assets/img/landing-page/modal/app.png",
                    title: "App",
                },
                {
                    id: 6,
                    imageURL: "src/assets/img/landing-page/modal/viber.png",
                    title: "Viber",
                },
                {
                    id: 7,
                    imageURL: "src/assets/img/landing-page/modal/wechat.png",
                    title: "We chat",
                },
            ],
            sources: [
            ]
        };
    },
    computed: {
      buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show";
      }
    },
    methods: {
      showM() {
        this.isVisibleContact = true;
      },
      closeContactModal() {
        this.isVisibleContact = false;
      },
      closeSuccessModal() {
        this.isVisibleSuccess = false;
      },
      closeStrategyModal() {
        this.isVisibleStrategy = false;
      },
      closeDetailModal() {
        this.isVisibleDetail = false;
      },
      closeMessageModal() {
        this.isVisibleMessageAlert = false;
      },
      closeSuccessMessageModal() {
        this.isVisibleMessageSuccess = false;
      },
      closeLoginSignupModal() {
        this.isVisibleLoginSignupModal = false;
      },
      closeMessagingModal() {
        this.isVisibleMessaging = false;
      },
      showSuccess() {
        this.isVisibleContact = false;
        this.isVisibleSuccess = true;
      },
      showMessagingAlert() {
        this.isVisibleStrategy = false;
        this.isVisibleMessageAlert = true;
      },
      showS() {
        this.isVisibleStrategy = true;
      },
      showD() {
        this.isVisibleDetail = true;
      },
      showCheck() {
        this.isVisibleMessageAlert = false;
        this.isVisibleMessageSuccess = true;
      },
      showBack() {
        this.isVisibleMessageAlert = false;
        this.isVisibleStrategy = true;
      },
      showLoginSignupModal(item) {
        this.isVisibleMessageAlert = false;
        this.isVisibleLoginSignupModal = true;
        this.messageAlertID = item.id;
        this.messageAlertName = item.name;
      },
      showMessaging() {
        this.isVisibleLoginSignupModal = false;
        this.isVisibleMessaging = true;
      },
      toggleLoginShow() {
        this.showLoginPassword = !this.showLoginPassword;
      },
      toggleSignupShow() {
        this.showSignupPassword = !this.showSignupPassword;
      }
    }
}

const showObj = ref(GLOBAL_VAR)
// eslint-disable-next-line no-undef
const showObjString = ref(GLOBAL_STRING)

</script>

<style lang="scss" scoped>
.desktop-container {
	width: 100%;
	max-width: 950px;
	margin-right: auto;
	margin-left: auto;
}
.mobile .desktop-container {
	width: 100%;
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

  .input-select {
    color: #666666;
    width: 70%;
    margin: auto;
    font-size: 16px;
    padding: 20px 20px 20px 0;
    border: none;
    border-bottom: 1px solid #97A8BE;
  }

  .input-button {
    float: right;
    width: 150px;
    height: 45px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    color: #FFFFFF;
    background-color: #1890FF;
    border: 2px solid #1890FF;
    border-radius: 7px 7px 7px 35px;
    box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);
    cursor: pointer;
	}
  .primary-button {
    float: right;
    width: 150px;
    height: 45px;
    padding: 10px;
    margin-right: 16px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    color:#1890FF;
    background-color:  #FFFFFF;
    border: 2px solid #1890FF;
    border-radius: 7px 7px 7px 35px;
    box-shadow: 0px 4px 20px rgba(24, 144, 255, 0.35);
    cursor: pointer;
  }
  .bottom-button {
    margin: auto;
  }
  .is-expanded {
    position: relative;
  }
  .eye-button {
        position: absolute;
        top: 18px;
        right: 0;
        background-color: #fff;
        border: none;
        color: #363636;
        cursor: pointer;
        justify-content: center;
        padding-bottom: calc(0.5em - 1px);
        padding-left: 1em;
        padding-right: 1em;
        padding-top: calc(0.5em - 1px);
        text-align: center;
        white-space: nowrap;
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
  .strategy-image {
    width: 100%;
  }
  .input-field {
    width: 45%;
    margin: 0 10px;
    font-size: 14px;
    padding: 15px 15px 15px 0;
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
  .modal-title {
    color: #1890FF;
    margin-top: 16px;
    font-size: 20px;
  }
  .modal-body {
    color: #304156;
    line-height: 30px;
    font-size: 16px;
    font-weight: 400;
  }
  
  .check-modal-title {
    color: #1890FF;
    text-align: center;
    font-weight: 600;
    font-size: 55px;
  }
  .check-modal-subtitle {
    color: #666666;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
  }
  .check-modal-body {
    color: #304156;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
  }

  // Smart Tags
  .tags-main {
    background: #fff!important;
  }
  // Combine Images
  .object-left {
    position: absolute;
    left: -20px;
    width: 56px;
  }

  .main-image {
    position: absolute;
    left: 44px;
    top: 20px;
  }

  .object-right {
    position: absolute;
    left: 126px;
  }

  .image-group {
    position: relative;
    height: 50px;
    width: 160px;
    margin: auto;
  }
  /*************************************/
  /*******      Responsive       *******/
  /*************************************/
  @media screen and (min-width: 960px) {
    // Message Alert
    .message-image {
      display: block;
      width:90px;
      height:90px;
      margin-left: auto;
      margin-right: auto;
    }
    .message-title {
      color: #666666;
      font-size: 18px;
      text-align: center;
    }
    .message-item {
      width: 25%;
      border-right: 1px solid #DDDDDD;
      border-bottom: 1px solid #DDDDDD;
      padding: 10px;
      cursor: pointer;
    }
    .message-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
      margin-top: 0;
    }
    .message-wrapper>.message-item:nth-child(4), .message-wrapper>.message-item:nth-child(8) {
      border-right: none;
    }
    .message-wrapper>.message-item:nth-child(5), .message-wrapper>.message-item:nth-child(6), .message-wrapper>.message-item:nth-child(7), .message-wrapper>.message-item:nth-child(8) {
      border-bottom: none;
    }
     // Login & Signup Modal
    .signup-part {
      width: 50%;
      padding: 30px;
    }
    .login-part {
      width: 50%;
      padding: 30px;
      border-right: 1px solid #97A8BE;
    }

    .control {
      box-sizing: border-box;
      clear: both;
      position: relative;
      text-align: inherit;
    }
  }
 @media screen and ( max-width: 960px)
  {
    .input-field {
      width: 100%;
    }
    // Message Alert
    .message-image {
      display: block;
      width:90px;
      height:90px;
      margin-left: auto;
      margin-right: auto;
    }
    .message-title {
      color: #666666;
      font-size: 18px;
      text-align: center;
    }
    .message-item {
      width: 50%;
      border-right: 1px solid #DDDDDD;
      border-bottom: 1px solid #DDDDDD;
      padding: 10px;
      cursor: pointer;
    }
    .message-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
      margin-top: 0;
    }
    .message-wrapper>.message-item:nth-child(2), .message-wrapper>.message-item:nth-child(4), .message-wrapper>.message-item:nth-child(6), .message-wrapper>.message-item:nth-child(8) {
      border-right: none;
    }
    .message-wrapper>.message-item:nth-child(7), .message-wrapper>.message-item:nth-child(8) {
      border-bottom: none;
    }
     // Login & Signup Modal
    .signup-part {
      width: 100%;
      padding: 30px;
    }
    .login-part {
      width: 100%;
      padding: 30px;
    }
    // Messaging modal
    .message-wrapper {
      width: 100%;
      margin: 0;
    }
    .input-select {
      width: 100%;
    }
    .input-card {
      width: 100%;
    }

    .check-modal-body {
      font-size: 16px;
      line-height: 40px;
      font-weight: 500;
      text-align: center;
      margin-top: 20px;
    }
  }
</style>

<template>
    <section id="contact-section">
        <div class="desktop-container">
                <contact-card />
                <div class="img">
                    <img class="logo" src="../../assets/img/landing-page/contact/sm_logo.png" />
                </div>
        </div>
    </section>
</template>

<script lang="ts">

import ContactCard from './ContactCard.vue'

export default {
    name: 'ContactSection',
    components: { ContactCard },
}
</script>

<style lang="scss">
    #contact-section {
        background-image: url('/src/assets/img/landing-page/contact/bg_logo.png');
        background-position: center center;
        background-repeat: no-repeat;
        margin-bottom: -240px;

        .desktop-container {
            width: 70%;
            margin: auto;
            display: flex;
            position: relative;

            .img {
                position: absolute;
                margin: 0;
                top: 50%;
                left: 50%;
                transform: transition(-50%, -50%);
            }
        }

    }
    @media screen and (max-width: 1620px) {
        #contact-section {
            .img {
                display: none;
            }
        }
    }
</style>
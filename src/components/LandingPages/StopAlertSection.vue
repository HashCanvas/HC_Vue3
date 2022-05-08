<template>
    <section id="sa-section">
        <div class="desktop-container">
            <h1 class="section-title" style="color: #1890FF">We want stop at alerts</h1>
            <p class="sub-title text-center">Join us in our jouney to build the best advice and trading platforms in the industry</p>

            <div class="sa-container">
                <div class="text">Check out future road map coming out</div>
                <div class="img">
                    <img src="../../assets/img/landing-page/sal/1.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default{
}
</script>

<style lang="scss">
#sa-section {
    padding-top: 200px;

    .sub-title {
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        margin-top: 0;
    }

    .sa-container {
        display: flex;
        justify-content: space-between;

        .text {
            width: 40%;
            font-size: 50px;
            line-height: 75px;
            font-weight: 700;
            color: #304156;
        }

        .img {
            width: 55%;

            img {
                width: 100%;
            }
        }
    }
}

.mobile #sa-section .sa-container {
    flex-direction: column;

    .text {
        width: 100%;
        order: 2;
        font-size: 30px;
        text-align: center;
    }

    .img {
        width: 100%;
        order: 1;
        text-align: center;

        img {
            max-width: 350px;
        }
    }
}
</style>
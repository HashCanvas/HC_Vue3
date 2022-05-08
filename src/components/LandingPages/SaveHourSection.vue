<template>
    <section id="save-hour-section">
        <div class="desktop-container">
            <div class="header-container">
                <h1>Save hours looking  at charts</h1>

                <div class="sub-title">
                    With our free alerts on thousands of trading pairs, get in the action right when the action is happening and skip the sideways markets
                </div>
            </div>

            <div class="m-charts">
                <img v-if="isMobile()" src="../../assets/img/landing-page/shl/main2.svg" />
                <img v-else src="../../assets/img/landing-page/shl/main.svg" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { AppModule, DeviceType } from '@/store/modules/app'
export default {
    name: 'SaveHourSection',
    methods: {
        isMobile() {
            return AppModule.device === DeviceType.Mobile
        }
    }
}
</script>

<style lang="scss">
#save-hour-section {
    background: #304156;
    padding-top: 100px;

    .header-container {
        padding-right: 55%;

        .sub-title {
            color: #fff;
            font-size: 18px;
            line-height: 30px;
        }

        h1 {
            color: #1890FF;
            font-size: 55px;
            line-height: 70px;
            margin: 0;
        }
    }

    .m-charts {
        // position: absolute;

        img {
            width: 100%;
            margin-top: -100px;
        }
    }
}

.mobile #save-hour-section {
    .header-container {
        padding: 50px;
    }

    .m-charts {
        text-align: center;
        img {
            width: 350px;
            margin-top: 10px;
        }
    }
}
</style>
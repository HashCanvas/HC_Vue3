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
                <img class="isDesktop" src="../../assets/img/landing-page/shl/main.svg" />
                <img class="isMobile" src="../../assets/img/landing-page/shl/main2.svg" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
    name: 'SaveHourSection',
    methods: {
    }
}
</script>

<style lang="scss">
#save-hour-section {
    position: relative;
    background-image: url('/src/assets/img/landing-page/shl/bg_shl.png');
    background-repeat: no-repeat;
	background-position: left bottom;
    background-size: cover;
    padding-top: 300px;
    padding-bottom: 300px;
    margin-top: -50px;
    z-index: 2;

    .header-container {
        position: absolute;
        padding-top: 50px;
        padding-right: 60%;

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
        width: 80%;
        margin: auto;
        img {
            width: 100%;
            margin-top: -100px;
        }
    }
}

@media screen and (min-width: 761px) {
    .isMobile {
        display: none;
    }
    #save-hour-section {
        position: relative;

        .header-container {
            top: 100px;
            left: 120px;
            padding-top: 50px;
            padding-right: 40%;

            .sub-title {
                color: #fff;
                font-size: 20px;
                line-height: 25px;
            }

            h1 {
                color: #1890FF;
                font-size: 40px;
                line-height: 50px;
                margin: 0;
            }
        }
    }
}
@media screen and (min-width: 900px) {
    #save-hour-section {
        position: relative;

        .header-container {
            top: 120px;
            left: 140px;
            padding-top: 50px;
            padding-right: 40%;

            .sub-title {
                color: #fff;
                font-size: 20px;
                line-height: 25px;
            }

            h1 {
                color: #1890FF;
                font-size: 38px;
                line-height: 45px;
                margin: 0;
            }
        }
    }
}

@media screen and (min-width: 1192px) {
    #save-hour-section {
        .header-container {
            position: absolute;
            top: 160px;
            left: 200px;
            padding-top: 50px;
            padding-right: 52%;

            .sub-title {
                font-size: 20px;
                line-height: 27px;
            }

            h1 {
                color: #1890FF;
                font-size: 50px;
                line-height: 50px;
                margin: 0;
            }
        }
    }
}

@media screen and (min-width: 1500px) {
    #save-hour-section {

        .header-container {
            top: 140px;
            left: 250px;
            padding-top: 50px;
            padding-right: 55%;

            .sub-title {
            font-size: 22px;
            line-height: 30px;
        }

        h1 {
            font-size: 55px;
            line-height: 70px;
            margin: 0;
        }
        }
    }
}

@media screen and (min-width: 1700px) {
    #save-hour-section {

        .header-container {
            top: 140px;
            left: 280px;
            padding-top: 50px;
            padding-right: 60%;

            .sub-title {
            font-size: 22px;
            line-height: 30px;
        }

        h1 {
            font-size: 55px;
            line-height: 70px;
            margin: 0;
        }
        }
    }
}
/***********************/
/*     Mobile          */
/***********************/

@media screen and (max-width: 760px) {
    .isMobile {
        display: block;
    }
    .isDesktop {
        display: none;
    }
    #save-hour-section {
        position: static;
        padding-top: 120px;
        margin-top: -60px;

        .header-container {
            position: static;
            padding: 0;
            width: 80%;
            margin: auto;
            
            .sub-title {
                font-size: 22px;
                line-height: 30px;
            }

            h1 {
                font-size: 35px;
                line-height: 70px;
                margin: 0;
            }
        }
        .m-charts img {
            margin-top: 20px;
        }
    }
}
</style>
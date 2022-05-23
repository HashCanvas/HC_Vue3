<template>
    <section id="sa-section">
        <div class="desktop-container isDesktop">
            <h1 class="section-title">We want stop at alerts</h1>
            <p class="sub-title text-center">Join us in our jouney to build the best advice and trading platforms in the industry</p>
            <div class="blue-rectangle"></div>
            <div class="sa-container">
                <div class="text">Check out future road map coming out</div>
                <div class="img">
                    <img src="../../assets/img/landing-page/sal/1.png" />
                    <button class="play_button"><img src="../../assets/img/landing-page/sal/play_btn.png" /></button>
                </div>
            </div>
        </div>
        <div class="isMobile">
            <h1 class="section-title">We want stop at alerts</h1>
            <p class="sub-title text-center">Join us in our jouney to build the best advice and trading platforms in the industry</p>
            <div class="blue-rectangle"></div>
            <div class="sa-container">
                <div class="img">
                    <img src="../../assets/img/landing-page/sal/1.png" />
                    <button class="play_button"><img src="../../assets/img/landing-page/sal/play_btn.png" /></button>
                </div>
            </div>
            <div class="text">Check out future road map coming out</div>
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
    background-image: url('/src/assets/img/landing-page/sal/semi_circle.png'),
    url('/src/assets/img/landing-page/sal/bg_logo.png'),
    url('/src/assets/img/landing-page/sal/lines.png');
    background-position: left center, left center, center center;
    background-size: contain, auto, contain;
    background-repeat: no-repeat;
    padding: 200px 0;
    .desktop-container {
        position: relative;
        height: 50rem;
        .section-title {
            font-weight: 700;
            font-size: 55px;
            line-height: 70px;
            text-align: center;
            color: #1890FF;
        }
        .sub-title {
            text-align: center;
            font-size: 18px;
            line-height: 30px;
            font-weight: 400;
            margin-top: 0;
        }
        .blue-rectangle {
            position: absolute;
            top: 400px;
            right: 0;
            background-color: #1890FF;
            width: 40%;
            height: 500px;
            border-top-left-radius: 40px;
            border-bottom-left-radius: 40px;
        }
        .sa-container {
            position: absolute;
            width: 70%;
            margin: auto;
            display: flex;
            justify-content: space-between;
            margin-top: 120px;
            overflow: hidden;
            .text {
                width: 20%;
                font-size: 40px;
                line-height: 60px;
                font-weight: 700;
                color: #304156;
            }
            .img {
                width: 55%;
                position: relative;
                .play_button {
                    position: absolute;
                    top: 50%;
                    left: -50px;
                    background-color: #fff;
                    transform: translateY(-50%);
                    border-radius: 9999px;
                    border: 1px solid transparent;
                    padding: 0;
                }
            }
        }
        
    }
}
/*************************/
/*      Responsive       */
/*************************/
@media screen and (min-width: 761px) {
    #sa-section {
        padding: 200px 0 0 0;
        .desktop-container {
            position: relative;
            .isMobile {
                display: none;
            }
            .blue-rectangle {
                position: absolute;
                width: 45%;
                height: 400px;
                top: 250px;
                transform: translateY(-24%);
            }
            .sa-container {
                position: absolute;
                width: 80%;
                margin-top: 110px;
                .text {
                    padding: 40px;
                    width: 36%;
                    font-size: 30px;
                    line-height: 50px;
                    font-weight: 700;
                }
                .img {
                    width: 50%;
                    height: 300px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .section-title {
                font-weight: 600;
                font-size: 35px;
                line-height: 50px;
            }
        }
    }
}
@media screen and (min-width: 1192px) {
    #sa-section {
        padding: 200px 0;
        .desktop-container {
            position: relative;
            .blue-rectangle {
                position: absolute;
                width: 40%;
                height: 500px;
                top: 400px;
                transform: translateY(-28%);
            }
            .sa-container {
                position: absolute;
                width: 70%;
                left: 15%;
                margin-top: 160px;
                .text {
                    padding-top: 75px;
                    width: 30%;
                    font-size: 40px;
                    line-height: 60px;
                    font-weight: 700;
                    color: #304156;
                }
                .img {
                    width: 55%;
                    height: 400px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .section-title {
                font-weight: 700;
                font-size: 50px;
                line-height: 70px;
                margin-bottom: 20px;
            }
            .sub-title {
                width: 30%;
                margin: auto;
                font-size: 18px;
                font-weight: 400;
                line-height: 30px;
                font-weight: 400;
            }
        }
        
    }
}
@media screen and (min-width: 1620px) {
    #sa-section {
        padding: 200px 0;
        .desktop-container {
            position: relative;
            .blue-rectangle {
                width: 50%;
                height: 600px;
                transform: translateY(-32%);
            }
            .sa-container {
                position: absolute;
                width: 70%;
                left: 15%;
                margin-top: 150px;
                .text {
                    padding-top: 75px;
                    width: 30%;
                    font-size: 40px;
                    line-height: 60px;
                    font-weight: 700;
                    color: #304156;
                }
                .img {
                    width: 60%;
                    position: relative;
                    margin-right: 0;
                    .play_button {
                        position: absolute;
                        top: 50%;
                        left: -50px;
                        background-color: #fff;
                        transform: translateY(-50%);
                        border-radius: 9999px;
                        border: 1px solid transparent;
                        padding: 0;
                    }
                }
            }
            .section-title {
                font-weight: 700;
                font-size: 55px;
                line-height: 70px;
                margin-bottom: 20px;
            }
            .sub-title {
                font-size: 18px;
                line-height: 30px;
                font-weight: 400;
            }
        }
        
    }
}
/*************************/
/*      Mobile           */
/*************************/
@media screen and (max-width: 760px) {
    #sa-section {
        position: relative;
        height: 800px;
        padding: 50px 0;
        .isDesktop {
            display: none;
        }
        .section-title {
            font-weight: 600;
            font-size: 35px;
            line-height: 70px;
            text-align: center;
            color: #1890FF;
        }
        .sub-title {
            width: 80%;
            margin: auto;
            text-align: center;
            font-size: 18px;
            line-height: 30px;
            font-weight: 400;
            margin-top: 0;
        }
        .blue-rectangle {
            position: absolute;
            right: 0;
            top: 350px;
            background-color: #1890FF;
            width: 70%;
            height: 300px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            transform: translateY(-32%);
        }
        .text {
            position: absolute;
            bottom: 40px;
            margin: auto;
            order: 2;
            font-weight: 700;
            font-size: 30px;
            line-height: 45px;
            text-align: center;
        }
        .sa-container {
            position: absolute;
            width: 100%;
            top: 295px;
            left: 15%;
            margin-top: 0;
            .img {
                position: relative;
                margin-left: 10%;
                width: 60%;
                height: 222px;
                text-align: center;
                z-index: 2;
                & > img {
                    width: 100%;
                    height: 222px;
                }
                .play_button {
                    position: absolute;
                    top: 50%;
                    left: -30px;
                    background-color: #fff;
                    transform: translateY(-50%);
                    border-radius: 9999px;
                    border: 1px solid transparent;
                    padding: 0;
                    img {
                        max-width: 60px;
                    }
                }
            }
        }
    }
}
</style>
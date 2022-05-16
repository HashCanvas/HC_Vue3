<template>
    <section id="guide-section">
        <div class="isDesktop desktop-container">
            <div class="guide-item">
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/1_icon.png" />
                    <p>Set strategies alerts<br/>based on terabytes<br/>of free data</p>
                </div>
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/1.png" />
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-img" style="text-align:right;">
                    <img src="../../assets/img/landing-page/guide/2.png" />
                </div>
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/2_icon.png" />
                    <p>Build on our own<br/>platform</p>
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/3_icon.png" />
                    <p>Deploy any strategies<br/>live on unlimited<br/>trading pairs</p>
                </div>
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/3.png" />
                </div>
            </div>
        </div>
        <div class="isMobile">
            <div class="guide-item">
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/1.png" />
                </div>
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/1_icon.png" />
                    <p>Set strategies alerts<br/>based on terabytes<br/>of free data</p>
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-img" style="text-align:right;">
                    <img src="../../assets/img/landing-page/guide/2.png" />
                </div>
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/2_icon.png" />
                    <p>Build on our own<br/>platform</p>
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/3.png" />
                </div>
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/3_icon.png" />
                    <p>Deploy any strategies<br/>live on unlimited<br/>trading pairs</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: "HeroSection",
	components: {},
	resize() {
		// Handle resize
	},
	data() {
		return {};
	}
}
</script>

<style lang="scss">
#guide-section {
    background-image: url('/src/assets/img/landing-page/guide/circle.png');
    background-position: left top;
    padding-bottom: 20px;
    .guide-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
        .guide-desc {
            padding: 20px 60px;
            width: 45%;
            p {
                font-size: 30px;
                line-height: 40px;
                color: #304156;
                font-weight: 600;
            }
            img {
                width: 80px;
            }
        }
        .guide-img {
            width: 55%;
            img {
                width: 100%;
                max-width: 420px;
            }
        }
    }
    .desktop-container {
        width: 60%;
        margin: auto;
    }
}
/***********************************/
/*       Desktop Responsive        */
/***********************************/
@media screen and (min-width: 761px) {
    .isMobile {
        display: none;
    }
    #guide-section {
        .guide-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            .guide-desc {
                padding: 20px 60px;
                width: 55%;
                p {
                    font-size: 22px;
                    line-height: 30px;
                    color: #304156;
                    font-weight: 600;
                }
                img {
                    width: 50px;
                }
            }
            .guide-img {
                width: 55%;
                img {
                    width: 100%;
                    max-width: 370px;
                }
            }
        }
        .desktop-container {
            width: 80%;
        }
    }
}
@media screen and (min-width: 1192px) {
    #guide-section {
        .guide-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            .guide-desc {
                padding: 20px 60px;
                width: 50%;
                p {
                    font-size: 25px;
                    line-height: 33px;
                    color: #304156;
                    font-weight: 600;
                }
                img {
                    width: 60px;
                }
            }
            .guide-img {
                width: 55%;
                img {
                    width: 100%;
                    max-width: 400px;
                }
            }
        }
        .desktop-container {
            width: 70%;
        }
    }
}
@media screen and (min-width: 1500px) {
    #guide-section {
        background-image: url('/src/assets/img/landing-page/guide/circle.png');
        background-position: left top;
        padding-bottom: 20px;
        .guide-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            .guide-desc {
                padding: 20px 60px;
                width: 45%;
                p {
                    font-size: 30px;
                    line-height: 40px;
                    color: #304156;
                    font-weight: 600;
                }
                img {
                    width: 80px;
                }
            }
            .guide-img {
                width: 55%;
                img {
                    width: 100%;
                    max-width: 420px;
                }
            }
        }
        .desktop-container {
            width: 60%;
        }
    }
}
@media screen and (max-width: 760px) {
    .isMobile {
        display: block;
    }
    .isDesktop {
        display: none;
    }
    #guide-section {
        background-image: url('/src/assets/img/landing-page/guide/circle.png');
        background-position: left top;
        padding-bottom: 20px;
        .guide-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 0;
            .guide-desc {
                padding: 20px 60px;
                width: 100%;
                p {
                    font-size: 26px;
                    line-height: 32px;
                    color: #304156;
                    font-weight: 600;
                    text-align: center;
                }
                img {
                    display: block;
                    width: 60px;
                    margin: auto;
                }
            }
            .guide-img {
                width: 60%;
                margin: auto;
                img {
                    width: 100%;
                    max-width: 420px;
                }
            }
        }
        .desktop-container {
            width: 60%;
        }
    }
}

</style>
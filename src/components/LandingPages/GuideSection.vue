<template>
    <section id="guide-section">
        <div class="desktop-container">
            <div class="guide-item">
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/icon1.svg" />
                    <p>Set strategies alerts<br/>based on terabytes<br/>of free data</p>
                </div>
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/1.svg" />
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-img" style="text-align:right;">
                    <img src="../../assets/img/landing-page/guide/2.svg" />
                </div>
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/icon2.svg" />
                    <p>Build on our own<br/>platform</p>
                </div>
            </div>

            <div class="guide-item">
                <div class="guide-desc">
                    <img src="../../assets/img/landing-page/guide/icon3.svg" />
                    <p>Deploy any strategies<br/>live on unlimited<br/>trading pairs</p>
                </div>
                <div class="guide-img">
                    <img src="../../assets/img/landing-page/guide/3.svg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'GuideSection'
}
</script>

<style lang="scss">
#guide-section {
    padding-bottom: 20px;

    .guide-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 200px;

        .guide-desc {
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
}

.mobile #guide-section .guide-item {

    flex-direction: column;
    margin-bottom: 80px;

    .guide-desc {
        width: 100%;
        text-align: center;
        order: 2;
        p {
            font-size: 22px;
            text-align: center;
            margin-top: 10px;
        }
        img {
            width: 50px;
        }
    }

    .guide-img {
        width: 100%;
        order: 1;
        text-align: center !important;
        img {
            width: 90%;
            max-width: 300px;
            margin: 0 auto;
        }
    }
}
</style>
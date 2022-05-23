<template>
    <section id="footer-section">
        <div class="footer-title">
            <img src="../../assets/logo2.svg" alt="HashCanvas" /> <span>HashCanvas</span>
        </div>

        <div class="text-center">
            <el-link href="#">Home</el-link>
            <el-link href="#">Strategies</el-link>
            <el-link href="#">Roadmap</el-link>
            <el-link href="#">Symbols</el-link>
            <el-link href="#" @click="passEvent">Contact</el-link>
            <el-link href="#">Language</el-link>
        </div>

        <div class="social-link">
            <el-link href="#"><img src="../../assets/img/landing-page/footer/facebook.png" alt="facebook" /></el-link>
            <el-link href="#"><img src="../../assets/img/landing-page/footer/twitter.png" alt="twitter" /></el-link>
            <el-link href="#"><img src="../../assets/img/landing-page/footer/youtube.png" alt="youtube" /></el-link>
            <el-link href="#"><img src="../../assets/img/landing-page/footer/discord.png" alt="discord" /></el-link>
        </div>

        <div style="padding:17px; border-top: 1px solid #666;text-align: center; color:#fff;">Copyright &copy; 2022 HashCanvas. All rights reserved.</div>
    </section>
</template>

<script>
export default {
    name: 'FooterSection',
    methods: {
        passEvent(event) {
            event.preventDefault();
            this.$emit('showModal', 'true')
        }
    },
}
</script>

<style lang="scss">
#footer-section {
    background-image: url('/src/assets/img/landing-page/footer/bg_footer.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 400px 0 0 0;
    position: relative;
    z-index: 0;

    .footer-title {
        text-align: center;

        span {
            color: #fff;
            padding-left: 10px;
            font-size: 55px;
            display: none;
        }
    }

    .social-link {
        text-align: center;
        padding-bottom: 50px;
        

        .el-link {
            color: #fff;
            margin: 20px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            cursor: pointer;    
        }
    }

    .text-center {
        padding-bottom: 50px;
        .el-link {
            color: #fff;
            margin: 20px;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            cursor: pointer;
        }
    }
}
@media screen and (min-width: 761px) {
    #footer-section {
        padding: 330px 0 0 0;
    }
    .footer-title {
        padding-bottom: 50px;
    }
    .social-link {
        padding-bottom: 24px;
    }
}

@media screen and (max-width: 760px) {
    #footer-section {
        padding: 300px 0 0 0;

        .footer-title {
            padding-bottom: 60px;

            span {
                padding-left: 10px;
                font-size: 55px;
                display: none;
            }
        }

        .social-link {
            padding-bottom: 20px;

            .el-link {
                margin: 16px;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }

        .text-center {
            padding-bottom: 20px;
            .el-link {
                margin: 16px;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
    }
}
</style>
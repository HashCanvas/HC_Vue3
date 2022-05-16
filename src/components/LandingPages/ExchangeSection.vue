<template>
    <section id="exchange-section">
            <h1 class="section-title">Exchanges</h1>
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in exchanges" :key="item.id">
                    <img :src="item.imageURL" />
                </el-carousel-item>
            </el-carousel>  
    </section>
</template>

<script lang="ts">
export default {
    name: 'ExchangeSection',
    data: () => {
        return {
            exchanges: [
                { id: 1, imageURL: '/src/assets/img/landing-page/exchanges/1.png' },
                { id: 2, imageURL: '/src/assets/img/landing-page/exchanges/2.png' },
                { id: 3, imageURL: '/src/assets/img/landing-page/exchanges/3.png' },
                { id: 4, imageURL: '/src/assets/img/landing-page/exchanges/4.png' },
                { id: 5, imageURL: '/src/assets/img/landing-page/exchanges/5.png' },
            ]
        }
    }
}
</script>

<style lang="scss">
#exchange-section {
    padding: 240px 80px;
    background-image: url('/src/assets/img/landing-page/exchanges/bg-rays.png'),
    url('/src/assets/img/landing-page/exchanges/background.png'),
    url('/src/assets/img/landing-page/exchanges/left-circle.png'),
    url('/src/assets/img/landing-page/exchanges/right-circle.png');
    background-position: center center, center center, left center, right center;
    background-size: contain, cover, cover;
    background-repeat: no-repeat;
    padding-top: 200px;
    .el-carousel img {
        width: 100%;
        height: 100%;
    }
    .el-carousel__item {
        border-radius: 20px;
        height: 240px;
    }
    .section-title {
        font-weight: 700;
        font-size: 55px;
        line-height: 70px;
        text-align: center;
        margin-bottom: 40px;
    }
}
/****************************/
/*     Desktop Responisve   */
/****************************/
@media screen and (min-width: 768px) {
    #exchange-section {
        .el-carousel__item {
            height: 240px;
        }
        .section-title {
            font-weight: 600;
            font-size: 35px;
            line-height: 70px;
            text-align: center;
        }
        .el-carousel__container {
            height: 250PX;
        }
    }
}
@media screen and (min-width: 1192px) {
    #exchange-section {
        .el-carousel__item {
            height: 320px;
        }
        .section-title {
            font-weight: 600;
            font-size: 45px;
            line-height: 70px;
            text-align: center;
        }
        .el-carousel__container {
            height: 350PX;
        }
    }
}
@media screen and (min-width: 1500px) {
    #exchange-section {
        .el-carousel__item {
            height: 100%;
        }
        .section-title {
            font-weight: 600;
            font-size: 55px;
            line-height: 70px;
            text-align: center;
        }
    }
}
@media screen and (max-width: 768px) {
    #exchange-section {
        padding: 10px;
        .carousel-container {
            height: 350px;
        }
        .section-title {
            font-weight: 600;
            font-size: 35px;
            line-height: 70px;
            text-align: center;
        }
        .el-carousel__item {
            height: 150px;
        }
        .el-carousel__container {
            height: 150PX;
        }
    }
}
</style>
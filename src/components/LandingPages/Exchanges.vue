<template>
    <section id="exchange-section">
        <h1 class="section-title">Exchanges</h1>
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in exchanges" :key="item.id">
                <!-- <img :src="item.imageURL" /> -->
                <img src="../../assets/img/landing-page/exchanges/1.png" />
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
                { id: 1, imageURL: '../../assets/img/landing-page/exchanges/1.png' },
                { id: 2, imageURL: '../../assets/img/landing-page/exchanges/2.png' },
                { id: 3, imageURL: '../../assets/img/landing-page/exchanges/3.png' },
                { id: 4, imageURL: '../../assets/img/landing-page/exchanges/4.png' },
                { id: 5, imageURL: '../../assets/img/landing-page/exchanges/5.png' },
            ]
        }
    }
}
</script>

<style lang="scss">
#exchange-section {
    padding: 100px;

    .el-carousel img {
        width: 100%;
        height: 100%;
    }
}
</style>
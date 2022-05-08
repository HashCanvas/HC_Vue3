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
            <el-link href="#">Contact</el-link>
            <el-link href="#">Language</el-link>
        </div>

        <div style="padding:17px; border-top: 1px solid #666;text-align: center; color:#fff;">Copyright &copy; 2022 HashCanvas. All rights reserved.</div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'FooterSection'
}
</script>

<style lang="scss">
#footer-section {
    background: #304156;

    .footer-title {
        text-align: center;
        padding: 100px 0;

        img {
            // width: 50px;
            // height: 55px;
        }

        span {
            color: #fff;
            padding-left: 10px;
            font-size: 55px;
            display: none;
        }
    }
}
</style>
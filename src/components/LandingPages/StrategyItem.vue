<template>
	<div class="strategy-item">
        <img src="../../assets/img/landing-page/strategy/1.png" />
        <h3>{{ this.title }}</h3>
        <p class="full-desc">{{ this.fullDescription }}</p>

        <el-row :gutter="10" type="flex" justify="space-between">
            <el-col span="12">
                <el-button type="primary" style="width: 100%">Primary</el-button>
            </el-col>
            <el-col span="12">
                <el-button v-if="this.usersubscribed" type="info" style="width: 100%">Subscribed</el-button>
                <!-- <h-c-button v-if="this.usersubscribed" type="info" style="width: 100%" flat>Subscribed</h-c-button> -->
                <el-button v-else type="primary" style="width: 100%">Subscribe</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">

export default {
	components: {},
	name: "StrategyItem",
	props: {
		icon: String,
		title: String,
		fullDescription: String,
        chartURL: String,
        usersubscribed: Boolean,
	},
};
</script>

<style lang="scss">
.strategy-item {
    padding: 20px;
    background: #fff;
    box-shadow: 5px 20px 50px #233244;
    border-radius: 15px;
    margin-bottom: 60px;

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    h3 {
        font-size: 24px;
        color: #304156;
    }

    .full-desc {
        font-size: 16px;
        color: #97A8BE;
    }
}
</style>
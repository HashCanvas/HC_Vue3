<template>
	<div class="strategy-item">
        <img :src="this.imageURL" />
        <h3>{{ this.title }}</h3>
        <p class="full-desc">{{ this.fullDescription }}</p>

        <el-row :gutter="10" type="flex" justify="space-between">
            <el-col span="12">
                <el-button type="primary" class="primary_button" style="width: 100%">Detail</el-button>
            </el-col>
            <el-col span="12">
                <el-button v-if="this.usersubscribed" type="info" class="subscribe_button" style="width: 100%">Subscribed</el-button>
                <el-button v-else type="primary" class="subscribe_button" style="width: 100%">Subscribe</el-button>
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
        imageURL: String,
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
    .primary_button {
        background-color: #fff;
        color: #1890FF;
        font-weight: bold;
        line-height: 21px;
        text-align: center;
        vertical-align: top;
        padding: 20px 40px 20px 40px;
        border-bottom-left-radius: 16px;
    }
    .subscribe_button {
        background-color: #1890FF;
        color: #fff;
        font-weight: bold;
        line-height: 21px;
        text-align: center;
        vertical-align: top;
        padding: 20px 30px 20px 30px;
        border-bottom-right-radius: 16px;
    }
}
@media screen and (min-width: 769px) {
    .strategy-item {
        padding: 8px;
        h3 {
            font-size: 20px;
            color: #304156;
        }
        .full-desc {
            font-size: 14px;
            color: #97A8BE;
        }
        .primary_button {
            background-color: #fff;
            color: #1890FF;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 10px 10px 10px 10px;
            border-bottom-left-radius: 10px;
        }
        .subscribe_button {
            background-color: #1890FF;
            color: #fff;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 10px 10px 10px 10px;
            border-bottom-right-radius: 16px;
        }
    }
}
@media screen and (min-width: 1010px) {
    .strategy-item {
        h3 {
            font-size: 24px;
            color: #304156;
        }
        .full-desc {
            font-size: 16px;
            color: #97A8BE;
        }
        .primary_button {
            background-color: #fff;
            color: #1890FF;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 15px 20px 15px 20px;
            border-bottom-left-radius: 10px;
        }
        .subscribe_button {
            background-color: #1890FF;
            color: #fff;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 15px 20px 15px 20px;
            border-bottom-right-radius: 16px;
        }
    }
}
@media screen and (min-width: 1640px) {
    .strategy-item {
        h3 {
            font-size: 24px;
            color: #304156;
        }
        .full-desc {
            font-size: 16px;
            color: #97A8BE;
        }
        .primary_button {
            background-color: #fff;
            color: #1890FF;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 20px 40px 20px 40px;
            border-bottom-left-radius: 16px;
        }
        .subscribe_button {
            background-color: #1890FF;
            color: #fff;
            font-weight: bold;
            line-height: 21px;
            text-align: center;
            vertical-align: top;
            padding: 20px 30px 20px 30px;
            border-bottom-right-radius: 16px;
        }
    }
}
@media screen and (max-width: 768px) {
    .strategy-item {
        width: 174px;
        height: 219px;
        padding: 10px;
        margin-bottom: 10px;
        h3 {
            font-size: 16px;
        }
        .full-desc {
            font-size: 12px;
        }
        .primary_button {
            font-weight: bold;
            text-align: center;
            vertical-align: top;
            padding: 5px 10px 5px 10px;
            border-bottom-left-radius: 12px;
        }
        .subscribe_button {
            text-align: center;
            vertical-align: top;
            padding: 5px 10px 5px 10px;
            border-bottom-right-radius: 12px;
        }
    }
}
</style>
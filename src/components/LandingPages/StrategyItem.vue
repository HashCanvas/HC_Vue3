<template>
	<div class="strategy-item">
        <img :src="this.imageURL" />
        <h3>{{ this.title }}</h3>
        <p class="full-desc">{{ this.fullDescription }}</p>

        <el-row :gutter="10" type="flex" justify="space-between">
            <el-col span="12">
                <el-button type="primary" class="primary_button" style="width: 100%" @click="passDetail">Detail</el-button>
            </el-col>
            <el-col span="12">
                <el-button v-if="this.usersubscribed" type="info" class="subscribe_button" style="width: 100%" @click="passEvent">Subscribed</el-button>
                <el-button v-else type="primary" class="subscribe_button" style="width: 100%" @click="passEvent">Subscribe</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
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
    methods: {
        passEvent() {
            this.$emit('showStrategy', 'true')
        },
        passDetail() {
            this.$emit('showDetail', 'true')
        }
    }
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
        overflow-y: auto;
        height: 40px;
        word-wrap: break-word;
        &::-webkit-scrollbar {
            width: 4px;
        }
            /* Track */
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 2px grey; 
            border-radius: 5px;
        }
            
            /* Handle */
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
        }
            /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #5fa9ff; 
        }
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
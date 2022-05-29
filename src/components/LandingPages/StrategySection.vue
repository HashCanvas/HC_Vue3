<template>
	<section id="strategy-section">
		<h1 class="section-title" style="color: #fff; margin-top: -300px">Strategies</h1>

		<div class="carousel-wrapper">
			<el-row  :gutter="20" class="isDesktopStragy">
				<el-col v-for="item in strategies" :key="item.id" span="6" class="column-item">
					<StrategyItem @showStrategy="showS($event)" @showDetail="showD($event)"
						:title="item.title"
						:full-description="item.fullDescription"
						:usersubscribed="item.usersubscribed"
						:imageURL="item.imageURL"
					/>
				</el-col>
			</el-row>

			<el-carousel class="isMobileStragy"
				:interval="4000"
				height="260px"
				indicator-position="none"
			>
				<el-carousel-item v-for="(item, index) in strategies" :key="item.id">
					<el-row :gutter="10" v-if="index < strategies.length - 1">
                        
						<el-col span="12">
							<strategy-item @showStrategy="showS($event)" @showDetail="showD($event)"
								:title="item.title"
								:full-description="item.fullDescription"
								:usersubscribed="item.usersubscribed"
								:imageURL="item.imageURL"
						/></el-col>
                        <el-col span="12">
                                <strategy-item @showStrategy="showS($event)" @showDetail="showD($event)"
                                    :title="strategies[index + 1].title"
                                    :full-description="strategies[index + 1].fullDescription"
                                    :usersubscribed="strategies[index + 1].usersubscribed"
                                    :imageURL="strategies[index + 1].imageURL"
                            /></el-col>
					</el-row>
				</el-carousel-item>
			</el-carousel>
		</div>
	</section>
</template>

<script lang="ts">
import StrategyItem from "./StrategyItem.vue";
export default  {
    name: "StrategySection",
    methods: {
        showS() {
            this.isVisibleStrategy = true
            this.$emit('showStrategy', 'true')
        },
        showD() {
            this.isVisibleDetailStrategy = true;
            this.$emit('showDetailStrategy', 'true')
        }
    },
    data: () => {
        return {
            isVisibleStrategy: false,
            isVisibleDetailStrategy: false,
            strategies: [
                {
                    id: 0,
                    imageURL: "src/assets/img/landing-page/strategy/1.png",
                    title: "Tom Demark",
                    fullDescription: "Description",
                    usersubscribed: true,
                    chartURL: "",
                },
                {
                    id: 1,
                    imageURL: "src/assets/img/landing-page/strategy/2.png",
                    title: "VWAP",
                    fullDescription: "Description",
                    usersubscribed: false,
                    chartURL: "",
                },
                {
                    id: 2,
                    imageURL: "src/assets/img/landing-page/strategy/3.png",
                    title: "EMA/MA Flip",
                    fullDescription: "Descriptfdskfdfdfjdjlhoghoghopgiougopiuyhopifljlijiondf\ndslfdslfhsdlfdslfhlfhl",
                    usersubscribed: true,
                    chartURL: "",
                },
                {
                    id: 3,
                    imageURL: "src/assets/img/landing-page/strategy/4.png",
                    title: "MACD Cross",
                    fullDescription: "Description",
                    usersubscribed: false,
                    chartURL: "",
                },
                {
                    id: 4,
                    imageURL: "src/assets/img/landing-page/strategy/5.png",
                    title: "RSI Divergence",
                    fullDescription: "Description",
                    usersubscribed: false,
                    chartURL: "",
                },
                {
                    id: 5,
                    imageURL: "src/assets/img/landing-page/strategy/6.png",
                    title: "Macd Divergence",
                    fullDescription: "Description",
                    usersubscribed: false,
                    chartURL: "",
                },
                {
                    id: 6,
                    imageURL: "src/assets/img/landing-page/strategy/7.png",
                    title: "Bollinger Bands",
                    fullDescription: "Description",
                    usersubscribed: false,
                    chartURL: "",
                },
                {
                    id: 7,
                    imageURL: "src/assets/img/landing-page/strategy/8.png",
                    title: "Hashcanvas Strat",
                    fullDescription: "Description",
                    usersubscribed: true,
                    chartURL: "",
                },
            ],
        };
    },
    components: { StrategyItem }
}
</script>

<style lang="scss">
#strategy-section {
	background-image: url('/src/assets/img/landing-page/strategy/bg_mask.png');
    background-position: center top;
    background-repeat: no-repeat;
	background-size: cover;
	padding-top: 600px;
	padding-bottom: 0;
	margin-bottom: -500px;

    .column-item {
        width: 25%;
    }
	.section-title {
		font-size: 55px;
		line-height: 70px;
		vertical-align: top;
		font-weight: 700;
		text-align: center;
	}
}
/******************************/
/*          Responsive        */
/******************************/

@media screen and (min-width: 761px) {
    .isMobileStragy {
        display: none;
    }
    #strategy-section {
        .column-item {
            width: 25%;
        }
        .carousel-wrapper {
            width: 100%;
            margin: auto;
            padding: 10px;
        }
        .section-title {
            font-size: 55px;
            line-height: 70px;
            vertical-align: top;
            font-weight: 700;
            text-align: center;
        }
    }
}
@media screen and (min-width: 1400px) {
    #strategy-section {
        .column-item {
            width: 25%;
        }
        .carousel-wrapper {
            width: 88%;
            margin: auto;
            padding: 0;
        }
        .section-title {
            font-size: 55px;
            line-height: 70px;
            vertical-align: top;
            font-weight: 700;
            text-align: center;
        }
    }
}
/******************************/
/*          Mobile            */
/******************************/

@media screen and (max-width: 760px) {
    .isDesktopStragy {
        display: none;
    }
    #strategy-section {
        padding-top: 450px;
        padding-bottom: 400px;
        .carousel-wrapper {
            padding: 10px;     
        }
        .section-title {
            font-size: 35px;
            line-height: 70px;
            vertical-align: top;
            font-weight: 700;
            text-align: center;
        }
        .el-carousel__item {
            height: 250PX;
        }
        .el-carousel__container {
            width: 360px;
            height: 230px;
            margin: auto;
            background-color: #304156;
        }
    }
}
</style>
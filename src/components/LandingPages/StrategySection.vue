<template>
	<section id="strategy-section">
		<h1 class="section-title" style="color: #fff">Strategies</h1>

		<div style="padding: 100px">
			<el-row v-if="!isMobile" :gutter="20">
				<el-col v-for="item in strategies" :key="item.id" span="6">
					<strategy-item
						:title="item.title"
						:full-description="item.fullDescription"
						:usersubscribed="item.usersubscribed"
					/>
				</el-col>
			</el-row>

			<el-carousel
				v-if="isMobile"
				:interval="4000"
				height="400px"
				indicator-position="none"
			>
				<el-carousel-item v-for="item in strategies" :key="item.id">
					<el-row :gutter="10">
						<el-col span="12">
							<strategy-item
								:title="item.title"
								:full-description="item.fullDescription"
								:usersubscribed="item.usersubscribed"
						/></el-col>
						<el-col span="12">
							<strategy-item
								:title="item.title"
								:full-description="item.fullDescription"
								:usersubscribed="item.usersubscribed"
						/></el-col>
					</el-row>
				</el-carousel-item>
			</el-carousel>
		</div>
	</section>
</template>

<script lang="ts">
import StrategyItem from "./StrategyItem.vue";
import { DeviceType, AppModule } from "@/store/modules/app";


export default   {
	get isMobile() {
		return AppModule.device === DeviceType.Mobile;
	},
	name: "StrategySection",
	components: { StrategyItem },
	data: () => {
		return {
			strategies: [
				{
					id: 0,
					imageURL: "",
					title: "Hello1",
					fullDescription: "Description",
					usersubscribed: true,
					chartURL: "",
				},
				{
					id: 1,
					imageURL: "",
					title: "Hello2",
					fullDescription: "Description",
					usersubscribed: false,
					chartURL: "",
				},
				{
					id: 2,
					imageURL: "",
					title: "Hello3",
					fullDescription: "Description",
					usersubscribed: true,
					chartURL: "",
				},
				{
					id: 3,
					imageURL: "",
					title: "Hello4",
					fullDescription: "Description",
					usersubscribed: false,
					chartURL: "",
				},
				{
					id: 4,
					imageURL: "",
					title: "Hello5",
					fullDescription: "Description",
					usersubscribed: false,
					chartURL: "",
				},
				{
					id: 5,
					imageURL: "",
					title: "Hello6",
					fullDescription: "Description",
					usersubscribed: false,
					chartURL: "",
				},
				{
					id: 6,
					imageURL: "",
					title: "Hello7",
					fullDescription: "Description",
					usersubscribed: false,
					chartURL: "",
				},
				{
					id: 7,
					imageURL: "",
					title: "Hello8",
					fullDescription: "Description",
					usersubscribed: true,
					chartURL: "",
				},
			],
		};
	}
}
</script>

<style lang="scss">
#strategy-section {
	background: #304156;
}
</style>
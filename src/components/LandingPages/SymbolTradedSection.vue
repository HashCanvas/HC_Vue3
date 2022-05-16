<template>
    <section id="symbol-traded">
        <h1 class="section-title">Symbol traded</h1>
        <div class="desktop-container">
            <div class="section-header">
                <p>Implemented Symbols</p>
                <button class="input-cancel-button">Cancel All Subscriptions</button>
            </div>
            <div class="section-table">
                <div class="table-row" v-for="item in trades" :key="item.id">
                    <div>
                        <h3 class="trading" v-if="item.exchange == 'Bitmex'">Bitmex ....</h3>
                        <h3 class="trading" v-else>Binance ....</h3>
                        <div class="data-row align-left">
                            <p style="display: inline-block; margin-right: 20px">{{ item.symbols[0] }}</p>
                            <p style="display: inline-block">{{ item.timeframes.join('-') }}</p>
                            <p style="display: inline-block">{{ item.strategytitle }}</p>
                            <p style="display: inline-block">{{ item.channels.join('-') }}</p>
                        </div>
                        <button class="cancel-button align-right">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default {
  components: {},
	name: "SymbolTraded",
    data: () => {
        return {
            'trades': [
                {
                    id:1,
                    userId:1,
                    status:'cancelled',
                    exchange:'Bitmex',
                    symbols:['XBTUSD'],
                    timeframes:['Daily', '4 Hour'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:2,
                    userId:1,
                    status:'published',
                    exchange:'Bitmex',
                    symbols:['ETHUSD'],
                    timeframes:['Daily','4 Hour'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:3,
                    userId:1,
                    status:'published',
                    exchange:'Binance',
                    symbols:['BTCUSDT'],
                    timeframes:['Daily','4 Hour','1 Hour'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:4,
                    userId:1,
                    status:'published',
                    exchange:'Binance',
                    symbols:['Top10'],
                    timeframes:['3 Day'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:5,
                    userId:1,
                    status:'published',
                    exchange:'Binance',
                    symbols:['All'],
                    timeframes:['Daily'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:6,
                    userId:1,
                    status:'published',
                    exchange:'Binance',
                    symbols:['XRPUSD'],
                    timeframes:['Daily'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:7,
                    userId:1,
                    status:'cancelled',
                    exchange:'Binance',
                    symbols:['XBTUSD'],
                    timeframes:['Daily','1 Hour'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email','Push','BrowserM'],
                    timestamp: '@datetime'
                },
                {
                    id:8,
                    userId:1,
                    status:'cancelled',
                    exchange:'Bitmex',
                    symbols:['XBTUSD'],
                    timeframes:['Daily'],
                    strategyid:8,
                    strategytitle:'Hashcanvas Strat',
                    channels: ['Email'],
                    timestamp: '@datetime'
                }
            ]
        };
    },
};
</script>

<style lang="scss">
#symbol-traded {
  background-image: url('/src/assets/img/landing-page/symbol/bg_symbol.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  color: #fff;
  padding: 400px 0 200px 0;
        .section-title {
            color: #fff;
            font-size: 35px;
            line-height: 46px;
            font-weight: 600;
            text-align: center;
            margin-top: -200px;
            margin-bottom: 100px;
        }
        .desktop-container {
            width: 75%;
            margin: auto;
            .section-header {
                font-size: 25px;
                font-weight: 500;
                display: flex;
                justify-content: space-between;
            }
            .section-table {
                padding-right: 20px;
                overflow-y: scroll;
                overflow-x: hidden;
                height: 20rem;
                .table-row {
                    margin-bottom: 20px;
                    height: 60px;
                    .trading {
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 40px;
                        margin-top: 20px;
                    }
                    .data-row {
                        p {
                            font-size: 16px;
                            font-weight: 400;
                            padding: 10px;
                            color: #666666;
                            margin: 0;
                        }
                        border-radius: 10px;
                        background-color: #fff;
                    }
                }
                
                &::-webkit-scrollbar {
                    width: 5px;
                }
                    /* Track */
                &::-webkit-scrollbar-track {
                    box-shadow: inset 0 0 5px grey; 
                    border-radius: 10px;
                }
                    
                    /* Handle */
                &::-webkit-scrollbar-thumb {
                    background: rgb(255, 255, 255); 
                    border-radius: 10px;
                }
                    /* Handle on hover */
                &::-webkit-scrollbar-thumb:hover {
                    background: #5fa9ff; 
                }
            }
        }
        .cancel-button {
            padding: 6px;
            font-size: 15px;
            font-weight: 600;
            line-height: 40px;
            color: #ffffff;
            background: transparent;
            text-decoration: underline;
            border: 2px solid transparent;
            cursor: pointer;
        }
        
        .input-cancel-button {
            width: 270px;
            height: 50px;
            padding: 6px;
            font-size: 16px;
            font-weight: 600;
            line-height: 40px;
            color: #1890FF;
            background-color: #ffffff;
            border: 2px solid #ffffff;
            border-radius: 7px 7px 7px 35px;
            cursor: pointer;
        }
        .align-left {
            float: left;
            width: 90%;
        }
        .align-right {
            float: right;
            width: 10%;
        }
}
@media screen and (max-width: 900px) {
    #symbol-traded {
        .desktop-container {
            width: 85%;
            .section-header {
                font-size: 25px;
                font-weight: 500;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
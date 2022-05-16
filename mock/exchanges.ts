import Mock from 'mockjs'


const data = Mock.mock({
  'items|8': [
  { id: 1,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Binance',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 1
  },
  {
    id: 2,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Bitmex',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 2
  },
  {
    id: 3,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Bitfinex',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 3
  },
  {
    id: 4,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Coinbase',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 4
  },
  {
    id: 5,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'OKX',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 5
  },
  {
    id: 6,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Finnhub',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 6
  },
  {
    id: 7,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Bitfinex',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 7
  },
  {
    id: 8,
    'status|1': ['published', 'draft', 'deleted'],  
    title: 'Deribit',
    abstractDescription: "faker",
    imageURL: "",
    timestamp: '@datetime',
    order: 8
  }
]
})


export default [
  {
    url: '/hc_apiv1/exchanges/listExchanges',
    method: 'get',
    response: () => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/hc_template/exchanges/listExchange',
    method: 'get',
    response: (id) => {
      for (const exchanges of data) {
        if (exchanges.id.toString() === id) {
        return {
          code: 20000,
          data: {
            total: exchanges.length,
            items: exchanges
              } 
            }
          }
        }
      return ({
        code: 70001,
        message: 'exchange not found'
      })
    }
  },
  {
    url: '/hc_template/exchanges/listExchange',
    method: 'post',
    response: (exchange) => {
      return {
          code: 20000,
          data: {
            exchange
          } 
      }
    }
  },
  {
    url: '/hc_template/exchanges/listExchange',
    method: 'put',
    response: (id,exchange) => {
      for (const v of data) {
        if (v.id.toString() === id) {
          return ({
            code: 20000,
            data: {
              exchange
            }
          })
        }
      }
      return ({
        code: 70001,
        message: 'Strategy not found'
      })
    }
  }
]
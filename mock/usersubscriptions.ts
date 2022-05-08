import Mock from 'mockjs'


const strategySubscriptionList = Mock.mock({
  'items|8': [
    {
      id:1,
      userId:1,
      status:'cancelled',
      exchange:'Bitmex',
      symbols:['XBTUSD'],
      timeframes:['Daily'],
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
})


const newsletterList = Mock.mock({
  'items|1': [{
    id: 1,
    status: 'published',
    title: 'General',
    abstractDescription: 'General Hashcanvas News',
    subscribers: [],
    timestamp: '@datetime'
  }]
})

export default [
  {
    url: '/hc_apiv1/strategySubscription/listStrategies',
    method: 'get',
    response: () => {
      const items = strategySubscriptionList.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
] 


/*
export const getNewsletters = (req: Request, res: Response) => {
  const { id,status, title, page = 1, limit = 20, sort } = req.query

  let mockList = newsletterList.filter(item => {
    if (id && item.id !== +id) return false
    if (status && item.status !== 'published') return false
    if (title && item.title.indexOf(title as string) < 0) return false
    return true
  })

  if (sort === '-id') {
    mockList = mockList.reverse()
  }

  const pageList = mockList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * (page as number - 1))

  return res.json({
    code: 20000,
    data: {
      total: mockList.length,
      items: pageList
    }
  })
}

export const getUserNewsletterSubcribed = (req: Request, res: Response) => {
  const { email } = req.params
  for (const newsletter of newsletterList) {
    for(const user of newsletter.subscribers){
      if (user.toString() === email) {
        return res.json({code: 20000})
      }
    }
  }
  return res.json({
    code: 70001,
    message: 'user not found'
  })
}

export const createNewsletter = (req: Request, res: Response) => {
  const { newsletter } = req.body
  return res.json({
    code: 20000,
    data: {
      newsletter
    }
  })
}

export const addusertoNewsletter = (req: Request, res: Response) => {
  const { id } = req.params
  const { email } = req.params
  for (const v of newsletterList) {
    if (v.id.toString() === id) {
      v.subscribers.push(email)
      return res.json({
        code: 20000,
        data: {
          v
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'newsletter not found'
  })
}

export const deleteNewsletter = (req: Request, res: Response) => {
  return res.json({
    code: 20000,
  })
}


export const deleteUserNewsletter = (req: Request, res: Response) => {
  const { email } = req.params
  for (const v of newsletterList) {
    if (v.id.toString() === '1') {
    const index = v.subscribers.indexOf(email.toString(),0)
    if (index > -1) {
      v.subscribers.splice(index,1)
    }
  }
}
  return res.json({
    code: 70001,
    message: 'newsletter not found'
  })
}


export const getAllStrategySubscriptions = (req: Request, res: Response) => {
  const { id,userId,status, page = 1, limit = 20, sort } = req.query

  let mockList = strategySubscriptionList.filter(item => {
    if (id && item.id !== +id) return false
    if (userId && item.userId !== +userId) return false
    if (status && item.status !== 'published') return false
    return true
  })

  if (sort === '-id') {
    mockList = mockList.reverse()
  }

  const pageList = mockList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * (page as number - 1))

  return res.json({
    code: 20000,
    data: {
      total: mockList.length,
      items: pageList
    }
  })
}

export const getUserStrategySubscriptions = (req: Request, res: Response) => {
  const {userId} = req.params
  let userStrats=[]
  for (const strategy of strategySubscriptionList) {
    if (strategy.userId.toString() === userId.toString()) {
      userStrats.push(strategy)
    }
  }
  if(userStrats.length > 0) {
      return res.json({
        code: 20000,
        data: {
          userStrats
        }
      })
  }
  return res.json({
    code: 70001,
    message: 'strategy not found'
  })
}

export const getUserStrategy = (req: Request, res: Response) => {
  const {id,userId} = req.params
  let userStrat=[]
  for (const strategy of strategySubscriptionList) {
    if (strategy.id.toString() === id.toString()) {
      if (strategy.userId.toString() === userId.toString()) {
      userStrat.push(strategy)
    }}
  }
  if(userStrat.length > 0) {
      return res.json({
        code: 20000,
        data: {
          userStrat
        }
      })
  }
  return res.json({
    code: 70001,
    message: 'user strategy not found'
  })
}

export const createUserStrategy = (req: Request, res: Response) => {
  const { strategy } = req.body
  return res.json({
    code: 20000,
    data: {
      strategy
    }
  })
}

export const updateUserStrategy = (req: Request, res: Response) => {
  const { id } = req.params
  const { userStrategy } = req.body
  for (const v of strategySubscriptionList) {
    if (v.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          userStrategy
        }
      })
    }
  }
  return res.json({
    code: 70001,
    message: 'Strategy not found'
  })
}

export const deleteUserStrategy = (req: Request, res: Response) => {
  const { id,userId } = req.params
  let i=0;
  for (const v of strategySubscriptionList) {
    if(v.id.toString() === id){
      strategySubscriptionList.splice(i, 1);
      return res.json({
        code: 20000,
      })  
    }
    if(v.userId.toString() === userId){
      strategySubscriptionList.splice(i, 1);
    }
    i++
  }
 return res.json({
  code: 70001,
  message: 'Strategy not found'
})
  
}

export const deleteAllUserStrategy = (req: Request, res: Response) => {
  const { userId } = req.params
  let i=0;
  for (const v of strategySubscriptionList) {
    if(v.userId.toString() === userId){
      strategySubscriptionList.splice(i, 1);
    }
    i++
  }
  
  return res.json({
    code: 20000,
  })  

}


export const deleteUserExchangeStrategy = (req: Request, res: Response) => {
  const { userId, exchange} = req.params
  let i=0;
  for (const v of strategySubscriptionList) {
    if(v.userId.toString() === userId && v.exchange === exchange){
      strategySubscriptionList.splice(i, 1);
    }
    i++
  }
  
  return res.json({
    code: 20000,
  })  

}*/
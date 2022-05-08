import Mock from 'mockjs'

const userList = Mock.mock({
  'items|4': [
    {
      id: 0,
      username: 'admin',
      nickname: 'admin',
      password: 'any123',
      name: 'Super Admin',
      email: 'admin@test.com',
      phone: '1234567890',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a super administrator',
      roles: ['admin'],
    },
    {
      id: 1,
      username: 'editor',
      nickname: 'editor',
      password: 'any123',
      name: 'Normal Editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am an editor',
      email: 'editor@test.com',
      phone: '1234567890',
      roles: ['editor'],
    },
    {
      id: 2,
      username: 'user1',
      nickname: 'user1',
      email:'user1@gmail.com',
      password: 'any123',
      name: 'Client 1',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a user',
      phone: '1234567890',
      roles: ['user'],
    },
    {
      id: 3,
      username: 'user2',
      nickname: 'user2',
      email:'user2@gmail.com',
      password: 'any123',
      name: 'Visitor 1 ',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a visitor',
      phone: '1234567890',
      roles: ['visitor'],
    }
  ]
})



export default [
  {
    url: '/hc_apiv1/users/login',
    method: 'get',
    response: () => {
      const items = userList.items
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
export const register = (req: Request, res: Response) => {
  const { username,nickname,email,password } = req.body
  // TODO check if the user exists, should be done by an API but for now we check the mock
  for (const user of userList) {
    if (user.username === username) {
      return res.status(400).json({
        code: 50006,
        message: 'User already exists'
      })
    }
    if (user.nickname === nickname) {
      return res.status(400).json({
        code: 50006,
        message: 'User already exists'
      })
    }
    if (user.email === email) {
      return res.status(400).json({
        code: 50007,
        message: 'Email already exists'
      })
    }
  }


  userList.push({
    id: userList.length,
    username: username,
    nickname: nickname,
    password: password,
    name: nickname,
    avatar: faker.image.imageUrl(),
    introduction: '',
    email: email,
    phone: '0',
    roles: ['user']
  })
  return res.json({
    code: 20000,
    data: {
      accessToken: username + '-token'
    }
  })

}

//todo should check also password
export const login = (req: Request, res: Response) => {
  const { username, nickname, password } = req.body
  for (const user of userList) {
    if (user.username === username  && user.nickname=== nickname && user.password=== password) {
      return res.json({
        code: 20000,
        data: {
          accessToken: username + '-token'
        }
      })
    }
  }
  return res.status(400).json({
    code: 50004,
    message: 'Invalid User'
  })
}

export const logout = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  })
}

export const getUsers = (req: Request, res: Response) => {
  const { name } = req.query
  const users = userList.filter(user => {
    const lowerCaseName = user.name.toLowerCase()
    return !(name && lowerCaseName.indexOf((name as string).toLowerCase()) < 0)
  })
  return res.json({
    code: 20000,
    data: {
      items: users
    }
  })
}

export const getUserInfo = (req: Request, res: Response) => {
  // Mock data based on access token
  return res.json({
    code: 20000,
    data: {
      user: req.header('X-Access-Token') == 'admin-token' ? userList[0] : userList[1]
    }
  })
}

export const getUserByName = (req: Request, res: Response) => {
  const { username } = req.params
  for (const user of userList) {
    if (user.username === username) {
      return res.json({
        code: 20000,
        data: {
          user
        }
      })
    }
  }
  return res.status(400).json({
    code: 50004,
    message: 'Invalid User'
  })
}

export const updateUser = (req: Request, res: Response) => {
  const { username } = req.params
  const { user } = req.body
  for (const v of userList) {
    if (v.username === username) {
      return res.json({
        code: 20000,
        data: {
          user
        }
      })
    }
  }
  return res.status(400).json({
    code: 50004,
    message: 'Invalid User'
  })
}

export const deleteUser = (req: Request, res: Response) => {
  return res.json({
    code: 20000
  })
}
*/

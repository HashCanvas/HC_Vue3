export default {
  data() {
    return {
      /* Data pushed by webSocket*/
      webSocket: null,
      webSocketTaskData: {},
      showVehivlesTaskId: null,
      socketReconnectNum: 0, // no more than 5 times
      lockReconnect: false,
      connectSocketUrl: '', // url of socket connection
      connectSocketName: '', // url of socket connection
      // heartbeat mechanism
      setHearTime: 10000,
      heartTimeOut: 20000,
      timeoutObj: null
    }
  },
  methods: {
    /* heartbeat*/
    heartReset() {
      this.timeoutObj && clearTimeout(this.timeoutObj)
      // this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj)
    },
    heartStart() {
      this.timeoutObj && clearTimeout(this.timeoutObj)
      this.timeoutObj = setInterval(() => {
        // console.log('send heartCheck',this.connectSocketName)
        if (this.webSocket.readyState !== 1) {
          // reconnect
          console.log('reconnect', this.socketReconnectNum)
          this.socketReconnect()
        } else {
          this.webSocket.send('heartCheck' + this.connectSocketName)
        }
      }, 10000)
    },
      /* websocket reconnect */
      async socketReconnect() {
        // if(this.socketReconnectNum>7||this.lockReconnect) {
        // After the socket is disconnected, it will reconnect 6 times
      if (this.socketReconnectNum > 5) {
        this.heartReset()
      } else {
        // console.log('socket reconnected' + this.connectSocketName+"count"+this.socketReconnectNum)
        this.socketReconnectNum++
        this.socketConnectMixin()
      }
    },
    resetSocketData() {
      this.socketReconnectNum = 0
      // this.lockReconnect=false
    },

    /* Instructions*/
    socketConnectMixin() {
      // console.log("socketConnectMixin is executed",this.socketReconnectNum);
      return new Promise((resolve) => {
        if (typeof WebSocket === 'undefined') {
          console.log('Sorry: Your browser does not support WebSocket')
        } else {
          console.log(' new WebSocket', this.connectSocketUrl)
          this.webSocket = new WebSocket(this.connectSocketUrl)
          // connection open event
          this.webSocket.onopen = () => {
            this.heartStart()
            resolve(true)
          }
          // received message event
          this.webSocket.onmessage = (msg) => {
            this.heartStart()
            this.resetSocketData()
            this.webSocketMessage(msg)
          }
          // connection close event
          this.webSocket.onclose = () => {
            // this.heartReset();
            // console.log('Socket has an error')
            // this.lockReconnect = false;
            // this.socketReconnect();
            console.log('Socket is closed', this.connectSocketName)
          }
          // An error event has occurred
          this.webSocket.onerror = () => {
            console.log('Socket has an error', this.connectSocketName)
            // this.lockReconnect = false;
            // this.socketReconnect();
          }
        }
      })
    },
    // webSocket message listener
    webSocketMessage() {},
    // close the websocket connection
    webSocketClose() {
      this.webSocket.close()
      this.heartReset()
    }
  }
}

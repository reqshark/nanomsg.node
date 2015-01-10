var nn = require('./')
var pub = nn.socket(nn.AF_SP, nn.NN_PUB)
var sub = nn.socket(nn.AF_SP, nn.NN_SUB)

var addr = 'tcp://127.0.0.1:55555'
nn.bind(pub, addr)
nn.connect(sub, addr)

setTimeout(function(){
  nn.send(pub, 'Hello from nanomsg!')
  console.log('received: ' + nn.recv(sub))
},10)


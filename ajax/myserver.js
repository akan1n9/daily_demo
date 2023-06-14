const express = require('express')
const app = express()

app.get('/server', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.send('ajax_1')
})

app.all('/json-server', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'akaning'
    }
    let str = JSON.stringify(data)
    res.send(str)
})


app.listen(3000, () => {
    console.log('服务已启动');
})
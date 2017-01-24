const path = require('path');

module.exports = {
    //根目录
    rootPath: path.join(__dirname, '/'),
    //server Ip
    serverIp: '127.0.0.1',
    port:'3000',
    //sql - server地址
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test',
        port: 3306,
    },
};
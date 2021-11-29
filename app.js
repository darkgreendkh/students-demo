const http = require('http');

const template = require('art-template');

// 引入 path 模块
const path = require('path');

const dateformat = require('dateformat');

const router = require('./route/index.js');

const serveStatic = require('serve-static');
// 刚刚没写参数(也就是静态资源的目录)，报错：TypeError: root path required
const serve = serveStatic(path.join(__dirname, 'public'));

// 配置模板所在目录
template.defaults.root = path.join(__dirname, 'views');

// 导出 dateformat 方法，给 list.art 文件使用
template.defaults.imports.dateformat = dateformat;


// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
    // 声明一个变量，来接收 post 请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {
        await Student.create(querystring.parse(formData))
        res.writeHead(301, {
            location: '/list'
        });
        res.end();
    });
});

require('./model/connect.js');

const app = http.createServer();

app.on('request', (req, res) => {
    // res.end('darkgreendkh');
    // 启用路由功能
    router(req, res, () => { });
    // 启用静态资源访问功能
    serve(req, res, () => { });
});

app.listen(80);
console.log('网站服务器创建成功，请访问 localhost');
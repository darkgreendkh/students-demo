// 引入 router 模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
const template = require('art-template');
// 引入 querystring 模块
const querystring = require('querystring');

const Student = require('../model/user.js');

// 呈递学生档案信息添加页面
router.get('/add', (req, res) => {
    // template 方法返回的是一个拼接好的字符串
    const html = template('index.art', {});
    res.end(html);
});
// 呈现学生档案信息列表页面
router.get('/list', async (req, res) => {
    // 查询所有学生信息（数据库的增删改查操作中的查）
    let students = await Student.find();
    // 这里的 students 是一个数组，数组中含有学生信息数据，数据以对象的形式存储
    console.log(students);
    const html = template('list.art', {
        students: students
    });
    res.end(html);
});

// 因为 app.js 中需要用到 router 方法，所以我们要将 router 方法暴露出去
module.exports = router;
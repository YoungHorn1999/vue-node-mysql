var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '******',
    database: 'school'
})

connection.connect()

const http = require("http")
const url = require("url")
const qs = require("querystring")

http.createServer(function (req, res) {
    // 设置CORS跨域
    res.setHeader("Access-Control-Allow-Origin", "*")
    // 设置header类型
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    // 跨域允许的请求方式
    res.setHeader('Content-Type', 'application/json')
    if (req.method == "POST") {
        console.log("\n【POST形式】");
        // 获取前端发来的路由地址
        let pathName = req.url
        console.log("\n接口为：" + pathName);
        // 接收发送过来的参数
        let tempResult = ""
        // 数据接入中
        req.addListener("data", function (chunk) {
            tempResult += chunk
        })
        // 数据接收完成
        req.addListener("end", function () {
            var result = JSON.stringify(qs.parse(tempResult))
            console.log("\n参数为：");
            console.log(result);
            // 接收信息处理完毕
        })
        // 数据接收完毕
    } else if (req.method == "GET") { //接口GET形式
        console.log("\n【GET】形式");
        // 解析url接口
        let pathName = url.parse(req.url).pathname
        console.log("\n接口为：" + pathName);
        if (pathName == "/graduation") { //获取毕业生去向
            console.log("\n【API - 获取毕业生去向】");

            let readSql = "SELECT * FROM graduation"
            connection.query(readSql, function (error1, response1) {
                if (error1) {
                    throw error1
                } else {
                    console.log("\nSQL查询结果：");
                    let newRes = JSON.parse(JSON.stringify(response1))
                    console.log(newRes);
                    res.write(JSON.stringify({
                        code: "0",
                        message: "获取数据成功",
                        data: newRes
                    }))
                }
                res.end()
            })
        } else if (pathName == "/competition") { //获取竞赛成绩
            console.log("\n【API - 获取竞赛成绩】");

            let readSql = "SELECT * FROM competition"
            connection.query(readSql, function (error2, response2) {
                if (error2) {
                    throw error2
                } else {
                    console.log("\nSQL查询结果：");
                    let newRes = JSON.parse(JSON.stringify(response2))
                    console.log(newRes);
                    res.write(JSON.stringify({
                        code: "0",
                        message: "获取数据成功",
                        data: newRes
                    }))
                }
                res.end()
            })
        } else if (pathName == "/student") { //获取学生比例
            console.log("\n 【API - 获取学生比例】");

            let readSql = "SELECT * FROM student"
            connection.query(readSql, function (error3, response3) {
                if (error3) {
                    throw error3
                } else {
                    console.log("\nSQL查询结果：");
                    let newRes = JSON.parse(JSON.stringify(response3))
                    console.log(newRes);
                    res.write(JSON.stringify({
                        code: "0",
                        message: "获取数据成功",
                        data: newRes
                    }))
                }
                res.end()
            })
        } else if (pathName == "/research") { //获取科研成果
            console.log("\n 【API - 获取科研成果】");

            let readSql = "SELECT * FROM research"
            connection.query(readSql, function (error4, response4) {
                if (error4) {
                    throw error4
                } else {
                    console.log("\nSQL查询结果");
                    let newRes = JSON.parse(JSON.stringify(response4))
                    console.log(newRes);
                    res.write(JSON.stringify({
                        code: "0",
                        message: "获取数据成功",
                        data: newRes
                    }))
                }
                res.end()
            })
        } else if (pathName == "/") { //首页
            res.writeHead(200, {
                "Content-Type": "text/html;charset=UTF-8"
            })
            res.end()
        }
    }
}).listen(8888)

console.log("http server is running...");

// connection.end()
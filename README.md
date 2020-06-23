# AdminManager
    学习搭建了一个基于Extjs/goIris框架的用户管理系统
## 概述
用extjs框架与go的iris框架进行搭建的一个基础性用户管理系统。
## 实现功能：
    1.用户登录退出，运用sessionStorage创建存储登录状态
    2.用户信息管理模块
        运用extjs框架很好的呈现用户信息，实现分页排序等功能
    3.用户的添加、修改、批量修改、删除
    4.用户信息按名称模糊查询、按日期期间查询、按性别精准查询，并能实现分页排序
## 项目环境与技术
      JDK：goland
      SDK：GO 1.14.3
      MODULES: go.mod
      前端：Ext.js 6.2框架
      后端：GO\Iris
      数据库：sqlx
## 文件结构：
    adminBack
        ---config
            ---config.go
        ---controller
            ---admincontroller.go
            ---routecontroller.go
        ---datasource
            ---database.go
        ---models
            ---admin.go
            ---result.go
        ---service
            ---adminservice.go
        ---static
            ---app
                ---controller
                ---model
                    ---Admin.js
                ---store
                    ---Admin.js
                ---view
                    ---main
                        ---page
                            ---addAdmin.js
                            ---adminController.js
                            ---editAdmin.js
                            ---list.js
                        ---region
                            ---center.js
                            ---left.js
                            ---out.js
                            ---top.js
                        ---Main.js
                        ---MainController.js
                ---application.js
            ---css
                ---login.css
                ---style.css
            ---extjs
                ---font-Awesome-3.2.1
                ---theme-classic
                ---ext-all.js
                ---ext-all-debug.js
                ---ext-boostrap.js
                ---locale-zh_CN.js
            ---img
            ---app.js
            ---index.html
            ---login.html
            ---login.js
        ---config.json
        ---main.go

var preCode = ""
var speed=50


var printCode = function (code, fn) {
    let n = 0
    let IDE = document.getElementById('code')
    let style = document.getElementById('style')
    let timer = setInterval(function () {
        n += 1
        IDE.innerHTML = Prism.highlight(preCode + code.substring(0, n), Prism.languages.css, 'css')
        style.innerHTML = preCode + code.substring(0, n)
        IDE.scrollTop = IDE.scrollHeight   //每次滚动到最下面
        if (n > code.length) {
            window.clearInterval(timer)
            preCode += code
            fn && fn.call()    //回调的函数,判断fn存在则执行后面代码
        }
    }, speed)
}
var createPaper = function (fn) {
    let wrapper = document.querySelector('.paper-wrapper')
    let paper = document.createElement('pre')
    paper.id = "paper"
    paper.className = "paper"
    wrapper.appendChild(paper)
    fn && fn.call()
}


var writeResume = function (content, fn) {
    let paper = document.getElementById('paper')
    let n = 0
    let timer = setInterval(function () {
        n += 1
        paper.innerHTML = content.substring(0, n)
        paper.scrollTop = paper.scrollHeight   //每次滚动到最下面
        if (n > content.length) {
            window.clearInterval(timer)
            fn && fn.call()
        }
    }, speed)
}

var convertMarkdown = function (md, fn) {
    let paper = document.getElementById('paper')
    let wrapper = document.querySelector('.paper-wrapper')
    paper.innerHTML = ''        //pre元素会影响markdown格式
    let markdown = document.createElement('div')
    markdown.id="markdown"
    markdown.classList.add('markdown-body')
    markdown.innerHTML=marked(md)
    wrapper.appendChild(markdown)
    fn && fn.call()
}


var html1 = `/*
 * 你好，我是Jack
 * 只用文字作自我介绍太单调
 * 我就用代码来介绍好了
 * 首先准备一些样式吧
 */
*{
    transition: all 1s;
}
html{
    background: bisque;
}
#code{
    border: 1px solid red;
    font-size:16px;
    padding: 16px;
    width:50%
}
/* 
*代码看上去有些暗
*引入Prism.js让它高亮吧
 */
.token.selector {
    color: #690;
}
.token.punctuation{
    color: #999;
}
 .token.property {
    color: #905;
}
/* 
*看上去感觉好多了
*之后再来张白纸吧
*/

`
var html2 = `
.paper-wrapper{   
    height:100%;
    width:50%;
    background:white;
    border:16px solid bisque;
}

/* 
*接下来可以在纸上写简历了
*/
`
var html3 = `
/* 
*简历内容写的差不多了
*接下来转成marked.js转成HTML形式
*/
`
var html4 = `
/* 
*目测功能都写完了
*以后再来加样式吧
*/
`

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`


printCode(html1, () => {
    createPaper(() => {
        printCode(html2, () => {
            writeResume(md, () => {
                printCode(html3, () => {
                    convertMarkdown(md,()=>{
                        printCode(html4)
                    })
                })
            })
        })

    })
})






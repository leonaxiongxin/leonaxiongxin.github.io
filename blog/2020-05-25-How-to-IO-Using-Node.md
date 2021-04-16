---
title: How to IO Using Node
date: "2020-05-25"
template: "post"
tags:
  - "NLP"
  - "Node"
description: "Node 读写文本文件"
---

Node 的文件处理主要通过 fs 模块。

<!--truncate-->

## 文件编码

当我们读文件的时候，通常可以指定以何种编码方式读取，如：

```JavaScript
const fs = require('fs')
​
fs.readFile('./test.txt', 'utf8', function(err, data){
  console.log(data) //输出的是utf8编码后的字符串
})
```

但是，Node 默认支持的编码有utf8、base64，当不设定编码时，默认数据的形式是 `buffer`，不支持 `gb*` 系列编码，这就会导致在处理包含中文的 `gb*`编码文件时出现乱码，读取失败。

解决方案：用 [iconv-lite](https://www.npmjs.com/package/iconv-lite) 转换编码。

```JavaScript
const iconv = require('iconv-lite')
​
const convertEncoding = (filePath, newFilePath, fromEncoding, toEncoding) => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err
    data = iconv.decode(data, fromEncoding)  // 现在是buffer
    const newData = iconv.encode(data, toEncoding)  // 现在还是buffer
    fs.writeFile(newFilePath, newData, (err) => {  // 把buffer写入文件
      if (err) throw err
    })
  })
}
```

## 异步和同步

fs 模块中的方法均有异步和同步版本，例如读文件的函数有异步的 `fs.readFile()` 和同步的 `fs.readFileSync()`，写文件的函数有异步的 `fs.writeFile()` 和同步的 `fs.writeFileSync()`。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。比起同步方法，异步方法性能更高，速度更快，而且没有阻塞。

但是在某些情况下，要求按照一定顺序串行处理文件，还是需要用同步。如果回调嵌套层数太多会导致代码可读性差，也可以用 `promise` 包装函数，用 `async / await` 优雅地实现异步。

```JavaScript
const myReadFile = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
​
async function run() {
  let data1
  let data2
  let data3
  try {
    data1 = await readFile('file1.txt')
    data2 = await readFile('file2.txt')
    data3 = await readFile('file3.txt')
  } catch(err) {
    console.log(err)
  }
}
​
run()
```

## 目标目录或文件是否存在

用 `fs.accessSync(filePath)` ，弃用 `fs.exists(filePath)`

参考：

https://nodejs.org/api/fs.html

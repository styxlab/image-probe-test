var probe = require("probe-image-size")

var express = require("express")
var app = express()
app.use(express.static(__dirname + "/public"))
console.log(__dirname + "/public")

const url =
  "https://static.gotsby.org/v1/assets/images/creating-a-custom-theme.png"
//const url = "http://localhost:5000/creating-a-custom-theme.png"

let loop = 0
const test = async () => {
  while (true) {
    loop = loop + 1
    try {
      const { width, height } = await probe(url)
      console.log(url, width, height, loop)
    } catch (e) {
      console.log(e)
      throw new Error("abort!")
    }
  }
}

var server = app.listen(5000)

test()

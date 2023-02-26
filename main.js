// main.js 파일
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const routing = require("./server");
const DB = require("./database");
DB.indb();
// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 라우팅 설정
app.use(express.static("public"));
app.use("/", routing.home);
app.use("/about", routing.about);
app.use("/contact", routing.contact);
app.use("/resister", routing.register);
app.use("/submit", routing.submit);

app.listen(PORT, () => {
  console.log(`Server is hosting http://localhost:${PORT}`);
});

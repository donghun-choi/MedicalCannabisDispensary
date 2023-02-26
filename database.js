require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.a87eddc421ca3349a4338ace20f96;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect();
/** 
@param {string} username
@param {string} password
@returns 유저네임, 비밀번호를 넣으면 그거에 맞는 결과를 뱉어줍니다. 없으면 널~
@todo 안전을 위해 hash 기능 추가해야함
 */

function indb(username, password) {
  const collection = client.db("main").collection("test");
  collection
    .findOne({ username: username, password: password })
    .then((result) => {
      console.log("그런 사람 있어요");
      return result;
    });
}

const getdb = (param1, param2) => {};

module.exports = {
  indb,
};

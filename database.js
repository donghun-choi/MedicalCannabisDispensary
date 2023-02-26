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
      if (result != null) {
        console.log("선량한 시민");
        return result;
      } else {
        console.log("중국산 해커(中国制造的黑客)");
        return result;
      }
    });
}

function getdb(username, password) {
  const collection = client.db("main").collection("test");
  if (indb(username, password) == null) {
    console.log("ERROR: no value");
    return null;
  }
}

module.exports = {
  indb,
};

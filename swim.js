const scriptName = "swim"; //스크립트이름
const swim = require('swim'); //모듈
cmd = "S"; //명령어 앞부분
botname = "swim"; //봇이름
_ = this;
var admin = ["110696448"/*swim본계*/,"1874047207"/*디버그룸*/]; //관리자 (여러명 가능)
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  _.ro = room;
  _.m = msg;
  _.s = sender;
  _.igc = isGroupChat;
  _.re = replier;
  _.img = imageDB;
  _.pk = packageName;
  
  if(msg == cmd+"test"){
    swim.chat.test();
  }
  
  if(msg == cmd+"hash"){
    swim.chat.hash();
  }
  
  var profileCode = java.lang.String(imageDB.getProfileImage()).hashCode();
  if(msg.startsWith("S ")){
    if(admin.includes(String(profileCode))){
      swim.chat.eval();
    }else{
      swim.chat.ban();
    }
  }
  
  if(msg == botname){
    swim.chat.randomrespond();
  }
}

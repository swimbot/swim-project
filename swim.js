module.exports = {
  chat :{
    test : function() {
      re.reply("test");
    },
    hash : function() {
      var profileCode = java.lang.String(img.getProfileImage()).hashCode();
      re.reply(profileCode);
    },
    eval : function() {
      cmd = "S";
      try {
        re.reply(eval(m.replace(cmd+" ","")));
      } catch(e){
        re.reply("error!\nline : "+e.lineNumber+"line\nerror : "+e);
      }
    },
    ban : function() {
      re.reply(s+"you are banned!");
    },
    randomrespond : function() {
      let respondsentence = ["ㅇㅅㅇ","hi","ㅁㄴㅇㄹ"];
      let respondrandom = Math.floor(Math.random()*respondsentence.length);
      re.reply(respondsentence[respondrandom]);
    }
  }
}

//站长之家的脚本，ank title='" + k + "'>" + "      " +  "</a>"这个地方被我改了，之前是ank title='" + k + "'>" + k + "</a>"
//我把k去掉了，换成了空格 这样就不会显示出来字体了

element.innerHTML = element.innerHTML.replace(
  "站长之家",""
);
let item = document.getElementsByTagName("img");
  for (let index = 0; index < item.length; index++) {
    let class_name = item[index].getAttribute("src");
    if (class_name.indexOf("assets") != -1)
      item[index].setAttribute("src", "/theme/images/" + class_name);
  }
  
  var str = window.location.href;

if (str.indexOf("http://penhub.space") != -1) 
{
    alert("网站已迁移至144.one,2s后跳转");
	function hello(){ 
		window.location = "https://144.one"
	} 
	window.setTimeout(hello,2000);
}
if (str.indexOf("https://penhub.space") != -1) 
{
    alert("网站已迁移至https://144.one,2s后跳转");
	function hello(){ 
		window.location = "https://144.one"
	} 
	window.setTimeout(hello,2000);
}

if (str.indexOf("144.34.164.217") != -1) 
{
    /*var strrrr =*/
    window.location.href = str.replace("http://144.34.164.217", "https://144.one");
}

//处理表格
//var tablsdsdsdsdsdses = document.getElementById("tadzsfsadzfadfsdfsdfsdfdsble");   
var biaogemens = document.getElementsByName("tadzsfsadzfadfsdfsdfsdfdsble");
for (let aaa11i = 0; aaa11i < biaogemens.length; aaa11i++) 
  {  var tablsdsdsdsdsdses = biaogemens[aaa11i];  var odd = false;        var rows = tablsdsdsdsdsdses.getElementsByTagName("tr");        for (let i = 0; i < rows.length; i++) {            if(odd == true) {                rows[i].style.backgroundColor = "#ffc";                odd = false;            } else {                odd = true;            }        }}


setInterval(function () {
    let itsdsdsdem = document.getElementsByTagName("a");
	for (let indessssx = 0; indessssx < itsdsdsdem.length; indessssx++) {
		if( itsdsdsdem[indessssx].innerHTML.indexOf("站长统计")==-1) 
			continue;
		itsdsdsdem[indessssx].innerHTML = itsdsdsdem[indessssx].innerHTML.replace("站长统计",`<font color="#f5f5f5">1111</font>`);
	}
	//设置导航栏等间距
	$leftOffset = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.navbar-header");

	$parent = $("body > div.navbar.navbar-default.navbar-fixed-top");

	$archive = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(1)");

	$dmsj = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(2)");

	$jsjwl = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(3)");

	$kf = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(4)");

	$ldfx = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(5)");

	$nwaq = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(6)");

	$nx = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(7)");

	$webaq = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(8)");

	$zw = $("body > div.navbar.navbar-default.navbar-fixed-top > div > div.collapse.navbar-collapse.navbar-ex1-collapse > ul:nth-child(1) > li:nth-child(9)");

	$zw.css('padding-right',0);

	$check = ($parent.width() - $archive.width() - $dmsj.width() - $jsjwl.width() - $kf.width() - $ldfx.width() - $nwaq.width() - $nx.width() - $webaq.width() - $zw.width() - $leftOffset.offset().left - $leftOffset.offset().left - $leftOffset.width());
	
	if($check>=0) {
		$marginvalue = ($parent.width() - $archive.width() - $dmsj.width() - $jsjwl.width() - $kf.width() - $ldfx.width() - $nwaq.width() - $nx.width() - $webaq.width() - $zw.width() - $leftOffset.offset().left - $leftOffset.offset().left - $leftOffset.width())/18;

		$leftOffset.css("marginRigtht", $marginvalue);

		$archive.css("marginLeft", $marginvalue);
		$archive.css("marginRight", $marginvalue);

		$dmsj.css("marginLeft", $marginvalue);
		$dmsj.css("marginRight", $marginvalue);

		$jsjwl.css("marginLeft", $marginvalue);
		$jsjwl.css("marginRight", $marginvalue);

		$kf.css("marginLeft", $marginvalue);
		$kf.css("marginRight", $marginvalue);

		$ldfx.css("marginLeft", $marginvalue);
		$ldfx.css("marginRight", $marginvalue);

		$nwaq.css("marginLeft", $marginvalue);
		$nwaq.css("marginRight", $marginvalue);

		$nx.css("marginLeft", $marginvalue);
		$nx.css("marginRight", $marginvalue);

		$webaq.css("marginLeft", $marginvalue);
		$webaq.css("marginRight", $marginvalue);

		$zw.css("marginLeft", $marginvalue);
		$zw.css("marginRight", 0);
	}
}, 1000);





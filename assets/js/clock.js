/*function NowTimeDiv() {
	// body...
	var timeDiv=document.getElementById("timeDiv");
	var Nows=new Date();
	var hou=Nows.getHours();
	var min=Nows.getMinutes();
	var sec=Nows.getSeconds();
	var day=Now.getDate();
	var mon=Now.getMonth()+1;
	var yea=Now.getFullYear();
	var timer=yea + "年" + mon + "月" + day + "日" + check(hou) + "：" + check(min)+ "：" + check(sec);
	timeDiv.innerHTML=timer;
}
function check(val){
	if(val<10){
		return ("0"+val);
	}
	else{
		return val;
	}
}
function start(){
	window.setInterval("displayTime()",1000)
}*/
function check(val) {
		if (val < 10) {
			return ("0" + val);
		} 
		else {
			return (val);
		}
	}
	function displayTime() {
		//获取div元素
		var timeDiv=document.getElementById("timeDiv");
		//获取系统当前的年、月、日、小时、分钟、毫秒
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var second = date.getSeconds();
		var timestr = year + "年" + month + "月" + day + "日  " + check(hour)
				+ ":" + check(minutes) + ":" + check(second);
		//将系统时间设置到div元素中
		timeDiv.innerHTML = timestr;
	}
	//每隔1秒调用一次displayTime函数
	function start(){
        window.setInterval("displayTime()",1000)//单位是毫秒
}

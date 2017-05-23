var menuList=document.querySelectorAll("#menuList p"),
goodsList=document.querySelectorAll(".kindList"),
len=menuList.length;
document.getElementById("back").onclick=function(){
	window.history.back();
};
for(var n=0;n<len;n++){
	menuList[n].onclick=changeList;
}
function changeList(e){
	for(var i=0;i<len;i++){
		if(menuList[i]!=e.target){
			menuList[i].className="";
			goodsList[i].hidden=true;
		}
		else{
			e.target.className="onFocus";
			goodsList[i].hidden=false;
		}
	}
}

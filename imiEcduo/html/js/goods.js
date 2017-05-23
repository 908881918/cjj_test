var rollLMod=document.querySelector("#rollLMod ul"),
rollButton=document.getElementById("rollButton"),
collection=document.getElementById("collection"),
ifColl=false,
theBody=document.querySelectorAll("#theBody ul")[0],
goods=document.getElementById("goods"),
goodsMsg=document.getElementById("goodsMsg"),
goodsPart=document.getElementById("goodsPart"),
msgPart=document.getElementById("msgPart"),
detailByImg=document.getElementById("detailByImg"),
detailByWord=document.getElementById("detailByWord"),
imgPart=document.getElementById("imgPart"),
wordPart=document.getElementById("wordPart"),
choiceKind=document.getElementById("choiceKind"),
color="白色",
size="34",
footer=document.getElementsByTagName("footer")[0],
ksxz=document.getElementById("ksxz"),
putInCart=document.getElementById("putInCart"),
toPay=document.getElementById("toPay"),
backGround=document.getElementById("backGround"),
theHeight=window.innerHeight;
goodsPart.style.height=(theHeight-85)+"px";
msgPart.style.height=(theHeight-85)+"px";
//设置滚屏函数
//@param elem 进行滚屏的对象
//@param dir  滚动方向
//@param size 滚动长度
//@param unit 滚动长度的单位
//@param time 滚屏间隔时间
//@param folwelm 跟随滚动的控制按钮对象
function rollWindow(elem,dir,size,unit,time,folwelm){
	elem.appendChild(elem.querySelector("li:first-child").cloneNode(true));
	var len=elem.getElementsByTagName("li").length,
	move=0;
	window.setInterval(function(){
		if(elem.style.transitionDuration=="0ms"){
			elem.style.transitionDuration="500ms";
		}
		move+=size;
		elem.style[dir]=move+unit;
		if(move==size*(len-1)){
			window.setTimeout(function(){
				elem.style.transitionDuration="0ms";
				move=0;
				elem.style[dir]="0"+unit;
			},500);
		}
	},time);
	if(folwelm){
		var button=folwelm.getElementsByTagName("li"),
		bLen=button.length;
		button[0].style.borderColor="red";
		for(var n=0;n<bLen;n++){
			button[n].onclick=controlRoll;
		}
		n=0;
		window.setInterval(function(){
			n++;
			if(n<bLen){
			button[n].style.backgroundColor="red";
			button[n-1].style.backgroundColor="gray";
			}
			else{
				button[n-1].style.backgroundColor="gray";
				n=0;
				button[n].style.backgroundColor="red";
			}
		},time);
		function controlRoll(e){
			for(var i=0;i<bLen;i++){
				if(button[i]!=e.target){
					button[i].style.backgroundColor="gray";
				}
				else{
					e.target.style.backgroundColor="red";
					n=i;
					move=i*size;
					elem.style[dir]=move+unit;
				}
			}
		}
	}
}
rollWindow(rollLMod,"right",100,"vw",4000,rollButton);
collection.onclick=function(e){
	var p=collection.getElementsByTagName("p")[0],
	img=collection.getElementsByTagName("img")[0];
	if(ifColl){
		p.innerHTML="收藏";
		img.src="./images/icon/QQ图片20170417094026.png";
		ifColl=false;
	}
	else{
		p.innerHTML="已收藏";
		img.src="./images/icon/QQ图片20170417094100.png";
		ifColl=true;
	}
}
document.getElementsByTagName("header")[0].onclick=function(e){
	if(e.target.id=="back"){
		window.history.back();
	}
	else if(e.target.id=="goods"){
		goods.className="onClick";
		goodsMsg.className="";
		theBody.style.right="0vw";
	}
	else if(e.target.id=="goodsMsg"){
		goods.className="";
		goodsMsg.className="onClick";
		theBody.style.right="100vw";
	}
}
document.getElementById("msgPart").onclick=function(e){
	if(e.target.id=="detailByImg"){
		detailByImg.className="onClick";
		detailByWord.className="";
		wordPart.hidden=true;
		imgPart.hidden=false;
	}
	else if(e.target.id=="detailByWord"){
		detailByImg.className="";
		detailByWord.className="onClick";
		wordPart.hidden=false;
		imgPart.hidden=true;
	}
}
document.getElementById("goodsColor").onclick=function(e){
	var goodsColor=document.querySelectorAll("#goodsColor p"),
	len=goodsColor.length;
	if(e.target.tagName=="P"){
		for(var i=0;i<len;i++){
			if(e.target!=goodsColor[i]){
				goodsColor[i].className="";
			}
			else{
				color=e.target.innerHTML;
				e.target.className="onFocus";
			}
		}
	}
	choiceKind.innerHTML="你选择的是 "+color+" "+size;
}
document.getElementById("goodsSize").onclick=function(e){
	var goodsSize=document.querySelectorAll("#goodsSize p"),
	len=goodsSize.length;
	if(e.target.tagName=="P"){
		for(var i=0;i<len;i++){
			if(e.target!=goodsSize[i]){
				goodsSize[i].className="";
			}
			else{
				size=e.target.innerHTML;
				e.target.className="onFocus";
			}
		}
	}
	choiceKind.innerHTML="你选择的是 "+color+" "+size;
}
document.getElementById("numControl").onclick=function(e){
	var value=document.getElementById("numValue");
	if(e.target.id=="reduce"){
		value.innerHTML--;
		if(value.innerHTML=="0"){
			value.innerHTML="1"
		}
	}
	else if(e.target.id=="add"){
		value.innerHTML++;
	}
}
footer.onclick=function(e){
	if(e.target.id=="cart"){
		ksxz.style.transition="bottom 250ms linear 0ms";
		ksxz.style.bottom="0vw";
		toPay.hidden=true;
		putInCart.hidden=false;
		backGround.hidden=false;
	}
	if(e.target.id=="pay"){
		ksxz.style.transition="bottom 250ms linear 0ms";
		ksxz.style.bottom="0vw";
		toPay.hidden=false;
		putInCart.hidden=true;
		backGround.hidden=false;
	}
}
document.getElementById("close").onclick=function(e){
	ksxz.style.bottom="-200vh";
	backGround.hidden=true;
}
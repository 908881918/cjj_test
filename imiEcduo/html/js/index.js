var rollLMod=document.querySelector("#rollLMod ul"),
newsRoll=document.querySelector("#newsRoll ul"),
rollButton=document.getElementById("rollButton");
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
rollWindow(rollLMod,"right",100,"%",4000,rollButton);
rollWindow(newsRoll,"bottom",2.5,"em",4000);

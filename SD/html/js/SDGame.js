/*
 * 设置用于储存单元格,储存单元格内容以及宫的二维数组
 */
var p=[],resetp=[],ap=[],p9=[];
//设置判断位置所在的宫
//@return Number 宫的索引
function onPalace(y,x){
		var a="",b="",n=new Number();
		//判断是第几行的宫
		if(y<3) a="0";
		else if(y<6) a="1";
		else  a="2";
		//判断是第几列的宫
		if(x<3) b="0";
		else if(x<6) b="1";
		else b="2";
		//根据组合确定宫的索引
		switch (a+b){
			case "00":n=0;
				break;
			case "01":n=1;
				break;
			case "02":n=2;
				break;
			case "10":n=3;
				break;
			case "11":n=4;
				break;
			case "12":n=5;
				break;
			case "20":n=6;
				break;
			case "21":n=7;
				break
			default:n=8;
		}
		return n;
	}
var tR=document.querySelectorAll("tr");
for(var n=0;n<9;n++){
	p[n]=[];
	resetp[n]=[];
	ap[n]=[];
	p9[n]=[];
	p[n]=tR[n+1].querySelectorAll("td");
}
for(var j=0;j<9;j++){
	for(var i=0,s=0;i<9;i++){
		s=onPalace(j,i);
		p9[s].push(p[j][i]);
		p[j][i].onclick=getFocus;
	}
}
/*
 * 设置单元格获取焦点时CSS变化
 */
var onFocus,row,col;
function getFocus(e){
	for(var i=0;i<9;i++){
		for(var j=0;j<9;j++){
			if(p[i][j]==e.target){
				e.target.style.backgroundColor="cyan";
			}
			else p[i][j].style.backgroundColor="white";
		}
	}
	onFocus=e.target;
}
/*
 * 给焦点单元格输入相应内容
 */
var getNum=document.querySelectorAll("#getNum>button");
var wrong=document.getElementById("wrong");
for(var i=0;i<getNum.length;i++){
	getNum[i].onclick=getNumber;
}
function getNumber(e){
	if(!onFocus){
		msg.innerHTML="请先选择一个空再填数字！";
	}
	else{
		msg.innerHTML="";
		if(e.target.innerHTML=="c") {
			onFocus.innerHTML="";
		}
		else {
			onFocus.innerHTML=e.target.innerHTML;
		}
	}
}
/*
 * 检测数独函数
 * @return false/true;
 */
function checkRule(){
	for(var i=0;i<9;i++){
		var row_arr=[],
		col_arr=[],
		pal_arr=[],
		row_num=0,
		col_num=0,
		pal_num=0;
		for(var j=0;j<9;j++){
			var row_value=p[i][j].innerHTML,
			col_value=p[j][i].innerHTML,
			pal_value=p9[i][j].innerHTML;
			if(row_value>0 && row_value<10) {
				if(row_arr.indexOf(row_value)==-1){
					row_arr.push(row_value);
				}
				row_num++;
			}
			if(col_value>0 && col_value<10) {
				if(col_arr.indexOf(col_value)==-1){
					col_arr.push(col_value);
				}
				col_num++;
			}
			if(pal_value>0 && pal_value<10) {
				if(pal_arr.indexOf(pal_value)==-1){
					pal_arr.push(pal_value);
				}
				pal_num++;
			}
		}
		if(col_num!=col_arr.length){
			return false;
		}
		if(row_num!=row_arr.length){
			return false;
		}
		if(pal_num!=pal_arr.length){
			return false;
		}
	}
	return true;
}
var check=document.getElementById("check");
var msg=document.getElementById("msg");
check.onclick=checkAnswer;
/*
 * 事件触发后检测数独答案
 */
function checkAnswer(){
	for(var y=0,a;y<9;y++){
		for(var x=0;x<9;x++){
			if(p[y][x].innerHTML==""){
				a=false;
				break;
			}
			else a=true;
		}
	}
	if(!a) msg.innerHTML="题目未完成" 
	else if(checkRule()) msg.innerHTML="正解！";
	else msg.innerHTML="答案错误！";
}
//设置数独题目
document.getElementById("start").onclick=gameOn;
function gameOn(){
	//用于清除当前题目,以及重置resetp
	for(var y=0;y<9;y++){
		for(var x=0;x<9;x++){
			p[y][x].innerHTML="";
			resetp[y][x]="!";
		}
	}
	//设置保存每行已用位置以及用于返还的数组属性
	var save={
		x:[],
		notX:[],
		//设置交集方法
		a1AndA2:function(n,m){
			var arr=[],a=this[n];
			for(var i=0;i<a.length;i++){
				if(m.indexOf(a[i])!=-1){
					arr.push(a[i]);
				}
			}
			if(this.notX[n].length!=0){
				this.notX[n].forEach(function(x){
					arr.splice(arr.indexOf(x),1);
				});
			}
			return arr;
		}
	}
	for(var i=0;i<9;i++){
		save[i]=[0,1,2,3,4,5,6,7,8];
		save.notX[i]=[];
	}
	//按照数独规则进行随机派数
	for(var i=1;i<7;i++){
		for(var y=0;y<9;){
			var n=[0,1,2,3,4,5,6,7,8];
			var m=save.a1AndA2(y,n);
			var j=Math.floor(m.length*Math.random());
			if(m.length==0){
				save.notX[y].splice(0,save.notX[y].length);
				x=save.x.splice(-1,1)[0];
				y--;
				p[y][x].innerHTML="";
				save[y].push(x);
				n.push(x);
				save.notX[y].push(x);
				continue;
			}
			var x=m[j];
			p[y][x].innerHTML=i;
			if(checkRule()){
					n.splice(n.indexOf(x),1);
					save[y].splice(save[y].indexOf(x),1);
					save.x.push(x);
					y++;	
				}
			else {
				p[y][x].innerHTML="";
				save.notX[y].push(x);
			}
		}
		save.notX.forEach(function(x){
			var len=x.length;
			x.splice(0,len);
		});
	}
	//按照数独规则以及顺序对剩下空格派生数字
	for(var i=7,x=0;i<10;){
		var y=0;
		for(;y<9;){
			for(;x<9;x++){
				//跳过非空位置
				if(p[y][x].innerHTML!="") continue;
				p[y][x].innerHTML=i;
				if(checkRule()){
					save.x.push(x);
					y++;
					if(y==9){
						i++;
					}
					x=0;
					break;
				}
				else{
					p[y][x].innerHTML="";
				}
			}
			if(x>8){
				n=save.x.splice(-1,1);
				x=n[0];
				if(y==0){
					y=8;
					i--;
				}
				else y--;
				p[y][x].innerHTML="";
				x++;
			}
		}
	}
	//读取答案
	for(y=0;y<9;y++){
		for(x=0;x<9;x++){
			ap[y][x]=p[y][x].innerHTML;
		}
	}
	//设置解答器，用以检测数组是否有唯一解
	//@param ans 被挖空位置的数字
	//@param ay 被挖位置的行数
	//@param ax 被挖位置的列数
	//@return true/false 检测是否有唯一解
	function checkOnlyAnswer(ans,ay,ax){
		//设置不包含检查项原数的数组
		var num=[1,2,3,4,5,6,7,8,9],
		bool;
		num.splice(ans-1,1);
		//轮流对当前被挖空进行非本位置数字填入并尝试解答
		for(var i=0;i<8;i++){
			//若填入数字违反数独规则则跳过
			p[ay][ax].innerHTML=num[i];
			if(!checkRule()){
				continue;
			}
			getSureNum();
			if(checkMaybe()){
				p[ay][ax].innerHTML=ans;
				resetGame();
				return false;
			}
			else{
				resetGame();
			}
		}
		return true;
	}
	//挖空数独中的项成题
	var palaceArr=[0,1,2,3,4,5,6,7,8];
	for(var time=0,y,n;time<9;time++){
		n=Math.floor(palaceArr.length*Math.random());
		y=palaceArr[n];
		for(var x=0;x<9;x++){
			var value=p[y][x].innerHTML;
			if(checkOnlyAnswer(value,y,x)){
				p[y][x].innerHTML="";
				resetp[y][x]="";
			}
		}
		palaceArr.splice(n,1);
	}
}		
//提取正确答案
document.getElementById("getAnswer").onclick=getAnswer;
function getAnswer(){
	for(var y=0;y<9;y++){
		for(var x=0;x<9;x++){
			p[y][x].innerHTML=ap[y][x];
		}
	}
}
//设置用于计算已能确定的位置答案的函数
function getSureNum(){
	//设置检查是否可能存在答案更变的函数
	function checkCanSure(){
		var n=0;
		for(var y=0;y<9;y++){
			for(var x=0;x<9;x++){
				if(p[y][x].innerHTML.length==1)
				n++;
			}
		}
		return n;
	}
	do{
		var sure1=checkCanSure(),sure2;
		//对所有被挖位置设置可能数并填写出同一宫内唯一出现的数字
		(function(){
			for(var n=1;n<10;n++){
				for(var y=0;y<9;y++){
					//设置用于记录x的数组
					//用于计算该可能值是否只有一个
					var getXArr=[];
					for(var x=0;x<9;x++){
						//跳过确定项
						if(p9[y][x].innerHTML!=""&&p9[y][x].innerHTML.indexOf("!")==-1){
							continue;
						}
						//记录当前位置可能值
						//并进行检查是否非第一次调用该函数
						var s=p9[y][x].innerHTML;
						if(s.indexOf(n)!=-1){
							s="";
						}
						//将数字赋予空格看是否符合数独规则
						//若符合则将x储存于数组并加入该可能值
						//否则还原当前项
						p9[y][x].innerHTML=n;
						if(checkRule()){
							getXArr.push(x);
							p9[y][x].innerHTML=s+n+"!";
						}
						else{
							p9[y][x].innerHTML=s;
						}
					}
					//检查当前数字是否是宫内唯一
					//若是则进行赋值
					if(getXArr.length==1){
						p9[y][getXArr[0]].innerHTML=n;
					}
				}
			}
		}());
		//填写已经可以确定的位置
		(function(){
			for(var y=0;y<9;y++){
				for(var x=0;x<9;x++){
					copyP=p[y][x].innerHTML.split("!");
					var len=copyP.length-1;
					if(len==1){
						p[y][x].innerHTML=copyP[0];
					}
				}
			}
		}());
		sure2=checkCanSure();
	}
	while(sure1!=sure2);
}
//设置检查可行性函数
//@return true/false 当前数字是否可行
function checkMaybe(){
	for(var y=0;y<9;y++){
		for(var x=0;x<9;x++){
			if(p[y][x].innerHTML=="")
			return false;
		}
	}
	return true;
}
//计算数独题目答案
document.getElementById("calAnswer").onclick=calAnswer;
function calAnswer(){
	var copyP=[];
	var counter={
		n:0,
		arr:[],
		setCoun:function(y,x){
			var s=y+","+x;
			this.arr.push(s);
			this[this.n]=new Number();
			this.n++;
		},
		get:function(y,x){
			var s=y+","+x,
			n=this.arr.indexOf(s);
			return this[n];
		},
		clearCoun:function(y,x){
			var s=y+","+x,
			n=this.arr.splice(this.arr.indexOf(s),1)[0];
			delete this[n];
			this.n--;
		}
	}
	//设置位置保存对象
	var seat={
		arr:[],
		set:function(y,x){
			var s=y+","+x;
			this.arr.push(s);
		},
		get:function(){
			var n=this.arr.splice(-1,1)[0].split(",");
			return n;
		},
		back:function(y,x){
			var s=y+","+x;
			for(var y=0;y<9;y++){
				for(var x=0;x<9;x++){
					p[y][x].innerHTML=this[s][y][x];
				}
			}
		},
		save:function(y,x){
			var s=y+","+x;
			this[s]=[];
			for(var y=0;y<9;y++){
				this[s][y]=[];
				for(var x=0;x<9;x++){
					this[s][y].push(p[y][x].innerHTML);
				}
			}
		}
	}
	getSureNum();
	//对剩下未确定的项进行轮流填可能数尝试解题
	for(var y=0,x=0;y<9;){
		//跳过确定项
		if(p[y][x].innerHTML.length==1){
			x++;
			if(x==9){
				x=0;
				y++;
			}
			continue;
		}
		//提取该项可能数字并保存当前状态
		var maybeN=p[y][x].innerHTML.split("!"),
		lenMb=maybeN.length-1;
		seat.save(y,x);
		//若存在计步器则提取计步器
		//否则设置计步器
		var sc=y+","+x;
		if(counter.arr.indexOf(sc)==-1){
			counter.setCoun(y,x);
			var i=0;
		}
		else {
			var i=counter.get(y,x)+1;
		}
		for(;i<lenMb;i++){
			p[y][x].innerHTML=maybeN[i];
			//进行尝试解题
			getSureNum();
			//若可行则更新计步器
			//保存当前位置并继续下一空格进行尝试解题
			if(checkMaybe()){
				seat.set(y,x);
				counter[counter.n-1]=i;
				x++;
				if(x==9){
					x=0;
					y++;
				}
				break;
			}
			//否则还原当前状态并继续尝试下一个数
			else{
				seat.back(y,x);
			}
		}
		//若都不可行则返还上一个测试数的位置以及状态
		if(i==lenMb){
			counter.clearCoun(y,x);
			var yx=seat.get();
			y=yx[0];
			x=yx[1];
			seat.back(y,x);
		}
	}
}
//重置当前题目
document.getElementById("reset").onclick=resetGame;
function resetGame(){
	for(var y=0;y<9;y++){
		for(var x=0;x<9;x++){
			if(resetp[y][x]=="!"){
				continue;
			}
			p[y][x].innerHTML=resetp[y][x];
		}
	}
}

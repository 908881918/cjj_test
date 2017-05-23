onEvent("click",function(e){
	var goods=document.querySelectorAll(".goodsMsg"),
	emptycart=document.getElementById("emptyCart"),
	len=goods.length,
	add=document.querySelectorAll(".add"),
	reduce=document.querySelectorAll(".reduce"),
	num=document.getElementsByTagName("input");
	delGoods=document.querySelectorAll(".delGoods");
	if(e.target.className=="delGoods"){
		if(window.confirm("是否移除该商品？")){
			for(var i=0;i<len;i++){
				if(delGoods[i]==e.target)
				break;
			}
			document.getElementById("listOfGoods").removeChild(goods[i]);
			len--;
			if(len==0){
				emptycart.hidden=false;
			}
		}
	}
	else if(e.target.className=="add"){
		for(var i=0;i<len;i++){
			if(e.target==add[i]){
				num[i].value++;
				counterTotal(i);
				break;
			}
		}
	}
	else if(e.target.className=="reduce"){
		for(var i=0;i<len;i++){
			if(e.target==reduce[i]){
				num[i].value--;
				if(num[i].value==0){
					num[i].value="1";
				}
				counterTotal(i);
				break;
			}
		}
	}
});
onEvent("input",function(e){
	if(e.target.tagName=="INPUT"){
		var num=document.getElementsByTagName("input"),
		len=num.length;
		e.target.value=e.target.value.replace(/\D/g,"")*1;
		if(e.target.value==""||e.target.value*1==0){
			e.target.value=1;
		}
		for(var i=0;i<len;i++){
			if(e.target==num[i]){
				counterTotal(i);
				break;
			}
		}
	}
});
//设置用于计算商品总价的函数
//@param ind 商品序位置
function counterTotal(ind){
	var unitPrice=document.querySelectorAll(".unitPrice"),
	totalPrice=document.querySelectorAll(".totalPrice"),
	num=document.getElementsByTagName("input");
	var value=(num[ind].value*unitPrice[ind].innerHTML.split("¥")[1]).toString();
	if(value.indexOf(".")==-1){
		value+=".00";
	}
	else{
		var abPoint=value.split("."),
		len=abPoint[1].length;
		if(len==1){
			value+="0";
		}
		else if(len>2){
			value=abPoint[0]+"."+abPoint[1].slice(0,2);
		}
	}
	totalPrice[ind].innerHTML="¥"+value;
}
//绑定事件且可用于动态增加的节点
//@param even 需要触发的事件
//@param func 处理事件的方法名
function onEvent(even,func){
	var body=document.body;
	if (body.addEventListener) {   //监听IE9，谷歌和火狐  
        body.addEventListener(even,func,false);
    }
    else if (body.attachEvent) {  //IE
        body.attachEvent("on"+even,func);
    }
    else {
        body["on"+even]=func;
    }
}//需修改
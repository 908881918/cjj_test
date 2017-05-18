/*
 * 图片列表及点击事件
 */
$(document).ready(function(){

	$(".jqzoom").imagezoom();
	
	$("#thumblist li a").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});

});
/*
 * 输入验证
 */
$("#goodsMsg input").keyup(function(e){  
           e.target.value=e.target.value.replace(/\D/g,"");
});
/*
 * 详情控制
 */
$("#detailList").click(function(e){
	if(e.target.tagName=="P"){
		var p=document.getElementById("detailList").getElementsByTagName("p"),
		li=document.getElementById("goodsDetail").getElementsByTagName("li"),
		len=p.length;
		for(var i=0;i<len;i++){
			if(e.target==p[i]){
				p[i].classList.add("on");
				li[i].hidden=false;
			}
			else{
				p[i].classList.remove("on");
				li[i].hidden=true;
			}
		}
	}
});
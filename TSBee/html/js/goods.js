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
           this.value=this.value.replace(/\D/g,"");
});
/*
 * 详情控制按钮以及滚屏指定位置后固定视口上
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
$(window).scroll(function(){
	var detail=$("#detailList")
	if($(window).scrollTop()>=760){
		detail.addClass("fixed");
	}
	else if(detail.hasClass("fixed")){
		detail.removeClass("fixed");
	}
})
/*
 * 在线客服弹出与关闭效果
 */
$("#commitOnline").mouseenter(function(){
	$("#scrollOut").animate({
		width:"show",
		borderLeft:"show",
		borderRight:"show",
		paddingLeft:"show",
		paddingRight:"show"
	},
		{duration:50});
});
$("#close").click(function(){
	$("#scrollOut").animate({
		width:"hide",
		borderLeft:"hide",
		borderRight:"hide",
		paddingLeft:"hide",
		paddingRight:"hide"
		},
		{duration:50});
});
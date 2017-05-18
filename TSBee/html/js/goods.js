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

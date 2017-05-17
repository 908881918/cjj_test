/*
 * 菜单伸展
 */
var menu=document.getElementsByClassName("menu");
for(var i=0;i<menu.length;i++){
	menu[i].onclick=openList;
}
function openList(e){
	var menuList=e.currentTarget.getElementsByTagName("ul")[0];
	if(e.target.tagName=="P"){
		if(menuList.hidden){
			e.target.classList.add("open");
			e.target.classList.remove("close");
			menuList.hidden=false;
		}
		else{
			e.target.classList.add("close");
			e.target.classList.remove("open");
			menuList.hidden=true;
		}
	}
	e.stopPropagation();
}
/*
 * 商品页面移动
 */
var goodsMenu=document.getElementById("goodsMenu");
goodsMenu.onclick=onChose;
function onChose(e){
	if(e.target.tagName=="P"){
		var goodsList=document.getElementById("goodsPart").getElementsByTagName("ul")[0],
		p=goodsMenu.getElementsByTagName("p"),
		list=goodsMenu.getElementsByTagName("div");
		for(var i=0;i<list.length;i++){
			if(p[i]==e.target){
				list[i].classList.add("on");
				if(window.innerWidth>=640){
					goodsList.style.right=i*640+"px";
				}
				else goodsList.style.right=i*100+"vw";
			}
			else list[i].classList.remove("on");
		}
	}
}

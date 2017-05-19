var focus=document.querySelectorAll("#list p");
var roomList=document.querySelectorAll("#roomList>div");
for(var i=0;i<focus.length;i++){
	focus[i].onclick=FLFocus;
}
function FLFocus(e){
	for(var i=0;i<focus.length;i++){
		if(focus[i].id==e.target.id){
			roomList[i].hidden=false;
			e.target.style.backgroundColor="white";
		}
		else{
			roomList[i].hidden=true;
			focus[i].style.backgroundColor="rgb(235,235,235)";
		}
	}
}

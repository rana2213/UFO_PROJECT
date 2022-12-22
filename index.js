
let a=document.querySelector('#i1'); 
let top_1=parseInt(getComputedStyle(a).top.split("px")[0]);
let left_2=parseInt(getComputedStyle(a).left.split("px")[0]);
let speed=20;
function upUfo(){
if(top_1>-10){
   top_1-=speed;
   a.style.top=top_1+"px";
}

};

function leftUfo(){
   if(left_2>100){
      left_2-=speed;
      a.style.left=left_2+"px";
   }
  
};
function rightUfo(){
   if(left_2<innerWidth -120){
      left_2+=speed;
      a.style.left=left_2 +"px";
   }    
};
function bottomUfo(){
   if(top_1<innerHeight -220){
      top_1+=speed;
      a.style.top=top_1+"px";
   }
};
let hidespeed= ()=>{
   let add1=document.querySelector(".setting");
   add1.classList.toggle("hide");
   let add2=document.querySelector("#i2")
   add2.classList.toggle("rotate");
}
let speedChange=()=>{
   let  changespeed=document.querySelector("#speed").value;
   speed=parseInt(changespeed);
   let spd=document.querySelector("#value");
   spd.innerText=speed;
}
let arr = [
  {dp : "aziz2dp.jpg" ,name : "Aziz Ansari" ,msg : "Hiii...", time:"12:02 am"},
  {dp : "bbsdp.jpg" ,name : "Mukhtar" ,msg : "college",time:"3:30 am"},
{dp : "azizdp.jpg" ,name : "Cyber03" ,msg : "Ok bro",time:"9:12 am"},
{dp : "Nrdp.jpg" ,name : "NoorAlam" ,msg : "Kha hai",time:"1:59 pm"},
{dp : "msmdp.jpg" ,name : "Masoom" ,msg : "aaja bhai",time:"2:00 pm"},
{dp : "besti.jpg" ,name : "Bestie❤" ,msg : "walaikum assalam", time:"5:45 pm"} ,
{dp : "Gym.jpg" ,name : "Gym Bro" ,msg : "Chest,back",time:"Yesterday"},
{dp : "sajiddp.jpg" ,name : "Sajid Bhai" ,msg : "wifi-9#3174",time:"Yesterday"},
{dp : "panda.jpg" ,name : "Panda🐼" ,msg : "pics",time:"Yesterday"},
{dp : "dst.jpg" ,name : "Dost" ,msg : " azzu",time:"Yesterday"},
{dp : "u2.jpg" ,name : "Tum Kon" ,msg : "anytime",time:"Yesterday"},
{dp : "sn.jpg" ,name : "Sneha" ,msg : "ok",time:"05/02/24"},
{dp : "u3.jpg" ,name : "Hai Koi" ,msg : "biryani fev",time:"06/02/24"},
{dp : "mdp.jpg" ,name : "Gadi Wala Dost" ,msg : "on the way",time:"29/01/24"},
{dp : "ndp.jpg" ,name : "Bike Wala Dost" ,msg : "sunday done",time:"25/01/24"},
{dp : "shl.jpg" ,name : "Sahil" ,msg : "system hai",time:"01/01/24"},
{dp : "rht.jpg" ,name : "Rohit" ,msg : "thik hai",time:"29/12/23"},
{dp : "u1.jpg" ,name : "Anjaan" ,msg : "Blocked📵",time:"25/12/23"},
{dp : "msi.jpg" ,name : "Mansi" ,msg : "metro",time:"20/12/23"},
{dp : "jbkp2.jpg" ,name : "College Friends" ,msg : "project submit",time:"12/11/23"},
{dp : "vsl.jpg" ,name : "Vishal" ,msg : "gya ghr",time:"05/11/23"},
{dp : "dpk.jpg" ,name : "Deepak" ,msg : "pdhle",time:"19/10/23"},
{dp : "mrk.jpg" ,name : "Mubark" ,msg : "ok bro",time:"06/10/23"},
{dp : "prm.jpg" ,name : "Perdum bhai" ,msg : "done",time:"18/09/23"},



          ]
var clutter = ""
arr.forEach(function(elem,idx){
  clutter +=`<li> <img id="${idx}" src="${elem.dp}">
	              <div class="chatName">
	              <h3>${elem.name}</h3>
	              <span id="msg">${elem.msg}</span></div>  
	              <span id= "chattime">${elem.time}</span>   
	             </li>`
})

document.querySelector(".chatScreen ul").innerHTML = clutter

document.querySelector(".chatScreen ul").addEventListener("click", function(dets){
   document.querySelector(".popup").style.display = "block"
   document.querySelector(".popup1").style.backgroundImage = `url(${arr[dets.target.id].dp})`
document.querySelector(".namebg h2").innerHTML = arr[dets.target.id].name
})

let chatBtn = document.querySelector(".fa-message")
let storyBtn = document.querySelector(".fa-circle-plus")
let callBtn = document.querySelector(".fa-phone")

chatBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "block" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
})

storyBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "block" 
  document.querySelector(".callScreen").style.display = "none" 
})
callBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "block" 
})

document.querySelector(".popup").addEventListener("click",function(){
document.querySelector(".popup").style.display = "none"
})
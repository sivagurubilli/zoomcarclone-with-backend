
/*

let pickuplocation = JSON.parse(localStorage.getItem("pickuplocation"))||[0];

addressbox.innerText= "Location :" +" "+pickuplocation;

let startDate = JSON.parse(localStorage.getItem("startDate"));
startDate = startDate[0] + " " + startDate[1];
date1.innerText = "start-time:" + " " + startDate;

let end_Date = JSON.parse(localStorage.getItem("endDate"));
end_Date = end_Date[0] + " " + end_Date[1];
date3.innerText= "end-time:" + " " + end_Date;

if(JSON.parse(localStorage.getItem("trip"))[0]=="round"){
    let addressbox =document.getElementById("addressbox");
    addressbox.style.display ="none";
}else{
    let addressbox = document.getElementById("addressbox")
    addressbox.style.display ="block";
}
*/

let url = `http://localhost:2000/allcars`;

async function FetchApi(url){
try{
    let res = await fetch(url);
    let data = await res.json();
  getcity(data)
}catch(err){
    console.log(err)
}
}

FetchApi(url)

let city =JSON.parse(localStorage.getItem("city"))

 function getcity(data){
    let carsbycity  =[]
    data.forEach(elem=>{
        
       if(elem.City=="Pune"){
        carsbycity.push(elem)
        
       }

    })
    showdata(carsbycity)
    //console.log(carsbycity)
       
}




let changecity1 = document.querySelector(".changecity1");

changecity1.innerText=  city;

addressbox.innerText =  city +"  " + ",    india"

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
today.toDateString();

let date2 =document.querySelector(".date1")
let startDate = JSON.parse(localStorage.getItem("date"));
//startDate = startDate[0] + " " + startDate[1];

date2.innerText = "Start-time:" + " " + today;

let date3 =document.querySelector(".date3")
let endDate = JSON.parse(localStorage.getItem("date"));

date3.innerText = "End-time:" + " " + endDate;


function showdata(carsbycity){
    
    if(carsbycity.length < 1){
        
        let image1 =document.createElement('img')
image1.id="image1"
image1.src ="https://img1.zoomcar.com/images/original/9a0a4bf46735e3565ed7f4451087c8c71acf4bd2.png?1607931267"
var head =document.createElement("p")
head.id ="head"
head.innerText ="NO cars matched for your search critiria  && we are offering services in limited cities refer ZMS "
        cont.append(image1,head)
    }else if(carsbycity.length > 0){
       
   cont.innerHTML= null
   
carsbycity.forEach(car=>{
    let div =document.createElement('div')
let image =document.createElement('img')
image.id="image"
image.src =car.img
let center =document.createElement('p')
center.id="center"

let location = document.createElement('p')
location.innerText = car.location

let name = document.createElement('h4')
name.innerText = car.name

let fuel = document.createElement('p')
fuel.innerText = car.fuel;

let seater = document.createElement('p')
seater.innerText = car.Seater+ " " + "Seater";

let Rating = document.createElement('h4')
Rating.innerText = " ⭐" + " " + car.Rating;

let left = document.createElement('h3')

let price = document.createElement('h5')
price.innerText = "₹   " + `${car.price}`;
price.id ="price"

let btn = document.createElement('button')
btn.innerHTML = "Book Now";
btn.id ="btn"


btn.onclick =() =>{
    addtoBook(car);
}

center.append(location,name,fuel,seater,Rating)
left.append(price,btn)
var cont =document.getElementById("cont")

div.append(image,center,left)
cont.append(div)
});

}

}



function ninty(){
   
    
   async function ApiFetch(url){
       try{
        var ninty1=[];
let res = await fetch(url)
let data =await res.json()
    data.forEach((e) =>{
        if(e.Seater == 5 && e.City == "Pune"){
            ninty1.push(e)
        }
    });
    showdata(ninty1);
   }catch(err){
       console.log(err)
   }
}
ApiFetch(url)
}

function onetwenty(){
   async function ApiFetch(url){
        try{
         var onetwenty1=[];
 let res = await fetch(url)
 let data =await res.json()
     data.forEach((e) =>{
         if(e.Seater == 7 && e.City == "Pune"){
             onetwenty1.push(e)
         }
     });
     showdata(onetwenty1);
    }catch(err){
        console.log(err)
    }
 }
 ApiFetch(url)
 }
 


 
function five(){
    async function ApiFetch(url){
         try{
          var five1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.Seater == 5 && e.City == "Pune"){
              five1.push(e)
          }
      });
      showdata(five1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }



  function seven(){
    async function ApiFetch(url){
         try{
          var seven1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.Seater == 7 && e.City == "Pune"){
              seven1.push(e)
          }
      });
      showdata(seven1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }

  function six(){
    async function ApiFetch(url){
         try{
          var six1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.Seater == 6 && e.City == "Pune"){
              six1.push(e)
          }
      });
      showdata(six1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }

  function deiselcar(){
    async function ApiFetch(url){
         try{
          var deiselcar1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.fuel == "Diesel" && e.City == "Pune"){
              deiselcar1.push(e)
          }
      });
      showdata(deiselcar1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }


  function petrolcar(){
    async function ApiFetch(url){
         try{
          var petrolcar1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.fuel == "Petrol" && e.City == "Pune"){
              petrolcar1.push(e)
          }
      });
      showdata(petrolcar1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }




  function hatchbackcar(){
    async function ApiFetch(url){
         try{
          var hatch1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if((e.Seater == 7 ||e.Seater == 6)&& e.City == "Pune"){
              hatch1.push(e)
          }
      });
      showdata(hatch1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }


  function sedancar(){
    async function ApiFetch(url){
         try{
          var sedan1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.Seater == 5 && e.City == "Pune"){
              sedan1.push(e)
          }
      });
      showdata(sedan1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }

  

  function Homecar(){
    async function ApiFetch(url){
         try{
          var home1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.type == "homecar" && e.City == "Delhi"){
              home1.push(e)
          }
      });
      showdata(home1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }
 

  function Airportcar(){
    async function ApiFetch(url){
         try{
          var air1=[];
  let res = await fetch(url)
  let data =await res.json()
      data.forEach((e) =>{
          if(e.type == "airportcar" && e.City == "Pune"){
              air1.push(e)
          }
      });
      showdata(air1);
     }catch(err){
         console.log(err)
     }
  }
  ApiFetch(url)
  }

  // car filtering functions compleated based on user preferences



if(localStorage.getItem("carShow")== null) {
localStorage.setItem("carshow",JSON.stringify([]));
}

function addtoBook(car) {
    localStorage.setItem("carshow",JSON.stringify(car));
    window.location.href = "../first.html"
}


function confirm(){
    let btn = document.querySelector(".city-box-btn");
    btn.removeAttribute("disabled");
}

function confirmcity(){
    let selected_city =document.getElementById("selected_city").value;
    localStorage.setItem("city",JSON.stringify([selected_city]));
  

    let city_box = document.querySelector(".city-box");
    city_box.style.display = "none";
    window.location.reload();
}
//let changecity = document.querySelector(".changecity");





function changecity(){
    let city_box = document.querySelector(".city-box");
    city_box.style.display ="block";
    hidesidebar();
}







// function  when clicking on ham, side bar will appear 

function showsidebar(){
    let sidebarbox =document.querySelector(".sidebarbox");
    sidebarbox.style.display = "block";
   
let sidebar =document.querySelector(".sidebar");

let sidebar_ovl =document.querySelector(".sidebar-ovl");
sidebar_ovl.style.opacity ="1";
sidebar_ovl.style.pointerEvents = "auto";
sidebar_ovl.addEventListener("click",hidesidebar);


}

// when clicking on star it hides function

function hidesidebar(){
    let sidebarbox =document.querySelector(".sidebarbox");
    sidebarbox.style.display = "none";

    let sidebar =document.querySelector(".sidebar");

    let sidebar_ovl = document.querySelector(".sidebar-ovl");
    sidebar_ovl.style.opacity ="0";
 
    sidebar_ovl.removeEventListener("click",hidesidebar);
}


function logout(){
    localStorage.setItem("user",null)
  
    window.location.reload()
    
}


var login =document.getElementById("login")

let a=JSON.parse(localStorage.getItem("loginpersonname"))

login.append(a)


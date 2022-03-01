    
    // Appending NavBar
    import navbar from "./components/navbar.js";
    let nav = document.getElementById("navbar");
    nav.innerHTML = navbar();    


    
let a=JSON.parse(localStorage.getItem("loginpersonname"))
let b=JSON.parse(localStorage.getItem("userdata"))
document.querySelector("h4").append(a)
let count=0
let details=()=>{
 count++
b.map(function(el){
  
    document.querySelector("#login").innerHTML=""
 
    let p=document.createElement("p")
    p.textContent=el.name
    let p2=document.createElement("p")
    p2.textContent=el.number
    let p3=document.createElement("p")
    p3.textContent=el.email
    document.querySelector("#login").append(p,p2,p3)
    if(count%2!=0){
        document.querySelector("#login").style.display="block"
    }
    else{
        document.querySelector("#login").style.display="none"
    }
})
    
}

    var carData = JSON.parse(localStorage.getItem("cars"));
    console.log(carData);

    // let date = document.getElementById("date").value;
    

    let sidebar = document.getElementById("sidebar");
    let low_nav = document.getElementById("low_nav");
    sidebar.onclick = function () {
        low_nav.style.display = "block";
        window.onclick = function(event) {
        if (event.target == low_nav) {
            low_nav.style.display = "none";
        }
        }
    }

    // function for pop window
    let trip = document.getElementById("trip");
    let roundTrip = document.getElementById("roundTrip");
    let close_trip = document.querySelector(".close_trip");
    roundTrip.onclick = function(){
        trip.style.display = "block";
    };
    close_trip.onclick= function(){
        trip.style.display = "none";
    };
    window.onclick = function(event) {
    if (event.target == trip) {
        trip.style.display = "none";
    }
}

let pickup = document.getElementById("pickup");
let pickoff = document.getElementById("pickoff");
let pick_up = document.getElementById("pick_up");
let back_arrow = document.getElementById("back_arrow");
let date = document.getElementById("date");
    pickup.onclick = function (){
    pick_up.style.display = "block";
    nav.style.display="none"
    
    }

back_arrow.onclick = function(){
    pick_up.style.display = "none";
    nav.style.display = "";
}
pickoff.onclick = function (){
    pick_up.style.display = "block";
    nav.style.display = "none";
    date.style.display = "block";
    // nav.style.backgroundColor = "white";
    // pickoff_area.style.color = "black";

}

let about_us = document.getElementById("about_us");
let about_option = document.getElementById("about_option");
let i = document.querySelector("#about_us>i");
about_us.onclick = function(){
    if(about_option.style.display === "block"){
        about_option.style.display = "none";
    }
    else{
        about_option.style.display = "block";
    }
    
}

//   show map
function getMap(){
    let iframe = document.getElementById("gmap_canvas");
    var ip = ''; // Current IP
    var XMLHttp = new XMLHttpRequest();

XMLHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
        let x = json.city;
		// Country code output, field "country_code"
		// alert(json.country_code);
        console.log(this.responseText);
        iframe.src = `https://maps.google.com/maps?q=${x}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        return x;
	}
    
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();

}
let main = document.getElementById("main");
let location = document.getElementById("location");
    location.onclick = function(){
        getMap()
    main.style.display = "block";
}
// back_arrow.onclick = function(){
//     pick_up.style.display = "none";
//     nav.style.display = "";
// }

let pickup_area = document.querySelector("#pickup>p");
let pickoff_area = document.querySelector("#pickoff>p");
let findCar = document.getElementById("findCar");

let currLocation = document.getElementById("currLocation");
currLocation.onclick = function(){
    // let iframe = document.getElementById("gmap_canvas");
    var ip = ''; // Current IP
    var XMLHttp = new XMLHttpRequest();

XMLHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
        let x = json.city;
		// Country code output, field "country_code"
		// alert(json.country_code);
        pick_up.style.display = "none";
        nav.style.display = "";
        // date.style.display="none";
        pickup_area.innerText = json.city+","+" "+json.country;
        pickup_area.style.color = "black";
        pickoff.style.display = "block";
        

        findCar.style.backgroundColor = "green";
        findCar.style.color = "white";
        findCar.style.cursor = "pointer";
        console.log(json.city+json.country);
        setInterval(function(){
            pickoff_area.style.display = "block";
            pickoff_area.innerText = json.city+","+" "+json.country;
            // date.style.display = "block";
            pickoff_area.style.innerText = "black"
        }, 6000);
        // iframe.src = `https://maps.google.com/maps?q=${x}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
	}
       
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();

}
findCar.addEventListener("click",findCarData);
function findCarData(){
    var ip = ''; // Current IP
    var XMLHttp = new XMLHttpRequest();

XMLHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
        let x = json.city;
		
        console.log(json.city+json.country);
        carData.forEach(element => {
            let name= element.name;
            if(x===element.City){
                localStorage.setItem("city",JSON.stringify(element.City))
                console.log(element.name);
            }
        });
        
       	}
    let d = document.getElementById("date").value;
    console.log(d)
    localStorage.setItem("date",JSON.stringify(d))
    
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();


}


let a=JSON.parse(localStorage.getItem("loginpersonname"))||[];
let b=JSON.parse(localStorage.getItem("userdata"))
let log_in = document.querySelector("#log_in>p");
let log = document.getElementById("log");
let login = document.getElementById("login");
let selected_city= document.querySelector("#cit");
if(a.length!==0){
    log_in.innerText=a;
    login.innerHTML= a + '<img src= "data:image/png;base64,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"></img>';
    // console.log(a.length);
}
else{
    log.style.display="none";
}
// console.log(a);
// log_in.innerText = a;
let count=0
let details=()=>{
 count++
b.map(function(el){
  
    document.querySelector("#show").innerHTML=""
 
    let p=document.createElement("p")
    p.textContent=el.name
    let p2=document.createElement("p")
    p2.textContent=el.number
    let p3=document.createElement("p")
    p3.textContent=el.email
    // document.querySelector("#show").append(p,p2,p3)
    // if(count%2!=0){
    //     document.querySelector("#show").style.display="block"
    // }
    // else{
    //     document.querySelector("#show").style.display="none"
    // }
})
    
}
log.addEventListener("click",logout)
function logout(){
    document.querySelector("#log").innerHTML="";
    localStorage.removeItem("loginpersonname");
    window.location=window.location;
}

let currCity = localStorage.getItem("city");
selected_city.innerText=currCity;

console.log(currCity);
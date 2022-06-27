    //1. ways to print in js
    // console.log("hello world")
    // document.write("this is document write")
    // alert("me")

    // 2.js console API
    // console.log("hello world",4+6," another log")
    // document.write("this is document write")
    // console.warn("this is warning")
    // console.error("this is error")

   // 3. js variables
   var n1=6;
   var n2=9;
   console.log(n1+n2);
   var sr1="this is a string";
   var marks={
     shubham:"a string",
     mohit:34.34
   }
   console.log(marks)
   var g=true;
   var und=undefined;
   var h;
//    if not initialized ,value is undefined
   var n=null;
//    two types of data types in js 
//    1. primitive  --undefined .null. number ,string,boolean,symbol
//    2.reference  -- arrays and objects
   var arr=[1,2,"string",4,5]

   arr.forEach(function(element){
     console.log(element);
   })
   arr.pop();
   arr.push("jerry");
   arr.shift(); // erases the first element
   arr.unshift("tom"); // push at first position and then returns final size
   arr.toString();
   arr.sort(); // by default , it sees all by strings and sort according to dictionary

//    function in js
//    function avg(a,b){
//      return (a+b)/2;
//    }
//    c=avg(5,6);
   let j=0;
//    const ac=0;
//    ac++;   acc will not increase 
   let mystring="tom and jerry"
   console.log(mystring)
//    console.log(mystring.length)
//    console.log(mystring.indexOf("r"))  //by default first index
//    console.log(mystring.lastIndexOf("r"))
//    console.log(mystring.indexOf("and"))
   console.log(mystring.slice(0,5))
   d=mystring.replace("tom","rechard") // replaces only first occurence
   console.log(d,mystring)

let mydate=new Date();
console.log(mydate)
//console.log(mydate.getTime()); // getFullyear,getDay,Minutes,Hours
let elem=document.getElementById('click');
console.log(elem);
let elemclass=document.getElementsByClassName("container");
console.log(elemclass);
//elemclass[0].style.background="yellow";
elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
console.log(elem.innerHTML)
console.log(elem.innerText)

console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)

tn=document.getElementsByTagName('div')  // or 'button' etc
console.log(tn)
createdElement=document.createElement('p'); //paragraph
createdElement.innerText="this is a created paragraph";
tn[0].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText="this is created bold para";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element) --> removes an element

console.log(document.URL)
console.log(document.links)
console.log(document.scripts)  //images,title

//selecting using query
sel=document.querySelector('.container') //selects only first .container 
console.log(sel)
sel2=document.querySelectorAll('.container')  //selects all .containers
console.log(sel2)

function clicked(){
    console.log('the button was clicked');
}
function moved_on_it(){
    console.log('the mouse was moved on it');
}
window.onload=function(){
    console.log('the document was loaded')
}
//Events in js 

// firstcontainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
//     console.log("it was clicked on container ")
// })
firstcontainer.addEventListener('mouseover',function(){
    console.log("mouse on container ")
})
firstcontainer.addEventListener('mouseout',function(){
    console.log("mouse out of container ")
})

let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
console.log(prevHTML)
firstcontainer.addEventListener('mouseup',function(){
    console.log(document.querySelectorAll('.container')[1].innerHTML)
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log(prevHTML)
    console.log(document.querySelectorAll('.container')[1].innerHTML)
    console.log("mouse up when clicked  on container")
})
firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked(mousedown)</b>"
    console.log("mouse down when clicked  on container")
})

//arrow function
// function sum(a,b){
//     return a+b;
// } equivalent to
// sum=(a,b)=>{
//     return a+b;
// }

// settimeout and setineterval -> for repeatedly after some interval// time in ms
dolog=()=>{
    console.log("I am your log")
}
clr=setTimeout(dolog,2000);
// use clearInterval(clr) /clearTimeout(clr) to cancel setTimeout /setInterval
// localStorage.setItem('name','tom')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//json - used for data transport 
obj={name:"tom",length:1,a:{this:'that'}}
//o/p-{"name":"tom","length":1,"a":{"this":"tha\"t"}}
jso=JSON.stringify(obj);
console.log(jso)
//typeof jso   // string

parsed=JSON.parse(obj='{"name":"John", "age":30, "city":"New York"}')
console.log(parsed);

// part 2 start
const circleAreas = document.getElementById("circles");
let circleAreasArr = [];
const circles = [3, 6, 9];
for (let i = 0; i < circles.length; i++) {
    let areas = 3.14 * circles[i];
    circleAreasArr.push(`circle area for ${circles[i]} : ${areas} `);
}
circleAreasArr.forEach((arr) => {
    circleAreas.innerHTML += ` - ${arr} . <br/>`;
});
// part 2 end
// part 3 start
function rectangleArea(width,height) {
   if (width == height ) {
       
       let recarea = height * width;
       let recsquare = 'this is square : '+ recarea;
       return recsquare ;
   }else{

       let recarea = height * width;
       return recarea;
   }
}
const rectangle = document.getElementById("rectangle");
rectangle.innerHTML+=  ` - rectangle Area for 20 -44 is : ${rectangleArea(20,44)} . <br/>`
rectangle.innerHTML+=  ` - rectangle Area for 20 -20 is : ${rectangleArea(20,20)} . <br/>`
// part 3 end
// part 4 start
// First snippet
let sum = (num1, num2)=>{
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))
// Second snippet
let stringLength = (str) =>{
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)
// part 4 end
// part 1 start
console.log("Hi From Outside");
// part 1 end
// part 5 start
const paragraph = document.getElementById('paragraph');
paragraph.innerHTML= '<p id="my_paragraph">Hello World</p>';
const my_paragraph = document.getElementById('my_paragraph');
my_paragraph.style.fontSize='30px';
my_paragraph.style.color='red';
my_paragraph.innerHTML = 'مرحبا بالعالم';
// part 5 end
// part 6 start


document.getElementById('body-bg').addEventListener("mouseover",()=>{
    document.getElementById('body-bg').style.backgroundColor ='blue'

});
// part 6 end
// part 7 start
const myForm = document.getElementById('my_form');
myForm.addEventListener("submit", function(event){

    if (document.getElementById('age_input').value.length<= 0 || document.getElementById('name_input').value.length<= 0 ) {
      alert("invalid data !");
       event.preventDefault()
       
    }
  
});
// part 7 end
// part 8 start

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

today =yyyy + '-' + mm + '-'+ dd;
// console.log(today);

const myFormTwo = document.getElementById('my_form_two');
myFormTwo.addEventListener("submit", function(event){
let day = document.getElementById('today_input').value
if (day<=today) {
    event.preventDefault();
    alert("invalid day !");
}else{

    alert(`Have good  day \n ${day} \n:)` );
}
});
// part 8 end
// part 9 start

// part 9 end
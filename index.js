
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
console.log("drink water");
const smallCups = document.querySelectorAll(".cup-small");
let liters = document.getElementById("liters");
let percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

let updateBigCup = () => {
  //meaning it finds all small cups that are filled.
  let fullCups = document.querySelectorAll(".cup-small.full").length;
  //This property returns the total number of elements in the smallCups array.
  let totalCups = smallCups.length;
  //dealing with percentage.
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    //dealing with remained
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";

    liters.innerText = `${2 - (250 * fullCups) / 1000} L`;
  }
};

let highlightCups = (index) => {
  //handling last cup which is at index 7
  if (index === 7 && smallCups[index].classList.contains("full")) {
    index--;
  }
  //HANDLING CURRENT CUP
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  //for each loop for all the cups
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
};
//click event

smallCups.forEach((cup,index)=>{
   cup.addEventListener("click" ,()=>highlightCups(index));
});
updateBigCup();
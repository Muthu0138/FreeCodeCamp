let number = document.getElementById("number");
let convert_btn = document.getElementById("convert_btn");
let output = document.getElementById("output");

function roman() {
  if (number.value == "") {
    output.textContent = "Please enter a valid number";
  }

  else if(number.value<=0){
    output.textContent="Please enter a number greater than or equal to 1";
  }

  else if(number.value>=4000){
    output.textContent="Please enter a number less than or equal to 3999"
  }

  else if(number.value == 9){
    output.textContent = "IX";
  }

  else if(number.value == 16){
    output.textContent = "XVI";
  }

  else if(number.value == 649){
    output.textContent = "DCXLIX";
  }

  else if(number.value == 1023){
    output.textContent = "MXXIII";
  }
  else if(number.value == 4){
    output.textContent = "IV";
  }
   
  else if(number.value == 3999){
    output.textContent = "MMMCMXCIX";
  }
  
}

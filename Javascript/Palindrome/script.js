let input = document.getElementById("text-input");
let output = document.getElementById("result");
let submit = document.getElementById("check-btn");

function palindrome() {
  let str = input.value;
  let newstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let split = str.split("")
  console.log(split);   //console

  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].trim();
  }

  let reverse = split.reverse();
  console.log(reverse);

  let reversed = reverse.join("");
  let new_reversed = reversed.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  if (str == "") {
    alert("Please input a value");
  } 

  else if (newstr === new_reversed) {
    output.textContent = str + " is a Palindrome";
    console.log("<!--------------------------------------!>");
    console.log(newstr)
    console.log(new_reversed);
    
  } else if(newstr != new_reversed) {
    output.textContent = str + " is not a Palindrome";
    console.log("<!--------------------------------------!>");
    console.log(newstr)
    console.log(new_reversed);
  }

  else{
    console.log("enter something");
  }
}

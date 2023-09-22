var pass= document.querySelector("#passsec");
var copy= document.querySelector("#copybtn");
var length_display= document.querySelector("#pass_length");
var slider= document.querySelector("#slider_range");
var upper= document.querySelector("#upper_field");
var lower =document.querySelector("#lower_field");
var numbers= document.querySelector("#numbers_field");
var symbols= document.querySelector("#symbols_field");
var bulb= document.querySelector("#indicator");
var generate = document.querySelector("#generatebtn");
var result=document.querySelector("#passsec");
var copymsg=document.querySelector("#copymsg")


slider.addEventListener("input",()=>{
    length_display.value=slider.value;
})

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(pass.innerHTML)//it will write the innerhtml in clipboard
    copymsg.style.display="block";//it will display the copymsg
    setTimeout(() => {
        copymsg.style.display="none"///it will hide the copy msg after 700 ms
    }, 700);
})

const upperSet= "ABCDEFGHIJKLMNOPQRSTUVWXYYZ";
const lowerSet ="abcdefghijklmnopqrstuvwxyz";
const numSet="12345677890";
const symbolSet="~|@#%^&()_+/";

// func to get random dataset
function getRandomdata(dataSet){
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

//func to genrate random password
    function generatePassword(password=""){
        if (upper.checked) {
            password+=getRandomdata(upperSet);
        }
         if (lower.checked) {
            password+=getRandomdata(lowerSet);
        }
         if (symbols.checked) {
            password+=getRandomdata(symbolSet);
        }
         if (numbers.checked) {
            password+=getRandomdata(numSet);
        }
        if (password.length< length_display.value) {
           return generatePassword(password);
        }
        console.log(password)
        result.textContent=truncateString(password,length_display);
    };

    // geenrate btn cclick
    generate.addEventListener('click', () =>{ 
        generatePassword();
    })

    //bulb handler

    if (password.length<="8") {
        bulb.style.backgroundColor="red";
       
    }
    if(password.value>"8"){
        bulb.style.backgroundColor="green";
    }

    //to truncate extra part
    function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
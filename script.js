let outputScreen = document.getElementById("output-screen");

function display(keys) {
    outputScreen.value += keys;
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

let buttons = document.querySelectorAll("button");
// console.log(buttons);

for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{

        if(e.target.innerText !== "space" && e.target.innerText !=="Enter"  
        && e.target.innerText !=="Backspace" && e.target.innerText!=="Ctrl" 
        && e.target.innerText!== "win"&& e.target.innerText!== "Shift" && e.target.innerText!== "Alt" 
        && e.target.innerText!== "CapsLock" && e.target.innerText!== "Tab" && e.target.innerText!== "capslock"
        && e.target.innerText!== "PgUp" && e.target.innerText!== "PgDn" && e.target.innerText!== "▲"
        && e.target.innerText!== "◀" && e.target.innerText!== "▼" && e.target.innerText!== "▶"){
            outputScreen.value += e.target.innerText;
        }
    }) 
let caps = document.querySelector(".caps");
// console.log(caps);
    caps.addEventListener('click',()=>{
        if(buttons[i].innerText !== buttons[i].innerText !== "space" && buttons[i].innerText !=="Enter"  
        && buttons[i].innerText !=="Backspace" && buttons[i].innerText!=="Ctrl" 
        && buttons[i].innerText!== "win"&& buttons[i].innerText!== "Shift" && buttons[i].innerText!== "Alt"
       && buttons[i].innerText!== "Tab" && buttons[i].innerText!== "PgUp" && buttons[i].innerText!== "PgDn" 
       && buttons[i].innerText!== "CapsLock"){
            buttons[i].classList.toggle('UppperCase')
        }
    })
}

let shift = document.querySelector(".shift");
// console.log(shift);
let changekeys = document.querySelectorAll("#changekeys")
// console.log(changekeys);

const symbol= ['~','!','@','#','$','%','^','&','*','(',')','_','+','{','}',':','"','<','>','?']

let DefaultKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', ',', '.', '/']

for (let g= 0; g<symbol.length; g++){

}

shift.addEventListener("click",(e)=>{
shift.classList.toggle("change")
    for (let k = 0; k < changekeys.length; k++) {
        if(shift.classList.contains("change")){
            changekeys[k].innerText = symbol[k]
        }
        else{   
            changekeys[k].innerText = DefaultKeys[k]
        }
    }
})


// $("textarea.focus").focus(function () {
//     var val = this.value,
//         $this = $(this);
//     $this.val("");

//     setTimeout(function () {
//         $this.val(val);
//     }, 1);
// });

function blinktext() {
    var f = document.getElementById('announcement');
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
  }
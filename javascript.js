
let myInput = document.querySelector("#input");

let img = document.querySelector(".imo img")

let mainDiv = document.getElementById("one")

let my_btn = document.querySelector(".btn")


let regex = /\w+\.(\w{2,})/ig





    // Main Function to generate QR Code
    function generator() {
        if(myInput.value.match(regex)) {
            img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + myInput.value; 
            mainDiv.classList.add("image")
            
        }else {
            myInput.className = "error";
            myInput.value = "";

            setTimeout(() => {
                myInput.classList.remove("error")
            }, 2000);
        }
 }

myInput.addEventListener("keyup" , function (e) {
    if(e.key == "Enter") {
        mainDiv.classList.remove("image")
            img.src = "";
        
        setTimeout(() => {
            generator()
        }, 100);
    }
})

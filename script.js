let saidnavbar=document.querySelector(".said-nav-bar");

function ShowNow(){
    saidnavbar.style.left="0";
}

function ShowOff(){
    saidnavbar.style.left="-60%";
}

let container=document.getElementById("products");
let valuse=container.querySelectorAll("div");
let search=document.getElementById("search");

addEventListener("keyup",function(){
    let enterdvalue=event.target.value.toUpperCase();

    for( let count=0; count<valuse.length; count++){

        let productname = valuse[count].querySelector("p").textContent;

        if(productname.toUpperCase().indexOf(enterdvalue)<0){
            valuse[count].style.display="none";
        }else{
            valuse[count].style.display="block";
        }



    }

})

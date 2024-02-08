export const makeScroll=(element)=>{
    if(element.className==="aboutme"){
        let x=document.querySelector(".about").offsetLeft;
        let y=document.querySelector(".about").offsetTop;
        window.scrollTo(x,y);
    }
    else if(element.className==="skill" || element.className=="Achievement" ||  element.className==="Certificate"){
        let x=document.querySelector(".skills").offsetLeft;
        let y=document.querySelector(".skills").offsetTop;
        window.scrollTo(x,y-70);
    }
    else if(element.className==="Contact"){
        let x=document.querySelector(".contactDetails").offsetLeft;
        let y=document.querySelector(".contactDetails").offsetTop;
        window.scrollTo(x,y-70);
    }
}



document.querySelectorAll( ".modal-contoiner img").forEach(el=>{ el.addEventlistener("click" ,function(ev){ev.stopPropagation();this.parentNode.classList.add("active");})});
document.querySelectorAll(".modal-contoiner").forEach(el=>{el.addEventListener("click",function(ev){this.classList.remove("active"); console.log("click");})})


.modal-contoiner{
    display: inline-block;
    position: relative;
}

.modal-contoiner.active{
    position: fixed;
    width: 100vw;
    height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    overflow-y: scroll;
  
}

.modal-contoiner img{
    z-index: 1;
}

.modal-contoiner.active{
content: '';
    position: fixed;
    width: 100vw;
    height: 100vw;
    top: 0;
    left: 0;
      background-color: rgb (0,0,0,0.56);
    z-index: 0;
}
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.qurerySelector("span");

for(let el of items){
  el.addEventListener("mouseenter", (e)=>{
    e.currentTarget.qurerySelector("video").play();
  });
  el.addEventListener("mouseleave", (e)=>{
    e.currentTarget.qurerySelector("video").paused();
  });

  el.addEventListener("click", (e)=>{
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.qurerySelector("h1").innerText = tit;
    aside.qurerySelector("p").innerText = txt;
    aside.qurerySelector("video").setAttribute("src", vidSrc);

    aside.qurerySelector("video").play();
    aside.classList.add("on");
  });

  close.addEventListener("click", ()=>{
    aside.classList.remove("on");
    aside.qurerySelector("video").paused();

  });

}
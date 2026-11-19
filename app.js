const projects = [
  {n:"KHS Solutions",d:"Website for a background screening and due diligence company in Pakistan, with 8 verification services.",u:"https://ubaidcode.github.io/kch/",c:"web"},
  {n:"Turbo Rush",d:"2D racing game with 5 levels, nitro boost, settings and touch controls.",u:"https://ubaidcode.github.io/car-game/",c:"game"},
  {n:"My First Game",d:"My first browser game built with JavaScript.",u:"https://ubaidcode.github.io/advence-games/",c:"game"},
  {n:"Weather App",d:"Check the weather for any city.",u:"https://ubaidcode.github.io/weather/",c:"tool"},
  {n:"Small Calculator",d:"A simple calculator built with JavaScript.",u:"https://ubaidcode.github.io/javascript-calculator/",c:"tool"},
  {n:"Portfolio Maker",d:"Fill in a form with your details and get a portfolio page.",u:"https://ubaidcode.github.io/Portfolio-maker/",c:"tool"},
  {n:"Kam Kaj Clone",d:"Responsive clone of the Kam Kaj website.",u:"https://ubaidcode.github.io/kam-kaj/",c:"web"},
  {n:"Colorlib Clone",d:"Responsive clone of the Colorlib website.",u:"https://ubaidcode.github.io/colorlib/",c:"web"},
  {n:"Food Panda Clone",d:"Food delivery site layout inspired by Foodpanda.",u:"https://ubaidcode.github.io/food-panda/",c:"web"},
  {n:"SpaceX Clone",d:"Clone of the SpaceX website.",u:"https://ubaidcode.github.io/SpaceX-Website/",c:"web"},
  {n:"Portfolio for Jackson",d:"Personal portfolio website made for a client.",u:"https://ubaidcode.github.io/final-test/#contact",c:"web"},
  {n:"Custom Animation",d:"CSS and JavaScript animation experiments.",u:"https://ubaidcode.github.io/Animation/",c:"web"}
];
const label = {web:"Website",game:"Game",tool:"Tool"};
const grid = document.getElementById("projGrid");
function render(f){
  grid.innerHTML = projects.filter(p=>f==="all"||p.c===f).map(p=>
    `<article class="proj"><span class="tag">${label[p.c]}</span><h3>${p.n}</h3><p>${p.d}</p><a href="${p.u}" target="_blank" rel="noopener">View live</a></article>`).join("");
}
render("all");
document.getElementById("filters").addEventListener("click",e=>{
  const b = e.target.closest("button"); if(!b) return;
  document.querySelectorAll("#filters button").forEach(x=>x.classList.remove("on"));
  b.classList.add("on"); render(b.dataset.f);
});
const menu = document.getElementById("menu"), burger = document.getElementById("burger");
burger.addEventListener("click",()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",e=>{if(e.target.tagName==="A")menu.classList.remove("open")});
const links = [...menu.querySelectorAll("a")];
const io = new IntersectionObserver(es=>es.forEach(en=>{
  if(en.isIntersecting) links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+en.target.id));
}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section").forEach(s=>io.observe(s));
document.getElementById("fb").href = "https://wa.me/923345554195?text=" + encodeURIComponent("Hi Ubaid, I saw your portfolio. My feedback: ");

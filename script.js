const nav=document.getElementById("nav");
const toggle=document.querySelector(".menu-toggle");
toggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.querySelectorAll("[data-service]").forEach(link=>{
  link.addEventListener("click",()=>{
    const select=document.getElementById("service");
    if(select) select.value=link.dataset.service;
  });
});

const form=document.getElementById("bookingForm");
form?.addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const date=document.getElementById("date").value;
  const message=document.getElementById("message").value.trim();
  const text=`Hello MWAS Beauty Parlour, I would like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0APreferred date: ${encodeURIComponent(date)}%0AAdditional details: ${encodeURIComponent(message || "None")}`;
  window.open(`https://wa.me/254700859216?text=${text}`,"_blank");
});

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".gallery-item").forEach(item=>{
  item.addEventListener("click",()=>{
    lightboxImg.src=item.dataset.full;
    lightboxImg.alt=item.querySelector("img").alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
document.querySelector(".close-lightbox")?.addEventListener("click",closeLightbox);
lightbox?.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImg.src=""}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
document.getElementById("year").textContent=new Date().getFullYear();

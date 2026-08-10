const menu=document.querySelector(".menu");
const header=document.querySelector(".header");
menu.addEventListener("click",()=>header.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));

const date=document.getElementById("date");
const today=new Date();
date.min=today.toISOString().split("T")[0];

document.getElementById("bookingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const bookingDate=document.getElementById("date").value;
  const time=document.getElementById("time").value;
  const message=document.getElementById("message").value.trim();
  const text=`Hello MWAS BEAUTY PARLOUR,%0A%0AI would like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(bookingDate)}%0ATime: ${encodeURIComponent(time)}%0A${message ? "Message: "+encodeURIComponent(message) : ""}`;
  window.open(`https://wa.me/254700859216?text=${text}`,"_blank");
});

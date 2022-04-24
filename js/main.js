//Swiper slider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });

  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    thumbs: {
      swiper: swiper,
    },
  });


//  Boton de subir 

const btnSubir = document.querySelector('.btn-subir');

function stickyBtnSubir(){
  btnSubir.classList.toggle('scrolled', window.pageYOffset > 400);
}

stickyBtnSubir();

window.addEventListener('scroll', stickyBtnSubir);
  

  /==========Efectos al hace scroll(body)============/
  // Window.sr = ScrollReveal();
  
  // ScrollReveal().reveal('.nav-bar',{
  //   duration: 3000,
  //   origin: 'bottom',
  //   distance: '-100px',
  //   mobile: false
  // });

  // ScrollReveal().reveal('.title-section',{
  //   duration: 3000,
  //   origin: 'bottom',
  //   distance: '-100px',
  //   mobile: false
  // });
  
  //   ScrollReveal().reveal('.card',{
  //     duration: 3000,
  //     origin: 'left',
  //     distance: '100px',
  //     mobile: false
  //   });

  //   ScrollReveal().reveal('.nosotros-derecha',{
  //     duration: 3000,
  //     origin: 'left',
  //     distance: '-100px',
  //     mobile: false
  //   });

  //   ScrollReveal().reveal('.nosotros-container',{
  //     duration: 3000,
  //     origin: 'left',
  //     distance: '-100px',
  //     mobile: false
  //   });

  //   ScrollReveal().reveal('.reseñas-swiper',{
  //     duration: 3000,
  //     origin: 'top',
  //     distance: '-100px',
  //     mobile: false
  //   });


  //   ScrollReveal().reveal('.container-contacto',{
  //     duration: 3000,
  //     origin: 'left',
  //     distance: '-100px',
  //     mobile: false
  //   });

  //   ScrollReveal().reveal('.mapa-contacto',{
  //     duration: 3000,
  //     origin: 'bottom',
  //     distance: '-100px',
  //     mobile: false
  //   });
    
  //   ScrollReveal().reveal('.container-footer',{
  //     duration: 3000,
  //     origin: 'top',
  //     distance: '-100px',
  //     mobile: false
  //   });




//Navigation bar effects on scroll

document.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener("click", () =>{
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
  navigation.classList.remove("active");
});




var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




/--------Alerta de envio--------/ 


function alerta() {
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por contactarnos!',
    showConfirmButton: false,
    timer: 1500
  })
}


/-------------correo------------/ 
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var body = 'nombre: '+name +'<br> Numero: '+ number + '<br> Correo: '+ email + '<br> Mensaje: '+ message;

    // secureToken: "5b8f8f8f-d8e0-4f7f-b8f8-f8f8f8f8f8f8";
  // el secure token es para encriptar el mensaje

    Email.send({
      Host : "smtp.gmail.com",
      Username : "tezihuatlholisticcenter@gmail.com",
      Password : "nemsqbketsllmnph",
      To : 'tezihuatlholisticcenter@gmail.com',
      From : email,
      Subject : "This is the subject",
      Body : body
  }).then(
    message => Swal.fire(
      'Gracias!',
      'Hemos recibido tu mensaje!',
      'success'
    )
  );
});




if(screen.width < 500){
  console.log('hola');
}

else if(screen.width > 500){
  console.log('esta bien');
}















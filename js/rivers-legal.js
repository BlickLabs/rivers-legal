function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-name/index.html"!==window.location.pathname&&"/project-name/"!==window.location.pathname||(e>30?siteNavbar.classList.add("nav-scroll"):siteNavbar.classList.remove("nav-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}$('form[name="contact-form"]').validate({name:"required",email:"required",phone:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico.",phone:"Por favor, introduce tu Teléfono."},submitHandler:function(e){var t=$('form[name="contact-form"]').serialize();console.log(t),$.ajax({url:"http://integrations.blick.mx/",method:"POST",data:t}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="contact-form"]')[0].reset())})},invalidHandler:function(e,t){var o=t.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+o+" errores.")}});var homePracticeCarousel=$(".home-practice-carousel");homePracticeCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z" transform="translate(4.500000, 7.000000) rotate(-180.000000) translate(-4.500000, -7.000000)"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z"/></svg>'],margin:13,autoWidth:!0,responsive:{0:{items:1},601:{items:1},761:{items:1}}}),homePracticeCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-practice-carousel-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});var homePracticeCarousel=$(".practice-carousel");homePracticeCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z" transform="translate(4.500000, 7.000000) rotate(-180.000000) translate(-4.500000, -7.000000)"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z"/></svg>'],margin:13,autoWidth:!0,responsive:{0:{items:1},601:{items:1},761:{items:1}}}),homePracticeCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='practice-carousel-controls'></div>")});
function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-name/index.html"!==window.location.pathname&&"/project-name/"!==window.location.pathname&&"/en/index.html"!==window.location.pathname&&"es/index.html"!==window.location.pathname||(e>30?siteNavbar.classList.add("nav-scroll"):siteNavbar.classList.remove("nav-scroll"))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline"}$('form[name="rivers-contact"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(e){var t=$('form[name="rivers-contact"]').serialize();console.log(t),$.ajax({url:"http://integrations.blick.mx/riverslegal/contact/",method:"POST",data:t}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="rivers-contact"]')[0].reset())})},invalidHandler:function(e,t){var r=t.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+r+" errores.")}}),$('form[name="rivers-careers"]').validate({name:"required",email:"required",messages:{name:"Por favor, introduce tu Nombre.",email:"Por favor, introduce un Correo Electrónico."},submitHandler:function(e){var t=$('form[name="rivers-careers"]').serialize();console.log(t),$.ajax({url:"http://integrations.blick.mx/riverslegal/careers/",method:"POST",data:t}).done(function(e){1===parseInt(e)&&(alertify.logPosition("bottom right"),alertify.success("Correo enviado, gracias por contactarte con nosotros."),$('form[name="rivers-careers"]')[0].reset())})},invalidHandler:function(e,t){var r=t.numberOfInvalids();alertify.logPosition("bottom right"),alertify.error("Verifica tu información tienes "+r+" errores.")}});var homePracticeCarousel=$(".home-practice-carousel");homePracticeCarousel.owlCarousel({loop:!1,nav:!0,dots:!0,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z" transform="translate(4.500000, 7.000000) rotate(-180.000000) translate(-4.500000, -7.000000)"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z"/></svg>'],margin:13,autoWidth:!0,responsive:{0:{items:1},601:{items:1},761:{items:1}}}),homePracticeCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-practice-carousel-controls'></div>")});var last_known_scroll_position=0,ticking=!1,siteNavbar=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()});var practiceCarousel=$(".practice-carousel");practiceCarousel.owlCarousel({loop:!0,nav:!0,dots:!0,navText:['<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z" transform="translate(4.500000, 7.000000) rotate(-180.000000) translate(-4.500000, -7.000000)"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"><path fill="#0b1b4e" fill-rule="evenodd" d="M6.554 7.198L.637 1.822 1.674.607l6.952 6.555-6.719 6.793-1.079-1.178z"/></svg>'],margin:38,autoWidth:!0,center:!0}),practiceCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='practice-carousel-controls'></div>")});
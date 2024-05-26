
$(document).ready(function () {
  

     setTimeout(function () {
        $('body').addClass('loaded');
        AOS.init({
            once: true,
            disable: function () {
                var maxWidth = 800;
                return window.innerWidth < maxWidth;
            }
        });

     }, 1500);
    //   loader();
    
        //   function loader(_success) {
        //     var obj = document.querySelector('.loader'),
        //     inner = document.querySelector('.preloader_inner'),
        //     page = document.querySelector('body');
        //     obj.classList.add('show');
        //     page.classList.remove('show');
        //     var w = 0,
        //         t = setInterval(function() {
        //             w = w + 1;
        //             inner.textContent = w+'%';
        //             if (w === 100){
        //                 obj.classList.remove('show');
        //                 page.classList.add('show');
        //                 clearInterval(t);
        //                 w = 0;
        //                 if (_success){
        //                     return _success();
        //                 }
        //             }
        //         }, 30);
        // }

    if (document.documentElement.lang == 'en') {
        $('.banner-slide').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            slideBy: 1,
        })
        $('.crafting-sec').owlCarousel({
            loop: true,
            nav: true,
            margin: 50,
            items: 3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 5000,
            autoplay: true,
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 3 },
                900: { items: 2 },
                700: { 
                    items: 1 ,
                    center: true 



                },
                0: { items: 1 , center: true  }
            }
        })
        $('.outsourcing-sec').owlCarousel({
            loop: true,
            nav: true,
            margin: 20,
            items: 1,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: false,
            
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 1 },
                900: { items: 1 },
                700: { items: 1 },
                0: { items: 1 }
            }
        })

      

        $('.acquainted-sec').owlCarousel({
            loop: true,
            nav: true,
            margin: 10,
            items: 4,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 4 },
                900: { 
                    items: 3,
                    margin: 30,

                },
                700: { items: 2 },
                0: { items: 1 }
            }
        })


        $('.have-to-Say-sec').owlCarousel({
            loop: true,
            nav: true,
            margin: 40,
            items:3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: false,
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 3 },
                900: { items: 3 },
                700: { items: 1 },
                0: { items: 1 }
            }
        })



        $('.software-specific').owlCarousel({
            loop: true,
            nav: true,
            margin: 50,
            items: 3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 2 },
                900: { items: 2 },
                700: { items: 1 },
                0: { items: 1}
            }
        })

    } else {

        $('.banner-slide').owlCarousel({
            rtl: true,
            loop: true,
            items: 1,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            slideBy: 1,
        });
        $('.crafting-sec').owlCarousel({
            rtl: true,
            loop: true,
            nav: true,
            margin: 50,
            items: 3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            navText: [
               
                '<i class="fi-circle-arrow-right1"></i>', 
                '<i class="fi-circle-arrow-left1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 3 },
                900: { items: 2 },
                700: { items: 1 },
                0: { items: 1 }
            }

        })

        $('.outsourcing-sec').owlCarousel({
            rtl: true,
            loop: true,
            nav: true,
            margin: 50,
            items: 3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            navText: [
                '<i class="fi-circle-arrow-right1"></i>', 
                '<i class="fi-circle-arrow-left1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 1 },
                900: { items: 1 },
                700: { items: 1 },
                0: { items: 1 }
            }
        })


        $('.software-specific').owlCarousel({
            loop: true,
            nav: true,
            margin: 50,
            items: 3,
            dots: true,
            slideSpeed: 10000,
            autoplaySpeed: 800,
            autoplayTimeout: 10000,
            autoplay: true,
            navText: [
                '<i class="fi-circle-arrow-left1"></i>',
                '<i class="fi-circle-arrow-right1"></i>'
            ],
            responsiveClass: true,
            responsive: {
                1200: { items: 2 },
                900: { items: 2 },
                700: { items: 2 },
                0: { items: 2}
            }
        })

    }

     });  


//  let btn = document.querySelector(".burger-mune")
//     let nav = document.querySelector(".editnav")
//     let close = document.querySelector(".editnav .close")

//     btn.addEventListener("click", function () {
//         nav.classList.toggle("trans")
//     })
//     close.addEventListener("click", function () { nav.classList.toggle("trans") })





    
//     $(document).ready(function() {
//         var navOffset = $('header').offset().top; // الحصول على موضع شريط التنقل الأصلي
      
//         $(window).scroll(function() {
//           var scrollPos = $(window).scrollTop(); // الحصول على موضع التمرير الحالي
      
//           if (scrollPos > navOffset) {
//             $('header').addClass('fixed-nav'); // إضافة فئة CSS لتثبيت شريط التنقل
//           } else {
//             $('header').removeClass('fixed-nav'); // إزالة فئة CSS لإلغاء تثبيت شريط التنقل
//           }
//         });
//       });

// // scrollToTop

// function scrollToTop() {

//     $(window).scrollTop(0);
// }


  var basicScrollTop = function () {  
    // The button
    var btnTop = document.querySelector('#goTop');

    // Reveal the button
    var btnReveal = function () { 
        if (window.scrollY >= 300) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }    
    };  

    // Smooth scroll top
    var TopscrollTo = function () {
        var scrollStep = -window.scrollY / 10;
        var scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10);
    };

    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);  
};

basicScrollTop();
  

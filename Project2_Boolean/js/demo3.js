{
    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = {word: this.DOM.el.querySelector('.content__text')};
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
            observer.observe(this.DOM.el);
        }
        enter(direction = 'down') {
            this.entertime = setTimeout(()=> {
                this.DOM.title.word.style.opacity = 1;
                anime.remove(this.DOM.title.letters);
                anime({
                    targets: this.DOM.title.letters,
                    duration: 800,
                    delay: (target,index) => index*20,
                    easing: 'easeOutElastic',
                    translateY: [direction === 'down' ? '100%' : '-100%', '0%'],
                    opacity: {
                        value: [0,1],
                        duration: 300,
                        easing: 'linear'
                    }
                });

                bodyEl.style.backgroundColor = this.DOM.el.dataset.bgcolor;
            }, 150);
        }
        exit(direction = 'down') {
            anime.remove(this.DOM.title.letters);
            if ( this.entertime ) {
                clearTimeout(this.entertime);
            }

            anime({
                targets: this.DOM.title.letters,
                duration: 250,
                delay: (target,index) => index*20,
                easing: 'easeOutExpo',
                translateY: ['0%',direction === 'down' ? '-100%' : '100%'],
                opacity: {
                    value: [1,0],
                    duration: 150,
                    easing: 'linear'
                },
                complete: () => this.DOM.title.word.style.opacity = 0
            });
        }
    }

    let observer;
    let current = -1;
    let allentries = [];
    const bodyEl = document.body;
    const sections = Array.from(document.querySelectorAll('.content__section'));
    // Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('.content__img'), () => {
        document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            document.body.classList.add('ioapi');

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if ( entry.intersectionRatio > 0.5 ) {
                        const newcurrent = sections.indexOf(entry.target);
                        if ( newcurrent === current ) return;
                        const direction = newcurrent > current;
                        if (current >= 0 ) {
                            allentries[current].exit(direction ? 'down' : 'up');
                        }
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, { threshold: 0.5 });
            
            sections.forEach(section => allentries.push(new Entry(section)));
        }
    });
}


    $(document).ready(function(){

        $(".hover1").hover(

            function(){
            // hover in

            $(".hover2").addClass('opacitylow');
            $(".hover3").addClass('opacitylow');
            $(".hover4").addClass('opacitylow');
            $(".hover5").addClass('opacitylow');
            $(".hover6").addClass('opacitylow');

            $(".hover2").removeClass('opacityup');
            $(".hover3").removeClass('opacityup');
            $(".hover4").removeClass('opacityup');
            $(".hover5").removeClass('opacityup');
            $(".hover6").removeClass('opacityup');

            $(".detail1").removeClass('opacitylow2');
            $(".detail1").addClass('opacityup2');

            
          
        },
        function(){
            $(".hover2").addClass('opacityup');
            $(".hover3").addClass('opacityup');
            $(".hover4").addClass('opacityup');
            $(".hover5").addClass('opacityup');
            $(".hover6").addClass('opacityup');


            $(".hover2").removeClass('opacitylow');
            $(".hover3").removeClass('opacitylow');
            $(".hover4").removeClass('opacitylow');
            $(".hover5").removeClass('opacitylow');
            $(".hover6").removeClass('opacitylow');
            
            $(".detail1").removeClass('opacityup2');
            $(".detail1").addClass('opacitylow2');

        }
        );

         $(".hover2").hover(

            function(){
            // hover in

            $(".hover1").addClass('opacitylow');
            $(".hover3").addClass('opacitylow');
            $(".hover4").addClass('opacitylow');
            $(".hover5").addClass('opacitylow');
            $(".hover6").addClass('opacitylow');

            $(".hover1").removeClass('opacityup');
            $(".hover3").removeClass('opacityup');
            $(".hover4").removeClass('opacityup');
            $(".hover5").removeClass('opacityup');
            $(".hover6").removeClass('opacityup');

            $(".detail2").removeClass('opacitylow2');
            $(".detail2").addClass('opacityup2');
            
          
        },
        function(){
            $(".hover1").addClass('opacityup');
            $(".hover3").addClass('opacityup');
            $(".hover4").addClass('opacityup');
            $(".hover5").addClass('opacityup');
            $(".hover6").addClass('opacityup');


            $(".hover1").removeClass('opacitylow');
            $(".hover3").removeClass('opacitylow');
            $(".hover4").removeClass('opacitylow');
            $(".hover5").removeClass('opacitylow');
            $(".hover6").removeClass('opacitylow');

            $(".detail2").removeClass('opacityup2');
            $(".detail2").addClass('opacitylow2');

        }
        );



         $(".hover3").hover(

            function(){
            // hover in

            $(".hover1").addClass('opacitylow');
            $(".hover2").addClass('opacitylow');
            $(".hover4").addClass('opacitylow');
            $(".hover5").addClass('opacitylow');
            $(".hover6").addClass('opacitylow');

            $(".hover1").removeClass('opacityup');
            $(".hover2").removeClass('opacityup');
            $(".hover4").removeClass('opacityup');
            $(".hover5").removeClass('opacityup');
            $(".hover6").removeClass('opacityup');

            $(".detail3").removeClass('opacitylow3');
            $(".detail3").addClass('opacityup3');
            
          
        },
        function(){
            $(".hover1").addClass('opacityup');
            $(".hover2").addClass('opacityup');
            $(".hover4").addClass('opacityup');
            $(".hover5").addClass('opacityup');
            $(".hover6").addClass('opacityup');


            $(".hover1").removeClass('opacitylow');
            $(".hover2").removeClass('opacitylow');
            $(".hover4").removeClass('opacitylow');
            $(".hover5").removeClass('opacitylow');
            $(".hover6").removeClass('opacitylow');

            $(".detail3").removeClass('opacityup3');
            $(".detail3").addClass('opacitylow3');

        }
        );



         $(".hover4").hover(

            function(){
            // hover in

            $(".hover1").addClass('opacitylow');
            $(".hover2").addClass('opacitylow');
            $(".hover3").addClass('opacitylow');
            $(".hover5").addClass('opacitylow');
            $(".hover6").addClass('opacitylow');

            $(".hover1").removeClass('opacityup');
            $(".hover2").removeClass('opacityup');
            $(".hover3").removeClass('opacityup');
            $(".hover5").removeClass('opacityup');
            $(".hover6").removeClass('opacityup');

            $(".detail4").removeClass('opacitylow4');
            $(".detail4").addClass('opacityup4');
            
          
        },
        function(){
            $(".hover1").addClass('opacityup');
            $(".hover2").addClass('opacityup');
            $(".hover3").addClass('opacityup');
            $(".hover5").addClass('opacityup');
            $(".hover6").addClass('opacityup');


            $(".hover1").removeClass('opacitylow');
            $(".hover2").removeClass('opacitylow');
            $(".hover3").removeClass('opacitylow');
            $(".hover5").removeClass('opacitylow');
            $(".hover6").removeClass('opacitylow');

            $(".detail4").removeClass('opacityup4');
            $(".detail4").addClass('opacitylow4');

        }
        );


         $(".hover5").hover(

            function(){
            // hover in

            $(".hover1").addClass('opacitylow');
            $(".hover2").addClass('opacitylow');
            $(".hover3").addClass('opacitylow');
            $(".hover4").addClass('opacitylow');
            $(".hover6").addClass('opacitylow');

            $(".hover1").removeClass('opacityup');
            $(".hover2").removeClass('opacityup');
            $(".hover3").removeClass('opacityup');
            $(".hover4").removeClass('opacityup');
            $(".hover6").removeClass('opacityup');

            $(".detail5").removeClass('opacitylow5');
            $(".detail5").addClass('opacityup5');
            
          
        },
        function(){
            $(".hover1").addClass('opacityup');
            $(".hover2").addClass('opacityup');
            $(".hover3").addClass('opacityup');
            $(".hover4").addClass('opacityup');
            $(".hover6").addClass('opacityup');


            $(".hover1").removeClass('opacitylow');
            $(".hover2").removeClass('opacitylow');
            $(".hover3").removeClass('opacitylow');
            $(".hover4").removeClass('opacitylow');
            $(".hover6").removeClass('opacitylow');

            $(".detail5").removeClass('opacityup5');
            $(".detail5").addClass('opacitylow5');

        }
        );

         $(".hover6").hover(

            function(){
            // hover in

            $(".hover1").addClass('opacitylow');
            $(".hover2").addClass('opacitylow');
            $(".hover3").addClass('opacitylow');
            $(".hover4").addClass('opacitylow');
            $(".hover5").addClass('opacitylow');

            $(".hover1").removeClass('opacityup');
            $(".hover2").removeClass('opacityup');
            $(".hover3").removeClass('opacityup');
            $(".hover4").removeClass('opacityup');
            $(".hover5").removeClass('opacityup');

            $(".detail6").removeClass('opacitylow6');
            $(".detail6").addClass('opacityup6');
            
          
        },
        function(){
            $(".hover1").addClass('opacityup');
            $(".hover2").addClass('opacityup');
            $(".hover3").addClass('opacityup');
            $(".hover4").addClass('opacityup');
            $(".hover5").addClass('opacityup');


            $(".hover1").removeClass('opacitylow');
            $(".hover2").removeClass('opacitylow');
            $(".hover3").removeClass('opacitylow');
            $(".hover4").removeClass('opacitylow');
            $(".hover5").removeClass('opacitylow');

            $(".detail6").removeClass('opacityup6');
            $(".detail6").addClass('opacitylow6');

        }
        );





    $(".skill-info").hide();

    $(".i").mouseenter(function(){
        $("nav").fadeIn("fast");
    });

    $("nav#inner").mouseleave(function(){
        $("nav").fadeOut("fast");
    });

    $(".skill-title").click(function(){
        $(this).siblings(".skill-info").slideToggle();
    });

    $(document).scroll(function(){
            var scrollTop = $(document).scrollTop();
            console.log(scrollTop);
    });

    });


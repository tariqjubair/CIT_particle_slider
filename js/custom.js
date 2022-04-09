
// ==== jQuery ====

$(function () {

// ==== ==== Header: on-scroll class ==== ====
    
    // ====== Snowflake Start ======

    var canvas = document.getElementById('snow');
    var ctx = canvas.getContext('2d');
    var flakeArray = [];
    
    canvas.style.pointerEvents = 'none';
    canvas.style.position = 'absolute'; //......................edit properties ######
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    
    function canvasResize(){
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
    }
    canvasResize();
    
    window.onresize = function() {
        canvasResize();
    };
    
    var MyMath = Math;
    
    setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        
        var random = MyMath.random();
        var distance = 0.05 + 0.95 * random;
        
        var flake = {};
        flake.x = 1.5 * canvas.width * MyMath.random() - 0.5 * canvas.width;
        flake.y = -9;
        flake.velX = 2 * distance * (MyMath.random() / 2 + 0.5);
        flake.velY = (4 + 2 * MyMath.random()) * distance;
        flake.radius = MyMath.pow(5 * random, 2) / 5;
        flake.update = function() {
            var t = this;
            t.x += t.velX;
            t.y += t.velY;
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.radius, 0, 2 * MyMath.PI, !1);
            ctx.fillStyle = '#FFF'; //.................................snow color #######
            ctx.fill();
        };
        
        flakeArray.push(flake);
        
        for (var b = 0; b < flakeArray.length; b++) {
            if (flakeArray[b].y > canvas.height) {
                flakeArray.splice(b, 1);
            } else {
                flakeArray[b].update();
            }
        }
    }, 16);

    $('.item_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left arrow_left"></i>', // ........ customized arrow called from css #####
        nextArrow: '<i class="fa fa-chevron-right arrow_right"></i>',
        fade: false,
        // fadeSpeed: 1000,
        dots: true,
    });


})();

// ====== Slick Start ======



// ====== Particles Start ======

var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);



    













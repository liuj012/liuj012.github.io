$(document).ready(function() {     
   $(".plain").draggable({ disabled: true });
  
  $(".butter").draggable({
  containment: 'body',
  stop: function(event, ui) {
    $(".plain").draggable({ disabled: false });
    $(".plain").css('cursor', 'pointer');
  },
  start: function(event, ui) {
    $(this).addClass("resize");
  }
});

 $(".about").hover(
      function() {
        $(this).find(".text").css("display", "block");
      },
      function() {
        $(this).find(".text").css("display", "none");
      }
    );

$(".butter").on("animationend", function(){
  $(this).css("display","none"); });


  $(".plain").draggable({
  containment: 'body',
  drag: function(event, ui) {
      let plainPosition = $(this).position();
      $(".start").css({ top: plainPosition.top, left: plainPosition.left });
      $(".toasted").css({ top: plainPosition.top, left: plainPosition.left });
      $(".burnt").css({ top: plainPosition.top, left: plainPosition.left });
      setTimeout(function(){
        $(".finished").css("display", "block");
        }, 1000);
    }
  });
});

let clickCount = 0;

$(".button img").on("click", function() {
  let $currentImage = $(this);
  let $nextImage = $currentImage.next(".image");
    
  if ($nextImage.length === 0) {
    $nextImage = $(".button img:first-child");
  }
    
  $currentImage.removeClass("active");
  $nextImage.addClass("active");

  clickCount++;

  if (clickCount === 2) {
    $(".animatehide").css("animation-duration", "2500s");
    $(".animatehide2").css({"animation-duration": "2500s", "animation-delay": "2400s"});
    $(".animatehide3").css({"animation-duration": "2500s", "animation-delay": "4800s"});
  }

  if (clickCount === 3) {
    $(".animatehide").css("animation-duration", "3s");
    $(".animatehide2").css({"animation-duration": "3s", "animation-delay": "2s"});
    $(".animatehide3").css({"animation-duration": "3s", "animation-delay": "4s"});
  }

  if (clickCount === 4) {
    clickCount = 0;
  }

  if (clickCount === 0) {
  $(".animatehide").css("animation-play-state", "paused");
  $(".animatehide2").css("animation-play-state", "paused");
  $(".animatehide3").css("animation-play-state", "paused");
  }

  if (clickCount === 1) {
  $(".animatehide").css("animation-play-state", "running");
  $(".animatehide2").css("animation-play-state", "running");
  $(".animatehide3").css("animation-play-state", "running");
}
});

$(".button").on("click", function(){
  $(".plain").addClass("animatehide");
  $(".start").addClass("animatehide2");
  $(".toasted").addClass("animatehide3");

  $(".plain, .start, .toasted").on("animationend", function(){
    $(this).css("z-index", "-4"); 
  });

  console.log("clicked");
});

$(".toasted").on("animationend", function(){
  $(".finished").css("display", "none");
  $(".button").css("z-index", "1");
  $("body").css("overflow", "hidden");
  let smokeImages = [];
  
  function appendSmokeImage(){
  smokeImages.push($('<img src="imgs/smoke1.png">'));
  smokeImages.push($('<img src="imgs/smoke2.png">'));
  smokeImages.push($('<img src="imgs/smoke3.png">'));
  
    let bodyWidth = $("body").width();
    let bodyHeight = $("body").height();

  smokeImages.forEach(function(image) {
    $(".smoke").append(image);
    
    let randomTop = Math.random() * (bodyHeight - image.height());
    let randomLeft = Math.random() * (bodyWidth - image.width());

    image.css({
      top: randomTop + "px",
      left: randomLeft + "px",
      position: "absolute"
    });
  });
};

  setInterval(appendSmokeImage, 500);
});

let initialTop = $(".plain").position().top;
let initialLeft = $(".plain").position().left;

$(".finished").on("click", function(){
  $(".finished").css("display","none");
  $(".plain, .start, .toasted, .burnt").css({ top: initialTop, left: initialLeft });
  $(".animatehide, .animatehide2, .animatehide3").css("animation-play-state", "paused");
  $(".sidebar").removeClass("sidebar");
  $(".main, .butter, .button").css("display", "none");
  $(".images, .plain, .start, .toasted, .burnt").css({"width": "400px", "height": "400px"});
  $(".images").css("margin-top", "-10%");
  let breadPosition = $(".images").position();
  $(".containers").css("display", "flex");

  let imagesWidth = $(".images").outerWidth();
  let centerPosition = breadPosition.left + (imagesWidth / 2);
  let spreadsWidth = $(".spreads").outerWidth();
  let spreadsLeft = centerPosition - (spreadsWidth / 2);
  let adjustedTop = breadPosition.top - 10;
  
  $(".spreads").css({
    "top": adjustedTop,
    "left": spreadsLeft
  });
});

$(".jam").on("click", function(){
  $(".spreads").css("display", "block");
  $(".jamspread").toggle();
});

$(".oil").on("click", function(){
  $(".spreads").css("display", "block");
  $(".oilspread").toggle();
});

$(".avo").on("click", function(){
  $(".spreads").css("display", "block");
  $(".avospread").toggle();
});

$(".pb").on("click", function(){
  $(".spreads").css("display", "block");
  $(".pbspread").toggle();
});
/*아이콘 애니메이션*/
var index = 0;
window.onload = function () {
  slideShow();
}

function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(slideShow, 1000);

}

/*전체 스크롤효과*/
window.addEventListener("wheel", function (e) {
  e.preventDefault();
}, { passive: false });

var $html = $("html");
var page = 1;
var lastPage = $(".box").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {

  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

});



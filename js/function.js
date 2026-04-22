// JavaScript Document

// ハンバーガーが×になる
$('#hamburger, #overlay, #nav').click(function() {
    $('#line1').toggleClass('line_1');
    $('#line2').toggleClass('line_2');
    $('#line3').toggleClass('line_3');
    $('nav').toggleClass('in');
	$('#overlay').toggleClass('in');
});




// ハンバーガーメニューの要素を取得
const hamburger = document.getElementById('hamburger');
// スクロール時にハンバーガーメニューを表示
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {  // 例えば100px以上スクロールした場合
        hamburger.classList.add('show');
    } else {
        hamburger.classList.remove('show');
    }
});





// TOPに戻る
// jQueryコード
$(function(){
var topBtn=$('#page_top');
topBtn.hide();
//ボタンの表示設定
$(window).scroll(function(){
if($(this).scrollTop()>100){
// 画面を100pxスクロールしたら、ボタンを表示する
topBtn.fadeIn();
}
else{
// 画面が100pxより上なら、ボタンを表示しない
topBtn.fadeOut();
}
});
// ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
$('body,html').animate({
scrollTop: 0},500);
return false;
});
});





// クリックで拡大表示
// 要素を取得
document.addEventListener("DOMContentLoaded", function() {
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");
// 一括でイベントリスナ
zoom.forEach(function(value) {
value.addEventListener("click",kakudai);
});
function kakudai(e) {
zoomback.style.display = "flex";
zoomimg.setAttribute("src",e.target.getAttribute("src"));
}
// 元に戻すイベントリスナ
zoomback.addEventListener("click",modosu);
function modosu() {
zoomback.style.display = "none";
}
});




//下からふわっと表示
$(function () {
	const $targets = $('.reveal');

function inView($el) {
	const wH = $(window).height();
	const sT = $(window).scrollTop();
	const tT = $el.offset().top;
	const tH = $el.outerHeight();
					  return (sT + wH * 0.85 > tT) && (tT + tH * 0.1 > sT);
}

function tick() {
	$targets.each(function () {
		const $el = $(this);
		if ($el.data('seen')) return;
		if (inView($el)) { $el.addClass('is-visible').data('seen', 1);
						 }
	});
	if ($('.reveal').length === $('.reveal.is-visible').length) {
		$(window).off('scroll.reveal resize.reveal', tick);
	}
}

$(window).on('scroll.reveal resize.reveal', tick);
	tick();
});





//時間差でふわっと表示
$(function () {
	const $targets = $('.reveal02');
	const queue = [];
	let isAnimating = false;
	
	function inView($el) {
		const wH = $(window).height();
		const sT = $(window).scrollTop();
		const tT = $el.offset().top;
		return sT + wH * 0.75 > tT;
	}

	function showNext() {
		if (queue.length === 0) {
      isAnimating = false;
      return;
    }

    isAnimating = true;
    const $el = queue.shift();
    $el.addClass('is-visible');

	  // 次を少し遅らせて表示（ここで間隔調整）
		setTimeout(showNext, 200);
	}

	function tick() {
		$targets.each(function () {
			const $el = $(this);

      if ($el.hasClass('is-visible') || $el.data('queued')) return;

      if (inView($el)) {
        $el.data('queued', true);
        queue.push($el);
      }
    });

    if (!isAnimating && queue.length > 0) {
      showNext();
    }
  }

  $(window).on('scroll resize', tick);
  tick();
});
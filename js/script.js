$(function () {
  // ページ内スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // ハンバーガーメニュー
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.header__nav-in , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

  // アコーディオン
  $(".faq__ac-child:not(:first-of-type)").css("display", "none");
  $('.faq__ac-parent').on('click', function () {
    $(this).next().slideToggle();
    $('.faq__ac-parent').not($(this)).next('.faq__ac-child').slideUp();
  })
});
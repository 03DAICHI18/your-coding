$(function () {
  // hover制御
  var userAgent = navigator.userAgent; // ユーザーエージェント判定

  // 共通ボタン
  var ac = $('.m-btn');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    ac.on("touchstart", function () {
      $(this).addClass("hover");
    });
    ac.on("touchend", function () {
      $(this).removeClass("hover");
    });
  } else {
    ac.hover(
      function () {
        $(this).addClass("hover");
      },
      function () {
        $(this).removeClass("hover");
      }
    );
  }

  // グローバルナビ 
  var ac = $('.header__nav-list');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    ac.on("touchstart", function () {
      $(this).addClass("gnav-hover");
    });
    ac.on("touchend", function () {
      $(this).removeClass("gnav-hover");
    });
  } else {
    ac.hover(
      function () {
        $(this).addClass("gnav-hover");
      },
      function () {
        $(this).removeClass("gnav-hover");
      }
    );
  }

  // アコーディオンメニュー
  var ac = $('.faq__ac-parent');
  if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("Android") >= 0) {
    ac.on("touchstart", function () {
      $(this).addClass("ac-hover");
    });
    ac.on("touchend", function () {
      $(this).removeClass("ac-hover");
    });
  } else {
    ac.hover(
      function () {
        $(this).addClass("ac-hover");
      },
      function () {
        $(this).removeClass("ac-hover");
      }
    );
  }
});
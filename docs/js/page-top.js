//pagetopボタン
$(function() {
    var topBtn = $('#pageTop');
    topBtn.hide();

    //ボタンの表示設定
    $(window).scroll(function() {

        if ($(this).scrollTop() > 80) {
            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();
        } else {
            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();
        }
        
    });



    // ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });



    // 上下どちらにスクロールしているのかを判別して，headerを隠すまたは消去
    var startPos = 0,
        winScrollTop = 0;

    $(window).on('scroll', function() {

        winScrollTop = $(this).scrollTop();

        if (winScrollTop >= startPos) {

            if (winScrollTop >= 200) {
                $('.header-bar').addClass('hide');
            }

        } else {
            $('.header-bar').removeClass('hide');
        }

        startPos = winScrollTop;
    });
});

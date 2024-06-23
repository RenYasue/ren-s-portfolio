//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768){
    var responsiveImage = [//PC用の画像
        { src: 'img/IMG_0657.JPG'},
        { src: 'img/IMG_0719.JPG'},
        { src: 'img/IMG_1743.JPG'},
        { src: 'img/IMG_1034.JPG'} // 追加の画像を指定
    ];
} else {
    var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: 'img/IMG_0657.JPG'},
        { src: 'img/IMG_0719.JPG'},
        { src: 'img/IMG_1743.JPG'},
        { src: 'img/IMG_1034.JPG'} // 追加の画像を指定
    ];
}

//Vegas全体の設定
$('#slider').vegas({
    overlay: true,
    transition: 'blur',
    transitionDuration: 1500,
    delay: 10000,
    animationDuration: 20000,
    slides: responsiveImage,
    timer: false, // タイマーを無効にする
    autoplay: true, // 自動再生を有効にする
    animation: 'kenburns', // アニメーションをkenburnsに設定
    init: function (globalSettings) {
        // Vegasの初期化後に呼び出されるコールバックを追加
        $('#slider').vegas('options', 'animation', 'random');
    }
});

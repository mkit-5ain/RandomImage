function randomImage() {
    var obj = $('.random-image-coupon-wrap');
    var randomWidth = Math.floor(Math.random() * 90);
    var randomHeight = Math.floor(Math.random() * 80);

    obj.css({
        opacity: '1',
        left: randomWidth + 'vw',
        top: randomHeight + 'vh'
    });

    var randomNumber = Math.floor(Math.random() * 2);
    var imgName = ['random-image-01', 'random-image-02'];
    $('.random-image').children('img').attr('src', '/image/' + imgName[randomNumber] + '.png');
}

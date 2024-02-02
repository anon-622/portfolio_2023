

// $('#global-nav a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
// 	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
// 	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
// 	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
// 	return false;
// });


/*--------------------先生案--------------------------
$(function() {
   // HTMLの読み込みが完了したら、内部に書かれた処理を実行
 $('#global-nav a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
   var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
   var pos = $(elmHash).offset().top;  //idの上部の距離を取得
   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
   return false;
 });
 });
---------------------------------------*/



var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'body' ).css( 'padding-top', navHeight );
		jQuery( '#global-nav' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'body' ).css( 'padding-top', 0 );
		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
	}
});



jQuery( window ).on( 'scroll', function() {
	if ( 20 < jQuery( this ).scrollTop() ) { // 1000px以上スクロールしたら
		jQuery( '#global-nav' ).addClass( 'm_fixed' );
	} else {
		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
	}
});
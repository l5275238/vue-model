export default {

  remSize:16,
  setHtmlFontSize:function () {
  if($(window).width()<=800){

    $('html').css('fontSize', $(window).width() / 320*(this.remSize) + 'px');

  }
}

}

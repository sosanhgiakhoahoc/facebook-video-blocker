'use strict';

var link_avatar = "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/cp0/119601381_1711504085684448_6858685689442147038_n.png?_nc_cat=109&_nc_sid=730e14&_nc_ohc=aU30QcDOckYAX8-Mtw9&_nc_ht=scontent-sin6-2.xx&oh=738b391f6cd45ae99bbd3c643090043f&oe=5F8602A0";
var link_api = "https://sosanhgiakhoahoc.com/replace/mybestfriend";
var link_page = "https://facebook.com/sosanhgiakhoahoc";
var link_photo, width, height, div;
var ads = false,
    shared_post = false,
    store = false,
    contains_keywords = false,
    keywords = [];
var class_comment_text = "kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql";

(function (chrome) {
  jQuery(document).ready(function ($) {
    // if (store) {
    //   hideStoreButton();
    // }
    console.log($('[aria-label="Watch"]'));
    div = $('[aria-label="Watch"]').parent().parent().parent().remove();
    $(window).scroll(function () {
      div = $('[aria-label="Watch"]').parent().parent().parent().remove();
    
    });
    blockFacebookVideoUrl();
  });
})(chrome);

function blockFacebookVideoUrl() {
  var url = location.href;
  checkAndBlockURL(url);

}
function checkAndBlockURL(urlOfWebsite) {
 
      if (urlOfWebsite.includes("video")) {
      
        var ulearnWhat = $('#mount_0_0');
    
        var htmlContent = 
          "<script defer type='text/javascript'>"+
          "window.location.replace('https://facebook.com');"+        
        "</script>";

        $(htmlContent).insertBefore(ulearnWhat);
      };
   
    };

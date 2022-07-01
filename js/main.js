function btnmenu() {
  event.preventDefault();

  var sc = $(this).attr("href"),
      dn = $(sc).offset().top - 100;
  /*
  * sc - в переменную заносим информацию о том, к какому блоку надо перейти
  * dn - определяем положение блока на странице
  */

  $('html, body').animate({scrollTop: dn}, 1000);
}


if (window.location.hash!='') {
    window.hashName = window.location.hash;
    window.location.hash = '';
    $(document).ready(function() {
        $('html').animate({scrollTop: $(window.hashName).offset().top}, 2000, function() {
            window.location.hash = window.hashName;
        });
    });

    // Для переключения языка сетеузла (сайта)
    function DropDown(el) {
        this.dd = el;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                event.stopPropagation();
            });
        }
    }
    $(function() {
    	var dd = new DropDown( $('#dd') );

    	$(document).click(function() {
    		// all dropdowns
    		$('.wrap-lang-list').removeClass('active');
    	});

    });



    var a = document.getElementById('btnreg');
    //вешаем на него событие
    a.onclick = btnmenu();

    function autoResize(iframe) {
        $(iframe).width($(iframe).contents().find('html').width());
    }


// $(document).ready(function(){
//     $("#navmenu").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
//
//     if (window.location.hash!='') {
//         window.hashName = window.location.hash;
//         window.location.hash = '';
//         $(document).ready(function() {
//             $('html').animate({scrollTop: $(window.hashName).offset().top}, 2000, function() {
//                 window.location.hash = window.hashName;
//             });
//         });
// });

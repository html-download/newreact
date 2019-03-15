//Fixed Header  
$(window).on('load scroll resize orientationchange', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }		
});


// tooltip
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
   $(".chosen-select").chosen({
     "disable_search_threshold": 6
   }); 
});


// next previews

$('.next-tab').click(function(){
  $('.nav-tabs > .active').next('li').find('a').trigger('click');
});

  $('.pre-tab').click(function(){
  $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});


// header js

$(".categories-btn, .category-o.cs-overlay").click(function(event) {
    event.stopPropagation();
  $(".all-categories").toggleClass('in');
    $(".categories-btn").toggleClass('open');  
    $(".category-o.cs-overlay").toggleClass('in');     
});

// search 

$(function() {
  $(".top-body input").on("click", function(e) {
    $(".top-body").addClass("search-expand");
    $(".search-expand-o").addClass("in");    
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".top-body, .top-body input, .search-large, .recent-search-list, .recent-search-product-list ul li .box, .recent-search-product-list ul li ") === false) {
      $(".top-body").removeClass("search-expand");
      $(".search-expand-o").removeClass("in");    
    }
  });
});


// side bar collapse

$(".sidebar .box h3").click(function() {
  $(this).parent().toggleClass('closepanel');   
});


// layout view

// sidebar click scroll

$(".list-toggle").click(function() {
  $(".grid-toggle").removeClass('active');  
    $(".list-toggle").addClass('active');  
    $(".list-menu").addClass('view-layout');  
});

$(".grid-toggle").click(function() {
  $(".list-toggle").removeClass('active');  
    $(".grid-toggle").addClass('active');  
    $(".list-menu").removeClass('view-layout');  
});



//Product Gallery
$(document).ready(function(){
  $('.product_thumbs').find('span').find('.xactive').parent().addClass('active');
});

$(".product_thumbs span").hover(function () {
    $('.product_thumbs').find('span').find('.active').removeClass('active');
  $('.product_thumbs').find('span').find('.xactive').parent().toggleClass('active');
});



// sticky responsive size

$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 767) {
         
          $("[data-sticky_column]").stick_in_parent({recalc_every: 1});

    $(function() {
      return $("[data-sticky_column]").stick_in_parent({
        parent: "[data-sticky_parent]"
      });
    });

       }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
})

// dimesnion messurement


// loader
  $('.loader').on('click', function() {
    var $this = $(this);
    var loadingText = '<i class="fa fa-circle-o-notch fa-spin"></i> loading...';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
    setTimeout(function() {
      $this.html($this.data('original-text'));
    }, 2000);
  });

  // 

$(document).on('hidden.bs.modal', '.sub-modal.modal', function () { 
        $(document.body).addClass('modal-open') 
    });


// date picker

$('.dpicker').datepicker({
    language: 'en'
    //minDate: new Date() // Now can select only dates, which goes after today
});



$('.modal-addprojects').on('click', function(evt) {
    $('#add-projects').addClass("sub-modal bg_dark zindex-large");
});

$(document).on('hidden.bs.modal', '#add-projects', function () { 
        $('#add-projects').removeClass("sub-modal bg_dark zindex-large");

    });

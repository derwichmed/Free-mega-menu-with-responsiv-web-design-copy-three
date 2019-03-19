$(function (){
    $('body > header > nav .nav_item').mouseover(function (){
       $('body > header > nav .nav_item .mega_menu:visible').hide();
       $(this).find('.mega_menu').show();
    });
    
    $('body > header > nav .nav_item .mega_menu_tabs .header_tabs .item').mouseover(function (){
        index_tab = $(this).attr('index-tab');
        $('body > header > nav .nav_item .mega_menu_tabs .tabs_item:visible').hide();
        $('body > header > nav .nav_item .mega_menu_tabs .tabs_item').eq(index_tab).show();
    });
    
    $('body > header > nav .nav_item .mega_menu_panel nav .item').mouseover(function (){
        $('body > header > nav .nav_item .mega_menu_panel .pannel_item').hide();
        index_pannel = $(this).attr('index-panel');
        $('body > header > nav .nav_item .mega_menu_panel .pannel_item').eq(index_pannel).show();
    });
    
    isNavBarHidden = true;
    $('body > header > .mobile_navs .menu_icon').click(function (){
       if(isNavBarHidden){
           $('body > header > nav').fadeIn("slow");
           isNavBarHidden = false;
       }
        else{
            $('body > header > nav').fadeOut("slow");
            isNavBarHidden = true;
        }
    });
});
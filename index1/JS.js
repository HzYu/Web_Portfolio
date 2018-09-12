/*讓 welcome 呈現飛入狀況*/
$(document).ready(function(){
    $(function(){
        setTimeout(function(){
            $('ul').removeClass('hidden');
        },500);
    });
});
/*讓instagram連結文字出現*/
$(document).ready(function(){
    $(".instagram").hover(function(){
        $(".ig_text").css("opacity","1"); //淡入
        },function(){
        $(".ig_text").css("opacity","0"); //淡出
    });
});
/*讓mail連結文字出現*/
$(document).ready(function(){
    $(".mail").hover(function(){
        $(".mail_text").css("opacity","1"); //淡入
        },function(){
        $(".mail_text").css("opacity","0"); //淡出
    });
});
/*讓github連結文字出現*/
$(document).ready(function(){
    $(".github").hover(function(){
        $(".github_text").css("opacity","1"); //淡入
        },function(){
        $(".github_text").css("opacity","0"); //淡出
    });
});
/*關於我 我的基本資料 淡入淡出*/
$(document).ready(function(){
    $(".center_spacer").hover(function(){
        $(".about_desc").css("opacity","1"); //淡入
        },function(){
        $(".about_desc").css("opacity","0"); //淡出
    });
});
/*感謝妳 thank you 淡入淡出*/
$(document).ready(function(){
    $(".left_spacer").hover(function(){
        $(".thx_desc").css("opacity","1"); //淡入
        },function(){
        $(".thx_desc").css("opacity","0"); //淡出
    });
});
/*聯絡我 歡迎來信 淡入淡出*/
$(document).ready(function(){
    $(".right_spacer").hover(function(){
        $(".con_desc").css("opacity","1"); //淡入
        },function(){
        $(".con_desc").css("opacity","0"); //淡出
    });
});
/*scroll發亮*/
$(document).ready(function(){
    $(".scroll").hover(function(){
        $(".scroll_text").css("color","white"); //淡入
        },function(){
        $(".scroll_text").css("color","rgb(202, 201, 201)"); //淡出
    });
});
/*
$(document).ready(function(){
    $("#Spring a").click(function(){
        $("#Summer a").fadeOut(1000);
        $("#Fall a").fadeOut(1000);
        $("#Winter a").fadeOut(1000);
        $("#Spring a").fadeOut(1000,function(){ //Nasbar Spring淡出
            $("#Spring img").fadeIn(1000);
        // $('#Spring img').css("margin","0px -30px -10px 0px");
        });          
    });

    $("#Spring img").click(function(){
        $(this).fadeOut(1000,function(){ //img淡出
            $("#Spring a").fadeIn(1000); //Nasbar Spring淡入
        // $('#Spring a').css("margin","10px -55px 0px 5px");
        });
    });
});
  */
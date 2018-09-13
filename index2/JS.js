//a href 錨點滑動
$(document).ready(function(){
    $("#About_Us_Link").click(function(){
        $("html, body").animate({
            scrollTop : $("#About_Us").offset().top 
        },1000);
    });
});
/*function ScrollTo(About_Us_Link)
{
    $('html,body').animate({
        scrollTop : $("#About_Us").offset().top 
    },750);
}
*/

//網頁一開執行以下方法
window.onload=function()
{
    img_desc1_style();
    //每24秒呼叫 img_desc1_style()
    setInterval(function(){
        console.log(img_desc1_style())
    },24000);

    img_desc2_style()

    setInterval(function(){
        console.log(img_desc2_style())
    },24000);

    img_desc3_style()

    setInterval(function(){
        console.log(img_desc3_style())
    },24000);
}

//咖啡鬆餅淡入淡出
function img_desc1_style()
{
        var img_desc1_hidden = document.getElementById('img_desc1_hidden').style.opacity="1";
        setTimeout("img_desc1_hidden.style.opacity='0'",4750);
}
//餐點淡入淡出
function img_desc2_style()
{
        setTimeout("img_desc2_hidden.style.opacity='1'",8000);
        setTimeout("img_desc2_hidden.style.opacity='0'",13000);
}
//咖啡廳景象淡入淡出
function img_desc3_style()
{
        setTimeout("img_desc3_hidden.style.opacity='1'",16250);
        setTimeout("img_desc3_hidden.style.opacity='0'",21250);
}



/*
function img_desc1_fadeIn()
{
    $(document).ready(function(){
        $(".img_desc1_hidden").css("opacity","1"); //淡出
        });

    //setTimeout("alert('5秒')",20000);    
}

function img_desc1_fadeOut()
{
    $(document).ready(function(){
        $(".img_desc1_hidden").css("opacity","0"); //淡出
        });
}
*/
/*
var c=1000;

for(var i=0 ; i<1 ;i++)
{
    var img_desc1_time = setInterval("img_desc1_fadeIn()",c)
    c=1000;
}
*/
//var img_desc1_time = setInterval("img_desc1_fadeIn()",1000)
//var img_desc1_timeout = setInterval("img_desc1_fadeOut()",3000)

/*
$(document).ready(function(){
        $(".img_desc1_hidden").css("opacity","1"); //淡入
        },function(){
        $(".img_desc1_hidden").css("opacity","0"); //淡出
    });

$(document).ready(function(){   
        $(".img_desc1_hidden").fadeIn(2500,function(){//淡入 計數1秒
            $(".img_desc1_hidden").fadeOut(6000); //淡出
        }); 
}); 


$(document).ready(function(){ 
    $(".img_desc1_hidden").fadeIn();
    },function(){
    $(".img_desc1_hidden").delay(3000).fadeOut();//延迟淡出
    });


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
  */
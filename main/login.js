
var bd = document.documentElement ? document.documentElement : document.body;
var screen_size=bd.scrollWidth; // 창 가로 사이즈

    function resize(id){
        var w=560; // 가로 크기 제한
        if(screen_size<500){
        var img_obj = document.getElementById(id);
        if(img_obj){
            img_w = img_obj.width; // 이미지 원래 가로 크기
            img_h = img_obj.height;
            img_obj.style.width=(img_w/2+"px"); // 계산하여 사이즈 조정
            img_obj.styel.height=(img_h/2+"px");
        }
    }
 }

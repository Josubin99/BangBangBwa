function get_bcode(code,gubun){
	$.ajax({
		url:"http://dev.vworld.kr/dev/v4dv_2ddataguide2_s002.do?svcIde=adsigg",
		type:"GET",
		dataType:'jsonp',
		data:{"ptype":"bcode","code":code,"gubun":gubun},
		success:function(data){
			console.log(data); //셀렉트박스 구현필요
		},
		error:function(e) {
			console.log(e);
		}
    });
}
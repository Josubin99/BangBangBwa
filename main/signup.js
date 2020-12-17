function isSame(){

    var pwd1=document.getElementById('PW').value;
    var pwd2=document.getElementById('CHK_PW').value;

    if(pwd1 !='' && pwd2 !=''){
        if(pwd1==pwd2){
            document.getElementById('check').innerHTML='비밀번호 일치';
            document.getElementById('check').style.color='#698f50';
            document.getElementById('check').style.marginLeft='103px';

        }
        else{
            document.getElementById('check').innerHTML='비밀번호 불일치';
            document.getElementById('check').style.color='red';
            document.getElementById('check').style.marginLeft='93px';
        }
    }
}
const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_Button');
// 각 입력사항을 받아올 수 있는 querySelector 를 먼저 지정한다.

submitButton.addEventListener('click', function(){
    /* 아이디 : 공백 여부 / 중복여부
       비밀번호 : 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
       비밀번호 확인 : 공백여부 / 비밀번호와 같은지 안같은지
       이름 : 공백여부
       메일 : 공백여부 / 메일주소 형식이 맞는지 (abc@abc.com)
       연락처 : 연락처 형식에 맞는지 (010-0000-0000)
    */
})

function idConfirm() {
    if (!userid.value) {}
}
function pwdConfirm() {}
function pwd2Confirm() {}
function fullnameConfirm() {}
function emailConfirm() {}
function telConfirm() {}
// 제출버튼을 클릭했을때 동작하는 함수를 설정한다.
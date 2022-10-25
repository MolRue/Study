const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');
let chkFlag = true;

// 각 입력사항을 받아올 수 있는 querySelector 를 먼저 지정한다.

submitButton.addEventListener("click", function (e) {
    let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()];

    let chkFlag = true;
    for (const chk of chkArray) {
      if (!chk) {
        chkFlag = false;
      }
    }
  
    if (chkFlag) {
      document.signup.submit();
    }
});

// submitButton.addEventListener("click", function (e) {
//         // 아이디 : 공백 여부 / 중복여부
//         // 비밀번호 : 공백여부 / 특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.
//         // 비밀번호 확인 : 공백여부 / 비밀번호와 같은지 안같은지
//         // 이름 : 공백여부
//         // 메일 : 공백여부 / 메일주소 형식이 맞는지 (abc@abc.com)
//         // 연락처 : 연락처 형식에 맞는지 (010-0000-0000)
//         // 방법.1
//         // const idConf = idConfirm()
//         // const pwd1Conf = pwd1Confirm()
//         // const pwd2Conf = pwd2Confirm() 
//         // const fullnameConf = fullnameConfirm()
//         // const emailConf = emailConfirm()
//         // const telConf = telConfirm()
//         // if(idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf){
//         //     document.signup.submit();
//         // }
//         // 방법.2
//         let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()];

//         let chkFlag = true;

//         for (const chk of chkArray) {
//             if (!chk) { // 함수의 return 값이 false 일때
//                 chkFlag = flase;
//             }
//         }
//         if (chkFlag) {
//             document.signup.submit();
//         }
//     })

function idConfirm() {
    // null , indefined, "", 0 → false
    // 만약 userid가 공백이라면 ↓ 코드가 실행된다. !userid 는 reverse의 의미니깐
    const mustid = document.querySelector(".must_id")
    const overlap = document.querySelector(".overlap")
    
    mustid.style.display = "none";
    overlap.style.display = "none";
    
    // ↓if (userid.value === "") {} → 이렇게 쓰기도 한다.
    // !userid.value.replace (/|0/g,"") → 넓은 공백 또는 0제거
    if (!userid.value.replace(/ /g,"")) {
        mustid.style.display = "block";
        return false;
    } else {
    // ↓if (userid.value === "") {} → 이렇게 쓰기도 한다.
        if(!idCheck(userid.value)){  // 아이디가 중복이라면 실행된다.
            overlap.style.display = "block"
            return false;
        }
    }
    return true;
}

function pwd1Confirm() {
    const mustPwd1 = document.querySelector(".must_pwd1")
    const regPwd = document.querySelector(".reg_pwd")

    mustPwd1.style.display = "none";
    regPwd.style.display = "none";
    // pwd1 이 빈문자열이라면
    if(!pwd1.value.replace(/ /g,"")){
        mustPwd1.style.display = "block";
        return false;
    } else {
        if(!pwdCheck(pwd1.value)) {  // 정규표현식이 맞지 않으면!
            regPwd.style.display = "block";
            return false;
        }
    }
    return true;
}

function pwd2Confirm() {
    const mustPwd2 = document.querySelector(".must_pwd2")
    const same = document.querySelector(".same")

    mustPwd2.style.display = "none";
    same.style.display = "none";

    if (!pwd2.value.replace(/ /g,"")) {
        mustPwd2.style.display = "block";
        return false;
    } else {
        if (pwd1.value && pwd2.value) {  // 두 패스워드 값이 있는지?
            if (pwd1.value !== pwd2.value){  //두 패스워드 값이 같지 않다면??
                same.style.display = "block";
                return false;
            }
        }
        
    }
    return true;
}

function fullnameConfirm() {
    const mustFullname = document.querySelector(".must_fullname");
    mustFullname.style.display = "none";

    if (!fullname.value.replace(/ /g,"")) {
        mustFullname.style.display = "block";
        return false;
    }
    return true;
}

function emailConfirm() {
    const mustEmail = document.querySelector(".must_email");
    const regEmail = document.querySelector(".reg_email");

    mustEmail.style.display = "none";
    regEmail.style.display = "none";

    if (!email.value.replace(/ /g,"")) {
        mustEmail.style.display = "block";
        return false;
    } else {
        if(!emailCheck(email.value)) {
            regEmail.style.display = "block";
            return false;
        }
    }
    return true;
}

function telConfirm() {
    const regTel = document.querySelector(".reg_tel");
    regTel.style.display = "none";

    // 전화번호가 있고, 유효성 체크에 통과하지 못했을 때
    if (telCheck(tel.value) && tel.value) {
        regTel.style.display = "block";
        return flase;
    } 
    return true;
}

// 제출버튼을 클릭했을때 동작하는 함수를 설정한다.

// 중복된 아이디 체크
function idCheck(id) {
    return true;
}

// 비밀번호 정규식 체크
function pwdCheck(pwd) {
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    return reg.test(pwd);
}

function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email)
}

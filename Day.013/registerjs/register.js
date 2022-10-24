const userid = document.querySelector("#userid");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const level = document.querySelector("#level");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const submitButton = document.querySelector("#submit_button");
let chkFlag = true;

//전송 버튼 클릭시
submitButton.addEventListener("click", function (e) {
  let chkArray = [idConfirm(), pwd1Confirm(), pwd2Confirm(), fullnameConfirm(), emailConfirm(), telConfirm()];
  /* 
  //방법1
  let result = chkArray.filter(function (value) {
    return value;
  });

  if (result.length === chkArray.length) {
    document.signup.submit();
  }
  */

  //방법2
  let chkFlag = true;
  for (const chk of chkArray) {
    if (!chk) {
      chkFlag = false;
    }
  }

  if (chkFlag) {
    document.signup.submit();
  }

  /*
  //방법3
  const idConf = idConfirm();
  const pwd1Conf = pwd1Confirm();
  const pwd2Conf = pwd2Confirm();
  const fullnameConf = fullnameConfirm();
  const emailConf = emailConfirm();
  const telConf = telConfirm();

  if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
    document.signup.submit();
  }
  */
});

function idConfirm() {
  const mustId = document.querySelector(".must_id");
  const overlap = document.querySelector(".overlap");

  //텍스트가 남아있는 걸 방지하기 위해
  mustId.style.display = "none";
  overlap.style.display = "none";

  //공백일때
  if (!userid.value) {
    mustId.style.display = "block";
    return false;
  } else {
    //유효식이 맞지 않으면
    if (!idCheck(userid.value)) {
      overlap.style.display = "block";
      return false;
    }
  }
  return true;
}

function pwd1Confirm() {
  const mustPwd1 = document.querySelector(".must_pwd1");
  const regPwd = document.querySelector(".reg_pwd");

  mustPwd1.style.display = "none";
  regPwd.style.display = "none";

  if (!pwd1.value) {
    mustPwd1.style.display = "block";
    return false;
  } else {
    if (!pwdCheck(pwd1.value)) {
      regPwd.style.display = "block";
      return false;
    }
  }
  return true;
}

function pwd2Confirm() {
  const mustPwd2 = document.querySelector(".must_pwd2");
  const same = document.querySelector(".same");

  mustPwd2.style.display = "none";
  same.style.display = "none";

  if (!pwd2.value) {
    mustPwd2.style.display = "block";
    return false;
  } else {
    //두개의 패스워드 값이 있을때
    if (pwd1.value && pwd2.value) {
      //패스워드가 같지 않다면
      if (pwd1.value !== pwd2.value) {
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

  if (!fullname.value) {
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

  if (!email.value) {
    mustEmail.style.display = "block";
    return false;
  } else {
    if (!emailCheck(email.value)) {
      regEmail.style.display = "block";
      return false;
    }
  }
  return true;
}

function telConfirm() {
  //   const mustTel = document.querySelector(".must_tel");
  const regTel = document.querySelector(".reg_tel");
  regTel.style.display = "none";

  //전화번호가 있는데 유효성 체크에 통과하지 못하면
  if (!telCheck(tel.value) && tel.value) {
    regTel.style.display = "block";
    chkFlag = false;
  }
  return true;
}

//중복된 아이디 체크
function idCheck(id) {
  return true;
}

// https://tjddnjs625.tistory.com/28
//정규식 테스트 사이트: https://regexr.com/

function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd);
}

function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}

function emailCheck(email) {
  const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

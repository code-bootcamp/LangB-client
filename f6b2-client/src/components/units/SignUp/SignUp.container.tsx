import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SignUpUI from "./SignUp.presenter";
import { AUTH_NUM_CHECK, CREATE_USER, EMAIL_CHECK } from "./SignUp.queries";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  const [emailCheck] = useMutation(EMAIL_CHECK);
  const [verification] = useMutation(AUTH_NUM_CHECK);

  const [authNumVal, setAuthNumVal] = useState(false);

  const [authNum, setAuthNum] = useState("");

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  const [authError, setAuthError] = useState("");

  const [authDisable, setAuthDisable] = useState(false);
  const [authCheckDisable, setAuthCheckDisable] = useState(true);
  const [signUpDisable, setSignUpDisable] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [rePasswordVisible, setRePasswordVisible] = useState("password");
  const [myLangError, setMyLangError] = useState("");
  const [learnLangError, setLearnLangError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const onClickVisible = () => {
    if (passwordVisible === "password") {
      setPasswordVisible("text");
      return;
    } else {
      setPasswordVisible("password");
      return;
    }
  };

  const onClickReVisible = () => {
    if (rePasswordVisible === "password") {
      setRePasswordVisible("text");
      return;
    } else {
      setRePasswordVisible("password");
      return;
    }
  };

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangeAuthNum = (event: any) => {
    setAuthNum(event.target.value);
  };

  const onClickAuthNumCheck = async () => {
    const result = await verification({
      variables: {
        email: email,
        token: authNum,
      },
    });

    if (result.data.verification === "true") {
      setAuthError("");
      setAuthNumVal(true);
      setAuthCheckDisable(true);
      setSignUpDisable(false);
    } else {
      setAuthError("인증번호가 틀립니다!");
      setAuthCheckDisable(false);
      setAuthNumVal(false);
      return;
    }
  };

  const onClickAuthCall = async () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요!");
      return;
    } else {
      setEmailError("");
    }
    try {
      const result = await emailCheck({
        variables: {
          email: email,
        },
      });
      setAuthDisable(true);
      setAuthCheckDisable(false);
      alert("인증메일이 발송되었습니다!");
    } catch (error) {
      alert(error);
    }
  };

  const onClickSignUp = async (data: any) => {
    if (data.password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else {
      setPasswordError("");
    }

    if (data.password !== data.rePassword || data.rePassword === "") {
      setRePasswordError("비밀번호랑 다릅니다!");
    } else {
      setRePasswordError("");
    }

    if (data.myLang === "My Lang") {
      setMyLangError("모국어를 선택해주세요!");
    } else {
      setMyLangError("");
    }

    if (data.learnLang === "Learn Lang") {
      setLearnLangError("배울언어를 선택해주세요!");
    } else {
      setLearnLangError("");
    }

    if (
      data.password !== "" &&
      data.password === data.rePassword &&
      data.myLang !== "My Lang" &&
      data.learnLang !== "Learn Lang"
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              name: data.email.split("@")[0],
              image: "test",
              email: data.email,
              password: data.password,
              myLang: data.myLang,
              newLang: data.learnLang,
            },
          },
        });
        router.push("/signup/signupend");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignUp={onClickSignUp}
      onChangeAuthNum={onChangeAuthNum}
      onClickAuthNumCheck={onClickAuthNumCheck}
      authError={authError}
      authDisable={authDisable}
      authCheckDisable={authCheckDisable}
      onChangeEmail={onChangeEmail}
      signUpDisable={signUpDisable}
      formState={formState}
      onClickVisible={onClickVisible}
      passwordVisible={passwordVisible}
      onClickReVisible={onClickReVisible}
      rePasswordVisible={rePasswordVisible}
      myLangError={myLangError}
      learnLangError={learnLangError}
      emailError={emailError}
      passwordError={passwordError}
      rePasswordError={rePasswordError}
      onClickAuthCall={onClickAuthCall}
    />
  );
}

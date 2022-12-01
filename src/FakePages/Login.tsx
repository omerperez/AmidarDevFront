import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import {
  LOGIN,
  LOGIN_BTN_TEXT,
  PASSWORD,
  USERNAME,
} from "../Assets/Constants/Constants";
import { amidarLogo } from "../Assets/ProjectImages";
import ThemeRightToLeft from "../Assets/ThemeRightToLeft";
import PasswordInput from "../Components/Auth/PasswordInput";
import SuccessAnimation from "../Components/Auth/SuccessAnimation";
import WelcomeTitle from "../Components/Auth/WelcomeTitle";
import { contexts } from "../Contexts/ContextsExports";
import { AuthContextType } from "../Data/Types/Auth";
import "../Layouts/Style/CSS/Auth.css";
import { errorIconStyle } from "../Layouts/Style/MUI/AuthStyle";
import CookiesService from "../Services/Cookies";
import { loginAuth } from "../Services/Login";
import { validationService } from "../Services/Validation/GlobalValidations";

interface ILoginState {
  username: string;
  password: string;
  error: string;
  userFullName: string;
  disabled: boolean;
  showPassword: boolean;
  open: boolean;
  removeIcon: boolean;
}
export default function LoginFakePage() {
  const { login } = useContext(contexts.Auth) as AuthContextType;

  const [loginState, setLoginState] = useState<ILoginState>({
    username: "",
    password: "",
    error: "",
    userFullName: "",
    disabled: false,
    showPassword: false,
    open: false,
    removeIcon: false,
  });

  const handleClickOnShowPasswordIcon = () => {
    setLoginState((prevstate) => ({
      ...prevstate,
      showPassword: !loginState.showPassword,
    }));
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState((prevstate) => ({
      ...prevstate,
      password: e.target.value,
    }));
  };

  const setError = (error: string) => {
    setLoginState((prevstate) => ({
      ...prevstate,
      error: error,
    }));
  };

  const setState = (key: keyof ILoginState, value: string | boolean) => {
    setLoginState((prevstate) => ({
      ...prevstate,
      [key]: value,
    }));
  };

  const setStateAfterAuthResponse = (
    fullName: string,
    open: boolean,
    removeIcon: boolean,
  ) => {
    setLoginState((prevstate) => ({
      ...prevstate,
      open: open,
      userFullName: fullName,
      removeIcon: removeIcon,
    }));
  };

  const disabledBtn = async () => {
    if (
      !validationService.isEmployeeNumberProper.function(loginState.username)
    ) {
      return setError(validationService.isEmployeeNumberProper.errorComment);
    }
    if (
      !validationService.isUserPasswordPropper.function(loginState.password)
    ) {
      return setError(validationService.isUserPasswordPropper.errorComment);
    }
    setState("disabled", true);
    const authResponse = {
      id: "U9628",
      fullName: "עומר פרץ",
      mobileNumber: "0522520484",
      token: "123456",
      error: null,
    };
    if (authResponse.error) {
      return setError(authResponse.error);
    }

    setError("");
    if (authResponse) {
      setStateAfterAuthResponse(authResponse.fullName, true, false);
      setTimeout(() => {
        setState("removeIcon", true);
        setTimeout(() => {
          CookiesService.setUserObj(authResponse);
          login(authResponse);
          setState("open", false);
        }, 5000);
      }, 2000);
    } else {
      setState("disabled", false);
      return setError(validationService.isEmployeeMobileProper.errorComment);
    }
  };

  const handlePressEnter = (e: KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      return disabledBtn();
    }
  };

  if (loginState.open) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="text-center">
            <img src={amidarLogo} alt={LOGIN} width={400} />
          </div>
          {loginState.removeIcon ? (
            <WelcomeTitle username={loginState.userFullName} />
          ) : (
            <SuccessAnimation />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="text-center">
          <img src={amidarLogo} alt={LOGIN} width={400} />
        </div>
        <ThemeRightToLeft>
          {loginState.error && (
            <Alert sx={errorIconStyle} className="error-font" severity="error">
              {loginState.error}
            </Alert>
          )}
          <FormControl className="input-login">
            <div className="mtb-10">
              <FormLabel
                className="login-title"
                id={"form-title-label-employee-number"}
              >
                {USERNAME}
              </FormLabel>
              <TextField
                fullWidth
                disabled={loginState.disabled}
                className="mtb-10"
                required
                variant={loginState.disabled ? "filled" : "outlined"}
                id="employee-number"
                label={USERNAME}
                value={loginState.username}
                onKeyDown={handlePressEnter}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setState("username", e.target.value)
                }
              />
            </div>
            <PasswordInput
              title={PASSWORD}
              formLabelStyle={"login-title"}
              textFieldStyle={"mb-10"}
              showPassword={loginState.showPassword}
              value={loginState.password}
              onKeyPress={handlePressEnter}
              handleChangeInput={handleChangePassword}
              isShowPassword={handleClickOnShowPasswordIcon}
            />
          </FormControl>
        </ThemeRightToLeft>
        <div className="btn-pos">
          <Button
            variant="contained"
            className="login-btn"
            fullWidth
            onClick={disabledBtn}
          >
            {LOGIN_BTN_TEXT}
          </Button>
        </div>
      </div>
    </div>
  );
}

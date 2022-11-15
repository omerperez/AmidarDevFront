import { useState, useContext, ChangeEvent, KeyboardEvent } from "react";
import { amidarLogo } from "../Assets/ProjectImages";
import ThemeRightToLeft from "../Assets/ThemeRightToLeft";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormLabel,
  FormControl,
  Alert,
} from "@mui/material";
import { CookiesService } from "../Services/Cookies";
import { contexts } from "../Contexts/ContextsExports";
import { getEmployeeProperties } from "../Services/Home";
import { errorIconStyle } from "../Assets/Auth";
import { validationService } from "../Services/Validations";
import PasswordInput from "../Components/Global/PasswordInput";
import "../Layouts/Style/Auth.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [employeeNumber, setEmployeeNumber] = useState<string>("");
  const [employeeMobile, setEmployeeMobile] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [handleClickLogin, setHandleClickLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { authDispatch } = useContext(contexts.Auth);

  const handleClickOnShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeVerificationCode = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleClickLoginBtn = async () => {
    if (!handleClickLogin) {
      if (!validationService.isEmployeeNumberProper.function(employeeNumber)) {
        return setError(validationService.isEmployeeNumberProper.errorComment);
      }
      if (!validationService.isEmployeeMobileProper.function(employeeMobile)) {
        return setError(validationService.isEmployeeMobileProper.errorComment);
      }
      setError("");
      setHandleClickLogin(true);
    } else {
      if (verificationCode?.length !== 6) {
        return setError("קוד ההזדהות אינו תקין, נסה/י שוב");
      }
      const currentUser = await getEmployeeProperties(employeeNumber);
      CookiesService.setUserObj(currentUser);
      authDispatch({
        type: "login",
        currentUserId: currentUser.employeeNumber,
      });
      authDispatch({
        type: "changeUserProperties",
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        mobileNumber: currentUser.mobileNumber,
      });
      return navigate("/homepage");
    }
  };

  const handlePressEnter = (e: KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      return handleClickLoginBtn();
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="text-center">
          <img src={amidarLogo} alt="Login" width={300} />
        </div>
        <ThemeRightToLeft>
          {error && (
            <Alert sx={errorIconStyle} className="error-font" severity="error">
              {error}
            </Alert>
          )}
          <FormControl className="w-100">
            <div className="mtb-10">
              <FormLabel
                className="login-title"
                id={"form-title-label-employee-number"}
              >
                מספר עובד
              </FormLabel>
              <TextField
                fullWidth
                disabled={handleClickLogin}
                className="mtb-10"
                required
                variant={handleClickLogin ? "filled" : "outlined"}
                id="employee-number"
                label="מספר עובד"
                value={employeeNumber}
                onKeyDown={handlePressEnter}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmployeeNumber(e.target.value)
                }
              />
            </div>
            <div className="mt-10 mb-10">
              <FormLabel
                className="login-title"
                id={"form-title-label-employee-mobile"}
              >
                מספר פלאפון
              </FormLabel>
              <TextField
                disabled={handleClickLogin}
                className="mtb-10"
                fullWidth
                required
                variant={handleClickLogin ? "filled" : "outlined"}
                id="employee-mobile"
                label="מספר פלאפון"
                value={employeeMobile}
                onKeyDown={handlePressEnter}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmployeeMobile(e.target.value)
                }
              />
            </div>

            {handleClickLogin && (
              <div className="mt-10 mb-10">
                <PasswordInput
                  title={"קוד הזדהות"}
                  formLabelStyle={"login-title"}
                  textFieldStyle={"mtb-10"}
                  showPassword={showPassword}
                  value={verificationCode}
                  onKeyPress={handlePressEnter}
                  handleChangeInput={handleChangeVerificationCode}
                  isShowPassword={handleClickOnShowPasswordIcon}
                />
              </div>
            )}
          </FormControl>
        </ThemeRightToLeft>
        <div className="btn-pos">
          <Button
            variant="contained"
            className={
              handleClickLogin
                ? "login-btn-after-vertification-code"
                : "login-btn"
            }
            fullWidth
            onClick={handleClickLoginBtn}
          >
            {handleClickLogin ? "התחבר/י" : "שלח קוד הזדהות"}
          </Button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useContext } from "react";
import { amidarLogo } from "../Assets/projectImages";
import ThemeStyleRTL from "../Assets/Style/ThemeStyleRTL";
import "../Components/LoginComponents/LoginPage.css";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../Components/GlobalComponents/FieldsTypes/PasswordInput";
import {
  Button,
  TextField,
  FormLabel,
  FormControl,
  Alert,
} from "@mui/material";
import { applicationCookie } from "../Services/CookieService/CookieService";
import { validationService } from "../Services/ValidationsService/ValidationService";
import { AuthContext } from "../Contexts/AuthContext";
import { getEmployeeProperties } from "../Components/HomePageComponents/HomePageService";

export default function LoginPage() {
  const navigate = useNavigate();
  const [employeeNumber, setEmployeeNumber] = useState();
  const [employeeMobile, setEmployeeMobile] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [handleClickLogin, setHandleClickLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, changeUserProperties } = useContext(AuthContext);

  const handleClickOnShowPasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeVerificationCode = (e) => {
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
      applicationCookie.setUserObj(currentUser);
      await login(currentUser.employeeNumber);
      await changeUserProperties(
        currentUser.firstName,
        currentUser.lastName,
        currentUser.mobileNumber
      );

      return navigate("/homepage");
    }
  };

  const handlePressEnter = (e) => {
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
        <ThemeStyleRTL>
          {error && (
            <Alert className="global-font" severity="error">
              {error}
            </Alert>
          )}
          <FormControl className="w-100">
            <div className="mt-10 mb-10">
              <FormLabel
                className="mb-10 global-font"
                id={"form-title-label-employee-number"}
              >
                מספר עובד
              </FormLabel>
              <TextField
                fullWidth
                disabled={handleClickLogin}
                className="mt-10 mb-10"
                required
                variant={handleClickLogin ? "filled" : "outlined"}
                id="employee-number"
                label="מספר עובד"
                value={employeeNumber}
                onKeyDown={handlePressEnter}
                onChange={(e) => setEmployeeNumber(e.target.value)}
              />
            </div>
            <div className="mt-10 mb-10">
              <FormLabel
                className="mb-10 global-font"
                id={"form-title-label-employee-mobile"}
              >
                מספר פלאפון
              </FormLabel>
              <TextField
                disabled={handleClickLogin}
                className="mt-10 mb-10"
                fullWidth
                required
                variant={handleClickLogin ? "filled" : "outlined"}
                id="employee-mobile"
                label="מספר פלאפון"
                value={employeeMobile}
                onKeyDown={handlePressEnter}
                onChange={(e) => setEmployeeMobile(e.target.value)}
              />
            </div>

            {handleClickLogin && (
              <div className="mt-10 mb-10">
                <PasswordInput
                  title={"קוד הזדהות"}
                  formLabelStyle={"mb-10 global-font"}
                  textFieldStyle={"mt-10 mb-10"}
                  showPassword={showPassword}
                  value={verificationCode}
                  onKeyPress={handlePressEnter}
                  handleChangeInput={handleChangeVerificationCode}
                  isShowPassword={handleClickOnShowPasswordIcon}
                />
              </div>
            )}
          </FormControl>
        </ThemeStyleRTL>
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

import React from "react";
import ThemeStyleRTL from "../../../Assets/Style/ThemeStyleRTL";
import { TextField, FormLabel, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordInput({
  title,
  formLabelStyle,
  textFieldStyle,
  showPassword,
  value,
  onKeyPress,
  handleChangeInput,
  isShowPassword,
}) {
  return (
    <ThemeStyleRTL>
      <FormLabel
        className={formLabelStyle}
        id={"form-title-label-verification-code"}
      >
        {title}
      </FormLabel>
      <TextField
        className={textFieldStyle}
        fullWidth
        required
        variant="outlined"
        id="verification-code"
        label={title}
        type={showPassword ? "text" : "password"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {showPassword ? (
                <Visibility
                  className="visibility-cur"
                  onClick={isShowPassword}
                />
              ) : (
                <VisibilityOff
                  className="visibility-cur"
                  onClick={isShowPassword}
                />
              )}
            </InputAdornment>
          ),
        }}
        value={value}
        onKeyDown={onKeyPress}
        onChange={handleChangeInput}
      />
    </ThemeStyleRTL>
  );
}

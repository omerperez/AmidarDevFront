import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormLabel, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent } from "react";
import ThemeRightToLeft from "../../Assets/ThemeRightToLeft";

interface PasswordProps {
  title: string;
  formLabelStyle: string;
  textFieldStyle: string;
  showPassword: Boolean;
  value: string;
  onKeyPress: (e: KeyboardEvent<any>) => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  isShowPassword: () => void;
}

export default function PasswordInput({
  title,
  formLabelStyle,
  textFieldStyle,
  showPassword,
  value,
  onKeyPress,
  handleChangeInput,
  isShowPassword,
}: PasswordProps) {
  return (
    <ThemeRightToLeft>
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
    </ThemeRightToLeft>
  );
}

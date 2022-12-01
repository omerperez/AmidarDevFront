import { FormControl, FormLabel, TextareaAutosize } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  forwardRef,
  Ref,
  SetStateAction,
  useState,
} from "react";

interface TextAreaProps {
  title?: string;
  value?: string;
  name: string;
  minRow?: number;
  setValue?: Dispatch<SetStateAction<string>> | null;
  required?: Boolean;
}
function TextArea(
  { title, value, setValue, name, minRow, required }: TextAreaProps = {
    title: "",
    value: "",
    name: "",
    minRow: 3,
    setValue: null,
    required: false,
  },
  ref: Ref<HTMLTextAreaElement>
) {
  const [text, setText] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue ? setValue(e.target.value) : setText(e.target.value);
  };

  return (
    <FormControl className="w-100">
      <FormLabel
        className={required ? "req-form-label-area" : "form-label-area"}
        id={`form-title-label-${title}`}
      >
        <span>{required ? `${title} - שדה חובה` : title}</span>
      </FormLabel>
      <TextareaAutosize
        id={name}
        className="area-input"
        name={name}
        aria-label={`${title}-label`}
        minRows={minRow}
        placeholder={title}
        onChange={handleChange}
        value={text !== null ? text : value}
        ref={ref}
      />
    </FormControl>
  );
}

const TextAreaInputRef = forwardRef(TextArea);

export default TextAreaInputRef;

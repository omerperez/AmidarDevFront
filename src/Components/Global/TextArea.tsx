import { forwardRef, useState, Dispatch, ChangeEvent, Ref } from "react";
import { TextareaAutosize, FormLabel, FormControl } from "@mui/material";

interface TextAreaProps {
  title?: string;
  value?: string;
  name: string;
  minRow?: number;
  setValue?: Dispatch<React.SetStateAction<string>>;
  required?: Boolean;
}
function TextArea(
  { title, value, setValue, name, minRow, required }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  const [text, setText] = useState<string | null>(null);

  return (
    <FormControl className="w-100">
      <FormLabel className="area-input-title" id={`form-title-label-${title}`}>
        <span>{required ? `${title} - שדה חובה` : title}</span>
      </FormLabel>
      <TextareaAutosize
        id={name}
        className={required ? "area-input" : "mt-10"}
        name={name}
        aria-label={title ?? "no-label"}
        minRows={minRow ?? 3}
        placeholder={title ?? ""}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setValue ? setValue(e.target.value) : setText(e.target.value);
        }}
        value={text !== null ? text : value ?? ""}
        ref={ref}
      />
    </FormControl>
  );
}

const TextAreaInputRef = forwardRef(TextArea);

export default TextAreaInputRef;

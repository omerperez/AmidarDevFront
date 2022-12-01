import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const useForm = () => {
  const [state, setState] = useState<any>({});

  function changeForm(e: ChangeEvent<any>) {
    setState((state: Dispatch<SetStateAction<any>>) => ({
      ...state,
      [e.target.name]: e.target ? e.target.value : e.currentTarget.value,
    }));
  }

  function changeState(key: any, value?: any) {
    if (value || value === false) {
      setState((current: any) => {
        return {
          ...current,
          [key]: value,
        };
      });
    } else {
      setState((current: any) => {
        const copy = { ...current };
        delete copy[key];
        return copy;
      });
    }
  }

  return [state, changeForm, changeState];
};

export default useForm;

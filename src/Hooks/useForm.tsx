import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const useForm = () => {
  const [state, setState] = useState<any>({});

  function changeForm(e: ChangeEvent<any>) {
    setState((state: Dispatch<SetStateAction<any>>) => ({
      ...state,
      [e.target.name]: e.target ? e.target.value : e.currentTarget.value,
    }));
  }
  return [state, changeForm];
};

export default useForm;

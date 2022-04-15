import { ChangeEvent, useState } from "react"

export const useForm = <T extends Object >( initialState: T ) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [ e.target.name ]: e.target.value,
    });
  }

  return {
    formValues,
    handleInputChange,
  }
}

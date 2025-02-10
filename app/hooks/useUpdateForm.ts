import { Dispatch, SetStateAction, useState } from 'react';

export function useUpdateForm<T>(
  initialState: T
): [
  T,
  Dispatch<SetStateAction<T>>,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
] {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return [formData, setFormData, handleChange];
}

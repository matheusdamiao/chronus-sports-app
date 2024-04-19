'use client';
import { create } from 'zustand'


export type FormData = {
  currency: string,
  email: string,
  name: string;
  phoneType: string;
  favoriteSport: string;
  birthday: string;
  phone: string;
  heartTeam: string;
  document: string
  CEP: string;
  Estate: string;
  District: string;
  Street: string;
  number: string;
  password: string;
}

type FormStore = {
    formData: FormData;
    setDetails: (data: Partial<FormData>) => void;
  };
  

export const useFormStore = create<FormStore>()((set) => ({
    formData: {
        currency: '',
        email: '',
        name: '',
        phoneType: '',
        favoriteSport: '',
        birthday: '',
        phone: '',
        heartTeam: '',
        document: '',
        CEP: '',
        Estate: '',
        District: '',
        Street: '',
        number: '',
        password: ''
      },
      setDetails: (data) => set((state) => ({ formData: { ...state.formData, ...data } }))
}))
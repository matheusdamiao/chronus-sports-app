'use client';
import { create } from 'zustand'

type OptionsType = {
  value: string,
  label: string
}

export type FormData = {
  email: string,
  name: string;
  gender: OptionsType;
  phoneType: string;
  favoriteSport: OptionsType;
  birthday: string;
  phone: string;
  heartTeam: OptionsType;
  document: string
  CEP: string;
  Estate: string;
  District: string;
  Street: string;
  number: string;
  password: string;
  acceptTermsUse: boolean;
  acceptPrivacyPolicy: boolean;
}

type FormStore = {
    formData: FormData;
    setDetails: (data: Partial<FormData>) => void;
  };
  

export const useFormStore = create<FormStore>()((set) => ({
    formData: {
        email: '',
        name: '',
        phoneType: '',
        favoriteSport: {value: '', label: ''},
        birthday: '',
        phone: '',
        gender: {value:'', label: ''},
        heartTeam: {value: '', label: ''},
        document: '',
        CEP: '',
        Estate: '',
        District: '',
        Street: '',
        number: '',
        password: '',
        acceptTermsUse: false,
        acceptPrivacyPolicy: false,
      },
      setDetails: (data) => set((state) => ({ formData: { ...state.formData, ...data } }))
}))
import React from 'react';

export interface LoginProps {
  restaurantName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface AddressProps {
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

export interface InformationProps {
  phone: string;
  zipCode: string;
}

export interface RegisterContextData {
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  fromBack: number;
  setFromBack: React.Dispatch<React.SetStateAction<number>>;
  loginData: LoginProps;
  setLoginData: React.Dispatch<React.SetStateAction<LoginProps>>;
  addressData: AddressProps;
  setAddressData: React.Dispatch<React.SetStateAction<AddressProps>>;
  informationData: InformationProps;
  setInformationData: React.Dispatch<React.SetStateAction<InformationProps>>;
}

import React, { createContext, useContext, useState } from 'react';
import { AddressProps, InformationProps, LoginProps } from './interfaces';

export interface RegisterContextData {
  formIndex: number;
  setFormIndex: React.Dispatch<React.SetStateAction<number>>;
  fromBack: boolean;
  setFromBack: React.Dispatch<React.SetStateAction<boolean>>;
  loginData: LoginProps;
  setLoginData: React.Dispatch<React.SetStateAction<LoginProps>>;
  addressData: AddressProps;
  setAddressData: React.Dispatch<React.SetStateAction<AddressProps>>;
  informationData: InformationProps;
  setInformationData: React.Dispatch<React.SetStateAction<InformationProps>>;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData,
);

const RegisterProvider: React.FC = ({ children }) => {
  const [formIndex, setFormIndex] = useState(0);
  const [fromBack, setFromBack] = useState(false);
  const [loginData, setLoginData] = useState<LoginProps>({} as LoginProps);
  const [addressData, setAddressData] = useState<AddressProps>(
    {} as AddressProps,
  );
  const [informationData, setInformationData] = useState<InformationProps>(
    {} as InformationProps,
  );

  return (
    <RegisterContext.Provider
      value={{
        formIndex,
        setFormIndex,
        fromBack,
        setFromBack,
        loginData,
        setLoginData,
        addressData,
        setAddressData,
        informationData,
        setInformationData,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

function useRegister(): RegisterContextData {
  const context = useContext(RegisterContext);

  if (!context) {
    throw new Error('useRegister must be used with in an RegisterProvider');
  }

  return context;
}

export { RegisterProvider, useRegister };
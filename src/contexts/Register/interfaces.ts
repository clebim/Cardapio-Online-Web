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

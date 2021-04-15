export interface UserAddress {
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  // eslint-disable-next-line camelcase
  county_code: string;
  latitude: number;
  longitude: number;
}

export interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  address: UserAddress;
  website: string;
  image: string;
}

export interface UsersResponse {
  status: string;
  code: number;
  total: number;
  data: UserData[];
}

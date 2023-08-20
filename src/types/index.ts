export interface Contact {
    id: number | string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    status: 'active' | 'inactive';
  }

  export interface Country{
    country: string;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
  };
  active: number;
  recovered: number;
  deaths: number;

  }
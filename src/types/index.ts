export interface Contact {
    id: number | string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    status: string;
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

 export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }[];
  }
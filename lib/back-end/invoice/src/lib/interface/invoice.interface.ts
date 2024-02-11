/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Invoice {
  invoice_nr: string;
  subtotal: number;
  paid: number;
  shipping: {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
  };
  items: {
    item: string;
    description: string;
    amount: number;
    quantity: any;
  }[];
}
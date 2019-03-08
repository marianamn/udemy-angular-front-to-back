
export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: Address;
  // image?: string;
  isActive?: boolean;
  // balance?: number;
  registered?: any;
  hide?: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
}

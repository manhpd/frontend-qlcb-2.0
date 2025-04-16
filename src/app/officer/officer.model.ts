export interface Officer {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  department?: string;
  position?: string;
  phoneNumber?: string;
  hireDate?: Date;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface OfficerCreateDto {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  department?: string;
  position?: string;
  phoneNumber?: string;
  hireDate?: Date;
}

export interface OfficerUpdateDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  department?: string;
  position?: string;
  phoneNumber?: string;
  hireDate?: Date;
  status?: 'active' | 'inactive';
} 
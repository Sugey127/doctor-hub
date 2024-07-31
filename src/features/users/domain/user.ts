export type Role = 'patient' | 'doctor';

export interface User {
    id: string;
    name: string;
    email: string;
    profileImage: string;
    role: Role;
}
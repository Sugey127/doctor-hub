'use server';
import { cookies } from "next/headers";

export type SignInParams = {
    email: string;
    password: string;
};

export async function signInUsecase(params: SignInParams) {
    cookies().set('token', 'Bearer token');
} 

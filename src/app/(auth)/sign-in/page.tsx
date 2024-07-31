'use client';

import { Button } from "@/features/shared/presenters/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/features/shared/presenters/ui/form";
import { Input } from "@/features/shared/presenters/ui/input";
import { signInUsecase } from "@/features/users/application/sign-in";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignIn() {
    const form = useForm();

    async function action(formData: FormData) {
        const email = `${formData.get('email')}`;
        const password = `${formData.get('password')}`;
        await signInUsecase({ email, password })
    }

    return (
        <Form {...form}>
            <form action={action}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign In</Button>
                <Link href="/sign-up">Not have an account?</Link>
            </form>
        </Form>
    )
}
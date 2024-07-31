'use client';

import { Button } from "@/features/shared/presenters/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/features/shared/presenters/ui/form";
import { Input } from "@/features/shared/presenters/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/features/shared/presenters/ui/select";
import { signInUsecase } from "@/features/users/application/sign-in";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const form = useForm();

  async function action(formData: FormData) {
    const email = `${formData.get('email')}`;
    const password = `${formData.get('password')}`;
    await signInUsecase({ email, password });
  }

  return (
    <Form {...form}>
      <form action={action}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What are you?</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="I am a" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Sign Up</Button>
        <Link href="/sign-in">Alredy have an account?</Link>
      </form>
    </Form>
  )
}
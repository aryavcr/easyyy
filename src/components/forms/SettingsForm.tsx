'use client'
import React, { useState } from 'react';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerFieldState, ControllerRenderProps, FieldValues, useForm, UseFormStateReturn } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import { Inter } from 'next/font/google';
const inter = Inter({subsets: ['latin']})


const formSchema = z.object({
    username: z.string().min(2, "Must be atleast 2 characters").max(50),
    email: z.string().max(50).email('Invalid email'),
})


 

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

export function SettingsForm () {
    const [isLoading, setisLoading] = useState(false)
     const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })
  return (
    <div className={`${inter.className}`}>
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-3">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className='w-[30%]' placeholder="aryavcr" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
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
                <Input className='w-[30%]' placeholder="aryavcr@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This will be used for account management.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='ml-1' type="submit">Save</Button>
      </form>
    </Form>
    </div>
  )
}

export default SettingsForm
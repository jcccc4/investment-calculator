'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type Inputs = {
  username: string
  exampleRequired: string
}

export default function Home() {
  const form = useForm<Inputs>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)


  return (
    <div className="mx-4">
      <header className="flex mt-8 ">
        <Image src={"/logo.png"} alt={"logo"} width="40" height="40" />
        <h1 className="text-2xl gap-2">Investment Calculator</h1>
      </header>
      <main className="border border-muted">
       <section><h2 className="text-2xl">Input Calculator</h2></section>
      
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input defaultValue={"123"} placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </main>
    </div>
  );
}








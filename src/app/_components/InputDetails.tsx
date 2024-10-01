import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import FormInputs from "./form/FormInputs";
import { Inputs } from "../page";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Link } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

function InputDetails({}: Props) {
  const form = useForm<Inputs>({
    defaultValues: {
      startingAmount: 20000,
      after: 1,
      returnRate: 10,
      compound: "Annually",
      addOn: 1000,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <section>
      <section>
        <h2 className="text-2xl">Input Details</h2>
      </section>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          <div className={"flex flex-col gap-4"}>
            <FormInputs
              form={form}
              name={"startingAmount"}
              label={"Starting Amount"}
            />
            <FormInputs form={form} name={"after"} label={"After"} />
            <FormInputs form={form} name={"returnRate"} label={"Return Rate"} />
            <FormField
              control={form.control}
              name="compound"
              render={({ field }) => (
                <FormItem className={"relative mt-[-7px]"}>
                  <FormLabel className={"absolute top-0 left-3 px-1 bg-white"}>
                    Compound
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-40">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Annually">Annually</SelectItem>
                      <SelectItem value="Semiannually">Semiannually</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormInputs form={form} name={"addOn"} label={"Add-on"} />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Contribute at the</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col m-0"
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginning" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Beginning
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="end" />
                          </FormControl>
                          <FormLabel className="font-normal">End</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="each"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Contribute at the</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col m-0"
                      >
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="beginning" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Beginning
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="end" />
                          </FormControl>
                          <FormLabel className="font-normal">End</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex w-full justify-end mt-4">
            <Button type="submit">Calculate</Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default InputDetails;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { toast } from 'sonner'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormSchema,
  RegisterFormSchemaType,
} from "@/zod-schemas/RegisterFormSchema";
import { useState } from "react";
import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


export function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const form = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  async function handleRegister(data: RegisterFormSchemaType) {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    navigate("/dashboard");
  }

  return (
    <div className={"grid max-w-[30rem] w-[90vw] gap-6 mx-auto my-4"}>
      <div className="flex flex-col space-y-2 text-center pt-3">
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm text-muted-foreground">Register Form</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleRegister)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              {/* USERNAME FIELD */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full pb-4">
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <div className="relative w-full">
                      <FormControl className="w-full">
                        <Input
                          id="username"
                          type="text"
                          autoCapitalize="none"
                          autoCorrect="off"
                          placeholder="Choose a username"
                          className="w-full "
                          disabled={isLoading}
                          defaultValue={field.value}
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EMAIL ADDRESS FIELD */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full pb-4">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <div className="relative w-full">
                      <FormControl className="w-full">
                        <Input
                          id="email"
                          type="email"
                          autoCapitalize="none"
                          autoCorrect="off"
                          placeholder="name@example.com"
                          className="w-full "
                          disabled={isLoading}
                          defaultValue={field.value}
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PASSWORD FIELD */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full pb-4">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <div className="relative w-full">
                      <FormControl className="w-full">
                        <div>
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoCapitalize="none"
                            autoCorrect="off"
                            className="w-full "
                            disabled={isLoading}
                            defaultValue={field.value}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword((prev) => !prev)}
                            disabled={isLoading}
                          >
                            {showPassword && !isLoading ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*CONFIRM PASSWORD FIELD */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full pb-4">
                    <FormLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FormLabel>
                    <div className="relative w-full">
                      <FormControl className="w-full">
                        <div>
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            autoCapitalize="none"
                            autoCorrect="off"
                            className="w-full "
                            disabled={isLoading}
                            defaultValue={field.value}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            disabled={isLoading}
                          >
                            {showConfirmPassword && !isLoading ? (
                              <EyeIcon className="h-4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <div className="w-4 h-4 rounded-full border-2 border-x-white animate-spin mr-2" />
              )}
              Sign Up
            </Button>
            <Link
              to={"/login"}
              className="text-sm text-muted-foreground text-center   my-2"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

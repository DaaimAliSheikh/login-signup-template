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
  LoginFormSchema,
  LoginFormSchemaType,
} from "@/zod-schemas/LoginFormSchema";
import { useState } from "react";
import { EyeIcon } from "lucide-react";
import { EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function handleLogin(data: LoginFormSchemaType) {
    setIsLoading(true);
    alert(JSON.stringify(data));

    setIsLoading(false);
  }

  return (
    <div
      className={
        "grid max-w-[30rem] min-h-[90vh] w-[90vw] gap-1 mx-auto mt-4  mb-2 "
      }
    >
      <div className="flex flex-col justify-end p-2  text-center pt-3">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <p className="text-sm text-muted-foreground">
          Login with your email and password
        </p>
      </div>
      <Form {...form}>
        <form className="h-fit " onSubmit={form.handleSubmit(handleLogin)}>
          <div className="grid gap-2 ">
            <div className="grid gap-1">
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
            </div>
            <Button disabled={isLoading}>
              {isLoading && (
                <div className="w-4 h-4 rounded-full border-2 border-x-white animate-spin mr-2" />
              )}
              Login
            </Button>
            <Link
              to={"/register"}
              className="text-sm text-muted-foreground  text-center my-2"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

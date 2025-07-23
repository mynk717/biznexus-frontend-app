"use client";

import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
  displayName: z.string().optional(),
});

type AuthFormValues = z.infer<typeof formSchema>;

interface AuthFormProps {
  isSignUp?: boolean;
}

export default function AuthForm({ isSignUp = false }: AuthFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      displayName: "",
    },
  });

  const onSubmit = async (values: AuthFormValues) => {
    setIsSubmitting(true);
    try {
      if (isSignUp) {
        if (!values.displayName) {
          form.setError("displayName", { type: "manual", message: "Display name is required for sign up." });
          setIsSubmitting(false);
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        await updateProfile(userCredential.user, { displayName: values.displayName });
        toast({ title: "Account Created", description: "Welcome to BizNexus!" });
        router.push("/");
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        toast({ title: "Logged In", description: "Welcome back!" });
        router.push("/");
      }
    } catch (error: any) {
      toast({
        title: "Authentication Error",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({ title: "Logged In with Google", description: "Welcome!" });
      router.push("/");
    } catch (error: any) {
      toast({
        title: "Google Sign-In Error",
        description: error.message || "Could not sign in with Google.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 rounded-lg border bg-card p-8 shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{isSignUp ? "Create an Account" : "Welcome Back"}</h1>
        <p className="text-muted-foreground">
          {isSignUp ? "Enter your details to get started." : "Sign in to access your account."}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {isSignUp && (
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="John Doe" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="email" placeholder="name@example.com" {...field} className="pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
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
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 h-7 -translate-y-1/2 px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (isSignUp ? "Signing Up..." : "Logging In...") : (isSignUp ? "Sign Up" : "Login")}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : (
            <>
            <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.08-2.58 2.13-4.84 2.13-3.87 0-7.02-3.22-7.02-7.19s3.15-7.2 7.02-7.2c1.93 0 3.32.74 4.27 1.64l2.33-2.33C18.48 2.93 16.27 2 13.28 2c-5.78 0-10.49 4.61-10.49 10.29s4.71 10.29 10.49 10.29c2.8 0 4.93-.95 6.62-2.62 1.83-1.78 2.7-4.29 2.7-7.02 0-.62-.05-1.13-.14-1.64H12.48z"></path></svg>
            Google
            </>
        )}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <Button variant="link" asChild className="p-0">
              <Link href="/login">Login</Link>
            </Button>
          </>
        ) : (
          <>
            Don&apos;t have an account?{" "}
            <Button variant="link" asChild className="p-0">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </p>
    </div>
  );
}

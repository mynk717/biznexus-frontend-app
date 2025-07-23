import AuthForm from "@/components/auth/AuthForm";

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-15rem)] items-center justify-center">
      <AuthForm isSignUp />
    </div>
  );
}

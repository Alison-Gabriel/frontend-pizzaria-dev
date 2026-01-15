import { RegisterForm } from "@/components/forms/register-form";

const RegisterPage = () => {
  return (
    <div className="bg-app-background flex min-h-screen items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

import AuthForm from "@/components/auth/AuthForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center m-auto">
      <div className="max-w-md w-full">
        <AuthForm />
      </div>
    </main>
  );
}

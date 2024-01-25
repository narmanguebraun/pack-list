import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="min-h-screen py-24 px-8 font-mono">
      <div className="max-w-[600px] m-auto">
        <h1>Welcome to Pack-List</h1>
        <p>
          Your personal space to curate your favorite items, and manage your
          travel pack-list. Sign in to add, view, edit and delete items from
          your Pack-List.
        </p>

        <div className="mt-8">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}

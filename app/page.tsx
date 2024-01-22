import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className=" min-h-screen p-24">
      <h1>Welcome to Pack</h1>
      <p>
        Your personal space to curate and manage a pack-list of your favorite
        items. Sign in to create, view, edit and delete items from your
        pack-list.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <AuthForm />
      </div>
    </main>
  );
}

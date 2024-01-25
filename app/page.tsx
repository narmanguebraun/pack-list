import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className="min-h-screen p-4 font-mono max-w-[1440px] m-auto">
      <div className="flex justify-between items-center p-4">
        <h1 className="uppercase">Good Bag</h1>
        <div>Good Trip!</div>
      </div>

      <div className="flex flex-col p-4 rounded bg-slate-900 max-w-[600px] m-auto mt-24">
        <p className="mt-4 mb-8">
          Your personal space to curate your favorite items, and manage your
          travel pack-list. Sign in to add, view, edit and delete items from
          your Pack-List.
        </p>
        <div className="bg-black p-4 rounded-lg">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}

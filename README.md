# GOOD-BAG

Packing List for vacation Web App.

## Installation

1. Clone the repository: `git clone https://github.com/narmanguebraun/good-bag.git`
2. Navigate to the project directory: `cd good-bag`
3. Install the dependencies: `npm install`

## Supabase

1. Sign up
2. Create a new project
3. Create a new table via SQL Editor.

```
create table
  items (
    id bigint primary key generated always as identity,
    user_id uuid references auth.users not null,
    brand text,
    model text,
    reference text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone
  );

alter table items enable row level security;

create policy "Users can view their own items." on items
for select using (auth.uid () = user_id);

create policy "Users can add new items." on items
for insert with check (auth.uid () = user_id);

create policy "Users can update their own items." on items
for update using (auth.uid () = user_id);

create policy "Users can delete their own items." on items
for delete using (auth.uid () = user_id);
```

4. Create a new `.env.local` file in the root folder, adding Supabase `URL` and `ANON_KEY` credentials.

```
NEXT_PUBLIC_SUPABASE_URL=<your-project-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-project-supabase-anon-key>
```

## View the App on the browser

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000`.

## Technologies

This project is built with:

- [Next.js](https://nextjs.org/docs): A React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/docs/installation): A highly customizable CSS framework.
- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/docs/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Supabase](https://supabase.com/docs): A collection of backend tools with Postgres Database, Authentication, instant APIs, realtime subscriptions and Storage.

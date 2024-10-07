# PACK-LIST

Packing List Web App.

## Installation

1. Clone the repository: `git clone https://github.com/narmanguebraun/pack-list.git`
2. Navigate to the project directory: `cd pack-list`
3. Install the dependencies: `npm install`

## Supabase

1. Sign up
2. Create a new project
3. Create a new table via SQL Editor.

```
// Create the items table with image_url
CREATE TABLE
  items (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id UUID REFERENCES auth.users NOT NULL,
    brand TEXT,
    model TEXT,
    reference_number TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE
  );

// Enable row-level security on the items table
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

// Create policy for users to view their own items
CREATE POLICY "Users can view their own items." ON items FOR
SELECT
  USING (auth.uid () = user_id);

// Create policy for users to add new items
CREATE POLICY "Users can add new items." ON items FOR INSERT
WITH
  CHECK (auth.uid () = user_id);

// Create policy for users to update their own items
CREATE POLICY "Users can update their own items." ON items
FOR UPDATE
  USING (auth.uid () = user_id);

// Create policy for users to delete their own items
CREATE POLICY "Users can delete their own items." ON items FOR DELETE USING (auth.uid () = user_id);
```

4. On storage, create a new bucket `images` to store images.
   Add to it a new policy, that give users access to own folder for SELECT, INSERT, UPDATE, DELETE.

5. Create a new `.env.local` file in the root folder, adding Supabase `URL` and `ANON_KEY` credentials.

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

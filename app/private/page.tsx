import Link from 'next/link';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = await createClient();

  // Redirect to login page if user is not authenticated
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <p>Successfully authenticated. This is a private page.</p>
        <p className='text-lg font-semibold'>Hello {data.user.email}</p>
        <Link href='/' className='text-blue-500 hover:underline'>
          Home
        </Link>
      </main>
    </div>
  );
}

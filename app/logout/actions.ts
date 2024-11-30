'use server';
// This is a server action, not a server component.

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/');
}

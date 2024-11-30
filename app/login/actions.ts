'use server';
// This is a server action, not a server component.

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  console.log('>>> supabase', supabase);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const userData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  };

  const { data, error } = await supabase.auth.signUp(userData);

  console.log('>>> signup data', data);
  console.log('>>> signup error', error);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  //   redirect('/');

  // Redirect to a confirmation page instead of error
  redirect('/auth/check-email');
}

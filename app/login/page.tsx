import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-10'>Login or Signup</h1>
      <form className='flex flex-col items-end justify-center gap-4'>
        <div className='flex items-center justify-center'>
          <label htmlFor='email' className='text-sm font-bold mr-4'>
            Email:
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            className='border-2 border-gray-300 rounded-md p-1 text-black'
          />
        </div>
        <div className='flex items-center justify-center'>
          <label htmlFor='password' className='text-sm font-bold mr-4'>
            Password:
          </label>
          <input
            id='password'
            name='password'
            type='password'
            required
            className='border-2 border-gray-300 rounded-md p-1 text-black'
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            formAction={login}
            className='bg-blue-500 text-white m-2 p-2 rounded-md'>
            Log in
          </button>
          <button
            formAction={signup}
            className='bg-green-500 text-white m-2 p-2 rounded-md'>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

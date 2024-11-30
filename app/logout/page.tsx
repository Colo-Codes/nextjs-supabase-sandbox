import { logout } from './actions';

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold mb-10'>Logout</h1>
      <form className='flex flex-col items-end justify-center gap-4'>
        <div className='flex items-center justify-center'>
          <button
            formAction={logout}
            className='bg-blue-500 text-white m-2 p-2 rounded-md'>
            Log out
          </button>
        </div>
      </form>
    </div>
  );
}

// import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import PetekLogo from '../ui/pt-logo';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-orange-1000 p-3 md:h-32">
          <div className="w-32 text-white md:w-36">
            {/* <AcmeLogo /> */}
            <PetekLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
import LMPLogo from '@/app/ui/lmp-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="w-full justify-items-center p-5 text-white">
          <LMPLogo />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

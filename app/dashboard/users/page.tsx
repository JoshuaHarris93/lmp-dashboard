import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <p
      className={`${lusitana.className} mb-4 text-xl text-red-600 md:text-2xl`}
    >
      Users
    </p>
  );
}

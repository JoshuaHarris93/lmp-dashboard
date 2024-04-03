import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/lmp-logo.png"
        className="lmp-logo"
        alt="Leadership Mindset Partners"
        width={776}
        height={268}
      />
    </div>
  );
}

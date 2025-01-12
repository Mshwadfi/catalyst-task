import Image from "next/image";
import Link from "next/link";

const Logo = ()=> {
  return (
    <Link href="/" className="flex items-center text-rose-500 text-2xl font-bold">
      <Image src="/logo.png" alt="Airbnb Logo" width={40} height={40} />

      <span className="hidden md:inline ml-2">airbnb</span>
    </Link>
  );
}

export default Logo;

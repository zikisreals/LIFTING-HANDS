import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo/logo.png"
          alt="Lifting Hands Initiative Logo"
          width={40}
          height={40}
        />
        <span className="font-bold text-orange-600 text-lg">
          Lifting Hands Initiative
        </span>
      </Link>

      <div className="space-x-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/learning">Learning</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

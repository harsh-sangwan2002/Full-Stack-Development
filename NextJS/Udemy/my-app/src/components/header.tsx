import Link from "next/link";

function Header() {
  return (
    <div className="w-full absolute z-10 text-white">
      <nav className="container relative flex justify-between items-center mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="flex space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full px-8 py-8">
      <div className="text-2xl">ProfilePal</div>
      <nav className="flex flex-1 gap-8 justify-end">
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}

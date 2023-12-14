export default function Header() {
  return (
    <header className="flex w-full px-8 py-8">
      <div className="text-2xl">ProfilePal</div>
      <nav className="flex flex-1 gap-8 justify-end">
        <button>Home</button>
        <button>Favorites</button>
      </nav>
    </header>
  );
}

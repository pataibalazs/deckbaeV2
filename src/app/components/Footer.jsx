import Link from "next/link";

const navigation = [
  { name: "Főoldal", href: "/" },
  { name: "Házak", href: "/houses" },
  { name: "Pergolák", href: "/pergolas" },
  { name: "Garázsok", href: "/garages" },
  { name: "Szolgáltatások", href: "/services" },
  { name: "Csapat", href: "/team" },
  { name: "Kontakt", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-gray-600 hover:text-[#C41E3A] transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center mt-8">
          <Link href="/" className="no-underline">
            <img
              src="/pictures/logo_wo_bg.png"
              alt="DECKBAE Logo"
              className="h-10 w-auto hover:h-11 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} DECKBAE Kft. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}

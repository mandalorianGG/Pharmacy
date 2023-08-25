import Link from "next/link";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <nav className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Apotheke</h2>
          <h3 className="font-semibold">Kontakt</h3>
          <p className="text-white/80 text-sm mb-1">+421 565 555 666</p>
          <h3 className="font-semibold">Email</h3>
          <p className="text-white/80 text-sm">johnjkeeshan@gmail.com</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-2">Všeobecné informácie</h3>
          <div className="flex gap-10">
            <ul className="text-white/80 text-sm">
              <li className="mb-1">
                <Link href="/">Obchodné podmienky</Link>
              </li>
              <li className="mb-1">
                <Link href="/">Reklamačný poriadok</Link>
              </li>
              <li className="mb-1">
                <Link href="/">Spôsob dopravy a platby</Link>
              </li>
              <li className="mb-1">
                <Link href="/">Reklamácie</Link>
              </li>
            </ul>
            <ul className="text-white/80 text-sm">
              <li className="mb-1">
                <Link href="/">Ochrana osobných údajov</Link>
              </li>
              <li className="mb-1">
                <Link href="/">Bezpečný nákup</Link>
              </li>
              <li className="mb-1">
                <Link href="/">Garancia originality produktov</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Informácie</h3>
          <ul>
            <li className="mb-1 text-white/80 text-sm">
              <Link href="/">Ako nakupovať</Link>
            </li>
            <li className="mb-1 text-white/80 text-sm">
              <Link href="/">Môj účet</Link>
            </li>
            <li className="mb-1 text-white/80 text-sm">
              <Link href="/">Košík</Link>
            </li>
            <li className="mb-1 text-white/80 text-sm">
              <Link href="/">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Sledujte nás</h3>
          <ul className="flex gap-2">
            <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-black w-8 h-8 bg-white hover:bg-black hover:text-white rounded-full"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-black w-8 h-8 bg-white hover:bg-black hover:text-white rounded-full"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-black w-8 h-8 bg-white hover:bg-black hover:text-white rounded-full"
              >
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="py-4 bg-warning text-white">
        <p className="container mx-auto">
          Apotheke.com All Rights Reserved. 2023.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { LightningBoltIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <LightningBoltIcon width={30} height={30} />
        <h1>Developers</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/devs">
        <a>Devs List</a>
      </Link>
    </nav>
  );
};

export default Navbar;

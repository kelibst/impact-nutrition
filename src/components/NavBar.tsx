import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="flex gap-4 text-xl">
      <li>
        <Link className="links"  href={"/"}> Home</Link>
      </li>
      <li>
        <Link className="links" href="/about"> About</Link>
      </li>
      <li>
        <Link className="links" href="/services"> Services</Link>
      </li>
      <li>
        <Link className="links" href="/blog"> Blog</Link>
      </li>
      <li>
        <Link className="links" href="/contact_us"> Contact us</Link>
      </li>
      
    </ul>
  );
};

export default NavBar;

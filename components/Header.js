/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";


const Header = () => {

    return (
      <div id='header'>
        <img src="./logo.svg" alt='logo' />
        <div>
          <Link href="/"><h1>Home</h1></Link>
          <Link href="/portfolio"><h1>Portfolio</h1></Link>
        </div>
      </div>
    )
};

export default Header;

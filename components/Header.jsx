 "use client";

// components/Header.js
import Link from 'next/link';

const Header = () => (
      

  //  <header className= " bg-white  sticky top-0  p-5   text-center flex md:flex md:justify-between md:items-center"> 

  <header className= "bg-white sticky top-0  ">
    <div className="mx-auto w-full max-w-screen-xl p-4   flex md:flex md:justify-between md:items-center text-center">
    <h1 className="text-2xl font-bold text-primary mb-2 md:mb-0">
            <a href="http://www.prospect4you.com/" class="flex items-center">
                <img src="./asset/logo.jpg" class="h-20 rounded me-3" alt="P4U Logo" /> <span className="text-primary">Prospect4you</span>
            </a> 
        </h1>
   
    <nav className="md:flex md:justify-between mt-2 md:mt-0">
      <Link href="/" className="mx-2 text-primary">Home</Link>
      <Link href="/solutions" className="mx-2 text-primary">Solutions</Link>
      <Link href="/resources" className="mx-2 text-primary">Resources</Link>
      <Link href="/pricing" className="mx-2 text-primary">Pricing</Link>
      <Link href="/contact" className="mx-2 text-primary">Contact</Link>
      <Link href="/about" className="mx-2 text-primary">About Us</Link>
    </nav>
    </div>
  </header>
);

export default Header;

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Nav";

function Header() {
    return (
        <header className="w-full z-50 bg-white fixed top-0 ">
            <div className="laptop:border-b-2 flex px-2 items-center justify-between laptop:px-10 laptop:py-1">
                <Link href="/" className="relative laptop:flex w-24 h-24 tablet:w-44 tablet:h-16 hidden">
                    <Image
                        src="/svgs/logo.png"
                        alt="The Hazara Community Logo"
                        layout="fill"
                        objectFit="contain"
                        className=""
                    />
                </Link>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
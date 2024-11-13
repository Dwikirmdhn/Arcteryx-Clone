import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { handleLogout } from "@/app/login/action";

const Navbar = () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    return (
        <nav className="bg-white border-b-slate-400 flex justify-center shadow-sm fixed top-0 left-0 w-full z-10">
            <div className="container py-4 flex justify-between items-center align-center gap-16">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/Arc'teryx.svg.png" alt="Logo" width={120} height={60} />
                    </Link>
                </div>

                <div className="flex justify-center items-center flex-1 mx-4">
                    <h5 className="text-xl text-black font-extrabold py-4 border-b-2 border-black">
                        BUY 2, GET 1 FREE ON EVERYTHING! LIMITED TIME!
                    </h5>
                </div>



                <Link href="/wishlist">
                    <button className="text-gray-800 pr-3">Wishlist</button>
                </Link>

                <div className="flex">
                    <div className="flex gap-2">
                        {!token ? (
                            <>
                                <Link href="/login">
                                    <button className="px-3 py-1 text-sm font-semibold text-black border-black rounded-md hover:bg-green-50">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/register">
                                    <button className="px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-black">
                                        Register
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <form action={handleLogout}>
                                    <button
                                        className="px-3 py-1 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-500"
                                        type="submit"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

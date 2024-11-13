import Link from "next/link";
import ClientFlashComponent from "@/components/ClientFlashComponent";
import { handleLogin } from "./action";
import { Suspense } from "react";

export default function Login() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login</title>
            <meta name="author" content="David Grzyb" />
            <meta name="description" content="" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n.font-family-karla {\nfont-family: karla;\n}"
                }}
            />
            <div className="w-full flex flex-wrap bg-black text-white">
                <Suspense>
                    <ClientFlashComponent />
                </Suspense>

                {/* Login Section */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" className="text-white font-bold text-5xl p-4">
                            Arc&apos;teryx
                        </a>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Welcome.</p>
                        <form action={handleLogin} className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded bg-white text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 transition-colors duration-300"
                            >
                                Log In
                            </button>
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="underline font-semibold text-white">
                                    Register here.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img
                        className="object-cover w-full h-screen hidden md:block"
                        src="/jaket2.jpg"
                        alt="Background"
                    />
                </div>
            </div>
        </>

    );
}

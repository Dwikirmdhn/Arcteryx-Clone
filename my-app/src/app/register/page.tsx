import ClientFlashComponent from "@/components/ClientFlashComponent";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


const Register = () => {
    const handleRegister = async (formData: FormData) => {
        "use server";

        type MyResponse<T> = {
            statusCode: number;
            message?: string;
            data?: T;
            error?: string;
        };

        const response = await fetch(`${BASE_URL}/api/users`, {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseJson: MyResponse<unknown> = await response.json();

        if (!response.ok) {
            const message = responseJson.error ?? "Something went wrong!";
            return redirect(`/register?error=${message}`);
        }

        return redirect("/login");
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Registration</title>
            <meta name="author" content="Your Name" />
            <meta name="description" content="" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n        .font-family-karla {\n            font-family: karla;\n        }"
                }}
            />
            <div className="w-full flex flex-wrap bg-black text-white">
                <Suspense>
                    <ClientFlashComponent />
                </Suspense>
                {/* Registration Section */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" className="text-white font-bold text-5xl p-4">
                            Arc&apos;teryx
                        </a>
                    </div>
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Register.</p>
                        <form action={handleRegister} className="flex flex-col pt-3 md:pt-8">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="name" className="text-lg">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="username" className="text-lg">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Your Username"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
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
                            <input
                                type="submit"
                                value="Register"
                                className="bg-white text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 transition-colors duration-300"
                            />
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>
                                Already have an account?{" "}
                                <Link href="/login" className="underline font-semibold text-white">
                                    Log in here.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 shadow-2xl">
                    <img
                        className="object-cover w-full h-screen hidden md:block"
                        src="jaket.jpg"
                        alt="Background"
                    />
                </div>
            </div>
        </>
    );
};

export default Register;

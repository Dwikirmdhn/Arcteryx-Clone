"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductModel } from "@/db/models/product";
import { fetchData } from "./action";
import { useRouter } from "next/navigation";
import AddToWishlistBtn from "@/components/AddToWishlistBtn";
import Footer from "@/components/Footer";
import Image from "next/image";

const Products = () => {
    const router = useRouter();
    const [items, setItems] = useState<ProductModel[]>([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const fetchInitialData = async () => {
        setIsLoading(true);
        const products = await fetchData(query, 1);
        setItems(products);
        setHasMore(products.length > 0);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    const handleSearch = async (query: string) => {
        router.push(`/products?search=${query}`);
        setQuery(query);
        setPage(1);
        setIsLoading(true);
        const products = await fetchData(query, 1);
        setItems(products);
        setHasMore(products.length > 0);
        setIsLoading(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        handleSearch(value);
    };

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setIsLoading(true);
        const products = await fetchData(query, nextPage);
        if (products.length > 0) {
            setItems((prevItems) => [...prevItems, ...products]);
            setPage(nextPage);
        } else {
            setHasMore(false);
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="bg-white min-h-screen">
                <nav className="bg-white border-b-slate-400 flex justify-center shadow-sm">
                    <div className="container py-4 flex justify-between items-center align-center gap-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image
                                    src="/Arc'teryx.svg.png"
                                    alt="Logo"
                                    width={70}
                                    height={0}
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </Link>
                        </div>
                        <div className="flex-1 mx-4">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                                className="w-full text-black py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                onChange={onInputChange}
                                defaultValue={query}
                            />
                        </div>
                        <Link href="/wishlist">
                            <button className="text-black pr-3">Wishlist</button>
                        </Link>
                    </div>
                </nav>
                <main className="px-20 py-8 flex flex-col gap-8">
                    <h1 className="text-2xl font-bold text-black">Products</h1>
                    <InfiniteScroll
                        dataLength={items.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={
                            isLoading && items.length === 0 ? (
                                <p className="animate-pulse text-center text-black">
                                    Please wait...
                                </p>
                            ) : null
                        }
                        endMessage={
                            !hasMore &&
                            !isLoading &&
                            items.length > 0 && (
                                <p className="text-center py-10 text-black">
                                    No more products
                                </p>
                            )
                        }
                    >
                        <section className="grid grid-cols-3 gap-8">
                            {items.map((item) => (
                                <div
                                    key={item._id.toString()}
                                    className="flex flex-col bg-white shadow-lg gap-2 border border-slate-200 rounded-md overflow-hidden"
                                >
                                    <Link href={`/products/${item.slug}`}>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-full h-auto object-contain bg-white p-2"
                                        />
                                    </Link>
                                    <div className="p-4 flex flex-col gap-2">
                                        <Link href={`/products/${item.slug}`}>
                                            <h2 className="text-black font-semibold truncate">
                                                {item.name}
                                            </h2>
                                        </Link>
                                        <p className="text-black text-sm">{item.description}</p>
                                        <p className="text-l font-bold text-black">
                                            {new Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                            }).format(item.price)}

                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {item.tags?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-1 border rounded-full text-black border-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <AddToWishlistBtn productId={item._id.toString()} />
                                    </div>
                                </div>
                            ))}
                        </section>
                    </InfiniteScroll>

                    {!isLoading && items.length === 0 && (
                        <p className="text-center">Oops, product not found</p>
                    )}
                </main>
                <Footer />
            </div>
        </>

    );
};

export default Products;

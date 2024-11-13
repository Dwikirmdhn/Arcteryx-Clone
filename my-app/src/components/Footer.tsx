import Link from "next/link"
import { MapPin, Mail, Info, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <MapPin className="mx-auto mb-4 h-8 w-8" />
                        <h3 className="font-bold mb-2">Find An Arc&apos;teryx Store</h3>
                        <p className="mb-4">Locate a brand store, partner store or retail partner in your area.</p>
                        <Link href="#" className="underline font-semibold">Find A Store</Link>
                    </div>
                    <div className="text-center">
                        <Mail className="mx-auto mb-4 h-8 w-8" />
                        <h3 className="font-bold mb-2">Be the first to know</h3>
                        <p className="mb-4">Subscribe to receive new product releases, exclusive discount codes, invites to events and a chance to win.</p>
                        <Link href="#" className="underline font-semibold">Sign up for emails</Link>
                    </div>
                    <div className="text-center">
                        <Info className="mx-auto mb-4 h-8 w-8" />
                        <h3 className="font-bold mb-2">Customer Support Centre</h3>
                        <p className="mb-4">Need more information? Have a repair concern? No problem. We&apos;re here to help.</p>
                        <Link href="#" className="underline font-semibold">Find Answers</Link>
                    </div>
                </div>

                {/* Middle section */}
                <div className="flex flex-wrap justify-between mb-12">
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                        <svg className="h-8 w-auto mb-4" viewBox="0 0 100 70" fill="currentColor">
                            <path d="M95 42.7l-5.3-3.3-5.3 3.3V35l-5.3-3.3-5.3 3.3v-7.7l-5.3-3.3-5.3 3.3V19l-5.3-3.3-5.3 3.3v-7.7l-5.3-3.3-5.3 3.3V3L31.7 0 26.3 3v7.7L21 13.9l-5.3-3.3v7.7L10.3 21 5 24.3V32l-5 3.1v10.2l5 3.1v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3v7.7l5.3 3.3 5.3-3.3V70h5v-7.7l-5.3-3.3-5.3 3.3v-7.7l-5.3-3.3-5.3 3.3v-7.7l-5.3-3.3z" />
                        </svg>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Customer Support Centre</h4>
                                <ul className="space-y-1">
                                    <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                                    <li><Link href="#" className="hover:underline">General FAQ</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Shipping & Delivery</h4>
                                <ul className="space-y-1">
                                    <li><Link href="#" className="hover:underline">Order Tracking</Link></li>
                                    <li><Link href="#" className="hover:underline">Returns & Refunds</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                        <div className="grid grid-cols-2 gap-4">
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex items-center mb-4">
                            <Link href="#" className="mr-4 font-semibold">Sign-In</Link>
                            <span className="mr-2">🇨🇦</span>
                            <span>CA / EN</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <Link href="#" className="mr-4">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-5h2v2h-2v-2zm0-10h2v8h-2V7z" />
                                </svg>
                            </Link>
                            <Link href="#" className="mr-4">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="#"><Facebook className="h-6 w-6" /></Link>
                            <Link href="#"><Instagram className="h-6 w-6" /></Link>
                            <Link href="#"><Twitter className="h-6 w-6" /></Link>
                            <Link href="#"><Youtube className="h-6 w-6" /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="text-xs border-t pt-6">
                    <div className="flex flex-wrap justify-center mb-4 space-x-4">
                        <Link href="#" className="hover:underline">Cookie Preference Centre</Link>
                        <Link href="#" className="hover:underline">Cookie Policy</Link>
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms & Conditions</Link>
                        <Link href="#" className="hover:underline">Terms of Use</Link>
                        <Link href="#" className="hover:underline">Accessibility</Link>
                        <Link href="#" className="hover:underline">Do Not Sell My Personal Information</Link>
                        <Link href="#" className="hover:underline">Recall Info</Link>
                        <Link href="#" className="hover:underline">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
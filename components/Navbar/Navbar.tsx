"use client"
import Image from "next/image"
import Link from "next/link"
import {Menu, Phone, X} from "lucide-react"
import {useState} from "react"
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const logo = process.env.NEXT_PUBLIC_APP_LOGO || '/images/logo.png'

export function Navbar({locale}: { locale: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href={`/${locale}`}
                          className="flex-shrink-0 transition-opacity hover:opacity-80 duration-300">
                        <Image src={logo} alt="s" width={180} height={40} className="h-12 w-auto" priority/>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <Link
                            href="/servicios"
                            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                        >
                            Servicios
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link
                            href="/tratamientos"
                            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                        >
                            Tratamientos
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                        >
                            Nosotros
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"/>
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                        >
                            Contacto
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"/>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <LocaleSwitcher currentLocale={locale}/>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
                        aria-label="Toggle menu"
                    >l
                        {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
                    <div className="px-6 py-6 space-y-4">
                        <Link
                            href="/servicios"
                            className="block text-sm font-light text-foreground/70 hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/tratamientos"
                            className="block text-sm font-light text-foreground/70 hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Tratamientos
                        </Link>
                        <Link
                            href="/nosotros"
                            className="block text-sm font-light text-foreground/70 hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Nosotros
                        </Link>
                        <Link
                            href="/contacto"
                            className="block text-sm font-light text-foreground/70 hover:text-foreground transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contacto
                        </Link>

                        <div className="pt-4 space-y-3 border-t border-border/40">
                            <Link
                                href="tel:+1234567890"
                                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone className="h-4 w-4"/>
                                Llamar ahora
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

import Link from "next/link"
import Image from "next/image"
import {Mail, MapPin, Phone} from "lucide-react"


const logo = process.env.NEXT_PUBLIC_APP_LOGO || '/images/logo.png'
const cel = process.env.NEXI_PUBLIC_PHONE || '+1 (555) 123-4567'

export default function Footer() {
    return (
        <footer
            className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo y descripción */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image src={logo} alt="TropiceSpa" width={180} height={40} className="h-10 w-auto"/>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Tu oasis de relajación y bienestar. Tratamientos profesionales en un ambiente tropical.
                        </p>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="font-medium text-foreground mb-4">Servicios</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/servicios/masajes"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Masajes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/servicios/faciales"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Tratamientos Faciales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/servicios/corporales"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Tratamientos Corporales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/servicios/paquetes"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Paquetes Especiales
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-foreground mb-4">Enlaces</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/nosotros"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tratamientos"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Tratamientos
                                </Link>
                            </li>
                            <li>
                                <Link href="/galeria"
                                      className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Galería
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="font-medium text-foreground mb-4">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"/>
                                <span className="text-sm text-muted-foreground">{cel}</span>
                            </li>
                            <li
                                className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"/>
                                <span className="text-sm text-muted-foreground">info@tropicespa.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"/>
                                <span className="text-sm text-muted-foreground">Calle Doctor Francisco Vázquez Limón No 6 4A. Huelva, Andalucía , España</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-border/40">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} TropiceSpa. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

import Link from "next/link"
import Image from "next/image"
import AboutPage from "../../../components/About/About";
import WhyChoose from "../../../components/WhyChoose/WhyChoose";
import SectionProcess from "../../../components/Process/ProcesSection";
import ProductGallery from "../../../components/ProductiGalery/ProductGallery";
import {Facebook, Gift, Instagram, MessageCircle, Sparkles, Star, Twitter} from "lucide-react";
import Testimonials from "../../../components/Testimonials/Testimonials";

export default function Home() {
    // const t = useTranslations('HomePage');
    return (
        <div className="min-h-screen">s
            {/* Hero Banner Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/banner-first.webp"
                        alt="TropiceSpa - Producción de productos naturales"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay gradient */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"/>
                </div>


                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance">Bienestar
                            tropical</h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto text-pretty leading-relaxed">
                            Productos naturales elaborados con la más alta tecnología para tu bienestar
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="/reservar"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            Reservar ahora
                        </Link>
                        <Link
                            href="/servicios"
                            className="px-8 py-3 border border-border rounded-full text-sm font-light hover:bg-accent transition-all duration-300 backdrop-blur-sm"
                        >
                            Ver servicios
                        </Link>
                    </div>
                </div>
            </section>

            <AboutPage/>

            <WhyChoose/>

            <ProductGallery/>

            <SectionProcess/>

            <section className="px-6 py-24 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
                <div
                    className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-ping"/>
                <div
                    className="absolute bottom-10 left-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse"/>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-light animate-pulse">
                            <Gift className="w-4 h-4"/>
                            Ofertas especiales
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-balance">Promociones del mes</h2>
                        <p className="text-muted-foreground font-light max-w-2xl mx-auto text-pretty">
                            Aprovecha nuestras ofertas exclusivas por tiempo limitado
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 to-background hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div
                                className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-light animate-pulse">
                                -30%
                            </div>
                            <div className="p-8 space-y-4">
                                <div
                                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    <Sparkles className="w-8 h-8 text-primary"/>
                                </div>
                                <h3 className="text-2xl font-light">Pack Relajación</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Incluye aceite esencial, crema corporal y vela aromática
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-light text-primary">$49</span>
                                    <span className="text-sm text-muted-foreground line-through">$70</span>
                                </div>
                                <button
                                    className="w-full py-3 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>

                        <div
                            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-accent/30 to-background hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 delay-100">
                            <div
                                className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-light animate-pulse">
                                -25%
                            </div>
                            <div className="p-8 space-y-4">
                                <div
                                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    <Star className="w-8 h-8 text-primary"/>
                                </div>
                                <h3 className="text-2xl font-light">Kit Facial Premium</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Serum, crema hidratante y mascarilla rejuvenecedora
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-light text-primary">$65</span>
                                    <span className="text-sm text-muted-foreground line-through">$87</span>
                                </div>
                                <button
                                    className="w-full py-3 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>

                        <div
                            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/5 to-background hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 delay-200">
                            <div
                                className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-light animate-pulse">
                                -40%
                            </div>
                            <div className="p-8 space-y-4">
                                <div
                                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    <Gift className="w-8 h-8 text-primary"/>
                                </div>
                                <h3 className="text-2xl font-light">Bundle Completo</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Todos nuestros productos estrella en un solo pack
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-light text-primary">$120</span>
                                    <span className="text-sm text-muted-foreground line-through">$200</span>
                                </div>
                                <button
                                    className="w-full py-3 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="px-6 py-24 bg-accent/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/40 text-sm font-light">
                            <Instagram className="w-4 h-4 text-primary"/>
                            Síguenos en Instagram
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-balance">Momentos TropiceSpa</h2>
                        <p className="text-muted-foreground font-light max-w-2xl mx-auto text-pretty">
                            Comparte tu experiencia con #TropiceSpa
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div
                                key={i}
                                className="group relative aspect-square overflow-hidden rounded-2xl border border-border/40 hover:scale-105 transition-all duration-500 cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity duration-500"/>
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/80 backdrop-blur-sm">
                                    <Instagram className="w-8 h-8 text-primary"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials/>

            {/* Floating Contact Button */}
            <div className="fixed bottom-8 right-8 z-50 animate-bounce">
                <button
                    className="group relative w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"/>
                </button>
            </div>


            {/* Social Media Bar */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
                <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border border-border/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
                >
                    <Instagram className="w-5 h-5"/>
                </a>
                <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border border-border/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
                >
                    <Facebook className="w-5 h-5"/>
                </a>
                <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-background border border-border/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
                >
                    <Twitter className="w-5 h-5"/>
                </a>
            </div>
        </div>
    )
}

import Link from "next/link"
import Image from "next/image"
import {useTranslations} from "next-intl";
import AboutPage from "../../../components/About/About";
import WhyChoose from "../../../components/WhyChoose/WhyChoose";
import SectionProcess from "../../../components/Process/ProcesSection";
import ProductGallery from "../../../components/ProductiGalery/ProductGallery";

export default function Home() {
    const t = useTranslations('HomePage');
    console.log(t('title'));
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


            {/*/!* Services Preview *!/*/}
            {/*<section className="px-6 py-24 bg-[#5c9f3d]">*/}
            {/*    <div className="max-w-7xl mx-auto">*/}
            {/*        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Nuestros servicios</h2>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
            {/*            <div*/}
            {/*                className="p-8 bg-background rounded-2xl border border-border/40 hover:shadow-lg transition-all duration-300">*/}
            {/*                <h3 className="text-xl font-light mb-3">Masajes</h3>*/}
            {/*                <p className="text-muted-foreground text-sm leading-relaxed">*/}
            {/*                    Técnicas profesionales para liberar tensiones y restaurar tu energía vital*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div*/}
            {/*                className="p-8 bg-background rounded-2xl border border-border/40 hover:shadow-lg transition-all duration-300">*/}
            {/*                <h3 className="text-xl font-light mb-3">Faciales</h3>*/}
            {/*                <p className="text-muted-foreground text-sm leading-relaxed">*/}
            {/*                    Tratamientos personalizados para rejuvenecer y revitalizar tu piel*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div*/}
            {/*                className="p-8 bg-background rounded-2xl border border-border/40 hover:shadow-lg transition-all duration-300">*/}
            {/*                <h3 className="text-xl font-light mb-3">Corporales</h3>*/}
            {/*                <p className="text-muted-foreground text-sm leading-relaxed">*/}
            {/*                    Experiencias completas de bienestar para cuerpo y mente*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* CTA Section */}
            {/*<section className="px-6 py-24">*/}
            {/*    <div className="max-w-4xl mx-auto text-center space-y-6">*/}
            {/*        <h2 className="text-3xl md:text-4xl font-light text-balance">Comienza tu viaje hacia el*/}
            {/*            bienestar</h2>*/}
            {/*        <p className="text-muted-foreground font-light text-pretty leading-relaxed">*/}
            {/*            Reserva tu cita hoy y descubre la experiencia TropiceSpa*/}
            {/*        </p>*/}
            {/*        <Link*/}
            {/*            href="/contacto"*/}
            {/*            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-light hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"*/}
            {/*        >*/}
            {/*            <LucidePhone className="h-4 w-4"/>*/}
            {/*            Contáctanos*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    )
}

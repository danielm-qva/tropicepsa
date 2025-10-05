
'use client'
import Image from "next/image";

const AboutPage = () => {
    return (
        <section id={'about'} className="px-6 py-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-light text-balance">Sobre nosotros</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p className="text-pretty">
                                En <span className="text-foreground font-normal">TropiceSpa</span>, combinamos la
                                sabiduría
                                ancestral
                                de los tratamientos naturales con tecnología de vanguardia para crear productos de
                                bienestar
                                excepcionales.
                            </p>
                            <p className="text-pretty">
                                Nuestra planta de producción cuenta con equipos de última generación que garantizan la
                                más
                                alta
                                calidad en cada producto. Procesamos ingredientes naturales tropicales con estándares
                                internacionales,
                                preservando sus propiedades beneficiosas.
                            </p>
                            <p className="text-pretty">
                                Cada producto que elaboramos es el resultado de años de investigación y desarrollo,
                                diseñado
                                para
                                ofrecer experiencias de spa auténticas en la comodidad de tu hogar o en nuestras
                                instalaciones.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center space-y-2">
                                <div className="text-3xl font-light text-primary">15+</div>
                                <div className="text-sm text-muted-foreground">Años de experiencia</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-3xl font-light text-primary">100%</div>
                                <div className="text-sm text-muted-foreground">Natural</div>
                            </div>
                            <div className="text-center space-y-2">
                                <div className="text-3xl font-light text-primary">50k+</div>
                                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border/40 shadow-xl">
                        <Image
                            src="/images/banner-img.webp"
                            alt="Instalaciones de producción TropiceSpa"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;

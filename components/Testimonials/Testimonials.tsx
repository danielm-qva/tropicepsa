const Testimonials = () => {

    return (<section className="px-6 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-20 text-balance">
                Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div
                    className="space-y-6 p-8 rounded-2xl border border-border/40 bg-accent/20 hover:bg-accent/30 transition-all duration-300">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                        Los productos de TropiceSpa han transformado completamente mi rutina de cuidado personal. La
                        calidad es
                        excepcional y se nota la diferencia.
                    </p>
                    <div className="pt-4 border-t border-border/40">
                        <p className="font-light">María González</p>
                        <p className="text-sm text-muted-foreground">Cliente frecuente</p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div
                    className="space-y-6 p-8 rounded-2xl border border-border/40 bg-accent/20 hover:bg-accent/30 transition-all duration-300">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                        Como spa profesional, confiamos en TropiceSpa para todos nuestros tratamientos. Sus productos
                        naturales
                        son de primera calidad.
                    </p>
                    <div className="pt-4 border-t border-border/40">
                        <p className="font-light">Carlos Mendoza</p>
                        <p className="text-sm text-muted-foreground">Director de Spa Wellness</p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div
                    className="space-y-6 p-8 rounded-2xl border border-border/40 bg-accent/20 hover:bg-accent/30 transition-all duration-300">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                                <path
                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                        La experiencia completa es increíble. Desde la atención hasta los resultados, todo es perfecto.
                        Totalmente recomendado.
                    </p>
                    <div className="pt-4 border-t border-border/40">
                        <p className="font-light">Ana Rodríguez</p>
                        <p className="text-sm text-muted-foreground">Cliente desde 2020</p>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Testimonials;
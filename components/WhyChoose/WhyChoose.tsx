'use client'

import {Award, Leaf, Shield, Sparkles} from "lucide-react";

const WhyChoose = () => {
    return (
        <section className="px-6 py-24 bg-gradient-to-b from-background to-accent/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-light text-balance">¿Por qué elegirnos?</h2>
                    <p className="text-muted-foreground font-light max-w-2xl mx-auto text-pretty">
                        Comprometidos con la excelencia en cada detalle
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="text-center space-y-4 p-6 rounded-2xl hover:bg-background/50 transition-all duration-300">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                            <Leaf className="w-8 h-8"/>
                        </div>
                        <h3 className="text-xl font-light">100% Natural</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Ingredientes tropicales puros sin químicos artificiales
                        </p>
                    </div>
                    <div
                        className="text-center space-y-4 p-6 rounded-2xl hover:bg-background/50 transition-all duration-300">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                            <Award className="w-8 h-8"/>
                        </div>
                        <h3 className="text-xl font-light">Certificados</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Estándares internacionales de calidad y seguridad
                        </p>
                    </div>
                    <div
                        className="text-center space-y-4 p-6 rounded-2xl hover:bg-background/50 transition-all duration-300">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                            <Shield className="w-8 h-8"/>
                        </div>
                        <h3 className="text-xl font-light">Garantía</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Satisfacción garantizada o devolución de tu dinero
                        </p>
                    </div>
                    <div
                        className="text-center space-y-4 p-6 rounded-2xl hover:bg-background/50 transition-all duration-300">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                            <Sparkles className="w-8 h-8"/>
                        </div>
                        <h3 className="text-xl font-light">Innovación</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Tecnología de vanguardia en cada proceso
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;

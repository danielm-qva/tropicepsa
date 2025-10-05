'use client'
import {CheckCircle2, Factory, Leaf, Truck} from "lucide-react";

const SectionProcess = () => {

    return (<section className="px-6 py-24  bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-balance">Nuestro proceso</h2>
                <p className="text-muted-foreground font-light max-w-2xl mx-auto text-pretty">
                    De la naturaleza a tu hogar con el máximo cuidado
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="relative">
                    <div className="space-y-4">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-light">
                            1
                        </div>
                        <div className="flex items-center gap-3">
                            <Leaf className="w-6 h-6 text-primary"/>
                            <h3 className="text-xl font-light">Selección</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Ingredientes tropicales cuidadosamente seleccionados de fuentes sostenibles
                        </p>
                    </div>
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-border"/>
                </div>
                <div className="relative">
                    <div className="space-y-4">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-light">
                            2
                        </div>
                        <div className="flex items-center gap-3">
                            <Factory className="w-6 h-6 text-primary"/>
                            <h3 className="text-xl font-light">Producción</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Procesamiento con tecnología avanzada preservando propiedades naturales
                        </p>
                    </div>
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-border"/>
                </div>
                <div className="relative">
                    <div className="space-y-4">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-light">
                            3
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary"/>
                            <h3 className="text-xl font-light">Control</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                            Rigurosas pruebas de calidad en cada lote producido
                        </p>
                    </div>
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-border"/>
                </div>
                <div className="space-y-4">
                    <div
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-light">
                        4
                    </div>
                    <div className="flex items-center gap-3">
                        <Truck className="w-6 h-6 text-primary"/>
                        <h3 className="text-xl font-light">Entrega</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        Empaque ecológico y envío seguro directo a tu puerta
                    </p>
                </div>
            </div>
        </div>
    </section>)
}

export default SectionProcess

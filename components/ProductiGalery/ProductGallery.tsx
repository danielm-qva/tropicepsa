
'use client'
import Image from "next/image";

const ProductGallery = () => { return (
    <section className="px-6 py-24 bg-background">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-balance">Nuestros productos</h2>
                <p className="text-muted-foreground font-light max-w-2xl mx-auto text-pretty">
                    Línea completa de productos para tu bienestar
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/tropical-spa-oil-bottles-with-natural-ingredients.jpg"
                            alt="Aceites esenciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Aceites Esenciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Extractos puros para aromaterapia y masajes
                        </p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/natural-spa-cream-jars-with-tropical-leaves.jpg"
                            alt="Cremas corporales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Cremas Corporales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Hidratación profunda con ingredientes naturales
                        </p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-border/40 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                        <Image
                            src="/spa-facial-serum-bottles-with-tropical-flowers.jpg"
                            alt="Serums faciales"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-light mb-2">Serums Faciales</h3>
                        <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tratamientos concentrados para rejuvenecer tu piel
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
) }

export default ProductGallery

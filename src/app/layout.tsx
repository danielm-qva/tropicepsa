import {NextIntlClientProvider} from 'next-intl';
import type {ReactNode} from 'react';
import {LanguageList} from "../../config/lenguage";
import '../globals.css'
import {Navbar} from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {getTranslations} from 'next-intl/server';
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export function generateStaticParams() {
    return LanguageList.map((locale) => ({locale}));
}

export async function generateMetadata({params}: { params: Promise<{ locale: string }> }): Promise<{ title: string }> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: 'Metadata'});

    return {
        title: t('title')
    };
}


export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;

    return (
        <html lang={locale}>
        <body className={`${geistSans.variable}  ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
        <Navbar/>
            {children}
        <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

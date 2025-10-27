'use client'
import {LanguageList} from '../../config/lenguage';
import {usePathname, useRouter} from 'next/navigation';
import {useTransition} from 'react';
import Flag from 'react-world-flags';


const LocaleFlagMap: Record<string, string> = {
    en: 'US',
    es: 'ES',
};

const LocaleSwitcher = ({currentLocale}: { currentLocale: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleChange = (newLocale: string) => {
        if (newLocale === currentLocale) return;

        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        startTransition(() => {
            router.push(newPath);
        });
    };

    return (
        <div className="flex gap-2 items-center">
            {LanguageList.map((locale) => (
                <button
                    key={locale}
                    onClick={() => handleChange(locale)}
                    disabled={isPending}
                    className={`px-3 py-1 rounded-md border transition-all flex items-center gap-1 ${
                        locale === currentLocale
                            ? 'bg-[#5c9f3d] text-white border-[#5c9f3d]'
                            : 'bg-white text-black border-gray-300 hover:border-black'
                    }`}
                >
                    <Flag code={LocaleFlagMap[locale]} alt="flag" style={{width: 24, height: 24}}/>
                    <span>{locale.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
};

export default LocaleSwitcher;

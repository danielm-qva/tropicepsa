// import createMiddleware from 'next-intl/middleware';
// import {languageDefault} from "./config/lenguage";
//
// const locales = ['en', 'es'] as const;
// const localePrefix = 'always';
//
// export default createMiddleware({
//     locales,
//     localePrefix,
//     defaultLocale: languageDefault,
// });
//
// export const config = {
//     matcher: ['/', '/(es|en)/:path*'],
// };


import createMiddleware from 'next-intl/middleware';
import {routing} from "@/i18n/routin";

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

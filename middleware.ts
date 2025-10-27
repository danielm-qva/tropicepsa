import createMiddleware from 'next-intl/middleware';
import {routing} from "@/i18n/routin";

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

export default createMiddleware(routing);

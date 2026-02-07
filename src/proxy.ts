// src/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './libs/I18nRouting';

// 1. Create the middleware
const handleI18nRouting = createMiddleware(routing);

// 2. Export the default function explicitly
export default function middleware(request: any) {
  return handleI18nRouting(request);
}

// 3. The Matcher
export const config = {
  // This matcher handles the root, localized paths, and excludes static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(fr|en)/:path*']
};
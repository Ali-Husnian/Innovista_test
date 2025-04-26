import {NextResponse} from 'next/server';
import {i18nConfig} from './Config';

export function middleware(request) {
 const {locales, defaultLocale} = i18nConfig;
 let {pathname: newPath} = request.nextUrl;
 const newURL = new URL(request.url);

 const cookieLocale = request.cookies.get('NEXTJS_LOCALE')?.value;
 let selectedLocale = cookieLocale || defaultLocale;

 const localePrefixFoundInURL = locales.find(
  (locale) => newPath.startsWith(`/${locale}/`) || newPath === `/${locale}`
 );

 if (localePrefixFoundInURL) {
  newPath = newPath.replace(`/${localePrefixFoundInURL}`, '');
  newURL.pathname = newPath;

  const nextResponse = NextResponse.redirect(newURL);
  nextResponse.cookies.set('NEXTJS_LOCALE', localePrefixFoundInURL, {
   path: '/',
   maxAge: 60 * 60 * 24 * 30,
  });

  return nextResponse;
 } else {
  newPath = `/${selectedLocale}${newPath}`;
  newURL.pathname = newPath;

  const nextResponse = NextResponse.rewrite(newURL);

  return nextResponse;
 }
}

export const config = {
 matcher: ['/:locale((?!api|_next|static|.*\\..*).*)'],
};

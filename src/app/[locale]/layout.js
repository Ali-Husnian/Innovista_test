import {Provider as ThemeProvider} from '@/shared/theme/ThemeProvider';

export default function LocaleLayout({children}) {
 return <ThemeProvider>{children}</ThemeProvider>;
}

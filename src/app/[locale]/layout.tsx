import { hasLocale ,NextIntlClientProvider } from "next-intl";
import { routing } from "../../libs/I18nRouting";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";

export default async function RootLayout(
    props: { children: React.ReactNode, params: Promise<{ locale: string }> }
) { 
    const { locale } = await props.params; 

    if(!hasLocale(routing.locales, locale)){
        notFound();
    }
    setRequestLocale(locale);
    const messages = await getMessages();
 
    return (
        <html lang={locale}>
            <body>
                 <NextIntlClientProvider locale={locale} messages={messages}>
                    {props.children}
                 </NextIntlClientProvider>
            </body>
        </html>
    )
};
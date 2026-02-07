export default async function RootLayout(
    props: { children: React.ReactNode, params: Promise<{ locale: string }> }
) {

    const { locale } = await props.params;
    console.log("locale", locale);


    return (
        <html lang={locale}>
            <body>
                 {props.children}
            </body>
        </html>
    )
};
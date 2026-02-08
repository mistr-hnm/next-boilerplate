import { CurrentCount } from "@/src/components/CounterCount";
import { CounterForm } from "@/src/components/CounterForm";
import { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type ICounterProps = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ICounterProps): Promise<Metadata> {
    const { locale } = await props.params;
    const t = await getTranslations({
        locale,
        namespace: 'Counter',
    });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default async function Counter(props: ICounterProps) {
    const { locale } = await props.params;
    setRequestLocale(locale);
    const t = await getTranslations({
        locale,
        namespace: 'Counter'
    });

    return (
        <>
            <CounterForm />
            <div className="mt-3">
                <CurrentCount />
            </div>

            <div className="mt-5 text-center text-sm">
                {`${t('security_powered_by')} `}
                <a
                    className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                    href="https://launch.arcjet.com/Q6eLbRE"
                >
                    Arcjet
                </a>
            </div>

            <a
                href="https://launch.arcjet.com/Q6eLbRE"
            >
                <Image
                    className="mx-auto mt-2"
                    src="/assets/images/arcjet-light.svg"
                    alt="Arcjet"
                    width={128}
                    height={38}
                />
            </a>
        </>
    )
}
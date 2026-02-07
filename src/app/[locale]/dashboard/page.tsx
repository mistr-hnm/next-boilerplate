import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Dashboard() {
  // Use the 'Dashboard' namespace from your JSON
  const t = useTranslations('Dashboard');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t("get_started")}
          </h1>
          
          <div className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {/* Use t.rich to handle the <link> tags inside your JSON strings */}
            <p>
              {t.rich("alternative_message", {
                link: (chunks) => (
                  <a
                    href="https://vercel.com/templates"
                    className="font-medium text-zinc-950 dark:text-zinc-50 underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>

            <p className="mt-4">
              {/* This handles the internal links like 'Dashboard Templates' */}
              {t.rich("max_message", {
                link: (chunks) => (
                  <a
                    href="https://nextjs.org/learn"
                    className="font-medium text-zinc-950 dark:text-zinc-50 underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
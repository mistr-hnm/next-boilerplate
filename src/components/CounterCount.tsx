import { getTranslations } from "next-intl/server";
import { db } from "../libs/DB";
import { counterSchema } from "../model/Schema";
import { eq } from "drizzle-orm";


export const CurrentCount = async () => {

    const t = await getTranslations('CurrentCount');

    const id = 0;
    const result = await db.query.counterSchema.findFirst({
        where: eq(counterSchema.id, id),
    });
    const count = result?.count ?? 0;

    console.log('Counter fetched successfully');

    return (
        <div>
            {t('count', { count })}
        </div>
    );
}
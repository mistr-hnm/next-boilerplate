import { db } from "@/src/libs/DB";
import { counterSchema } from "@/src/model/Schema";
import { CounterValidation } from "@/src/validations/CounterValidation";
import { sql } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import * as z from 'zod';

export const PUT = async (request: Request) => {
    const json = await request.json();
    const parse = CounterValidation.safeParse(json);

    if (!parse.success) {
        return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
    }

    const id = Number((await headers()).get('x-e2e-random-id')) || 0;

    const counter = await db
        .insert(counterSchema)
        .values({ id, count: parse.data.increment })
        .onConflictDoUpdate({
            target: counterSchema.id,
            set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
        }).returning()

    console.log("Counter has incremented");

    return NextResponse.json({
        count: counter[0].count,
    })





}
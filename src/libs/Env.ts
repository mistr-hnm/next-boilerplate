import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";


export const Env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1)
    },
    shared: {
        NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV
    }
})
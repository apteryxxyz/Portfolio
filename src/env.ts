import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  VERCEL_ENV: z.enum(['development', 'production', 'preview']),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID: z
    .string()
    .regex(/^G-[A-Z0-9]+$/)
    .optional(),
});

export type Env = z.infer<typeof envSchema>;
export const env = envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {
      [key: Uppercase<string>]: string | undefined;
    }
  }
}

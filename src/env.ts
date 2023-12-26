import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  NEXT_PUBLIC_APP_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;
export const env = envSchema.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    interface ProcessEnv extends Env {
      [key: Uppercase<string>]: string | undefined;
    }
  }
}

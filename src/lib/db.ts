import { Redis } from "@upstash/redis";

export const db = new Redis({ // подключение к базе данных
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string
})
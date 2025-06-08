import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis'

import dotenv from "dotenv";

dotenv.config();

// Create a ratelimiter that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export default ratelimit;
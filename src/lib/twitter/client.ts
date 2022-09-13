import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN as string);
export const roTwitterClient = client.readOnly;

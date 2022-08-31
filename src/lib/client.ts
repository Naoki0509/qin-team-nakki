import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "naokiblog",
	apiKey: process.env.MICROCMS_API_KEY as string,
});

if (!client) {
	throw new Error("client is not defined");
}

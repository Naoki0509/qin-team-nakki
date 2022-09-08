import { createClient } from "microcms-js-sdk";

export const MicroClient = createClient({
	serviceDomain: "naokiblog",
	apiKey: process.env.MICROCMS_API_KEY as string,
});

if (!MicroClient) {
	throw new Error("Microclient is not defined");
}

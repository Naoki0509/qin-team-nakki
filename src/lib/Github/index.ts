import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httplink = createHttpLink({
	uri: "https://api.github.com/graphql",
});
const authlink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		},
	};
});

export const client = new ApolloClient({
	link: authlink.concat(httplink),
	cache: new InMemoryCache(),
});

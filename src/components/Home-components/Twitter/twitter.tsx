import {
	Avatar,
	Box,
	Card,
	Grid,
	Group,
	Stack,
	Text,
	Title,
	TypographyStylesProvider,
} from "@mantine/core";
import dayjs from "dayjs";
import { FC } from "react";
import { TweetV2, UserV2 } from "twitter-api-v2";

type Props = {
	twitterUser: UserV2;
	tweets: TweetV2[];
};

export const Twitter: FC<Props> = ({ twitterUser, tweets }) => {
	return (
		<div>
			<Stack>
				<Title>Twitter</Title>
				{tweets.map((tweet) => {
					return (
						<Card key={tweet.id}>
							<Group className="flex flex-row">
								<Box>
									<Avatar
										src={twitterUser.profile_image_url}
										className="rounded-full"
										size={38}
									/>
								</Box>
								<Box>
									<Text className="font-bold text-[16px] text-black-200">
										{twitterUser.name}
									</Text>
									<Text>
										@{twitterUser.username}・
										{dayjs(tweet.created_at).format("M月D日")}
									</Text>
								</Box>
							</Group>

							<TypographyStylesProvider>
								<pre
									dangerouslySetInnerHTML={{ __html: tweet.text }}
									style={{ whiteSpace: "pre-wrap", background: "none" }}
								/>
							</TypographyStylesProvider>
						</Card>
					);
				})}
			</Stack>
		</div>
	);
};

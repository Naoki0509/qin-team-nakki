import {
	Avatar,
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
						<Grid
							key={tweet.id}
							justify={"space-between"}
							align={"flex-start"}
							columns={24}
						>
							<Grid.Col>
								<Avatar
									src={twitterUser.profile_image_url}
									radius={"xl"}
									size={38}
								/>
							</Grid.Col>
							<Grid.Col span={21}>
								<Group>
									<Text>{twitterUser.name}</Text>
									<Text>
										@{twitterUser.username}{" "}
										{dayjs(tweet.created_at).format("MM月DD日")}
									</Text>
								</Group>
								<TypographyStylesProvider>
									<div dangerouslySetInnerHTML={{ __html: tweet.text }} />
								</TypographyStylesProvider>
							</Grid.Col>
						</Grid>
					);
				})}
			</Stack>
		</div>
	);
};

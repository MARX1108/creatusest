import { VStack, List, ListItem, Button, Stack, Box, Icon } from "@chakra-ui/react";
import CourseCard from "./course-card";
import BlogPostCard from "./post-card";
import Link from "./link";

import posts from "../data/research.json"
import courses from "../data/websites.json"
import { CgArrowRight } from "react-icons/cg";

type Props = {
    tab: string;
};


const DeckContent = ({ tab }: Props) => {
    return (
        <><List spacing={6}>
            {
                tab === "Websites" ?
                    <> {
                        courses.map((course) => (
                            <ListItem key={course.url}>
                                <CourseCard {...course} />
                            </ListItem>
                        ))
                    }</>
                    : <>{
                        posts.map((post) => (
                            <ListItem key={post.slug}>
                                <BlogPostCard {...post} />
                            </ListItem>
                        ))
                    }</>
            }
        </List>
            <Box>
                <Link
                    display="flex"
                    alignItems="center"
                    href="/blog"
                    ml={{ base: 0, md: 4 }}
                    role="group"
                >
                    Read all articles
                    <Icon
                        as={CgArrowRight}
                        ml={1}
                        color="purple.500"
                        _groupHover={{ ml: 3 }}
                        transitionDuration="slow"
                        transitionProperty="margin-left"
                        transitionTimingFunction="ease-out"
                    />
                </Link>
            </Box>
        </>
    )
}
export default DeckContent;
import { VStack, List, ListItem, Button, Stack, Box, Icon, SimpleGrid, Center } from "@chakra-ui/react";
import CourseCard from "./course-card";
import BlogPostCard from "./post-card";
import Link from "./link";
import ImageCard from "./image-card";

import posts from "../data/research.json"
import courses from "../data/websites.json"
import { CgArrowRight } from "react-icons/cg";

type Props = {
    tab: string;
};


const DeckContent = ({ tab }: Props) => {
    return (
        <>
            {
                tab === "Websites" ?
                    <List spacing={6}> {
                        courses.map((course) => (
                            <ListItem key={course.url}>
                                <CourseCard {...course} />
                            </ListItem>
                        ))
                    }</List>
                    : tab === "Research" ? <List spacing={6}>{
                        posts.map((post) => (
                            <ListItem key={post.slug}>
                                <BlogPostCard {...post} />
                            </ListItem>
                        ))
                    }</List> : <Center><SimpleGrid
                        spacing={{ base: '5', md: '8' }}
                        columns={{ base: 1, md: 2, lg: 3 }}
                    >
                        <ImageCard url="https://mir-s3-cdn-cf.behance.net/project_modules/fs/15660284690487.5d6527a3aed2f.jpg" title="Annihilation" />
                        <ImageCard url="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b2025684690487.5d6527a3afcc0.jpg" title="Bubble" />
                        <ImageCard url="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/63f1dd84690301.5d652686ed839.png" title="Studio72" />
                    </SimpleGrid></Center>
            }

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
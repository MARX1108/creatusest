import { Course } from "./types/course";
import { VStack, List, ListItem, Button, Stack, Box, Icon } from "@chakra-ui/react";
import CourseCard from "./course-card";
import { useState } from "react";
import BlogPostCard from "./post-card";
import Link from "./link";

import posts from "../data/research.json"
import { CgArrowRight } from "react-icons/cg";



type Props = {
  courses: Course[];
};

type Tab = {
  label: string;
  color: string;
  lightColor: string;
  textShadow: string;
};

const Tabs: Tab[] = [
  {
    // href: TWITTER_PROFILE,
    label: "Websites",
    color: "twitter",
    lightColor: "rgba(29,161, 242,0.40)",
    textShadow: "2px 2px 7px rgba(29,161, 242,0.40)",
  },
  {
    // href: GITHUB_PROFILE,
    label: "Research",
    color: "Gray.900",
    lightColor: "rgba(0,0,0,0.40)",
    textShadow: "2px 2px 7px rgba(0,0,0,0.40)",
  },
  {
    // href: TWITCH_CHANNEL,
    label: "Design",
    color: "purple.500",
    lightColor: "rgba(128, 90, 213, 0.49)",
    textShadow: "2px 2px 7px rgba(128, 90, 213, 0.49)",
  },
  {
    // href: TWITCH_CHANNEL,
    label: "Highlights",
    color: "Gray.500",
    lightColor: "rgba(0,0,0,0.40)",
    textShadow: "2px 2px 7px rgba(128, 90, 213, 0.49)",
  },
];


const Deck = ({ courses }: Props) => {
  const [currTab, setTab] = useState(Tabs[0].label)
  return (

    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Stack direction={{ base: "column", md: "row" }} spacing={3} borderBottom="2px black">
        {Tabs.map(({ label, color, textShadow, lightColor }) => (
          <Button
            key={label}
            // as={Link}
            justifyContent={{ base: "flex-start", md: "center" }}
            // px={4}
            color={currTab === label ? color : lightColor}
            fontWeight={currTab === label ? "black" : "medium"}
            textShadow="none"
            _hover={{
              color: color,
              fontSize: "1.1rem",
              textShadow: textShadow,
              fontWeight: "black",
              transition: "all 0.5s ease-in-out"
            }}
            _focus={{
              border: "none",
            }}
            // href={href}
            // target="_blank"
            onClick={() => setTab(label)}
            variant="ghost"
            transition="all 0.5s ease-in-out"
          >
            {label}
          </Button>
        ))}
      </Stack> <List spacing={6}>
        {
          currTab === Tabs[0].label ? <>
            {courses.map((course) => (
              <ListItem key={course.url}>
                <CourseCard {...course} />
              </ListItem>
            ))}</>
            : <>{
              posts.map((post) => (
                <ListItem key={post.slug}>
                  <BlogPostCard {...post} />
                </ListItem>
              ))
            }
            </>

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
    </VStack>
  );
};

export default Deck;

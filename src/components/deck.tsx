import { VStack, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

import DeckContent from "./deck-content"

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
    color: "rgba(29,161, 242,1)",
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
];


const Deck = () => {
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
              // fontSize: "1.1rem",
              textShadow: textShadow,
              // fontWeight: "black",
              // transition: "all 0.25s ease-in-out"
            }}
            _focus={{
              border: "none",
            }}
            onClick={() => setTab(label)}
            variant="ghost"
            transition="all 0.5s ease-in-out"
          >
            {label}
          </Button>
        ))}  <Button
          justifyContent={{ base: "flex-start", md: "center" }}
          color="gray.900"
          fontWeight="black"
          textShadow="none"
          variant="ghost"

        >
          Highlights
        </Button>
      </Stack>
      <DeckContent tab={currTab} />
    </VStack>
  );
};

export default Deck;

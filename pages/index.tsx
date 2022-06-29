import { Stack, Heading, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroImage from '../src/components/main-image'
import styles from '../styles/Home.module.css'
import PageTransition from '../src/utils/page_transition'
import Deck from '../src/components/deck'
import courses from "../src/data/websites.json"
import ExternalLink from '../src/components/external-link'

const Home: NextPage = () => {
  return (
    <PageTransition>
      <Stack as="section"
        alignItems="center"
        direction={{ base: "column-reverse", md: "row" }}
        w="full"
        spacing={12}>
        <VStack alignItems="flex-start" w="full" spacing={3}>

          <Stack
            alignItems="center"
            justifyContent={{ base: "center", md: "flex-start" }}
            direction={{ base: "column", md: "row" }}
            w="full"
            spacing={3}
          >
            <Heading as="h1" size="lg">
              Hi, I’m Marx Wang.
            </Heading>
          </Stack>
          <Text as="h2" lineHeight="175%">
            I’m a full-stack engineer, a designer, and a content creator. I work
            at <ExternalLink href="https://codechem.com">CodeChem</ExternalLink>{" "}
            as a <strong>developer/designer</strong>, and I’m a{" "}
            <strong>core member</strong> at{" "}
            <ExternalLink href="https://chakra-ui.com">Chakra UI</ExternalLink>,
            contributing as a <strong>Developer Advocate</strong>. I’m also an{" "}
            <ExternalLink href="https://egghead.io">egghead.io</ExternalLink>{" "}
            <strong>instructor</strong>.
          </Text>
        </VStack>

        <HeroImage />

      </Stack>

      <Deck courses={courses} />
    </PageTransition>
  )
}

export default Home

import {
  VStack,
  HStack,
  Stack,
  AspectRatio,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { Course } from './types/course';
import ExternalLink from './external-link';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from './image';

type Props = Course;

const CourseCard = ({
  id,
  title,
  description,
  url,
  image,
}: Props) => {

  return (
    <LinkBox as="article">
      <Stack
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
        p={6}
        bg={mode('gray.100', 'gray.700')}
        _hover={{ transform: 'scale(1.025, 1.025)' }}
        rounded="md"
        spacing={{ base: 8, md: 5 }}
        transitionDuration="slow"
        transitionProperty="transform"
        transitionTimingFunction="ease-out"
      >
        <AspectRatio flexShrink={0} w={{ base: 32, md: 20 }} ratio={1}>
          <>
            {image && <Image src={image} alt={title} layout="fill" />}
          </>
        </AspectRatio>
        <VStack spacing={3}>
          <VStack w="full" spacing={1}>
            <Stack
              alignItems={{ base: 'flex-start', md: 'center' }}
              justifyContent={{ base: 'flex-start', md: 'space-between' }}
              direction={{ base: 'column', md: 'row' }}
              w="full"
            >
              <Heading fontWeight="semibold" size="md">
                {title}
              </Heading>
              {url && (
                <LinkOverlay as={ExternalLink} href={url}>
                  <Text color="inherit" fontSize="sm">
                    {url}
                  </Text>
                </LinkOverlay>
              )}
            </Stack>
          </VStack>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default CourseCard;

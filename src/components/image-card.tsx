import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Stack,
    Image,
} from '@chakra-ui/react';

type Props = {
    title: string;
    url: string
};

const ImageCard = ({ url, title }: Props) => {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={3}
                maxW={'230'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                // boxShadow={'md'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'130px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 1,
                        left: 0,
                        backgroundImage: `url(${url})`,
                        filter: 'blur(10px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={130}
                        width={230}
                        objectFit={'cover'}
                        src={url}
                        alt=""
                    />
                </Box>
                {/* <Stack pt={4} align={'center'}>
                    <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500} color={"Gray.400"}>
                        {title}
                    </Heading>
                </Stack> */}
            </Box>
        </Center>
    );
}

export default ImageCard
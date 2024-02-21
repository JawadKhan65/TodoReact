import React from 'react'

import { Box, Card, CardBody, VStack, Heading, Image, Text, HStack, Divider } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        title: "React Space",
        description:
            "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
        getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
        title: "React Infinite Scroll",
        description:
            "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
        getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
        title: "Photo Gallery",
        description:
            "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
        getImageSrc: () => require("../images/photo3.jpg"),
    },
    {
        title: "Event planner",
        description:
            "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        getImageSrc: () => require("../images/photo4.jpg"),
    },
];
const Project = () => {
    return (
        <Box

            width={"100vw"}
            m={0}
            p={0}
            className='flex justify-items-center items-center flex-col flex-wrap bg-yellow-700 overflow-hidden'

            id='projects'
        >
            <Heading as={"h1"} className='font-bold m-4 text-white text-2xl '>Featured Projects</Heading>
            <Box maxWidth={"80vw"} p={10} >
                <HStack spacing={10} m={10} flexDirection={'row'} justifyContent={"center"} alignItems={"center"} wrap={'wrap'} >
                    {projects.map((prod, id) => {
                        return (
                            <Card maxH={400} maxW={450} className='bg-gray-200 border-2 border-dashed border-gray-500 rounded-md drop-shadow-lg'>
                                <CardBody className='flex justify-items-center items-center flex-col rounded-md overflow-hidden' overflow="hidden" >
                                    <Image p={10} src={prod.getImageSrc()} alt='plz wait'
                                    />
                                </CardBody>
                                <VStack spacing={10} h={150} p={4}>
                                    <Heading className='font-bold' as={"h1"} p={2}>Project: {prod.title}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1xl' className='ml-2' /></Heading>

                                    <Divider>

                                    </Divider>
                                    <Text className='text-justify overflow-auto font-medium text-sm' p={6} >
                                        {prod.description}
                                    </Text>
                                    <Divider>

                                    </Divider>

                                </VStack>

                            </Card>
                        )
                    })}

                </HStack>
            </Box>
        </Box >
    )
}

export default Project
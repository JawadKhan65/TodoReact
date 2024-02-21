import React from "react";
import { Avatar, Heading, Stack, VStack, Box, Wrap, WrapItem } from "@chakra-ui/react";


const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading, and VStack components.
const LandingSection = () => (
    <Box
        bg={"indigo"}
        height="100vh"
        width={"100vw"}
        m="0"
        p={0}
        justifyContent="center"
        alignItems={"center"}
        flexDirection={'column'}


    >
        <VStack spacing={4} textAlign={"center"} color={"white"} alignItems="center" justifyContent="center" height="100vh">
            <Wrap direction='row'>
                <WrapItem>
                    <Avatar
                        className="h-24 w-24 border-yellow-600 rounded-full border-4 overflow-hidden"
                        name='portfolio1'
                        src='https://i.pravatar.cc/150?img=7'
                    />
                </WrapItem>
            </Wrap>

            <Heading className="text-md font-semibold" >{greeting}</Heading>
            <Heading className="text-2xl font-bold m-2">{bio1}</Heading>
            <Heading className="text-2xl font-bold" >{bio2}</Heading>

        </VStack>
    </Box>
);

export default LandingSection;

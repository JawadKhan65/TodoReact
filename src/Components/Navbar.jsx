import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faInstagram, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Box, Stack, HStack, VStack } from '@chakra-ui/react'



const Navbar = () => {
    const links = [
        {
            icon: faEnvelope,
            url: "mailto:hello@example.com"
        },
        {
            icon: faInstagram,
            url: "https://www.instagram.com/"

        },
        {
            icon: faGithub,
            url: "https://www.github.com/"

        },
        {
            icon: faStackOverflow,
            url: "https://www.stackoverflow.com/"

        },
        {
            icon: faLinkedinIn,
            url: "https://www.linkedin.com/"

        },

    ]
    const [prevScroll, setPrevScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            let element = document.getElementById("navbar")
            if (currentScroll < prevScroll) {

                element.style.top = "0px";

            } else {
                element.style.top = "-50px";
            }

            setPrevScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScroll]);

    const handleScrollViewToSection = (page) => (event) => {
        event.preventDefault()
        const id = `${page}`
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }
    return (
        <>
            <Box
                bg='cadetblue'
                w='100vw'
                p={4}
                color={'white'}
                top={0}
                left={0}
                right={0}
                translateY={0}
                transitionProperty="top"
                transitionDuration="0.5s"
                transitionTimingFunction="ease-in-out"
                backgroundColor="#18181b"
                id="navbar"
                className=' sticky z-50'
                style={
                    {
                        display: "block",
                        transition: "top 0.7s"
                    }
                }
            >
                <Box maxHeight={1280} margin="0 auto" >
                    <Stack direction={["column", "row"]} cursor="pointer" px="10vw" py={3} justifyContent={'space-between'} alignItems={'center'} spacing={4}>
                        <nav >
                            <HStack spacing={12}>
                                {links.map((links) => {
                                    return (
                                        <>
                                            <a href={links.url} target='_blank' rel='noopener noreferrer'>
                                                <FontAwesomeIcon icon={links.icon} size='1x'
                                                />
                                            </a>

                                        </>
                                    )
                                })}
                            </HStack>
                        </nav>
                        <nav className='text-sm'>
                            <HStack spacing={8}>
                                <a href='#contactme-section'
                                    onClick={handleScrollViewToSection("projects")}
                                >Projects</a>
                                <a href='#contactme-section'
                                    onClick={handleScrollViewToSection("contact")}
                                >Contact me</a>
                            </HStack>
                        </nav>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Navbar
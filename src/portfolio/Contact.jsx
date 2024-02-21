import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Text,
    Textarea,
    Divider,
    Button
} from '@chakra-ui/react'

const Contact = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let [value, setValue] = React.useState('')

    let handlevalueChange = (e) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    return (
        <Box height="100vh" width={"100vw"} bg={"brown"} className='flex justify-center items-center  flex-col'
            id="contact">
            <Box mb={14} fontSize={30} color={"white"} fontWeight={500}>
                Contact me for your projects
            </Box>

            <FormControl isInvalid={isError}


                maxW={400}
                w={400}
                height={600}
                className='flex justify-center  flex-col border-2 border-dashed border-sky-400 rounded-lg '
                overflow={"hidden"}
            >

                <FormLabel className='font-bold text-white m-2 ' >Email</FormLabel >
                <Input type='email' value={input} onChange={handleInputChange}
                    className='m-2 h-12 rounded-md'
                />
                {!isError ? (
                    <FormHelperText className='font-bold text-white m-2'>
                        Enter the email you'd like to receive the newsletter on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage className='font-bold text-white m-2'>Email is required.</FormErrorMessage>
                )}

                <Text mb='8px' className='font-bold text-white m-2'>Comment:</Text>
                <Textarea
                    value={value}
                    onChange={handlevalueChange}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                    className='font-semibold m-2 p-2 block outline-orange-400'
                    h={300}
                    maxH={305}

                    overflow={"scroll"}
                />


                <Button
                    className='bg-green-500 text-white font-bold p-2  m-2 rounded-lg border-2 border-emerald-300 drop-shadow-2xl shadow-slate-400 hover:bg-emerald-500'
                >
                    Submit
                </Button>

            </FormControl>
        </Box>
    )
}

export default Contact
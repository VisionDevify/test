import React from 'react';
import { Box, Image, Button, Container, Heading } from '@chakra-ui/react';

function Header() {
    return (
        <header >
            <Box 
            d='flex' 
            align-items='center' 
            justifyContent='space-between' 
            ml={6} 
            mr={6}
        >
                <Image boxSize='90px' src="./../../images/brand-logo.svg" alt="brand logo" />
            <Box>
                <Button pr={3} colorScheme='gray.600' fontSize='sm' variant='link'>
                    Log In
                </Button>
                <Button colorScheme='gray.600' fontSize='sm' variant='link'>
                    Sign In
             </Button>
         </Box>
     </Box>

     {/*Main Punch Line*/}

     <Box>
         <Container maxWidth="container.xl">
             <Box d='flex' alignItems="center" py='20' flexDirection="row">
                 <Box mr="6">
                     <Heading as="h1" size="2x1">
                         <Box>Dive In! There are so many things to do in Meetup</Box>
                     </Heading>
                     <Box mt="6" fontWeight='medium'>
                     Join a group to meet people, make friends, find support, grow a 
                     business, and explore your interests. Thousands of events are happening every day, both online 
                     and in person!
                     </Box>
                 </Box>
                 <Box w='100'>
                     <Image w='100' src="/illustration.svg" alt="illustration"/>
                 </Box>
             </Box>
         </Container>
     </Box>
 </header>
    )
}
console.log(Image)
export default Header

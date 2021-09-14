import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Grid, Text } from '@chakra-ui/layout';
import React from 'react';
import Img1 from '../../img/modalImg1.jpg';
import Img2 from '../../img/modalImg2.jpg';
import Img3 from '../../img/modalImg3.jpg';
import Img4 from '../../img/modalImg4.jpg';
import google from '../../img/google.svg';
import etoro from '../../img/etoro.svg';
import ibm from '../../img/ibm.svg';
import accenture from '../../img/accenture.svg';
import paypal from '../../img/paypal.svg';
import vodafone from '../../img/vodafone.svg';
import microsoft from '../../img/microsoft.svg';
import mc from '../../img/mckinsey-company.svg';

import './StyleWithUs.css';
function WorkWithUs() {
  return (
    <Center bg='brand.bg' color='brand.text' py='20' flexDir='column'>
      <Flex
        w={{ md: '5xl', base: '90%' }}
        m='auto'
        alignItems='center'
        flexDirection={{ base: 'column', md: 'row' }}
        gridGap='10'>
        <Box justify='flex-end' pr={{ md: '16' }}>
          <Text fontSize='1em'>REACH YOUR GOALS </Text>
          <Text fontSize='2.5em' fontWeight='bold' pb='5'>
            Work with Us{' '}
          </Text>
          <Text>
            TNW takes center stage in the tech industry, offering creative media
            campaigns, sizzling tech events, bespoke innovation programs, and
            prime office locations in Amsterdam. Want to engage your audience
            more effectively, innovate your business, and position your brand in
            front of a digital-savvy audience?{' '}
          </Text>
          <Button colorScheme='teal' mt='5'>
            Get in touch
          </Button>
        </Box>
        <Grid templateColumns='1fr 1fr' className='spinWithUs'>
          {[Img1, Img2, Img3, Img4].map((img) => (
            <div>
              <Image
                minW={{ md: '220px', base: 'full' }}
                h='200px'
                p='2'
                objectFit='cover'
                borderRadius='2xl'
                src={img}
              />
            </div>
          ))}
        </Grid>
      </Flex>
      <Flex
        pt='14'
        w={{ md: '80%', base: '50%' }}
        flexDir={{ base: 'column', md: 'row' }}>
        <Box w='40'>
          <img src={google} alt='' srcset='' />
        </Box>
        <Box w='40'>
          <img src={etoro} alt='' srcset='' />
        </Box>
        <Box w='40'>
          <img src={ibm} alt='' srcset='' />
        </Box>
        <Box w='40'>
          <img src={microsoft} alt='' srcset='' />
        </Box>
        <Box w='40' _hover={{}}>
          <img src={paypal} alt='' srcset='' />
        </Box>
        <Box w='40' _hover={{}}>
          <img src={vodafone} alt='' srcset='' />
        </Box>
        <Box w='40' _hover={{}}>
          <img src={accenture} alt='' srcset='' />
        </Box>
        <Box w='40' _hover={{}}>
          <img src={mc} alt='' srcset='' />
        </Box>
      </Flex>
    </Center>
  );
}

export default WorkWithUs;

import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/layout';
import React from 'react';
import Img1 from '../../img/modalImg1.jpg';
import Img5 from '../../img/modalImg5.jpg';
import Img3 from '../../img/modalImg3.jpg';
import Img2 from '../../img/modalImg2.jpg';
import Img4 from '../../img/modalImg4.jpg';
import { Image } from '@chakra-ui/image';
import { EmailIcon } from '@chakra-ui/icons';

import './Explore.css';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';

function ExploreNewsletter() {
  return (
    <Box bg='brand.bgSecondary' color='brand.text'>
      <Box p={{ md: '20', base: '1' }}>
        <Text pb='10' fontSize='2.3em' fontWeight='bold'>
          Explore Our Channels
        </Text>
        <Grid
          gap='5'
          templateColumns='repeat(5, 1fr)'
          overflow={{ base: 'auto', md: 'visible' }}>
          {[Img1, Img1, Img5, Img2, Img4].map((img) => (
            <Center pos='relative' cursor='pointer'>
              <Image
                h='250px'
                shadow='2xl'
                minW={{ base: '300px', md: 'full' }}
                objectFit='cover'
                src={img}
              />
              <Text
                pos='absolute'
                top='5'
                color='white'
                fontWeight='bold'
                fontSize='1.3em'>
                Heading...
              </Text>
              <Text
                fontSize='1em'
                pos='absolute'
                bottom='2'
                color='white'
                px='3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </Center>
          ))}
        </Grid>
      </Box>
      <Center
        overflow='hidden'
        display='flex'
        flexDir='column'
        pos='relative'
        className='fixedIMgNewsletter'
        py={{ md: '10', base: '5' }}
        color='white'>
        <Text
          textAlign='center'
          fontSize={{ md: '2.7em', base: '1.2em' }}
          pb={{ md: '2', base: '3' }}
          pt={{ base: '5', sm: '0' }}>
          Get the snarkiest newsletter in tech
        </Text>
        <Text
          textAlign='center'
          fontSize={{ md: '1em', base: '1em' }}
          pb={{ md: '6' }}>
          Subscribe to our twice-weekly{' '}
          <span style={{ color: 'cyan' }}> Big Spam </span> or check out our
          <span style={{ color: 'cyan' }}> other newsletters. </span>
        </Text>
        <InputGroup
          size='md'
          w={{ md: '2xl', base: '90%' }}
          color='gray.600'
          bg='whiteAlpha.200'
          m='auto'>
          <InputLeftAddon
            display={{ base: 'none', md: 'flex' }}
            children={
              <Center alignItems='center'>
                <EmailIcon mx='1' />
                Email
              </Center>
            }
          />
          <Input placeholder='Enter Email' />
          <InputRightAddon
            children={
              <Text cursor='pointer' w='full'>
                Subscribe
              </Text>
            }
          />
        </InputGroup>
      </Center>
    </Box>
  );
}

export default ExploreNewsletter;

import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import logo from '../../img/indexWhite.png';
import { List, ListItem } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
function Footer() {
  return (
    <Box bg='black' color='white'>
      <Flex
        py='5'
        w={{ lg: '4xl' }}
        m='auto'
        flexDir={{ base: 'column', md: 'row' }}>
        <Flex justify={{ base: 'center', md: 'flex-start' }} flex={2}>
          <Image src={logo} />
        </Flex>
        <Box flex={1} pt={{ md: '10' }} px='5'>
          <Text fontSize='1.2em' fontWeight='bold'>
            More TNW
          </Text>
          <Flex
            flexDir={{ md: 'column' }}
            flexWrap='wrap'
            gridGap={{ base: '3', md: '0' }}
            color='cyan'>
            <Text> Media </Text>
            <Text> Events</Text>
            <Text> Programs</Text>
            <Text> Spaces</Text>
            <Text> Newsletters</Text>
            <Text> Deals</Text>
          </Flex>
        </Box>
        <Box flex={1} pt='10' px='5'>
          {' '}
          <Text fontSize='1.2em' fontWeight='bold'>
            About TNW
          </Text>
          <Flex
            color='cyan'
            flexDir={{ md: 'column' }}
            flexWrap='wrap'
            gridGap={{ base: '3', md: '0' }}>
            <Text> Partner with us </Text>
            <Text> Jobs</Text>
            <Text> Terms & Conditions</Text>
            <Text> Cookie Statement</Text>
            <Text> Newsletters</Text>
            <Text> Privacy Statement</Text>
            <Text> Editorial Policy</Text>
          </Flex>
        </Box>
      </Flex>
      <Divider />
      <Center textAlign='center' color='gray.600' py='5'>
        <Text>
          TNW is a <span style={{ color: 'white' }}> Financial Times</span>{' '}
          company.
          <br /> Copyright © 2006—2021, The Next Web B.V. Made with in
          Amsterdam.
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;

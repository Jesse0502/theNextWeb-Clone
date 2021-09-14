import { Image } from '@chakra-ui/image';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import logo from '../../img/index.png';
import Img1 from '../../img/modalImg1.jpg';
import Img2 from '../../img/modalImg2.jpg';
import Img3 from '../../img/modalImg3.jpg';
import Img4 from '../../img/modalImg4.jpg';
import './heroSection.css';
function HeroSection() {
  return (
    <Box
      bg='brand.bg'
      color='brand.text'
      display='block'
      overflow='auto'
      pb='10'>
      <Flex>
        <Center flex={{ base: '4', md: '1' }} w='52' bg='brand.bg' py='10'>
          <Image
            h={{ md: 'full', base: '10' }}
            // ml={{ base: '-10' }}
            objectFit='cover'
            src={logo}
          />
        </Center>
        <Center flex={{ base: '5', md: '1' }} fontSize='20' bg='brand.bg'>
          <Text
            color='brand.textSecondary'
            fontFamily='sans-serif'
            fontSize={{ md: '1.5em' }}>
            The heart of tech{' '}
          </Text>
        </Center>
      </Flex>
      <Flex
        bg='brand.bg'
        w='full'
        px={{ md: '10' }}
        zIndex='0'
        flexDir={{ base: 'row', md: 'row' }}>
        <Flex
          fontSize='20'
          flexWrap='wrap'
          display={{ base: 'none', md: 'flex' }}
          flexDir={{ md: 'column' }}
          bg='brand.bg'
          color='white'
          overflow='auto'>
          <Box pos='relative'>
            <Image
              h={{ base: '200px', lg: '400px' }}
              w={{ base: '200px', lg: '900px' }}
              className='heroImageHover'
              p='2'
              objectFit='cover'
              flexGrow={2}
              src={Img1}
            />
            <Text
              bottom='24'
              left='5'
              color='gray.300'
              fontFamily='sans-serif'
              zIndex='1'
              pos='absolute'
              fontSize='sm'>
              Heading 1
            </Text>
            <Text
              pos='absolute'
              fontSize='md'
              bottom='7'
              lineHeight='35px'
              fontWeight='semibold'
              fontSize={{ base: 'md', lg: 'xl' }}
              lineHeight='sm'
              overflow='wrap'
              left='5'
              zIndex='1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
          <Box pos='relative'>
            <Image
              h={{ base: '200px', lg: '200px' }}
              w={{ base: '200px', lg: 'full' }}
              className='heroImageHover'
              objectFit='cover'
              flexGrow={1}
              p='2'
              src={Img2}
            />
            <Text
              bottom='24'
              left='5'
              color='gray.300'
              fontFamily='sans-serif'
              zIndex='1'
              pos='absolute'
              fontSize='sm'>
              Heading 2
            </Text>
            <Text
              pos='absolute'
              fontSize='md'
              bottom='7'
              lineHeight='35px'
              fontWeight='semibold'
              fontSize={{ base: 'md', lg: 'xl' }}
              lineHeight='sm'
              overflow='wrap'
              left='5'
              zIndex='1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Text>
          </Box>
        </Flex>
        <Flex
          flexWrap='wrap'
          flexGrow={1}
          overflow='auto'
          fontSize='20'
          flexDir={{ md: 'column', base: 'row' }}
          bg='brand.bg'>
          <Flex bg='brand.bg'>
            <Box pos='relative' color='white'>
              <Image
                objectFit='cover'
                h={{ base: '200px', lg: '300px' }}
                w={{ base: '200px', lg: '900px' }}
                className='heroImageHover'
                p='2'
                flexGrow={2}
                src={Img4}
              />
              <Text
                bottom={{ base: '7', md: '24' }}
                left={{ base: '5', md: '5' }}
                color='gray.300'
                fontFamily='sans-serif'
                zIndex='999'
                pos='absolute'
                fontSize='sm'>
                Heading 3
              </Text>
              <Text
                bottom={{ base: '5', md: '7' }}
                fontSize={{ base: 'xs', lg: 'xl' }}
                left={{ md: '5', base: '3' }}
                pos='absolute'
                fontWeight='semibold'
                lineHeight='sm'
                overflow='wrap'
                display={{ base: 'none', md: 'block' }}
                zIndex='999'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit bop
              </Text>
            </Box>
            <Box pos='relative' color='white'>
              <Image
                objectFit='cover'
                h={{ base: '200px', lg: '300px' }}
                w={{ base: '200px', lg: '900px' }}
                p='2'
                className='heroImageHover'
                flexGrow={2}
                src={Img3}
              />
              <Text
                bottom={{ base: '7', md: '24' }}
                left={{ base: '5', md: '5' }}
                color='gray.300'
                fontFamily='sans-serif'
                zIndex='1'
                pos='absolute'
                fontSize='sm'>
                Heading 3
              </Text>
              <Text
                pos='absolute'
                fontSize='md'
                bottom='7'
                lineHeight='35px'
                fontWeight='semibold'
                fontSize={{ base: 'md', lg: 'xl' }}
                lineHeight='sm'
                overflow='wrap'
                left='5'
                display={{ base: 'none', md: 'block' }}
                zIndex='999'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Text>
            </Box>
            <Box
              pos='relative'
              color='white'
              display={{ base: 'block', md: 'none' }}>
              <Image
                objectFit='cover'
                h={{ base: '200px', lg: '300px' }}
                w={{ base: '200px', lg: '900px' }}
                p='2'
                className='heroImageHover'
                flexGrow={2}
                src={Img3}
              />
              <Text
                bottom={{ base: '7', md: '24' }}
                left={{ base: '5', md: '5' }}
                color='gray.300'
                fontFamily='sans-serif'
                zIndex='1'
                pos='absolute'
                fontSize='sm'>
                Heading 3
              </Text>
              <Text
                pos='absolute'
                fontSize='md'
                bottom='7'
                lineHeight='35px'
                fontWeight='semibold'
                fontSize={{ base: 'md', lg: 'xl' }}
                lineHeight='sm'
                overflow='wrap'
                left='5'
                display={{ base: 'none', md: 'block' }}
                zIndex='999'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Text>
            </Box>
          </Flex>
          <Box pos='relative' color='white' w={{ base: 'full' }}>
            <Image
              objectFit='cover'
              className='heroImageHover'
              h={{ base: '200px', lg: '300px' }}
              w={{ base: '100%', lg: 'full' }}
              flexGrow={1}
              p='2'
              src={Img2}
            />
            <Text
              bottom={{ base: '7', md: '24' }}
              left={{ base: '5', md: '5' }}
              color='gray.300'
              fontFamily='sans-serif'
              zIndex='1'
              pos='absolute'
              fontSize='sm'>
              Heading 3
            </Text>
            <Text
              pos='absolute'
              fontSize='md'
              bottom='7'
              lineHeight='35px'
              fontWeight='semibold'
              fontSize={{ base: 'md', lg: 'xl' }}
              lineHeight='sm'
              overflow='wrap'
              left='5'
              display={{ base: 'none', md: 'block' }}
              zIndex='1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              autem ad? Quos, est! Quidem laudantium quo non autem.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeroSection;

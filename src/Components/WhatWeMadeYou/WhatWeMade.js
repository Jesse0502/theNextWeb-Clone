import Icon from '@chakra-ui/icon';
import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Img1 from '../../img/modalImg1.jpg';
function WhatWeMade() {
  return (
    <Box bg='brand.bg' color='brand.text' pt='32'>
      <Box m='auto' w={{ md: '6xl', base: '90%' }}>
        <Text
          textAlign={{ md: 'left', base: 'center' }}
          fontSize={{ md: '3em', base: '2.5em' }}>
          Watch what we made you
        </Text>
        <Flex py='10' flexDir={{ base: 'column', md: 'row' }}>
          <Box w={{ md: '960px' }} h={{ md: '540px', base: '250px' }}>
            <iframe
              isPlaying='true'
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </Box>
          <Flex
            flexDir={{ md: 'column' }}
            maxH='540px'
            gridGap='5'
            overflow='auto'
            pl={{ md: '5' }}
            pt={{ base: '5', md: '0' }}>
            {[3, 4, 5, 3, 3].map(() => (
              <Box>
                <Image
                  cursor='pointer'
                  h={{ md: '200px', base: '200px' }}
                  w='300px'
                  minW={{ base: '300px', md: '200px' }}
                  objectFit='cover'
                  src={
                    'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
                  }
                />
                <Text fontSize='1.2em'>Never Gonna Give You Up</Text>
                <Text mb='5' color='brand.textSecondary' fontSize='0.7em'>
                  1B views{' '}
                  <Icon
                    viewBox='0 0 200 200'
                    w='6px'
                    color='brand.textSecondary'>
                    <path
                      fill='currentColor'
                      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                    />
                  </Icon>{' '}
                  Oct 25, 2009
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default WhatWeMade;

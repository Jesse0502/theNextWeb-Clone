import { Button } from '@chakra-ui/button';
import { Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import './Navbar.css';
import React, { useContext, useEffect, useState } from 'react';
import { Image } from '@chakra-ui/image';
import logo from '../../img/index.png';
import { NavModalContext } from './Navbar';
import ModalImg1 from '../../img/modalImg1.jpg';
import ModalImg2 from '../../img/modalImg2.jpg';
import ModalImg3 from '../../img/modalImg3.jpg';
import ModalImg4 from '../../img/modalImg4.jpg';
import ModalImg5 from '../../img/modalImg5.jpg';
import ModalImg6 from '../../img/modalImg6.jpg';
import ModalImg7 from '../../img/modalImg7.jpg';
function NavOverlay(props) {
  const { showNewsModal, setShowNewsModal } = useContext(NavModalContext);

  const handleScrollLeft = () => {
    document.querySelector('#modal').scrollLeft -= 300;
  };
  const handleScrollRight = () => {
    document.querySelector('#modal').scrollLeft += 300;
  };
  return (
    <Box
      w='full'
      mt='-10'
      zIndex='999'
      opacity='999'
      display={showNewsModal ? 'block' : 'none'}
      onMouseLeave={() => {
        setShowNewsModal(false);
      }}
      pos='absolute'
      className='modalAnimation'>
      <Flex
        alignItems='center'
        bg='brand.text'
        id='modal'
        overflow={{ base: 'auto', lg: 'hidden' }}>
        <Button
          onClick={() => handleScrollLeft()}
          pos='absolute'
          left='2'
          color='black'
          bg='whiteAlpha.700'
          rounded='3xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='32'
            fill='currentColor'
            class='bi bi-arrow-left'
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
            />
          </svg>
        </Button>
        <Flex
          flexDir='column'
          px='6'
          _hover={{
            bg: 'gray.700',
            transition: 'ease-out',
            transitionDuration: '0.5s',
          }}
          py='5'
          cursor='pointer'
          maxH='280px'
          maxW='300px'
          bg='gray.800'
          alignItems='center'
          color='white'>
          <Image maxW='225px' h='auto' src={ModalImg7} />
          <Text fontSize='1em'>
            Lorem ipsum dolor sit asd amet, consectetur sdf sdfg adipisicing
            elit.
          </Text>
        </Flex>
        <Divider
          orientation='vertical'
          variant='dashed'
          color='brand.bg'
          h='270px'
        />
        {[
          ModalImg2,
          ModalImg3,
          ModalImg5,
          ModalImg5,
          ModalImg4,
          ModalImg5,
          ModalImg5,
        ].map((item) => (
          <Flex
            flexDir='column'
            px='6'
            py='5'
            _hover={{
              bg: 'gray.700',
              transition: 'ease-out',
              transitionDuration: '0.5s',
            }}
            maxH='290px'
            cursor='pointer'
            maxW='300px'
            bg='gray.800'
            alignItems='center'
            color='gray.300'>
            <Image maxW='225px' h='auto' src={item} />
            <Text fontSize='1em'>
              Lorem ipsum dolor sit asd amet, consectetur sdf sdfg adipisicing
              elit.
            </Text>
          </Flex>
        ))}
        <Button
          pos='absolute'
          right='0'
          color='black'
          onClick={() => handleScrollRight()}
          bg='whiteAlpha.700'
          rounded='3xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='32'
            fill='currentColor'
            class='bi bi-arrow-right'
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
            />
          </svg>
        </Button>
      </Flex>
    </Box>
  );
}

export default NavOverlay;

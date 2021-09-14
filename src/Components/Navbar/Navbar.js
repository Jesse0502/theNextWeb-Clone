import { Image } from '@chakra-ui/image';
import { Flex, Text, Box, Heading } from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../App';
import NavOverlay from './NavOverlay';
import { createContext } from 'react';
import logo from '../../img/index.png';
import { Tooltip } from '@chakra-ui/tooltip';
import { Button } from '@chakra-ui/button';
export const NavModalContext = createContext();

function Navbar() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [yellowPopup, setYellowPopup] = useState(true);

  return (
    <Box pos='-webkit-sticky'>
      <Flex
        shadow='xl'
        borderBottom='1px solid black'
        borderColor='brand.text'
        zIndex='999'
        px='5'
        py='2'
        shadow='md'
        bgColor='brand.bg'
        alignItems='center'
        justify='space-between'>
        <Image w='14' src={logo} />
        <Flex
          display={{ base: 'none', sm: 'flex' }}
          fontSize='0.9em'
          gridGap='5'
          color='brand.textSecondary'
          p='1'
          cursor='pointer'>
          <Text>Home</Text>
          <Text
            onMouseEnter={() => setShowNewsModal(true)}
            onClick={() => {
              if (showNewsModal) {
                setShowNewsModal(false);
              }
              if (!showNewsModal) {
                setShowNewsModal(true);
              }
            }}
            display='flex'
            alignItems='center'
            gridGap='1'>
            News{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              fill='currentColor'
              class='bi bi-chevron-down'
              viewBox='0 0 16 16'>
              <path
                fill-rule='evenodd'
                d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
              />
            </svg>
          </Text>
          <Tooltip
            label={
              <Flex flexDir='column' p='2' fontStyle='italic'>
                <Text fontSize='xl'>TNW Conference</Text>
                <Text>Sept 30 - Oct 1</Text>
              </Flex>
            }
            aria-label='A tooltip'>
            <Text display='flex' alignItems='center' gridGap='1'>
              Events{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                fill='currentColor'
                class='bi bi-chevron-down'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </Text>
          </Tooltip>
          <Text>Programs</Text>
          <Text>Spaces</Text>
          <Text>Partner With us</Text>
        </Flex>
        <Switch
          onChange={() => {
            if (currentTheme) {
              setCurrentTheme(false);
            } else {
              setCurrentTheme(true);
            }
          }}
          color='black'
          colorScheme='gray'
          size='md'
          outlineColor='black'
        />
      </Flex>
      <Text
        flex={9}
        display={yellowPopup ? 'block' : 'none'}
        bg='yellow.400'
        zIndex='998'
        color='black'
        py='2'
        px='2'
        fontSize='0.9em'>
        Let’s celebrate TNW Conference 2021 together – check out the preliminary
        schedule!
      </Text>

      <NavModalContext.Provider value={{ showNewsModal, setShowNewsModal }}>
        <NavOverlay />
      </NavModalContext.Provider>
    </Box>
  );
}

export default Navbar;

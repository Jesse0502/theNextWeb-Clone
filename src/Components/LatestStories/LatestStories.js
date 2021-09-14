import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Center, Grid, Text } from '@chakra-ui/layout';
import React from 'react';
import Img1 from '../../img/modalImg1.jpg';
import Img2 from '../../img/modalImg2.jpg';
import Img4 from '../../img/modalImg4.jpg';
import Img5 from '../../img/modalImg5.jpg';
import Img6 from '../../img/modalImg6.jpg';
import { ChevronRightIcon } from '@chakra-ui/icons';

function LatestStories() {
  return (
    <Box
      px={{ md: '32', base: '5' }}
      bg='brand.bg'
      color='brand.text'
      fontFamily='body'>
      <Text py='10' fontSize='3em'>
        Latest Stories{' '}
      </Text>
      <Grid
        overflow={{ base: 'auto', md: 'visible', lg: 'visible' }}
        templateColumns={{
          lg: 'repeat(4,1fr)',
          md: 'repeat(6,1fr)',
          base: 'repeat(8,1fr)',
        }}
        gap='10'>
        {[
          {
            img: Img1,
            heading:
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '16 hours ago',
          },
          {
            img: Img2,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '20 hours ago',
          },
          {
            img: Img6,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '2 hours ago',
          },
          {
            img: Img5,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '10 hours ago',
          },
          {
            img: Img1,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '4 hours ago',
          },
          {
            img: Img4,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '7 hours ago',
          },
          {
            img: Img1,
            heading: 'headLorem ipsum dolor sit consectetur adipisicing elit.',
            time: '20 hours ago',
          },
          {
            img: Img1,
            heading:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            time: '12 hours ago',
          },
        ].map((item) => (
          <Box>
            <Image
              h='200px'
              objectFit='cover'
              minW={{ base: '300px', md: 'full' }}
              src={item.img}
            />
            <Text fontWeight='medium' fontSize='1.2em' fontFamily='sans-serif'>
              {item.heading}
            </Text>
            <Text py='1' mb='3' fontWeight='light'>
              {item.time}
            </Text>
          </Box>
        ))}
      </Grid>
      <Center py='10'>
        <Button
          bg='transparent'
          rounded='3xl'
          w='max'
          _hover={{ color: 'gray.700', bg: 'white' }}
          border='1px solid gray'
          alignItems='center'>
          All News <ChevronRightIcon mx='1' />
        </Button>
      </Center>
    </Box>
  );
}

export default LatestStories;

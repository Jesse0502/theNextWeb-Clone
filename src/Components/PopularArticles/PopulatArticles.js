import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

function PopulatArticles() {
  return (
    <Box px={{ md: '10' }} py='14' bg='brand.bgSecondary' color='brand.text'>
      <Heading textAlign='center' color='brand.textSecondary'>
        Popular Articles
      </Heading>
      <Grid
        gridGap={{ md: '1', base: '5' }}
        my='14'
        justifyContent='space-between'
        templateColumns={{ base: '1fr', md: '1fr 1fr', lg: 'repeat(5, 1fr)' }}>
        {[
          {
            no: '1',
            text: 'Google Search finally has a dark mode — here’s how to turn it on',
          },
          {
            no: '2',
            text: 'So you want to live on Mars eh? Good luck. You’ll probably die a horrific death',
          },
          {
            no: '3',
            text: 'Scientists discover mysterious ‘quantum pressure’ emanating from a black hole',
          },
          {
            no: '4',
            text: 'Redshift’s LED bike pedals claim to keep cyclists safer than regular lights',
          },
          {
            no: '5',
            text: 'Add an extra screen — or two — to your laptop at a wallet-friendly price',
          },
        ].map((e) => (
          <Flex alignItems='center' gridGap='5' mx='3' cursor='pointer'>
            <Text fontSize='3em' color='#CC0099'>
              {e.no}
            </Text>
            <Text fontSize='1em' _hover={{ textDecor: 'underline #CC0099' }}>
              {e.text}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}

export default PopulatArticles;

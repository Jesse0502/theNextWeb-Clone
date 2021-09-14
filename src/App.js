import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { createContext, useState } from 'react';
import { extendTheme } from '@chakra-ui/react';
import HeroSection from './Components/HeroSection/HeroSection';
import PopulatArticles from './Components/PopularArticles/PopulatArticles';
import LatestStories from './Components/LatestStories/LatestStories';
import ExploreNewsletter from './Components/Explore-Newsletter/ExploreNewsletter';
import WhatWeMade from './Components/WhatWeMadeYou/WhatWeMade';
import WorkWithUs from './Components/WorkWithUs/WorkWithUs';
import Footer from './Components/Footer/Footer';

export const ThemeContext = createContext();
function App() {
  const [currentTheme, setCurrentTheme] = useState(false);
  console.log(currentTheme);

  const theme = extendTheme(
    currentTheme
      ? {
          //dark
          colors: {
            brand: {
              text: '#e7e7e7',
              textSecondary: 'white',
              bg: '#2E3132',
              bgSecondary: '#3e4344',
            },
          },
        }
      : {
          //white
          colors: {
            brand: {
              text: '#2E3132',
              textSecondary: '#888888',
              bg: '#fff',
              bgSecondary: '#F7F8F8',
            },
          },
        }
  );
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ChakraProvider theme={theme}>
        <Navbar />
        <HeroSection />
        <PopulatArticles />
        <LatestStories />
        <ExploreNewsletter />
        <WhatWeMade />
        <WorkWithUs />
        <Footer />
      </ChakraProvider>
    </ThemeContext.Provider>
  );
}

export default App;

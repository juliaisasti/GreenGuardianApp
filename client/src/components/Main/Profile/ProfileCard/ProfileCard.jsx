import React from "react";
import { Box, Badge, Image } from '@chakra-ui/react'

const ProfileCard = () => {
    const profile = {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F10%2Fb8%2F50%2F10b8509d551e5a264227dee8248fc1fa.jpg&f=1&nofb=1&ipt=e5409019d6436c6c5a560f5e90a70298df62d10fdba30416c2effcda2d804882&ipo=images',
      imageAlt: 'Julia Isasti',
      plants: 3,
      flowers: 2,
      user: 'Julia Isasti',
      username: '@juliaisasti',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box className="profileCard" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={profile.imageUrl} alt={profile.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='green'>
              All plants watered
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {profile.plants} plants &bull; {profile.flowers} flowers
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {profile.user}
          </Box>
  
          <Box as='span' color='gray.600' fontSize='sm'>
            {profile.username}
          
          </Box>
        </Box>
      </Box>
    )
  };

export default ProfileCard;

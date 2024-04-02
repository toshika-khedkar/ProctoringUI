import { useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from './Title'
import Paragraph from './Paragraph'
import faceSpoofing from './face-spoofing.png';
import remoteProctoring from './remote-proctoring.png'
const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: remoteProctoring
        } ,
        {
            alt: 'image2',
            url: faceSpoofing
        }
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    ' Our Model possess :'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Visual Representation
                </Typography>
                <Paragraph text={
                    'A straightforward framework built for online proctoring\
                    to create online tests within minutes'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
                height:'60%'
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery
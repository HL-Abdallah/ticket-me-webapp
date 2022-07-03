import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HomePageSection = ({imgSrc,imageFirst}) => {


      if (imageFirst) {
          return ( 
            <Stack direction="row" sx={{justifyContent : "space-around" , alignItems : "center" , mb : 16}}>
                <img alt='section-image-alt' src={imgSrc} width="330px" height="450px" ></img>
                    <Typography sx={{}} variant="h6" color="initial">
                        Systeme de gestion de tickets & reclamations
                    </Typography>
            </Stack>
           )
        } else {
           return (
             <Stack direction="row-reverse" sx={{justifyContent : "space-around" , alignItems : "center" , mb : 16}}>
                <img alt='section-image-alt' src={imgSrc} width="330px" height="450px" ></img>
                <Typography variant="h6" color="initial">Systeme de gestion de tickets & reclamations</Typography>
            </Stack>
           )
        }

}

export default HomePageSection
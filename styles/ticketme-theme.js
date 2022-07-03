import { createTheme } from "@mui/material"
import { blueGrey } from '@mui/material/colors';

const ticketMeTheme = createTheme({
    palette : {
        primary : {
            main: blueGrey[500],
        }
    },
    typography : {
        fontFamily : "Poppins"
    }
});

export default ticketMeTheme;
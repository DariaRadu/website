import { makeStyles } from '@material-ui/core/styles';
import profilePicture from '../img/profile.jpg'

const useStyles = makeStyles({
    profileDescription: {
        fontSize: '22px',
    },

    icons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '5vh',
    },

    icon: {
        width:'50px',
        height:'50px',
        cursor: 'pointer',
    },
    
    iconLink: {
        color: 'white',
    },
    
    title: {
        fontSize: 'calc(10px + 6vmin)',
    },

    bgImage: {
        fontSize: 'calc(10px + 1vmin)',
        color: 'white',
        backgroundImage: `linear-gradient(0deg, rgba(226 194 198 / 50%), rgba(47 1 71 / 75%)), url(${profilePicture})`,
        minHeight: '60vh',
        paddingTop: '15vh',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover', /* Resize the background image to cover the entire container */
    },

})

export default useStyles;

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
        paddingRight: '10vw',
        paddingLeft: '10vw'
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
        color: '#FCFCFC',
        backgroundImage: `linear-gradient(0deg, rgba(247,86,124,1) 0%,  rgba(153,225,217,0.75) 100%), url(${profilePicture})`,
        minHeight: '60vh',
        padding: '15vh 5vw 0 5vw',
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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    profileHeader: {
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        width: '100%',
        backgroundColor:'#165764',
        padding: '5vh 8vw 5vh 8vw',
        margin: 0,
    },

    profile: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    aboutMe: {
        width: '40vw',
    },

    profileDescription: {
        fontSize: '22px',
    },

    icons: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    icon: {
        width:'50px',
        height:'50px',
        cursor: 'pointer',
    },
    
    iconLink: {
        color: 'white',
    }
})

export default useStyles;

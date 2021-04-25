import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    fieldContainer: {
        color: 'white',
        minHeight: '30vh',
        padding: '5vh 8vw 5vh 8vw',
        fontSize: '18px',
        '& p': {
            margin: '1vh',
        }
    },

    fieldData: {
        display: 'flex',
        flexDirection: 'column',
    },

    imageContainer: {
        display: 'flex',
        justifyContent:'center',
    },

    fieldImage: {
        width: '50%',
        height: 'auto',
        objectFit: 'contain',
    },

    projectImage: {
        width: '100%',
        height: '30vh',
        objectFit: 'cover',
    },

    educationImage: {
        width: '10vw',
        height: 'auto',
    },

    educationContainer: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '30vh',
        padding: '5vh 8vw 5vh 8vw',
        fontSize: '18px',
        '& p': {
            margin: '1vh',
        }
    },

    title: {
        fontSize: '27px',
        fontWeight: '800'
    },

    company: {
        fontSize: '22px',
        fontWeight: '600'
    }
})

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    fieldContainer: {
        color: '#5d576b',
        minHeight: '20vh',
        padding: '5vh 2vw 5vh 2vw',
        fontSize: '20px',
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    fieldImage: {
        maxWidth: '100%',
        maxHeight: '20vh',
        objectFit: 'contain',
    },

    projectImage: {
        width: '100%',
        height: '40vh',
        objectFit: 'cover',
    },

    educationImage: {
        width: '10vw',
        height: 'auto',
    },

    educationContainer: {
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
        fontSize: '30px',
        fontWeight: '800'
    },

    company: {
        fontSize: '22px',
        fontWeight: '600'
    }
})

export default useStyles;

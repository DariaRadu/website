import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width:'100%',
    },

    tab: {
        fontFamily: '"Exo 2"',
        fontSize: "20px",
    },

    tabs: {
        color: 'white',
        backgroundColor:'#f7567c',
        minHeight: '7vh',
        display: 'flex',
        alignItems: 'center',
    },
})

export default useStyles;

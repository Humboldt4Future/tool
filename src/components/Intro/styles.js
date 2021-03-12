import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    intro: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    greeting: {
        textAlign: 'center',
    },
    info: {
        textAlign: 'center',
    }
}));
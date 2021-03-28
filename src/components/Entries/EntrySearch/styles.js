import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
    },
    buttonSearch: {
        marginTop: 10,
    }
}));
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function Intro () {
    const classes = useStyles();
    function hide () {
        var paper = document.getElementById('IntroPaper');
        paper.parentNode.removeChild(paper);
    }

    return (
        <Paper id="IntroPaper" className={classes.paper}>
            <div className={`${classes.root}${classes.intro}`}>
                <Typography className={classes.greeting} variant="h3">
                    Willkommen bei Humboldt4Future
                </Typography>
                <Typography className={classes.info} variant="h5">
                    Dies ist eine Website um deinen ökolgischen Fußabdruck zu berechnen. <br/>
                    Bitte beantworte die Fragen wahrheitsgemäß. Deine Abgabe wird mitbenutzt um einen Durchschnitt zu errechnen. <br/>
                    Wenn du die Dienste dieser Website beanspruchst stimmst du den <a href="https://ph4nt4sm4.github.io">Geschäftsbedingungen</a> zu.
                </Typography>
            </div>
            <Button className={classes.accept} variant="contained" color="primary" size="small" onClick={hide} fullWidth>
                Hiermit bestätige Ich, dass ich die Geschäftsbedingungen gelesen habe und damit einverstanden bin
            </Button>
        </Paper>
    );
}

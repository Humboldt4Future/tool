import { Typography, Paper, Button } from '@material-ui/core';
import useStyles from './styles.js';

var Intro = () => {
    const classes = useStyles();
    const hide = () => {
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

export default Intro;
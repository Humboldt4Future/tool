import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { deleteEntry } from '../../../actions/entries.js';
import image from '../../../images/h4f.png';

const Entry = ({ entry, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={image} title={entry.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {entry.creator}
                </Typography>
                <Typography variant="body2">
                    {moment(entry.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(entry._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
                <Button size="small" style={{color: 'white'}} onClick={() => dispatch(deleteEntry(entry._id))}>
                    <DeleteIcon/>
                </Button>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    Answer 1: {entry.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Answer 2: {entry.message}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    other Answers: <br/> {entry.tags.map((tag) => `Answer: ${tag} `)}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Entry;
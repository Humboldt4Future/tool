import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createPost, updatePost } from '../../actions/posts.js';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => { if(post) setPostData(post); }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root}${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.question} variant="h4">
                    Enter your Nickname here
                    <p className={classes.info}>
                        once it's actually implemented you can retrieve your score later by looking up your Nickname
                    </p>
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the first question:
                </Typography>
                <TextField name="title" variant="outlined" label="Answer" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the second question:
                </Typography>
                <TextField name="message" variant="outlined" label="Answer" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <Typography className={classes.question} variant="h5">
                    Answer the last questions:
                    <p className={classes.info}>
                        Answers need to be separated by a comma
                    </p>
                </Typography>
                <TextField name="tags" variant="outlined" label="Answer" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <Typography className={classes.question} variant="h5">
                    <br/>
                    Sie stimmen den Geschäftsbedingungen zu
                </Typography>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;
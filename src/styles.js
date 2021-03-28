import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,118,55,99)',
    },
    image: {
        marginLeft: '15px',
    },
    mainContainer: {
        flexDirection: "column",
    }
}));
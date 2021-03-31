import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    appBar: {
        marginTop: '30px',
        borderRadius: 15,
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
}))
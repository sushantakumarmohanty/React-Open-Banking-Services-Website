import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ListDividers() {
    const classes = useStyles();

    return (
        <div className="componentupper">
           <div className="bg-colorDivision">
               <h2> ANZ Team</h2>
               <h2>Capgemini Gets Start</h2>
               <h2>Sushanta Kumar Mohanty</h2>
           </div>
        </div>

    );
}

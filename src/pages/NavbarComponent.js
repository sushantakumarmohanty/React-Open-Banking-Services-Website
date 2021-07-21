
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Component1 from './Component1'
import ComponentB from './ComponentB'

function TabPanel(props) {
    
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                    <Tab label="Item Eight" {...a11yProps(7)} />
                    <Tab label="Item Nine" {...a11yProps(8)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Component1 />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ComponentB />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Component1 />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ComponentB />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Component1 />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <ComponentB />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Component1 />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <ComponentB />
            </TabPanel>
            <TabPanel value={value} index={8}>
                <Component1 />
            </TabPanel>
        </div>
    );
}

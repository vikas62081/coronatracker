import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import InfoIcon from '@material-ui/icons/Info';
import Sidebar from './Sidebar';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        letterSpacing: '0.175em',
        fontSize: '140%'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    closeButton: {
        display: 'block',
        textAlign: 'end'
    }
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const toggleSidebar = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        isOpen === undefined ? setOpen(!open) : setOpen(isOpen)
    };
    const list = (
        <div
            className={clsx(classes.list)} role="presentation"
            onClick={toggleSidebar(false)}
            onKeyDown={toggleSidebar(false)}
        >
            <ListItem button className={classes.closeButton} title="Close">
                <CloseIcon align='right' style={{ fill: 'red', fontSize: '180%' }} />
            </ListItem>
            <Divider />
            <List>
                <Sidebar/>
            </List>
            <Divider />
            <List>
                {['About', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InfoIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}
                     color="inherit" aria-label="menu" onClick={toggleSidebar()} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Covid19
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <IconButton edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit" >
                        <FacebookIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor={'left'} open={open} onClose={toggleSidebar()}>
                {list}
            </Drawer>
        </div>
    );
}

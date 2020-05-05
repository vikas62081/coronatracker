import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
        <ListItem button component={Link} to='/' title="Home">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/map' title="Map">
          <ListItemIcon><MapIcon /></ListItemIcon>
          <ListItemText primary='Map' />
        </ListItem>
    </div>
  )
}

export default Sidebar

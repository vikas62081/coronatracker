import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';

function Sidebar() {
  return (
    <div>
      {['Home', 'Map', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MapIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
    </div>
  )
}

export default Sidebar

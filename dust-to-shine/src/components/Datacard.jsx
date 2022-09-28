import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
  return (
      <div style={{margintop:'1em', marginBottom:'1em'}}> 
          <Card sx={{ minWidth: 150, maxWidth:800}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.link}>Book Now</Button>
      </CardActions>
    </Card>
      </div>
    
  );
}
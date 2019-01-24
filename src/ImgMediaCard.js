import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';

const styles = {
  card: {
    maxWidth: 345,
    float: 'left',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};


class ImgMediaCard extends Component {
  render(){
    return (
      <Card style={{maxWidth: 345, float:'left'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className="style-media"
            height="240"
            image={require("./static/bottom/WeChatImage_201812240234101.jpg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pants
            </Typography>
            <Typography component="p">
              and all are pants
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"
                  onClick={this.props.flip}>
            See details
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImgMediaCard;
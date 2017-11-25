// @flow
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import React from 'react';

type Props = {
  fav: string,
};
const FavEntry = ({ fav }: Props) => (
  <Link to={fav.replace('%2F', '/')}>
    <Paper style={style.fav}>
      <div style={style.station}>{fav.replace('%2F', '/')}</div>
    </Paper>
  </Link>
);

export default FavEntry;

const style = {
  fav: {
    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.24)',
    cursor: 'pointer',
    fontSize: '3em',
    lineHeight: 1.3,
    marginBottom: 1,
  },
  station: {
    ':hover': {
      backgroundColor: 'rgb(238, 238, 238)',
    },
  },
};

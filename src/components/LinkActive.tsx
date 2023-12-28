import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { ePage } from '../pages';

const LinkActive: React.FC<{ page: ePage }> = (props) => {
  const location = useLocation();

  const linkStyle = {
    textDecoration: "none",
    color: 'inherit',
  };

  const visitedLinkStyle = {
    textDecoration: "underline",
    color: 'inherit',
  };

  return (
    <Button
      component={Link}
      to={props.page.toLowerCase()}
      style={
        (location.pathname === `/${props.page.toLowerCase()}`) ||
          (location.pathname === `/${props.page.toLowerCase()}/`)
          ?
          visitedLinkStyle : linkStyle
      }>
      {props.page.toUpperCase()}
    </Button>
  );
};

export default LinkActive;

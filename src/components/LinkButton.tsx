import { Box, Button, Link, SvgIconProps, Typography } from '@mui/material';
import React from 'react';

const LinkButton: React.FC<{ link: string, line: string, icon: React.ReactElement<SvgIconProps> }> = (props) => {

    return (
        <>
            <Box margin={1}>
                <Button color="inherit" startIcon={props.icon}>
                    <Link
                        underline="none"
                        color="inherit"
                        href={props.link}
                        target="_blank"
                    >
                        <Typography style={{ textTransform: 'none' }}>
                            {props.line}
                        </Typography>
                    </Link>
                </Button>
            </Box>
        </>
    );
};

export default LinkButton;
import { Box, Link } from '@mui/material';
import React from 'react';

const LinkLine: React.FC<{ link: string, line: string }> = (props) => {

    return (
        <>
            <Box
                margin={2}
            >
                <Link
                    underline="none"
                    color="inherit"
                    href={props.link}
                    target="_blank"
                >
                    {props.line}
                </Link>
            </Box>
        </>
    );
};

export default LinkLine;
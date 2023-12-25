import { AppBar, Box, IconButton, Link, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { productsData } from "./Data/productsData";

const FootBar = () => {
    //   const handleClick = (i) => {
    //     setValue(i);
    //     window.scrollTo({
    //       top: 0,
    //     });
    //   };

    return (
        <>

            {/* <AppBar color="inherit" position="fixed" sx={{ top: 'auto', bottom: 0, height: "9vh" }}> */}
            <AppBar component="footer" position="static" color="inherit">
                <Box>
                    <Grid container marginY={2}>
                        <Grid xs={12} md={4} textAlign='center' paddingTop={1} sx={{ display: { xs: "none", md: "block" } }}>
                            <Typography fontSize={12} component='a' href={'/portfolio'} color={"inherit"} sx={{ textDecoration: 'none' }}>© 2023 Taishi Isomura</Typography>
                        </Grid>
                        <Grid container xs={12} md={8}>
                            {/* <Grid xs={3}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(1)}}>Profile</Link></li>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(2)}}>Products</Link></li>
                <li><Link underline="none" color="inherit" onClick={() => {handleClick(3)}}>History</Link></li>
              </Box>
            </Box>
          </Grid> */}
                            {/* <Grid xs={5}>
            <Box sx={{display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": {fontSize: 12}}}>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                {productsData.map((product, index) =>(
                  <li key={index}><Link underline="none" color="inherit" href={product.url} target="_blank">{product.name}</Link></li>
                ))}
              </Box>
            </Box>
          </Grid> */}
                            <Grid xs={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', "@media screen and (max-width:490px)": { fontSize: 12 } }}>
                                    <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                                        <li><Link underline="none" color="inherit" href='https://highschl.educa.nagoya-u.ac.jp/' target="_blank">高校HP</Link></li>
                                        <li><Link underline="none" color="inherit" href='https://www.denpa.ac.jp/' target="_blank">専門学校HP</Link></li>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            justifyContent={{ xs: "space-between", md: "right" }}
                            alignItems="center"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            sx={{ fontSize: '12px', marginRight: { "md": 2 }, }}
                            marginX={2}
                        >
                            <Grid sx={{ order: { xs: 2, sm: 1 }, display: { xs: "block", md: "none" } }}>
                                <Typography fontSize={12} component='a' href={'/portfolio'} color={"inherit"} sx={{ textDecoration: 'none' }}>© 2023 Taishi Isomura</Typography>
                            </Grid>
                            <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                                <Grid>
                                    <IconButton href='https://twitter.com/isotis_1216' target='_blank'>
                                        <TwitterIcon />
                                    </IconButton><br />
                                </Grid>
                                <Grid>
                                    <IconButton href='https://www.instagram.com/taishi_isolation/' target='_blank'>
                                        <InstagramIcon />
                                    </IconButton><br />
                                </Grid>
                                <Grid>
                                    <IconButton href='https://github.com/iso1216' target='_blank'>
                                        <GitHubIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </AppBar >
        </>
    );
};

export default FootBar;
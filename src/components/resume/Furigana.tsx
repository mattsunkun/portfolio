import { Grid, Typography } from "@mui/material";


const Furigana: React.FC<{
  furigana: string,
  main: string,
  metaMain: string,
  borderLine: string,
}> = (props) => {

  return (
    <>
      <Grid item xs={12} container direction="column" spacing={0}
        style={{
          border: props.borderLine,
        }}
      >

        {/* ふりがな */}
        <Grid item xs={2}
          style={{
            border: props.borderLine,
          }}
        >
          <Typography variant="caption"
            padding={1}
            paddingLeft={2}
          >
            {`ふりがな ${props.furigana}`}
          </Typography>

        </Grid>
        {/* 氏名 */}
        <Grid item xs={8}
          style={{
            border: props.borderLine,
          }}
        >
          <Typography variant="caption"
            padding={1}
            paddingLeft={2}
          >
            {props.metaMain}
          </Typography>
          <Typography variant="h4"
            // textAlign="center"
            padding={1}
            paddingLeft={10}
          >
            {props.main}
          </Typography>

        </Grid>
      </Grid>

    </>
  );
}

export default Furigana;
import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./PageFooter";

const PageFooter = () => {
  const classes = useStyles();
  return (
    <section style={{ backgroundColor: "#101837", marginTop: "100px" }}>
      <Container maxWidth="lg" style={{ padding: "70px" }}>
        <Box style={{ marginBottom: "100px" }}>
          <Box>
            <Typography
              variant="h5"
              fontWeight={400}
              style={{ color: " #8240DD" }}
              align="center"
            >
              Connect & stay up to date
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              fontWeight={500}
              color={"white"}
              align="center"
            >
              Join the YS community
            </Typography>
          </Box>
        </Box>

        <Box
          component="form"
          sx={{
            "& fieldset": {
              borderColor: "white",
            },
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            variant="outlined"
            className={classes.textField}
            sx={{
              width: "50%",
              mr: "20px",
            }}
            label="Enter email for updates"
            InputProps={{
              style: {
                color: "white",
                outline: "none",
                borderRadius: "50px",
                height: "50px",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />

          <Button
            href="#"
            variant="outlined"
            sx={{
              color: "white",
              backgroundColor: "#8240DD",
              border: "none",
              borderRadius: "20px",
              height: 45,
              width: 182,
              my: 1,
            }}
          >
            subscribe
          </Button>
        </Box>

        <Grid container justifyContent="center" spacing={1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 5,
              m: 1,
              bgcolor: "background.paper",
            }}
          >
            <Box className={classes.iconBox}>
              <Link>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0 -0.002 32 26.016"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.002 32 26.016"
                  height="27"
                  width="32"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="#ffffff"
                      d="M32 3.086c-1.177.521-2.44.874-3.77 1.033A6.582 6.582 0 0 0 31.116.486a13.108 13.108 0 0 1-4.168 1.592 6.567 6.567 0 0 0-11.188 5.99 18.643 18.643 0 0 1-13.532-6.86 6.562 6.562 0 0 0-.888 3.3 6.567 6.567 0 0 0 2.92 5.465 6.549 6.549 0 0 1-2.973-.822v.085a6.567 6.567 0 0 0 5.266 6.438 6.63 6.63 0 0 1-2.965.113 6.569 6.569 0 0 0 6.133 4.557 13.174 13.174 0 0 1-8.154 2.812c-.524 0-1.047-.03-1.567-.092a18.568 18.568 0 0 0 10.063 2.95c12.077 0 18.68-10.003 18.68-18.68 0-.281-.007-.566-.02-.848a13.347 13.347 0 0 0 3.274-3.396L32 3.086z"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </Link>
            </Box>

            <Box className={classes.iconBox}>
              <Link>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="-0.001 0 31.501 27"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.001 0 31.501 27"
                  height="27"
                  width="32"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                  aria-labelledby="svgcid--ws13x4-8jbhdr"
                >
                  <title id="svgcid--ws13x4-8jbhdr"></title>
                  <g>
                    <path
                      fill="#ffffff"
                      d="M29.374.178 1.47 11.174c-1.904.782-1.893 1.868-.35 2.352l7.164 2.284L24.86 5.122c.784-.487 1.5-.225.911.309L12.342 17.817h-.003l.003.002-.494 7.547c.724 0 1.044-.34 1.45-.74l3.48-3.458 7.237 5.464c1.335.75 2.293.365 2.625-1.263l4.751-22.885c.487-1.993-.744-2.895-2.017-2.306z"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </Link>
            </Box>

            <Box className={classes.iconBox}>
              <Link>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0.505 0.139 20.495 17.079"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0.505 0.139 20.495 17.079"
                  height="18"
                  width="21"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                  aria-labelledby="svgcid--xde5eh-f4mqq2"
                >
                  <title id="svgcid--xde5eh-f4mqq2"></title>
                  <g>
                    <path
                      fill="#ffffff"
                      d="M20.956 3.361a.073.073 0 0 0-.02-.098.054.054 0 0 0-.012-.01l-.006-.002L14.736.206a.718.718 0 0 0-.9.252l-3.56 5.697 4.467 7.146 6.213-9.94zm-1.09 13.664c.626.309 1.134.093 1.134-.482V5.13l-5.953 9.523 4.819 2.372zM8.316 4.857v6.484l5.852 2.88-5.852-9.364zm-7.243 9.644 5.318 2.618c.118.062.25.096.383.099.331 0 .563-.252.563-.675V3.332a.067.067 0 0 0-.036-.06L1.262.302a.694.694 0 0 0-.307-.08c-.265 0-.45.2-.45.538v12.837c0 .344.256.75.568.904z"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </Link>{" "}
            </Box>

            <Box className={classes.iconBox}>
              <Link>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0 0 35 30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 30"
                  height="30"
                  width="35"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                  aria-labelledby="svgcid--lzsnnt-lkoqdg"
                >
                  <title id="svgcid--lzsnnt-lkoqdg"></title>
                  <g>
                    <path
                      fill="#ffffff"
                      d="M34.969 6.943c-.154 3.376-2.537 8.003-7.14 13.864C23.066 26.939 19.045 30 15.74 30c-2.056 0-3.76-1.866-5.184-5.596l-2.797-10.27c-1.047-3.726-2.165-5.592-3.366-5.592-.263 0-1.18.541-2.747 1.629L0 8.068A444.849 444.849 0 0 0 5.105 3.56C7.406 1.581 9.139.55 10.29.443c2.722-.26 4.397 1.59 5.03 5.535.678 4.26 1.145 6.909 1.413 7.947.787 3.533 1.651 5.303 2.592 5.303.73 0 1.829-1.15 3.304-3.444 1.465-2.295 2.245-4.036 2.346-5.237.212-1.972-.576-2.97-2.352-2.97-.837 0-1.703.176-2.594.564 1.733-5.58 5.009-8.307 9.862-8.133 3.607.085 5.293 2.401 5.093 6.92l-.015.015z"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </Link>{" "}
            </Box>

            <Box className={classes.iconBox}>
              <Link>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0 -0.001 43 30.983"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.001 43 30.983"
                  height="31"
                  width="43"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                  aria-labelledby="svgcid-rygsdq-4carj6"
                >
                  <title id="svgcid-rygsdq-4carj6"></title>
                  <g>
                    <path
                      fill="#ffffff"
                      d="M19.353 25.829a1.26 1.26 0 1 1-.003 2.518 1.26 1.26 0 0 1 .003-2.518zm19.752-7.789a1.261 1.261 0 0 1-1.163-1.742 1.26 1.26 0 0 1 2.423.484 1.26 1.26 0 0 1-1.26 1.258zm0-5.153a3.9 3.9 0 0 0-3.895 3.895c0 .418.07.834.206 1.238L22.55 24.87a3.88 3.88 0 0 0-3.197-1.679 3.903 3.903 0 0 0-3.494 2.18L4.301 19.274c-1.222-.642-2.136-2.652-2.039-4.483.05-.955.38-1.697.884-1.983.318-.18.702-.165 1.11.048l.076.041c3.063 1.613 13.086 6.893 13.509 7.088.65.303 1.012.425 2.123-.102l20.72-10.775c.304-.115.659-.407.659-.85 0-.612-.635-.854-.636-.854-1.18-.565-2.99-1.412-4.757-2.24-3.777-1.768-8.058-3.771-9.937-4.757-1.623-.85-2.93-.132-3.162.01l-.452.225C13.94 4.826 2.615 10.435 1.97 10.827.818 11.529.103 12.928.01 14.665c-.143 2.754 1.26 5.626 3.268 6.677l12.223 6.303a3.897 3.897 0 0 0 3.852 3.337 3.9 3.9 0 0 0 3.894-3.835l13.462-7.297a3.89 3.89 0 0 0 5.15-.316A3.898 3.898 0 0 0 43 16.78a3.898 3.898 0 0 0-3.895-3.895"
                      data-color="1"
                    ></path>
                  </g>
                </svg>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PageFooter;

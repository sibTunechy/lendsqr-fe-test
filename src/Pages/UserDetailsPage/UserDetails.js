import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../features/User/userSlice";
import { useSelector, useDispatch } from "react-redux";
// MATERIAL UI
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Rating,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

// RAECT ICONS
import { BsArrowLeft } from "react-icons/bs";

// COMPONENTS
import GeneralDetails from "../../components/General details/GeneralDetails";
import Document from "../../components/Documents/Document";

// SCSS
import "./UserDetails.scss";

import { handleToggleChange } from "../../features/UserPageToggle/userToggleSlice";

const UserDetails = () => {
  const dispatch = useDispatch();

  const { toggle } = useSelector((store) => store.toggle);

  const handleChange = (event, toggle) => {
    dispatch(handleToggleChange(toggle));
  };

  const [value, setValue] = useState(2);
  const { isLoading, userDetail } = useSelector((store) => store.user);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const { profile, guarantor, accountNumber, accountBalance, address } =
    userDetail;

  if (isLoading) {
    return (
      <Container>
        <h1>Loading ...........</h1>
      </Container>
    );
  }

  if (userDetail.length == 0 && isLoading) {
    return (
      <Container>
        <h1>Network Error</h1>
      </Container>
    );
  }

  return (
    <>
      {userDetail && <Container>
        <Box className="nav-back">
          <BsArrowLeft className="back-icon" />
          <Typography>Back To users</Typography>
        </Box>

        <Grid container className="button-div">
          <Grid xs={6}>
            <Typography variant="h5" className="title">
              User Details
            </Typography>
          </Grid>

          <Grid xs={6} className="heading-btn-con">
            <Button className="btn blacklist">Blacklist User</Button>
            <Button className="btn active">Active User</Button>
          </Grid>
        </Grid>

        <Box className="summary-con">
          <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box
              sx={{
                display: "flex",
                // border: "solid red",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
              }}
            >
              <img src={profile?.avatar} className="avatar" />
              <Box>
                <Typography className="fullname">
                  {profile?.firstName} {profile?.lastName}
                </Typography>
                <Typography className="acctNumber">{accountNumber}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "solid red",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <Typography className="tier">User's Tier</Typography>
              <Typography className="">
                <Rating name="read-only" value={value} readOnly />
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // border: "solid red",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "1rem",
              }}
            >
              <Typography className="acct-bln">
                {" "}
                &#8358;{accountBalance}
              </Typography>
              <Typography className="bank-name">
                {profile?.bvn} / {profile?.address}
              </Typography>
            </Box>
          </Stack>
          <ToggleButtonGroup
            color="primary"
            value={toggle}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            fullWidth
            size="small"
            sx={{ marginTop: "2rem" }}
          >
            <ToggleButton value="General Details">General Details</ToggleButton>
            <ToggleButton value="Documents">Documents</ToggleButton>
            <ToggleButton value="Bank Details">Bank Details</ToggleButton>
            <ToggleButton value="Loan">Loan</ToggleButton>
            <ToggleButton value="Savings">Savings</ToggleButton>
            <ToggleButton value="App and System">App and System</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          sx={{
            background: "white",
            marginTop: "2rem",
            padding: "2rem 1rem",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          {toggle == "General Details" ? (
            <GeneralDetails userDetails={userDetail} />
          ) : toggle == "Documents" ? (
            <Document />
          ) : null}
        </Box>
      </Container>}
    </>
  );
};

export default UserDetails;

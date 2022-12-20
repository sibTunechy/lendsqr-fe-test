import React from "react";
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

// SCSS
import "./GeneralDetails.scss";

const GeneralDetails = ({ userDetails }) => {
  const {
    profile,
    guarantor,
    accountNumber,
    accountBalance,
    address,
    phoneNumber,
    email,
    education,
    loanRepayment,
    socials,
  } = userDetails;
  return (
    <Stack spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
      <Box>
        <Typography className="section-heading">
          Personal information
        </Typography>
        <Box className="each-section">
          <Box>
            <Typography className="detail-prop">Full Name</Typography>
            <Typography className="detail">
              {profile?.firstName} {profile?.lastName}
            </Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Phone Number</Typography>
            <Typography className="detail">{phoneNumber}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Email Address</Typography>
            <Typography className="detail">{email}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">BVN </Typography>
            <Typography className="detail">{profile?.bvn}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Gender </Typography>
            <Typography className="detail">{profile?.gender}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">marital Status </Typography>
            <Typography className="detail">Single</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Children </Typography>
            <Typography className="detail">None</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Type of residence </Typography>
            <Typography className="detail">Parent's Appartment</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography className="section-heading">
          Education and Employment
        </Typography>
        <Box className="each-section">
          <Box>
            <Typography className="detail-prop">Level of Education </Typography>
            <Typography className="detail">{education?.level}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Employment Status </Typography>
            <Typography className="detail">
              {education?.employmentStatus}
            </Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">
              Sector of Employment{" "}
            </Typography>
            <Typography className="detail">{education?.sector}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">
              Duration of Employment{" "}
            </Typography>
            <Typography className="detail">{education?.duration}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Office Email </Typography>
            <Typography className="detail">{education?.officeEmail}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Monthly Income </Typography>
            <Typography className="detail">
              &#8358;{education?.monthlyIncome[0]} - &#8358;
              {education?.monthlyIncome[1]}
            </Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Loan Repayment </Typography>
            <Typography className="detail">
              &#8358; {education?.loanRepayment}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography className="section-heading">Socials</Typography>
        <Box className="each-section">
          <Box>
            <Typography className="detail-prop">Twitter </Typography>
            <Typography className="detail">{socials?.twitter}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop"> Facebook </Typography>
            <Typography className="detail">{socials?.facebook}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Instagram</Typography>
            <Typography className="detail">{socials?.instagram}</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography className="section-heading">Guarantor</Typography>
        <Box className="each-section">
          <Box>
            <Typography className="detail-prop">Full Name </Typography>
            <Typography className="detail">
              {guarantor?.firstName} {guarantor?.lastName}
            </Typography>
          </Box>
          <Box>
            <Typography className="detail-prop"> Phone Number </Typography>
            <Typography className="detail">{guarantor?.phoneNumber}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Email Address</Typography>
            <Typography className="detail">guarantor@gmail.com</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Relationship</Typography>
            <Typography className="detail">Friend</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="each-section">
          <Box>
            <Typography className="detail-prop">Full Name </Typography>
            <Typography className="detail">
              {guarantor?.firstName} {guarantor?.lastName}
            </Typography>
          </Box>
          <Box>
            <Typography className="detail-prop"> Phone Number </Typography>
            <Typography className="detail">{guarantor?.phoneNumber}</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Email Address</Typography>
            <Typography className="detail">guarantor@gmail.com</Typography>
          </Box>
          <Box>
            <Typography className="detail-prop">Relationship</Typography>
            <Typography className="detail">Sister</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default GeneralDetails;

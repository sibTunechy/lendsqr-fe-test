import React, {useEffect} from "react";
import "./styles.scss";
import {
  Container,
  Box,
  Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import { FiUsers } from "react-icons/fi";
import {FaFileInvoice} from "react-icons/fa";
import {CiCoins1} from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";


import UserTable from "../../components/UserTable/UserTable";

import { useDispatch, useSelector } from "react-redux";
import { getTableData } from "../../features/Table/tableSlice";

const Userpage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTableData());
  }, []);

  return (
    // <>
    <Container>
      <Typography variant="h5" sx={{ color: "#213F7D" }}>
        User
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        // sx={{ border: "solid" }}
      >
        <Card
          sx={{
            minWidth: 250,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <FiUsers className="user-icon icon" />
          <Typography gutterBottom variant="h6" className="users">
            USERS
          </Typography>
          <Typography variant="h5" className="number">
            2,453
          </Typography>
        </Card>

        <Card
          sx={{
            minWidth: 250,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <HiOutlineUserGroup className="group-icon icon" />
          <Typography gutterBottom variant="h6" className="users">
            ACTIVE USERS
          </Typography>
          <Typography variant="h5" className="number">
            2,453
          </Typography>
        </Card>

        <Card
          sx={{
            minWidth: 250,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <FaFileInvoice className="user-icon icon" />
          <Typography gutterBottom variant="h6" className="users">
            USERS WITH LOANS
          </Typography>
          <Typography variant="h5" className="number">
            12,453
          </Typography>
        </Card>
        <Card
          sx={{
            minWidth: 250,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <CiCoins1 className="user-icon icon" />
          <Typography gutterBottom variant="h6" className="users">
            USERS WITH SAVINGS
          </Typography>
          <Typography variant="h5" className="number">
            102,453
          </Typography>
        </Card>
      </Stack>
      <br/>
      <br/>
      <UserTable />
    </Container>
    

    // </>
  );
};

export default Userpage;

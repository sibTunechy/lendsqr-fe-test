import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { AiOutlineMore, AiOutlineEye } from "react-icons/ai";

import { Link } from "react-router-dom";

const options = [
  { label: "View Details", icon: <AiOutlineEye /> },
  { label: "Blacklist User", icon: <AiOutlineEye /> },
  { label: "Activate User", icon: <AiOutlineEye /> },
];

const ITEM_HEIGHT = 30;

const MoreIcon = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AiOutlineMore />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => {
          const { label, icon } = option;

          if (label === "View Details") {
            return (
              <Link to={`/home/user/userdetails/${id}`}>
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option.icon}
                  {option.label}
                </MenuItem>
              </Link>
            );
          }
          return (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option.icon}
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MoreIcon;

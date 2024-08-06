import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ChecklistIcon from "@mui/icons-material/Checklist";

export const Footer = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  React.useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Rating"
        value="/rating"
        icon={<StarIcon />}
        component={Link}
        to="/rating"
      />
      <BottomNavigationAction
        label="Tasks"
        value="/"
        icon={<ChecklistIcon />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Scan"
        value="/scan"
        icon={<QrCodeIcon />}
        component={Link}
        to="/scan"
      />
    </BottomNavigation>
  );
};

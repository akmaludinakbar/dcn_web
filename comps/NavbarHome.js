import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import ArticleIcon from "@mui/icons-material/Article";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Toolbar from "@mui/material/Toolbar";
import ReceiptIcon from "@mui/icons-material/Receipt";
import List from "@mui/material/List";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BusinessIcon from "@mui/icons-material/Business";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Router from "next/router";
import { useRouter } from "next/router";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

let url = [
  {
    path: "/home",
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/home/Pekerja",
    name: "Pekerja",
    icon: <EngineeringIcon />,
  },
  {
    path: "/home/Lokasi",
    name: "Tambah Lokasi",
    icon: <BusinessIcon />,
  },
  {
    path: "/home/Pekerjaan",
    name: "Tambah Pekerjaan",
    icon: <ArticleIcon />,
  },
  {
    path: "/home/absensi",
    name: "Catatan Kehadiran",
    icon: <TouchAppIcon />,
  },
  {
    path: "/home/gaji",
    name: "Gaji",
    icon: <ReceiptIcon />,
  },
  {
    path: "/home/upload",
    name: "Lain Lain",
    icon: <UploadFileIcon />,
  },
];

export default function NavbarHome({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tittle, settittle] = React.useState("Dashboard");
  const { asPath, pathname } = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {tittle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {url.map((text, index) => (
            <Link
              key={index}
              href={text.path}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem
                button
                onClick={(e) => {
                  settittle(text.name);
                  // Router.push(text.path);
                }}
                key={text.name}
                style={
                  text.path != asPath
                    ? {}
                    : { backgroundColor: text.path == asPath ? "#d8d8d8" : "" }
                }
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

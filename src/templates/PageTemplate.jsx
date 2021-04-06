import {
  AppBar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  element: {
    width: 240,
  },
}));

const PageTemplate = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Control ayuda Seif
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer className={styles.drawer} variant="permanent" anchor="left">
        <div className={styles.toolbar} />
        <List>
          <ListItem button className={styles.element}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List>
          {["Products", "Questions"].map((text) => (
            <ListItem button key={text} className={styles.element}>
              <ListItemIcon>
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </div>
  );
};

export default PageTemplate;

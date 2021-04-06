import {
  makeStyles,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const QuestionModal = () => {
  const styles = useStyles();

  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState("");
  const [module, setModule] = useState("");
  const [category, setCatergory] = useState("");
  const [enviroment, setEnviroment] = useState("");

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCatergory(event.target.value);
  };
  const handleEnviromentChange = (event) => {
    setEnviroment(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Añadir material de apoyo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Material de apoyo</DialogTitle>
        <DialogContent>
          <form>
            <FormControl
              variant="outlined"
              required
              className={styles.formControl}
            >
              <InputLabel shrink id="product">
                Producto
              </InputLabel>
              <Select
                labelId="product"
                id="product"
                label="Producto"
                onChange={handleProductChange}
                value={product}
                className={styles.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Producto 1</MenuItem>
                <MenuItem value={2}>Producto 2</MenuItem>
                <MenuItem value={3}>Producto 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              required
              className={styles.formControl}
            >
              <InputLabel shrink id="module">
                Módulo
              </InputLabel>
              <Select
                labelId="module"
                id="module"
                label="Modulo"
                onChange={handleModuleChange}
                value={module}
                className={styles.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Modulo 1</MenuItem>
                <MenuItem value={2}>Modulo 2</MenuItem>
                <MenuItem value={3}>Modulo 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              required
              className={styles.formControl}
            >
              <InputLabel shrink id="category">
                Categoría
              </InputLabel>
              <Select
                labelId="category"
                id="category"
                label="Categoria"
                onChange={handleCategoryChange}
                value={category}
                className={styles.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Categoria 1</MenuItem>
                <MenuItem value={2}>Categoria 2</MenuItem>
                <MenuItem value={3}>Categoria 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              required
              className={styles.formControl}
            >
              <InputLabel shrink id="enviroment">
                Entorno
              </InputLabel>
              <Select
                labelId="enviroment"
                id="enviroment"
                label="Entorno"
                onChange={handleEnviromentChange}
                value={enviroment}
                className={styles.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Entorno 1</MenuItem>
                <MenuItem value={2}>Entorno 2</MenuItem>
                <MenuItem value={3}>Entorno 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Pregunta"
              type="text"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuestionModal;

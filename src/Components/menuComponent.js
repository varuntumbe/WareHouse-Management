import { ButtonGroup, Button } from "@material-ui/core";
import "./MenuComponent.css";


const MenuCompponent = (props) => {
  return (
      <ButtonGroup
      className="button_holder"
        variant="contained"
        aria-label="outlined primary button group"
        orientation="vertical"
      >
        <Button
          onClick={(e) => {
            props.showModalView("square");
          }}
        >
          Square
        </Button>
        <Button
          onClick={(e) => {
            props.showModalView("rectangle");
          }}
        >
          Rectangle
        </Button>
        <Button
          onClick={(e) => {
            props.showModalView("circle");
          }}
        >
          Circle
        </Button>
        <Button onClick={props.handleSave}>Save</Button>
      </ButtonGroup>
  );
};

export default MenuCompponent;

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const ModalWindow = () => (
  <Popup trigger={<button className="button"> Open Modal </button>} modal>
    <span> Modal content </span>
  </Popup>
);

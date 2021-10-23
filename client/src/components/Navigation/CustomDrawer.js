import React, { useContext } from "react";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Modal } from "@material-ui/core";
import {
  RiFolderReceivedLine,
  RiHomeHeartFill,
  RiTaskFill,
  RiMenuFill,
} from "react-icons/ri";

const CustomDrawer = ({ drawer, showDrawer }) => {
  const { setAuth, setEmail, setUserId } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // const modalBody = (
  //   <div className="modal-container">
  //     <TeamForm clickClose={closeModal} open={open}></TeamForm>
  //   </div>

  return (
    <div>
      <div className="drawer-container">
        <div className={drawer ? "active" : "colapsed"}>
          <div className="menu-container">
            <div className="top-menu">
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="main-container" style={{ marginTop: "10px" }}>
                <NavLink
                  exact
                  to="/"
                  className="main-links"
                  activeClassName="link--active"
                >
                  <div className="link">
                    <RiHomeHeartFill />
                    <div>
                      <p className="link-title">Home</p>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  to="/tasks"
                  className="main-links"
                  activeClassName="link--active"
                >
                  <div className="link">
                    <RiTaskFill />
                    <div>
                      <p
                        className="link-title"
                      >
                        Tasks
                      </p>
                    </div>

                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {drawer ? null : (
          <div
            className="menu-icon"
            style={{
              paddingTop: "25px",
              paddingLeft: "20px",
              paddingBottom: "22px",
              backgroundColor: "white",
            }}
          >
            <RiMenuFill
              style={{
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={showDrawer}
            />
          </div>
        )}
      </div>
      <Modal open={open} onClose={closeModal}></Modal>
    </div>
  );
};

export default CustomDrawer;

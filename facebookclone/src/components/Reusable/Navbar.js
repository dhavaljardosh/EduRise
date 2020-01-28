import React from "react";
import { Navbar, Icon, NavItem, Container } from "react-materialize";
import { firebaseApp } from "../../firebase";
import F from "../../assets/f.png";

export default ({ stage }) => {
  return (
    <div style={{ background: "royalblue" }}>
      <Container>
        <Navbar
          alignLinks="right"
          brand={
            <a
              className="brand-logo"
              href="www.google.com"
              style={{ paddingTop: 8 }}
            >
              <img src={F} alt="Logo" height="40px" />
            </a>
          }
          className="custom-navbar"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          {stage === "loggedIn" && (
            <NavItem
              onClick={event => {
                //Stop the reloading of the page
                event.preventDefault();
                firebaseApp.auth().signOut();
              }}
            >
              Log out
            </NavItem>
          )}
        </Navbar>
      </Container>
    </div>
  );
};

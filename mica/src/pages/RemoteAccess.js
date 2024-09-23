import React from "react";
import Navbar from "../Navigation/NavBar";

function RemoteAccess() {
    return (
      <div className="page">
    <Navbar/>
      <p className="text">
        Remote Access: <br/>
        One method we can use to look after your computers is remote access. Most of a computer’s functions can be
accessed, and necessary corrections made, without the disruption of removing the computer to our premises or
a site visit having to take place.
We’re able to see memory usage, error logs, etc., and can install programs, change settings and scan the
computer for threats. We are also able to diagnose many hardware faults remotely, but any component that is
showing signs of failing would still need a site visit to repair or replace.
While we’re servicing the PC remotely, a clearly visible notification will be shown on the screen and the client
can watch everything that is being done, if they wish.
      </p>
      </div>
    );
  }
  export default RemoteAccess;
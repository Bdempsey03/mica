import React from "react";
import Navbar from "../Navigation/NavBar";

function ITSupport() {
  return (
    <div className="page">
      <Navbar />
      <p className="text">
        IT Support<br/>
        Mica Electronics can fully support existing servers (Linux or Windows) and networks and we’re always happy to
assess your current IT setup and advise where performance, security and reliability improvements can be made.
If you’re having technical problems right now, please don’t hesitate to contact us for help. However, by far the
best way to keep your vital systems running smoothly is to not wait for problems to happen. Instead, let us
check for early key signs of deterioration.
Waiting until you’re already experiencing issues increases the probability of catastrophic data loss and the
disruption of business operations that generally accompanies unexpected hardware failures.
      </p>
    </div>
  );
}
export default ITSupport;
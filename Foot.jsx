import React from "react";

function Foot() {
  var cYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright&copy; @{cYear}. All rights Reserved</p>
    </footer>
  );
}
export default Foot;

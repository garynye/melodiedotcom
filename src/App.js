import * as React from "react";
import Button from "@mui/material/Button";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/assurily/image/upload/c_scale,w_1159/v1638810851/garynyedotcom/IMG_5190_nhde57_dwda6q.webp")`,
            width: "100%",
            height: "30%",
          }}
        >
          <a style={{ textDecoration: "none" }} href="mailto:gary@garynye.com">
            <Button variant="contained">Email Me</Button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

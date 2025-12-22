import { useState } from "react";

export default function Bank() {
  const userId = localStorage.getItem("user_id");
  const [urlToResource, setUrlToResource] = useState("");

  const handleSetUrlRecourse = (newUrlRecourse) => {
    setUrlToResource(newUrlRecourse)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <div style={
        { 
          textAlign: "center", 
          fontFamily: "'Inter', sans-serif", 
          color: "#333", 
          display: 'flex', 
          flexDirection: 'column',
          margin: '0px 50px 0px 50px',
          paddingTop: '100px',
          width: '15%'
        }
        }>
        <h1 style={{ color: "#1a73e8", marginBottom: "50px", fontSize: "32px" }}>MENU</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            width: "100%",
            height: "100%",
            margin: "0 auto 30px",
            padding: '0px 30px 0px 30px'
          }}
        >
          <a style={buttonStyle} onClick={() => handleSetUrlRecourse('http://localhost:5173/')}>Shop</a>
          <a style={buttonStyle} onClick={() => handleSetUrlRecourse(`http://localhost:5176/?user=${userId}`)}>Bank</a>
          <a style={buttonStyle}>Government</a>
          <a style={buttonStyle} onClick={() => handleSetUrlRecourse('http://localhost:5175/')}>Tracking</a>
        </div>
      </div>
      <div style={{ flex: 2 }}>
        <iframe src={urlToResource} style={{ height: '90%', width: '100%' }}></iframe>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  background: "#1a73e8",
  color: "white",
  border: "none",
  padding: "12px 0",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "0.3s",
};

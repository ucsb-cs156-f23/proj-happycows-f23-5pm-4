import React, { useState} from "react";
import greetingsList from "../../../assets/PlayGreetings.json"
import "../../../main/components/Commons/CommonsPlay.css"
export default function CommonsPlay({ currentUser }) {
  // Stryker disable  all 
  const firstName = currentUser?.root ? currentUser?.root?.user?.givenName : "";

  const [welcomeText, _]= useState(greetingsList[Math.floor(Math.random() * greetingsList.length)]);
  // Stryker restore all

  return (
    <div data-testid="CommonsPlay">
      <h1 data-testid="CommonsPlay-title" style={{ fontSize: "50px", borderRadius: "8px", "fontFamily": "Copperplate", color: '#003366', backgroundColor: '#66B2FF', opacity: ".9" }} className="radial-gradient-background">
      {welcomeText} {firstName}! 
      </h1>
    </div>
  );
};
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ChatComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
}

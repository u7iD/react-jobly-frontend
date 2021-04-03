import React, { useState } from "react";

function useLocalStorage() {
  const [state, setState] = useState("");
  setState((s) => localStorage.setItem("jobly-token", s));
  return;
}

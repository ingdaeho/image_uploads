import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [me, setMe] = useState();

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    if (me) {
      axios.defaults.headers.common.sessionid = me.sessionId;
      localStorage.setItem("sessionId", me.sessionId);
    } else if (sessionId) {
      axios
        .get("/users/me", { headers: { sessionid: sessionId } })
        .then((res) =>
          setMe({
            name: res.data.name,
            userId: res.data.userId,
            sessionId: res.data.sessionId,
          })
        )
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("sessionId");
          delete axios.defaults.headers.common.sessionid;
        });
    } else delete axios.defaults.headers.common.sessionid;
  }, [me]);

  return (
    <AuthContext.Provider value={[me, setMe]}>{children}</AuthContext.Provider>
  );
};

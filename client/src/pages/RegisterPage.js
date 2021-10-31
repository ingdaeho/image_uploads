import { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../components/CustomInput";
import { AuthContext } from "../context/authContext";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [, setMe] = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (username.length < 3)
        throw new Error("회원 ID가 너무 짧아요. 3자 이상으로 해주세요.");
      if (password.length < 6)
        throw new Error("비밀번호가 너무 짧아요. 6자 이상으로 해주세요.");
      if (password !== passwordCheck)
        throw new Error("비밀번호가 다릅니다. 확인해주세요.");

      const result = await axios.post("/users/register", {
        name,
        username,
        password,
      });
      setMe({
        userid: result.data.userId,
        sessionId: result.data.sessionId,
        name: result.data.name,
      });
      toast.success("회원가입 성공");
      history.push("/");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };
  return (
    <div
      style={{
        marginTop: 100,
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3>회원가입</h3>
      <form onSubmit={submitHandler}>
        <CustomInput label="이름" value={name} setValue={setName} />
        <CustomInput label="회원ID" value={username} setValue={setUsername} />
        <CustomInput
          label="비밀번호"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <CustomInput
          label="비밀번호 확인"
          type="password"
          value={passwordCheck}
          setValue={setPasswordCheck}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;

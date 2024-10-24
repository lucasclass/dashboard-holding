import { useRouter } from "next/navigation";
import { useState } from "react";
import { mockCredentials } from "../utils/mockCredentials";

export const useLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState(mockCredentials.email);
  const [password, setPassword] = useState(mockCredentials.password);

  const handleLogin = () => {
    if (
      email === mockCredentials.email &&
      password === mockCredentials.password
    ) {
      router.push("/dashboard");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};

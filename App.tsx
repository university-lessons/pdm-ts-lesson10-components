import { useState } from "react";
import FormInput from "./components/FormInput";
import ScreenWrapper from "./components/ScreenWrapper";
import Title from "./components/Title";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <ScreenWrapper>
      <Title>Hello World!</Title>

      <Title c="red" fw="bold">
        Hello {email}
      </Title>

      <Title c="yellow" fz={20} fw="bold">
        Hello World!
        <Title c="lime" fz={20} fw="bold">
          Ow Yes!
        </Title>
      </Title>

      <FormInput label="Email" value={email} onChangeText={setEmail} />

      <FormInput label="Password" secureTextEntry error="Password mismatch!" />

      <FormInput placeholder="This is a placeholder" />
    </ScreenWrapper>
  );
}

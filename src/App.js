import { RegisterForm } from "./RegisterForm/RegisterForm";

function App() {
  return (
    <div>
      <RegisterForm
        option={"register"}
        title={"Registration form"}
        buttonName={"Confirm"}
      />
      <RegisterForm
        option={"login"}
        title={"LogIn form"}
        buttonName={"Confirm"}
      />
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
import TestResult from "./components/testResult/TestResult";
import "./App.css";
import CustomButton from "./components/customButton";

function MyApp() {
  let grade = 85;

  const onPressHandler = () => {
    alert("Hey");
  };

  const onPutNameHandler = () => {
    const userName = prompt("Put name");
    alert(userName);
  };

  return (
    <div className="header">
      <button onClick={() => alert("Hello")}>Click Here</button>
      <button onClick={onPressHandler}>Press Here</button>
      <button onClick={onPutNameHandler}>Put name</button>
      <h2>{grade >= 85 ? "Great Job!" : "Good Job!"}</h2>
      <TestResult />
      <CustomButton />
    </div>
  );
}

export default MyApp;

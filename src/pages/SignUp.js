import HalfImage from "../components/HalfImage";
import FormHandler from "../components/sign-up/FormHandler";

// This is the page-component for sign-up
console.log(`[SignUp]`);
export default function SignUp() {
  console.log(`[SignUp] In Sign-up page`);
  return (
    <div className="row">
      <div className="col-8">
        <HalfImage imageLink="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais" />
      </div>
      <div className="col-4">
        <FormHandler />
      </div>
    </div>
  );
}

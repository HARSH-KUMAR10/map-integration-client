import HalfImage from "../components/HalfImage";
import FormHandler from "../components/sign-in/FormHandler";

export default function SignIn() {
  return (
    <div className="row">
      <div className="col-4">
        <FormHandler />
      </div>
      <div className="col-8">
        <HalfImage imageLink="https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg" />
      </div>
    </div>
  );
}

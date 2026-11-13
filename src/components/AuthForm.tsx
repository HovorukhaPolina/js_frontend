import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function AuthForm() {
  return (
    <section className="auth-section">
      <RegisterForm />
      <LoginForm />
    </section>
  );
}
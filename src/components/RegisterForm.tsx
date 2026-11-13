import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/baseApi";

type RegisterFormValues = {
    email: string;
    password: string;
};

type ApiError = {
    data?: unknown;
    error?: string;
    status?: number | string;
};

function getErrorMessage(error: unknown): string {
    if (typeof error === "object" && error !== null) {
        const apiError = error as ApiError;

    if (typeof apiError.data === "string") {
        return apiError.data;
    }

    if (
        typeof apiError.data === "object" && apiError.data !== null && "message" in apiError.data && typeof apiError.data.message === "string"
    ) {
        return apiError.data.message;
    }

    if (apiError.error) {
        return apiError.error;
    }
  }

    return "помилка запиту";
}

export default function RegisterForm() {
    const [registerUser] = useRegisterMutation();

    const {register, handleSubmit, formState: { isSubmitting },} = useForm<RegisterFormValues>({
        defaultValues: {
        email: "",
        password: "",
        },
    });

    const onSubmit = async (values: RegisterFormValues) => {
        const result = await registerUser(values);

        if ("data" in result) {
        alert("реєстрація успішна!");
        } else {
        alert(`помилка реєстрації: ${getErrorMessage(result.error)}`);
        }
    };

    return (
        <div className="auth-card">
        <h2>створити акаунт</h2>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="email" {...register("email")}/>

            <input type="password" placeholder="пароль" {...register("password")}/>

        <button type="submit" disabled={isSubmitting}>Зареєструватися</button>
      </form>
    </div>
  );
}
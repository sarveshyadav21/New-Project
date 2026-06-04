"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type SignupForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialForm: SignupForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState<SignupForm>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordsMatch = useMemo(() => {
    return form.password && form.confirmPassword
      ? form.password === form.confirmPassword
      : true;
  }, [form.password, form.confirmPassword]);

  const updateField = (field: keyof SignupForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("Please enter your first and last name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Account details are ready. Connect this form to the signup API next.");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-lg bg-white shadow-md md:grid-cols-[0.85fr_1.15fr]">
          <section className="flex flex-col justify-between bg-gray-900 p-8 text-white">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
                Create account
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight">
                Start chatting with your AI assistant.
              </h1>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Sign up with your details to keep your conversations connected
                to your own workspace.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6 text-sm text-gray-300">
              Already have an account?
              <button
                type="button"
                onClick={goToLogin}
                className="ml-2 font-semibold text-white underline-offset-4 hover:underline"
              >
                Log in
              </button>
            </div>
          </section>

          <section className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium">
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={(event) => updateField("phoneNumber", event.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  autoComplete="tel"
                  placeholder="Optional"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="password" className="mb-1 block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(event) => updateField("password", event.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-1 block text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(event) =>
                      updateField("confirmPassword", event.target.value)
                    }
                    className={`w-full rounded border px-3 py-2 outline-none transition focus:ring-2 ${
                      passwordsMatch
                        ? "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
                        : "border-red-400 focus:border-red-500 focus:ring-red-100"
                    }`}
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </div>
              </div>

              {error && (
                <p className="rounded bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded bg-green-50 px-3 py-2 text-sm text-green-700">
                  {success}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Create account
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

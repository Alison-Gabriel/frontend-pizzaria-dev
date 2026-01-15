"use server";

export const register = async (
  prevState: { success: boolean; error: string } | null,
  formData: FormData,
) => {
  const user = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  return {
    success: true,
    error: "",
  };
};

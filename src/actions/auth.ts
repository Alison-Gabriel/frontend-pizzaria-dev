"use server";

import { apiClient } from "@/lib/api";

interface RegisterStateData {
  success: boolean;
  error?: string;
  redirectTo?: string;
}

export const register = async (
  _prevState: RegisterStateData | null,
  formData: FormData,
): Promise<RegisterStateData> => {
  try {
    const userToBeCreated = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    await apiClient("/users", {
      method: "POST",
      body: JSON.stringify(userToBeCreated),
    });

    return {
      success: true,
      redirectTo: "/login",
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
    return {
      success: false,
      error: "Erro ao criar conta.",
    };
  }
};

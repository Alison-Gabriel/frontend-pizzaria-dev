"use client";

import Link from "next/link";
import { useActionState } from "react";

import { register } from "@/actions/auth";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Spinner } from "../ui/spinner";

export const RegisterForm = () => {
  const [formState, registerAction, isFormSubmitting] = useActionState(
    register,
    null,
  );

  return (
    <Card className="bg-app-card border-app-border">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-white sm:text-4xl">
          Sujeito<span className="text-brand-primary">Pizza</span>
        </CardTitle>
        <CardDescription className="text-zinc-100">
          Preencha os dados para criar sua conta
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={registerAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nome
            </Label>
            <Input
              placeholder="Digite seu nome"
              id="name"
              name="name"
              type="text"
              minLength={3}
              className="bg-app-card border-app-border text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              E-mail
            </Label>
            <Input
              placeholder="Digite seu e-mail"
              id="email"
              name="email"
              type="email"
              className="bg-app-card border-app-border text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Senha
            </Label>
            <Input
              placeholder="Digite sua senha"
              id="password"
              name="password"
              type="password"
              minLength={6}
              className="bg-app-card border-app-border text-white"
            />
          </div>

          <Button
            type="submit"
            className="bg-brand-primary hover:bg-brand-primary/80 w-full gap-1"
          >
            {!isFormSubmitting && <Spinner className="size-3.5" />}
            Criar conta
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <CardDescription className="mx-auto text-zinc-100">
          Já tem uma conta?{" "}
          <Button variant="link" className="text-brand-primary px-0" asChild>
            <Link href="/login">Faça login.</Link>
          </Button>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

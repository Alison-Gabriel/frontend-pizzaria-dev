import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const RegisterForm = () => {
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
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nome
            </Label>
            <Input
              placeholder="Digite seu nome"
              id="name"
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
              type="password"
              minLength={6}
              className="bg-app-card border-app-border text-white"
            />
          </div>

          <Button
            type="submit"
            className="bg-brand-primary hover:bg-brand-primary/80 w-full"
          >
            Criar conta
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

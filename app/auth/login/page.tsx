"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/firebaseApp"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")


  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user
      // login({email: user.email, uid: user.uid})
      sessionStorage.setItem("user", JSON.stringify({email: user.email, uid: user.uid}))
      router.push("/")
    } catch (error) {
      if (error?.code === "auth/invalid-credential") {
        setErrorMessage("Неверный email или пароль")
      }
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Неверный email или пароль",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <span className="gradient-text text-xl font-bold">TrusteeUp</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Торгуйте криптовалютой безопасно и эффективно с нашей передовой платформой.&rdquo;
            </p>
            <footer className="text-sm">Александр Петров</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Вход в аккаунт</h1>
            <p className="text-sm text-muted-foreground">Введите email и пароль для входа</p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input id="password" type="password" name="password" disabled={isLoading} required />
                </div>
                {errorMessage ? <p className="text-red-500">{errorMessage}</p> : <></>}
                <Button disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Войти
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Или</span>
              </div>
            </div>
            <div className="text-center text-sm">
              Нет аккаунта?{" "}
              <Link href="/auth/register" className="underline text-primary hover:text-primary/90">
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


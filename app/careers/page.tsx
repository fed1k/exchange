import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const CareersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0d10] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Творите историю с TrusteeUp</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            У вас загораются глаза и бьёт ключом энтузиазм при обсуждении криптовалют? Если ответ «да», то вы нам
            подходите!
          </p>
          <Button className="mt-4">Посмотреть вакансии</Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наша миссия</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="/placeholder.svg" alt="Listen" width={124} height={124} className="mb-4 mt-4" />
              <h3 className="text-xl font-bold mb-2">
                Мы <span className="text-primary">слушаем</span>
              </h3>
              <p>Мы ценим все отзывы и всегда слышим обратную связь.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="/placeholder.svg" alt="Care" width={124} height={124} className="mb-4 mt-4" />
              <h3 className="text-xl font-bold mb-2">
                Мы <span className="text-primary">заботимся</span>
              </h3>
              <p>Мы ставим клиентов, команду и организацию на первое место.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="/placeholder.svg" alt="Improve" width={124} height={124} className="mb-4 mt-4" />
              <h3 className="text-xl font-bold mb-2">
                Мы <span className="text-primary">совершенствуемся</span>
              </h3>
              <p>Мы стремимся к совершенству, мы решительны в своих целях и инновациях.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Преимущества работы у нас</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Личное и профессиональное развитие",
            "Гибкость",
            "Возможность переезда",
            "Межкультурная среда",
            "Современная рабочая среда",
            "Признание",
          ].map((benefit, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 mt-4">{benefit}</h3>
                <p className="text-zinc-400">Описание преимущества работы в Bybit.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наши отделы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Отдел кадров и офис-менеджмент",
            "Маркетинг",
            "Юридический отдел",
            "Клиентская поддержка",
            "Развитие бизнеса",
            "Продукт и дизайн",
            "Финансовый отдел",
            "Стратегический отдел",
            "Инженерно-проектная команда",
          ].map((department, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 mt-4">{department}</h3>
                <p className="text-zinc-400 mb-4">Краткое описание отдела и его роли в компании.</p>
                <Link href="/about">
                  <Button variant="outline" className="w-full">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Процесс трудоустройства в TrusteeUp</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Онлайн-отклик", description: "Отправьте отклик через наш портал вакансий." },
            {
              title: "Рассмотрение",
              description: "Мы рассмотрим ваше резюме и свяжемся с вами, чтобы познакомиться поближе.",
            },
            {
              title: "Собеседования",
              description: "Ряд собеседований с представителями отделов, на должность в которых вы претендуете.",
            },
            {
              title: "Приглашение",
              description:
                "Успешные кандидаты получают приглашение на вакантную позицию с четкими и прозрачными условиями контракта.",
            },
          ].map((step, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-4 mt-4">{index + 1}</div>
                <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Интересная и захватывающая карьера в криптоиндустрии ждёт вас!
        </h2>
        <Button className="mt-4">
          Найти подходящую позицию
        </Button>
      </section>
    </div>
  )
}

export default CareersPage


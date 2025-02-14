import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const HomePage = async () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#0c0d10] text-white overflow-hidden">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Добро пожаловать на TrusteeUp</h1>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ведущая платформа для торговли криптовалютой. Безопасность, скорость и профессиональные инструменты.
              </p>
            </div>
            <Link href="/auth/register">
            <Button className="w-full mt-4">
              Присоединиться
            </Button>
            </Link>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg?height=300&width=1270"
              className="object-cover w-full h-full"
            >
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">TrusteeUp в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">5M+</p>
              <p className="text-zinc-400">пользователей в мире</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">$12B+</p>
              <p className="text-zinc-400">среднесуточный торговый объём (USD)</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-zinc-400">служба поддержки</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">150+</p>
              <p className="text-zinc-400">стран</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Наша цель</h2>
              <p className="text-zinc-400 md:text-xl/relaxed">
                Раскрыть весь потенциал криптоэнтузиастов, которые стремятся перейти в Web3 с помощью инструментов,
                поддержки и возможностей следующего поколения.
              </p>
              <Link href="/">
                <Button className="mt-4">
                    Подробнее
                </Button>
              </Link>
            </div>
            <div className="lg:mt-0 lg:ml-auto">
              <Image
                src="/placeholder.svg"
                alt="Our Goal"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Наш путь</h2>
          <div className="space-y-8">
            {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
              <Card key={year} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mt-4 mb-4">{year}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 bg-white rounded-full h-2 w-2 flex-shrink-0"></span>
                      <span>Ключевое достижение {year} года</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 bg-white rounded-full h-2 w-2 flex-shrink-0"></span>
                      <span>Важное событие {year} года</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulators Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Наши регуляторы</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg" alt="Regulator 1" width={60} height={60} className="rounded-full" />
              <p>Управление по регулированию виртуальных активов Дубая</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg" alt="Regulator 2" width={60} height={60} className="rounded-full" />
              <p>Национальный банк Грузии</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg" alt="Regulator 3" width={60} height={60} className="rounded-full" />
              <p>Комитет МФЦА по регулированию финансовых услуг, Казахстан</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Наши партнёры</h2>
          <div className="flex pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap space-x-4">
              {[1, 2, 3].map((partner) => (
                <Image
                  key={partner}
                  src="/placeholder.svg"
                  alt={`Partner ${partner}`}
                  width={200}
                  height={100}
                  className="flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Наши инициативы</h2>
          <div className="flex space-x-8">
            <Image src="/placeholder.svg" alt="Initiative 1" width={150} height={150} />
            <Image src="/placeholder.svg" alt="Initiative 2" width={150} height={150} />
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Работа у нас</h2>
              <p className="text-zinc-400 md:text-xl/relaxed">
                Наши ценности определяют нашу суть. Мы слышим, заботимся и совершенствуемся, чтобы создать более
                быструю, справедливую и гуманную торговую среду для наших пользователей.
              </p>
              <Button className="mt-4">
                Поиск вакансий
              </Button>
            </div>
            <div className="lg:mt-0 lg:ml-auto">
              <Image
                src="/placeholder.svg"
                alt="Work With Us"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Bybit Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0c0d10] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Присоединяйтесь к TrusteeUp</h2>
          <p className="text-zinc-400 md:text-xl/relaxed mb-8">Начните криптопутешествие прямо сейчас.</p>
          <Link href="/auth/register">
          <Button className="mt-4">
            Зарегистрироваться
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage


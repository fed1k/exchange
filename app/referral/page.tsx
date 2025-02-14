"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ChevronDown,
  Plus,
  DollarSign,
  Users,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

const ReferralPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const faqs = [
    {
      question: "Что такое Реферальная программа TrusteeUp?",
      answer:
        "Реферальная программа TrusteeUp — это система поощрения, которая награждает и вас, и ваших друзей. Приглашая друзей присоединиться к TrusteeUp и выполнить задания программы, вы можете заработать до 1717 USDT в эксклюзивных наградах. Чтобы получить награды, все задания необходимо выполнить в период, предусмотренный условиями Реферальной программы. Кроме того, вы можете заработать до 30% комиссионных за каждую сделку своего реферала на TrusteeUp.",
    },
    {
      question: "Сколько длится Реферальная программа TrusteeUp?",
      answer:
        "Реферальная программа TrusteeUp является долгосрочной системой поощрения. С 10:00 UTC 17 мая 2023 года обновляются её правила, которые призваны отблагодарить пользователей платформы. В настоящее время нет официальной даты завершения Реферальной программы TrusteeUp. Однако если она завершится, пользователи узнают об этом заблаговременно.",
    },
    {
      question: "Как можно заработать приветственные награды до 1717 USDT?",
      answer: `
        Чтобы получить награды, ваш друг должен зарегистрироваться по вашему коду/ссылке после 10:00 UTC 17 февраля 2025 года. 
        Как только друг выполнит задания для рефералов, вы оба получите соответствующие вознаграждения, которые можно увидеть в вашей истории рефералов.`,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0d10] text-white">
      {/* Hero Section */}
      <section className="relative w-full pt-12 md:pt-24 lg:pt-32 overflow-hidden">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Более 1&nbsp;717 USDT и комиссионные в размере 30% за приглашение
              друзей
            </h1>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Получите награды вместе с друзьями за торговлю на споте,
              деривативами, копитрейдинг и использование карты TrusteeUp
            </p>
            <Link href="/auth/register">
              <Button className="text-lg py-6 px-8">Пригласить друзей</Button>
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full h-80 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Referral Rewards"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-[#1A1B1E]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">5M+</p>
              <p className="text-zinc-400">пользователей в мире</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">$12B+</p>
              <p className="text-zinc-400">
                среднесуточный торговый объём (USD)
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">24/7</p>
              <p className="text-zinc-400">служба поддержки</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-primary">150+</p>
              <p className="text-zinc-400">стран и регионов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <section className="bg-[#1A1B1E] py-4 border-t border-b border-zinc-800">
        <div className="container overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 mx-8">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="text-sm">
                  Пользователь {i + 1}***{i + 2} заработал(а){" "}
                  <span className="text-primary font-bold">
                    {(Math.random() * 20 + 20).toFixed(2)} USDT
                  </span>{" "}
                  комиссионных.
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Rewards Cards */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Одно приглашение для получения нескольких наград
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-6 relative flex flex-col">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-3 rounded-bl-lg">
                  До 1 025 USDT
                </div>
                <DollarSign className="w-12 h-12 text-primary mt-4 mb-4" />
                <h3 className="text-xl font-bold mb-2">Получите награды</h3>
                <p className="text-zinc-400 mb-4">
                  За приглашение друзей на TrusteeUp
                </p>
                <Link href="/auth/register">
                  <Button className="w-full bg-primary text-white">
                    Пригласить
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-6 relative flex flex-col">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-3 rounded-bl-lg">
                  30% комиссионных
                </div>
                <Users className="w-12 h-12 text-primary mt-4 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Торговые комиссионные
                </h3>
                <p className="text-zinc-400 mb-4">
                  Зарабатывайте на торговле друзей
                </p>
                <Link href="/auth/register">
                  <Button className="w-full bg-primary text-white">
                    Подробнее
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardContent className="p-6 relative flex flex-col">
                <div className="absolute top-0 right-0 bg-primary text-white font-bold py-1 px-3 rounded-bl-lg">
                  До 20 USDT
                </div>
                <CreditCard className="w-12 h-12 text-primary mt-4 mb-4" />
                <h3 className="text-xl font-bold mb-2">Карта TrusteeUp</h3>
                <p className="text-zinc-400 mb-4">За каждого владельца карты</p>
                <Link href="/auth/register">
                  <Button className="w-full bg-primary text-white">
                    Узнать больше
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Invite Friends */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Как пригласить друзей
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 bg-primary rounded-full p-4">
                <Users className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Поделитесь своим кодом и ссылкой
              </h3>
              <p className="text-zinc-400">
                Пригласите друзей начать пользоваться всеми продуктами TrusteeUp
                всего с помощью одного реферального кода.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 bg-primary rounded-full p-4">
                <Plus className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Свяжитесь с друзьями</h3>
              <p className="text-zinc-400">
                После регистрации ваши друзья будут связаны с вами.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 bg-primary rounded-full p-4">
                <DollarSign className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Получайте многочисленные награды
              </h3>
              <p className="text-zinc-400">
                Автоматически получайте торговые комиссионные, награды по карте
                TrusteeUp и награды за копитрейдинг.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24" id="Faqs">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg p-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-primary" />
                </div>
                {activeIndex === index && (
                  <div
                    className="mt-4 text-zinc-400"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/terms">
              <Button variant="link" className="text-primary flex items-center">
                Подробнее <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 md:py-24 bg-zinc-900" id="terms_and_conditions">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">УСЛОВИЯ</h2>
          <ol className="list-decimal list-inside space-y-6 max-w-3xl mx-auto text-zinc-400">
            <li>
              TrusteeUp не проводит реферальные программы в Германии,
              Великобритании, Франции, Бельгии, Гонконге и всех регионах, где не
              предоставляются услуги TrusteeUp.
            </li>
            <li>
              Трейдеры начнут зарабатывать комиссионные с момента регистрации
              реферала на TrusteeUp за каждую сделку на платформе TrusteeUp.
            </li>
            <li>
              Комиссионные рефералов будут распределяться ежедневно в 04:00 UTC.
            </li>
            {/* Add more terms here */}
          </ol>
          <div className="flex justify-center mt-8">
            <Link href="/terms">
              <Button variant="link" className="text-primary flex items-center">
                Подробнее <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Присоединяйтесь к партнёрской программе и получайте до 50%
            комиссионных
          </h2>
          <Link href="/auth/register">
            <Button className="bg-black text-white hover:bg-zinc-800 text-lg py-6 px-8">
              Начать зарабатывать <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;

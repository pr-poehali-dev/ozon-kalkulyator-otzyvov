import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [currentRating, setCurrentRating] = useState("");
  const [targetRating, setTargetRating] = useState("");
  const [totalReviews, setTotalReviews] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateReviews = () => {
    const current = parseFloat(currentRating);
    const target = parseFloat(targetRating);
    const total = parseInt(totalReviews);

    if (current && target && total && target > current) {
      const needed = Math.ceil(
        (target * total - current * total) / (5 - target),
      );
      setResult(needed);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="ShoppingCart" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                CUPOZON
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Как работает
              </a>
              <a
                href="#calculator"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Калькулятор
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Связаться
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Начать работу
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-blue-100 text-blue-700 mb-6">
                Профессиональные услуги самовыкупов
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Увеличьте рейтинг товаров на
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  {" "}
                  Озоне
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные услуги самовыкупов и накрутки отзывов для
                повышения позиций ваших товаров в поисковой выдаче маркетплейса
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать отзывы
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="/img/c0bed09e-a26f-4d8a-b7e5-4c66ccd951b4.jpg"
                alt="Ozon marketplace services"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                50000+
              </div>
              <div className="text-gray-600">Выполненных заказов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                98%
              </div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2">
                3 года
              </div>
              <div className="text-gray-600">Опыт работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Калькулятор отзывов
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, сколько отзывов нужно для достижения желаемого рейтинга
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} className="text-blue-600" />
                Расчет необходимых отзывов
              </CardTitle>
              <CardDescription>
                Введите текущие данные вашего товара для расчета
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current-rating">Текущий рейтинг</Label>
                  <Input
                    id="current-rating"
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={currentRating}
                    onChange={(e) => setCurrentRating(e.target.value)}
                    placeholder="4.2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target-rating">Желаемый рейтинг</Label>
                  <Input
                    id="target-rating"
                    type="number"
                    step="0.1"
                    min="1"
                    max="5"
                    value={targetRating}
                    onChange={(e) => setTargetRating(e.target.value)}
                    placeholder="4.8"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="total-reviews">Количество отзывов</Label>
                  <Input
                    id="total-reviews"
                    type="number"
                    value={totalReviews}
                    onChange={(e) => setTotalReviews(e.target.value)}
                    placeholder="150"
                  />
                </div>
              </div>

              <Button
                onClick={calculateReviews}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                size="lg"
              >
                <Icon name="Zap" size={20} className="mr-2" />
                Рассчитать
              </Button>

              {result !== null && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 animate-scale-in">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {result} отзывов
                    </div>
                    <p className="text-gray-700">
                      Необходимо для достижения рейтинга {targetRating}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс в 4 этапа для увеличения рейтинга ваших товаров
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="MessageSquare"
                  size={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Консультация</h3>
              <p className="text-gray-600">Обсуждаем ваши товары и цели</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Стратегия</h3>
              <p className="text-gray-600">Разрабатываем план продвижения</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Выполнение</h3>
              <p className="text-gray-600">Работаем с отзывами и рейтингом</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Результат</h3>
              <p className="text-gray-600">Ваш товар в топе поиска</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши партнеры
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-0 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Рейтинг нашего товара вырос с 4.1 до 4.7 за месяц. Продажи
                  увеличились в 3 раза!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">А</span>
                  </div>
                  <div>
                    <div className="font-semibold">Александр</div>
                    <div className="text-sm text-gray-500">
                      Продавец электроники
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Профессиональный подход и быстрые результаты. Товары стали
                  лучше ранжироваться."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">М</span>
                  </div>
                  <div>
                    <div className="font-semibold">Мария</div>
                    <div className="text-sm text-gray-500">
                      Владелец магазина одежды
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличная команда! Помогли выйти в топ поиска по ключевым
                  запросам."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">Д</span>
                  </div>
                  <div>
                    <div className="font-semibold">Дмитрий</div>
                    <div className="text-sm text-gray-500">
                      Интернет-магазин
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-green-500"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Свяжитесь с нами для консультации и расчета стоимости услуг
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon
                name="Mail"
                size={24}
                className="mx-auto text-blue-100 mb-2"
              />
              <div className="text-white font-semibold">Email</div>
              <div className="text-blue-100">info@cupozon.ru</div>
            </div>
            <div>
              <Icon
                name="Phone"
                size={24}
                className="mx-auto text-blue-100 mb-2"
              />
              <div className="text-white font-semibold">Телефон</div>
              <div className="text-blue-100">+7 (999) 123-45-67</div>
            </div>
            <div>
              <Icon
                name="Clock"
                size={24}
                className="mx-auto text-blue-100 mb-2"
              />
              <div className="text-white font-semibold">Время работы</div>
              <div className="text-blue-100">24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="ShoppingCart" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">CUPOZON</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные услуги продвижения товаров на маркетплейсе
                Озон. Увеличиваем рейтинг, улучшаем позиции в поиске.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Самовыкупы товаров</li>
                <li>Накрутка отзывов</li>
                <li>SEO оптимизация</li>
                <li>Консультации</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@ozonzartin.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Telegram: @cupozon_mp</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OZON ЗАРТИН. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

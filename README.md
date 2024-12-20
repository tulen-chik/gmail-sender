# Express.js Project with Docker: Hair Salon Booking Confirmation

Добро пожаловать в наш проект — веб-приложение, разработанное с использованием **Express.js** и завернутое в **Docker**. Это решение специально создано для отправки подтверждений на бронирование для сайта парикмахерской, обеспечивая вашим клиентам лучший опыт обслуживания.

## 🌟 Описание

Наше приложение позволяет клиентам получать мгновенные уведомления о подтверждении бронирования через электронную почту. Это не только упрощает процесс взаимодействия, но и значительно повышает уровень сервиса, создавая чувство заботы и профессионализма.

С использованием Docker ваше приложение становится легким для развертывания и масштабирования в различных окружениях, что позволяет вам сосредоточиться на главном — удовлетворении потребностей ваших клиентов.

## ⚙️ Настройки окружения

Для корректной работы приложения необходимо задать следующие параметры окружения:

- **SMTP_USER_PASS**: Пароль для вашей SMTP-учетной записи.
- **SMTP_USER**: Имя пользователя вашей SMTP-учетной записи.
- **SMTP_HOST**: Хост для SMTP-сервера (по умолчанию `smtp.gmail.com`).
- **SMTP_PORT**: Порт для SMTP-соединения (по умолчанию `587`).

## 🚀 Установка и запуск

Следуйте этим простым шагам, чтобы запустить приложение:

1. Клонируйте репозиторий:
   ```bash
   git clone <URL вашего репозитория>
   ```

2. Настройте параметры окружения в файле `.env`.

3. Соберите и запустите Docker-контейнер:
   ```bash
   docker-compose up --build
   ```

Теперь ваше приложение готово к работе и будет отправлять уведомления о подтверждении бронирования вашим клиентам, делая их опыт более приятным и уверенным!

## 🤝 Вклад

Мы всегда рады вашим идеям и предложениям! Если у вас есть мысли по улучшению проекта, не стесняйтесь делиться ими. Вместе мы сделаем это приложение еще лучше!

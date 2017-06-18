
# Модуль для составления расписания занятий в высших учебных заведениях

<p align="center">
    <a href="https://choosealicense.com/licenses/mit/"><img src="https://img.shields.io/github/license/nanografon/scheduler.svg" alt="License"></a>
    <a href="https://travis-ci.org/Nanografon/Scheduler"><img src="https://travis-ci.org/Nanografon/Scheduler.svg?branch=master" alt="Build Status"></a>
    <a href="https://styleci.io/repos/82827551"><img src="https://styleci.io/repos/82827551/shield?branch=master" alt="StyleCI"></a>
</p>

## Требования для окружения:

*   PHP 7.1 или выше
*   PHP Extension: OpenSSL, PDO, Mbstring, Tokenizer, XML
*   Поддержка протокола HTTPS
*   MySQL 5.6 или выше
*   Composer 1.2 или выше
*   Git 2.10 или выше
*   Apache или Nginx (?)
*   Node JS 7.7 или выше
*   NPM 4.4 или выше

## Установка

*   Скачать репозиторий `git clone https://github.com/Nanografon/Scheduler`
*   Переименовать .env.example в .env и заполнить необходимыми опциями.
*   Запустить команды :

```
composer install
npm install
npm run production
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
```
*   Перейти в браузере по указанному url после введенной клманды ```php artisan serve```
*   Если вы хотите внести изменения в JavaScript или Styles файлы используйте команду ```npm run watch```.

Этот проект разработан c :heart: by [@Nanografon](https://github.com/Nanografon)

## Лицензия
Открытый исходный код под лицензией [MIT](http://opensource.org/licenses/MIT).

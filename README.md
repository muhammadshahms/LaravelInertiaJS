# Laravel InertiaJS Using Breeze and Following The S.O.L.I.D design Pattern
Inertia allows you to create fully client-side rendered, single-page apps, without the complexity that comes with modern SPAs.
## Installation

Clone the repo locally:

```sh
git clone https://github.com/muhammadshahms/LaravelInertiaJS.git
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm install
```

Build assets:

```sh
npm run dev
```

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.

```sh
touch database/database.sqlite
```

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run artisan server:

```sh
php artisan serve
```

Установка зависимостей:

cd .\back-end\bank-backend

pip install -r requirements.txt

Создать .env


DB_HOST = localhost

DB_PORT = 5432

DB_USER = postgres

DB_PASS = pass

DB_NAME = Kaspi

SECRET_KEY = 5ebd2a454ea0c19dbfc56b40a2011cf05bac65aa5b45dda99311604eb885dfa1

Запуск FastAPI:

uvicorn main:app --reload

Эндпоинты:

http://127.0.0.1:8000/docs#/

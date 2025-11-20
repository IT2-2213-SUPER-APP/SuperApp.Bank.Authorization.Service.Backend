from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import text
from config import settings

engine = create_async_engine(
    url=settings.DATABASE_URL,
    echo=True,
)

session = async_sessionmaker(engine)

class Base(DeclarativeBase):
    pass

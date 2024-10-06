import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

SQLALCHEMY_DATABASE_URL='postgresql://postgres.knhkyoautxqxedohwdrp:kairos_utriai@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres'

engine=create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal=sessionmaker(autocommit=False,autoflush=False,bind=engine)

Base=declarative_base()
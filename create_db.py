import psycopg2
from psycopg2.extras import RealDictCursor

DATABASE_URL = 'postgresql://neondb_owner:npg_Pjodb46xSfJT@ep-purple-term-aduvkfrb-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

def create_database():
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor()

    # Create table for course-only registrations
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS course_registrations (
            id SERIAL PRIMARY KEY,
            full_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            instagram_link TEXT NOT NULL,
            registration_type TEXT DEFAULT 'course-only',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Create table for work-with-rava registrations (full form)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS rava_registrations (
            id SERIAL PRIMARY KEY,
            full_name TEXT NOT NULL,
            phone TEXT NOT NULL,
            instagram_link TEXT NOT NULL,
            why_register TEXT,
            goal TEXT,
            content_area TEXT,
            has_advertised TEXT,
            challenges TEXT,
            favorite_post TEXT,
            role_model TEXT,
            rava_interest TEXT,
            satisfied_brands TEXT,
            monthly_income TEXT,
            registration_type TEXT DEFAULT 'work-with-rava',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    conn.commit()
    cursor.close()
    conn.close()
    print("Database and tables created successfully!")

if __name__ == "__main__":
    create_database()
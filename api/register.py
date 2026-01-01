import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    DATABASE_URL = os.environ.get('DATABASE_URL')
    if not DATABASE_URL:
        raise ValueError("DATABASE_URL environment variable is not set")
    conn = psycopg2.connect(DATABASE_URL)
    return conn

def handler(event, context):
    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': ''
        }

    try:
        data = json.loads(event['body'])

        if not data:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': 'No data provided'})
            }

        registration_type = data.get('registration_type', 'course-only')

        conn = get_db_connection()
        cursor = conn.cursor()

        if registration_type == 'course-only':
            cursor.execute('''
                INSERT INTO course_registrations (full_name, phone, instagram_link)
                VALUES (%s, %s, %s)
            ''', (
                data.get('fullName'),
                data.get('phone'),
                data.get('instagramLink')
            ))
        elif registration_type == 'work-with-rava':
            cursor.execute('''
                INSERT INTO rava_registrations (
                    full_name, phone, instagram_link, why_register, goal, content_area,
                    has_advertised, challenges, favorite_post, role_model, rava_interest,
                    satisfied_brands, monthly_income
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            ''', (
                data.get('fullName'),
                data.get('phone'),
                data.get('instagramLink'),
                data.get('whyRegister'),
                data.get('goal'),
                data.get('contentArea'),
                data.get('hasAdvertised'),
                data.get('challenges'),
                data.get('favoritePost'),
                data.get('roleModel'),
                data.get('ravaInterest'),
                data.get('satisfiedBrands'),
                data.get('monthlyIncome')
            ))
        else:
            cursor.close()
            conn.close()
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': 'Invalid registration type'})
            }

        conn.commit()
        cursor.close()
        conn.close()

        return {
            'statusCode': 201,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'message': 'Registration successful',
                'registration_type': registration_type
            })
        }

    except Exception as e:
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Internal server error'})
        }
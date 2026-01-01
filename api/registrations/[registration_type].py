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
    if event['httpMethod'] != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS'
            },
            'body': ''
        }

    try:
        registration_type = event['pathParameters']['registration_type']

        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)

        if registration_type == 'course-only':
            cursor.execute('SELECT * FROM course_registrations ORDER BY created_at DESC')
        elif registration_type == 'work-with-rava':
            cursor.execute('SELECT * FROM rava_registrations ORDER BY created_at DESC')
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

        registrations = cursor.fetchall()
        cursor.close()
        conn.close()

        # Convert to list of dicts
        result = [dict(row) for row in registrations]

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps(result)
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
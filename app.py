from flask import Flask, render_template, request, redirect, url_for, session, send_from_directory
from mysql.connector import connect, Error
from werkzeug.security import generate_password_hash, check_password_hash
import os

# ---------- APP CONFIG ----------
app = Flask(__name__, template_folder='app/templates', static_folder='app/static')
app.secret_key = "your_secret_key_here"  # change in production!

# ---------- DATABASE CONFIG ----------
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': 'WJ28@krhps',   # your password here
    'database': 'glove_db'
}

def get_db_connection():
    """Return a MySQL connection or None."""
    try:
        connection = connect(**DB_CONFIG)
        return connection
    except Error as e:
        print(f"❌ Database connection failed: {e}")
        return None

# ---------- ROUTES ----------
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# ---------- SIGN IN ----------
@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'GET':
        return render_template('signin.html')

    email = request.form.get('email')
    password = request.form.get('password')

    connection = get_db_connection()
    if connection is None:
        return render_template('signin.html', error="Database connection failed")

    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        user = cursor.fetchone()

        if user and check_password_hash(user['password'], password):
            session['username'] = user['username']
            return redirect(url_for('translation'))
        else:
            return render_template('signin.html', error="Invalid credentials")
    except Error as e:
        print(f"❌ Error during signin: {e}")
        return render_template('signin.html', error="An error occurred")
    finally:
        cursor.close()
        connection.close()

# ---------- SIGN UP ----------
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'GET':
        return render_template('signup.html')

    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')

    connection = get_db_connection()
    if connection is None:
        return render_template('signup.html', error="Database connection failed")

    try:
        cursor = connection.cursor(dictionary=True)

        # Check username
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        if cursor.fetchone():
            return render_template('signup.html', error="Username already exists")

        # Check email
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        if cursor.fetchone():
            return render_template('signup.html', error="Email already registered")

        hashed_password = generate_password_hash(password)
        cursor.execute('INSERT INTO users (username, email, password) VALUES (%s, %s, %s)',
                       (username, email, hashed_password))
        connection.commit()
        return redirect(url_for('signin'))
    except Error as e:
        print(f"❌ Error during signup: {e}")
        connection.rollback()
        return render_template('signup.html', error="An error occurred")
    finally:
        cursor.close()
        connection.close()

# ---------- TRANSLATION (Dashboard) ----------
@app.route('/translation')
def translation():
    if 'username' not in session:
        return redirect(url_for('signin'))
    return render_template('translation.html', username=session['username'])

# ---------- PROFILE (if you add profile.html) ----------
@app.route('/profile')
def profile():
    if 'username' not in session:
        return redirect(url_for('signin'))
    return render_template('profile.html', username=session['username'])

# ---------- HISTORY (if you add history.html) ----------
@app.route('/history')
def history():
    if 'username' not in session:
        return redirect(url_for('signin'))
    return render_template('history.html', username=session['username'])

# ---------- LOGOUT ----------
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

# ---------- STATIC FILES ----------
@app.route('/static/<path:path>')
def send_static_files(path):
    return send_from_directory('app/static', path)

# ---------- MAIN ----------
if __name__ == '__main__':
    app.run(debug=True)

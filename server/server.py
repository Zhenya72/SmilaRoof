from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.getcwd(), 'roof.db')
# app.config['SECRET_KEY'] = 'your_secret_key_here'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOADED_PHOTOS_DEST'] = 'uploads'
app.config['UPLOADED_DOCUMENTS_DEST'] = 'documents' 
db = SQLAlchemy(app)

class Category(db.Model):
    сategory_id = db.Column(db.Integer, primary_key=True)
    сategory_name = db.Column(db.String(100), nullable=False)
    сategory_photo = db.Column(db.String(100), nullable=False)

class Subcategory(db.Model):
    subcategory_id = db.Column(db.Integer, primary_key=True)
    subcategory_name = db.Column(db.String(100), nullable=False)
    subcategory_photo = db.Column(db.String(100), nullable=False)
    сategory_id = db.Column(db.Integer, db.ForeignKey('category.сategory_id'), nullable=False)

class Products(db.Model):
    products_id = db.Column(db.Integer, primary_key=True)
    products_name = db.Column(db.String(100), nullable=False)
    products_photo = db.Column(db.String(100), nullable=False)
    subcategory_id = db.Column(db.Integer, db.ForeignKey('subcategory.subcategory_id'), nullable=False)


# Створення таблиць бази даних
with app.app_context():
    db.create_all()
    
# Очищення бази даних
# with app.app_context():
#     db.session.query(Users).delete()  # Видалення всіх записів з таблиці користувачів
#     db.session.query(Tournaments).delete()  # Видалення всіх записів з таблиці турнірів 
#     db.session.query(UserTournaments).delete()  # Видалення всіх записів з таблиці користувачів-турнірів 
#     db.session.query(Teams).delete()  # Видалення всіх записів з таблиці команд 
#     db.session.query(Players).delete()  # Видалення всіх записів з таблиці команд 
#     db.session.query(Matches).delete()  # Видалення всіх записів з таблиці гравців 
#     db.session.query(Goals).delete()  # Видалення всіх записів з таблиці гравців 
#     db.session.query(Assistants).delete()  # Видалення всіх записів з таблиці гравців 
#     db.session.query(Calendar).delete()  # Видалення всіх записів з таблиці гравців 
#     db.session.commit()  # Збереження змін


# with app.app_context():
#     db.session.query(Admin).update({
#         Admin.admin_id: 1,
#         Admin.login: 'admin',
#         Admin.password: 1234,
#     })

#     # Зберегти зміни у базі даних
#     db.session.commit()




    
if __name__ == '__main__':
    app.run(debug=True)
from django.shortcuts import render, redirect, reverse
from django.http import response
import pyrebase
from pyrebase.pyrebase import Database

config = {
    "apiKey": "AIzaSyD3ENnT5sw0BO87ZAzJrmELfPNh8yBEBC4",
    "authDomain": "sem-web-a1070.firebaseapp.com",
    "databaseURL": "https://sem-web-a1070-default-rtdb.firebaseio.com",
    "projectId": "sem-web-a1070",
    "storageBucket": "sem-web-a1070.appspot.com",
    "messagingSenderId": "281550480268",
    "appId": "1:281550480268:web:0b893ba7704cb283bb2ca9",
    "measurementId": "G-WC0P23LNVR"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database = firebase.database()

# Create your views here.
def index(request):
    return render(request, 'index.html')

def register(request):
    if request.method == "POST":
        no_meteran = request.POST.get('no_meteran')
        nama_lengkap = request.POST.get('nama_lengkap')
        email = request.POST.get('email')
        password = request.POST.get('password')

        all_id_pelanggan = database.child("PengukuranEnergiListrik").child("IDPel:").get().val().keys()

        if no_meteran not in all_id_pelanggan:
            return render(request, 'register.html', {'id_pelanggan_not_exist': True})
        data = {
            'no_meteran': no_meteran,
            'nama_lengkap': nama_lengkap,
            'email': email
        }

        user = auth.create_user_with_email_and_password(email, password)
        database.child("Users").push(data)

        return render(request, 'login.html', {'statusregis': True})


    return render(request, 'register.html', {'id_pelanggan_not_exist': False})

def login(request):
    if 'email' in request.session:
        return render(request, 'dashboard.html')
    return render(request, 'login.html')

def postlogin(request):
    email=request.POST.get('email')
    pasw=request.POST.get('password')
    try:
        # if there is no error then signin the user with given email and password
        user=auth.sign_in_with_email_and_password(email,pasw)
    except:
        return render(request,"login.html",{"failedlogin":True})
    request.session['email'] = email
    return render(request,"dashboard.html",{"email":email})

def logout(request):
    auth.current_user = None
    request.session.flush()
    return render(request, 'login.html')
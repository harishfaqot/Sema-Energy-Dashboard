from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('register', views.register),
    path('postlogin', views.postlogin),
    path('logout', views.logout),
]
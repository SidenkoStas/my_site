from django.urls import path
from main_site import views


app_name = "main_site"


urlpatterns = [
    path("", views.index, name="index"),
]


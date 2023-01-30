from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
from main_site.forms import ContactForm


def index(request):
    if request.method != "POST":
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            mail = send_mail(
                form.cleaned_data["name"],
                f'{form.cleaned_data["text"]} \n {form.cleaned_data["email"]} \
                \n {form.cleaned_data["phone"]}',
                "soknedis@yandex.ru",
                ["soknedis@yandex.ru"],
                fail_silently=True
            )
            if mail:
                messages.success(request, "Письмо отправленно!")
                redirect("main_site:index")
        else:
            messages.error(request, "Ошибка отправки письма!")
    return render(request, "main_site/index.html", {"form": form})


def page_not_found(request, exception):
    return render(request, "404.html", status=404)

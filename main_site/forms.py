from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(
        label="Полное имя",
        widget=forms.TextInput(attrs={
            "class": "form_control",
            "placeholder": "Полное Имя"
        })
    )
    phone = forms.CharField(
        label="Телефон",
        widget=forms.TextInput(attrs={
            "class": "form_control",
            "placeholder": "Телефон"
        })
    )
    email = forms.EmailField(
        label="Email",
        widget=forms.EmailInput(attrs={
            "class": "form_control",
            "placeholder": "Email"
        })
    )
    text = forms.CharField(
        label="Текст",
        widget=forms.Textarea(attrs={
            "class": "form_control",
            "placeholder": "Текст"
        })
    )

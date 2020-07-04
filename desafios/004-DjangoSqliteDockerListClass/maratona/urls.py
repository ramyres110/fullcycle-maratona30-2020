from django.urls import path

from maratona.views import aulas_list, aula_create

urlpatterns = [
    path('', aulas_list),
    path('create/', aula_create)
]
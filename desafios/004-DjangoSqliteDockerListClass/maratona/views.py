from django.forms import ModelForm
from django.shortcuts import render, redirect

from maratona.models import Aulas

# Create your views here.
def aulas_list(request):
    aulas = Aulas.objects.all()
    return render(
        request,
        'maratona_index.html',
        {
            'aulas': aulas
        }
    )

class AulaForm(ModelForm):
    class Meta:
        model = Aulas
        fields = ['name','video_link','img_link']

def aula_create(request):
    form = AulaForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('/maratona')

    return render(
        request,
        'maratona_create.html',
        {
            'form': form
        }
    )
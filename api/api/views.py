from django.shortcuts import render
from django.http import JsonResponse

from datetime import datetime

from .models import History

def index(request):

    if( request.method == "POST" ):

        history = History.objects.create(
            find_text = request.POST.get('find_text'),
            quantity_founded = request.POST.get('quantity_founded')
        )

        history.save()

        return JsonResponse({
            "history": True
        })

    else:

        history = History.objects.all().values()
        
        return JsonResponse({
            "history": list(history)
        })            

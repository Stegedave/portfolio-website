from django.shortcuts import render


# Create your views here.

def home(request):
    return render(request, ('portfolio_site/index.html'))

def portfolio_samples(request):
    return render(request, ('portfolio_site/samples.html'))
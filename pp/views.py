from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def performance(request):
    return render(request,'performance.html')

def about(request):
    return render(request,'about.html')

def inventory(request):
    return render(request,'inventory.html')

def calculator(request):
    return render(request,'calculator.html')

def music(request):
    return render(request,'music.html')

def picsart(request):
    return render(request,'picsart.html')

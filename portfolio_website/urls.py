from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='Homepage'),
    path('portfolio/', views.portfolio_samples, name='portfolio-sample'),

]

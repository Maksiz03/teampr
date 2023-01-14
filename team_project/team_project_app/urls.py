from django.urls import path

from .views import *

urlpatterns = [
    path('', about),
    path('about/', about),
    path('task/', tasks),
    path('team/', team),
    path('lenta/', lenta),
    path('doc/', doc),
    path('time/', time),
    path('discuss/', discuss),
    path('markForIter/', markForIter),
    path('result/', result),
    path('calculate/', calculate),
]
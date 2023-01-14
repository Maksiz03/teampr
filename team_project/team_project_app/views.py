from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render


def about(request):
    return render(request, 'team_project_app/index.html')


def tasks(request):
    return render(request, 'team_project_app/task.html')


def team(request):
    return render(request, 'team_project_app/team.html')


def lenta(request):
    return render(request, 'team_project_app/lenta.html')


def doc(request):
    return render(request, 'team_project_app/doc.html')


def time(request):
    return render(request, 'team_project_app/time.html')


def discuss(request):
    return render(request, 'team_project_app/discuss.html')


def markForIter(request):
    return render(request, 'team_project_app/markForIter.html')


def result(request):
    return render(request, 'team_project_app/result.html')


def calculate(request):
    return render(request, 'team_project_app/calculate.html')


def pageNotFound(request, exception):
    return HttpResponseNotFound('Страница не найдена')

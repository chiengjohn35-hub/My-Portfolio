from django.urls import path
from .views import SendEmailViewSet

urlpatterns = [
    path('send-email/', SendEmailViewSet.as_view({'post': 'create'}), name='send-email'),
]

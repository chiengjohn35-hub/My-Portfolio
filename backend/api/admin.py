from django.contrib import admin
from .models import SendEmail

# Register your models here.
class SendEmailAdmin(admin.ModelAdmin):
    list_display = ('id', 'subject', 'email', 'message')
    search_fields = ('subject', 'email')

admin.site.register(SendEmail, SendEmailAdmin)

from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
    list_display = ('priority', 'title', 'dueDate', 'description', 'active')
    
admin.site.register(Task, TaskAdmin)
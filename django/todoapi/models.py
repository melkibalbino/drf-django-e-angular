from django.db import models
from datetime import date


class Task(models.Model):
    """Stores a task"""
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=50)

    created_on = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'task'
        ordering = ['id']
    
    def __str__(self):
        return self.title

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Task(models.Model):
    priority = models.IntegerField(
        default=3,
        validators=[
            MaxValueValidator(3),
            MinValueValidator(1)
        ]
    )
    title = models.CharField(max_length=60)
    dueDate = models.DateTimeField()
    description = models.TextField()
    active = models.BooleanField(default=True)

    def _str_(self):
        return self.title

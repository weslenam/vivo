from django.db import models
from django.utils import timezone

# Create your models here.
class History(models.Model):
    find_text = models.CharField(max_length=200)
    result_date = models.DateTimeField(default=timezone.now)
    quantity_founded = models.IntegerField()
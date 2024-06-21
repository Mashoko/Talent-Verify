from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from encrypted_model_fields.fields import EncryptedCharField
from django.conf import settings

class CustomUser(AbstractUser):
    # add custom fields if needed
    pass

class Company(models.Model):
    name = models.CharField(max_length=255)
    registration_date = models.DateField()
    registration_number = models.CharField(max_length=100)
    address = models.TextField()
    contact_person = models.CharField(max_length=255)
    contact_phone = models.CharField(max_length=20)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Department(models.Model):
    name = models.CharField(max_length=100)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='departments')

    def __str__(self):
        return f"{self.company.name} - {self.name}"

class Employee(models.Model):
    CustomUser = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='employees')
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='employees')
    role = models.CharField(max_length=100)
    date_started = models.DateField()
    date_left = models.DateField(null=True, blank=True)
    duties = models.TextField()

    def __str__(self):
        return f"{self.user.get_full_name()} - {self.role}"
    
    # models.py



    def __str__(self):
        return self.name

    
   

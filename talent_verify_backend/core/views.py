from django.shortcuts import render
from django.db.models import Q
from .models import Employee
from django.shortcuts import render, redirect
from .forms import EmployeeForm
import csv
from .forms import BulkUploadForm


def employee_update(request, employee_id):
    employee = Employee.objects.get(id=employee_id)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=employee)
        if form.is_valid():
            form.save()
            return redirect('employee_list')  # Redirect to employee list page
    else:
        form = EmployeeForm(instance=employee)
    
    context = {
        'form': form,
        'employee': employee,
    }
    return render(request, 'employee_update.html', context)


def employee_search(request):
    query = request.GET.get('q')
    if query:
        results = Employee.objects.filter(
            Q(name__icontains=query) |
            Q(employer__name__icontains=query) |
            Q(position__icontains=query) |
            Q(department__name__icontains=query) |
            Q(start_date__year=query) |
            Q(end_date__year=query)
        )
    else:
        results = Employee.objects.all()

    context = {
        'results': results,
        'query': query,
    }
    return render(request, 'employee_search.html', context)

def employee_update(request, employee_id):
    employee = Employee.objects.get(id=employee_id)
    if request.method == 'POST':
        form = EmployeeForm(request.POST, instance=employee)
        if form.is_valid():
            form.save()
            return redirect('employee_list')  # Redirect to employee list page
    else:
        form = EmployeeForm(instance=employee)
    
    context = {
        'form': form,
        'employee': employee,
    }
    return render(request, 'employee_update.html', context)

def bulk_upload(request):
    if request.method == 'POST':
        form = BulkUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file = request.FILES['file']
            # Handle CSV file upload
            if file.name.endswith('.csv'):
                data_set = file.read().decode('UTF-8')
                io_string = io.StringIO(data_set)
                next(io_string)  # Skip header row
                for row in csv.reader(io_string, delimiter=',', quotechar='"'):
                    _, created = Employee.objects.update_or_create(
                        employee_id=row[0],
                        defaults={
                            'name': row[1],
                            'department_id': row[2],
                            'role': row[3],
                            'date_started': row[4],
                            'date_left': row[5],
                            'duties': row[6]
                        }
                    )
            # Handle Excel file upload (using pandas for example)
            elif file.name.endswith('.xls') or file.name.endswith('.xlsx'):
                import pandas as pd
                df = pd.read_excel(file)
                for index, row in df.iterrows():
                    _, created = Employee.objects.update_or_create(
                        employee_id=row['employee_id'],
                        defaults={
                            'name': row['name'],
                            'department_id': row['department_id'],
                            'role': row['role'],
                            'date_started': row['date_started'],
                            'date_left': row['date_left'],
                            'duties': row['duties']
                        }
                    )
            else:
                messages.error(request, "File type is not supported.")
                return render(request, 'bulk_upload.html', {'form': form})

            return redirect('employee_list')  

    else:
        form = BulkUploadForm()

    return render(request, 'bulk_upload.html', {'form': form})
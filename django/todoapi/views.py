from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Task
from .serializers import TaskSerializer


class TaskList(ListCreateAPIView):
    """
    View all tasks
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(RetrieveUpdateDestroyAPIView):
    """
    Returns a single Task and allows updates and deletion of a Task.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_url_kwarg = 'task_id'
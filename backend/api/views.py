from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from .models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.

# class based views
class AboutListApiView(ListAPIView):
    queryset = About.objects.all().order_by('-id')
    serializer_class = AboutSerializer


class CategoryListApiView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SubCategoryListApiView(ListAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer


class ProjectListApiView(ListAPIView):
    queryset = Project.objects.all().order_by('-id')
    serializer_class = ProjectSerializer


class ProjectDetailApiView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'id'

class ProjectUpdateApiView(UpdateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        return Response(serializer.data)


class BlogListApiView(ListAPIView):
    queryset = Blog.objects.all().order_by('-id')
    serializer_class = BlogSerializer


class BlogDetailApiView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'id'


class MediaListApiView(ListAPIView):
    queryset = Media.objects.all().order_by('-id')
    serializer_class = MediaSerializer


class NidListApiView(ListAPIView):
    queryset = NID.objects.all()
    serializer_class = NIDSerializer


class UserListApiView(ListAPIView):
    queryset = NewUser.objects.all()
    serializer_class = NewUserSerializer

class UserDetailApiView(RetrieveAPIView):
    queryset = NewUser.objects.all()
    serializer_class = NewUserSerializer
    lookup_field = "id"

class UserCreateApiView(CreateAPIView):
    queryset = NewUser.objects.all()
    serializer_class = NewUserSerializer


class ProjectDonationCreateApiView(CreateAPIView):
    queryset = ProjectDonation.objects.all()
    serializer_class = ProjectDonationSerializer
    # lookup_field = 'id'

class EmailsListApiView(ListAPIView):
    queryset = ProjectDonation.objects.all()
    serializer_class = EmailSerializer
class RequestDonationApiView(CreateAPIView):
    queryset = RequestDonation.objects.all()
    serializer_class = RequestDonationSerializer
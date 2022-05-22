from django.urls import path
from .views import *


urlpatterns = [
    path('about/', AboutListApiView.as_view(), name="About list"),
    path('category/', CategoryListApiView.as_view(), name="Category List"),
    path('subcategory/', SubCategoryListApiView.as_view(), name="SubCategory List"),
    path('project/', ProjectListApiView.as_view(), name="Project List"),
    path('project/<id>/', ProjectDetailApiView.as_view(), name="Single Project View"),
    path('project/update/<id>/', ProjectUpdateApiView.as_view(), name="project-update-view"),
    path('project_donate/', ProjectDonationCreateApiView.as_view(), name="project-donation"),
    path('email/', EmailsListApiView.as_view(), name="email-list"),
    path('blog/', BlogListApiView.as_view(), name="Blog List"),
    path('blog/<id>/', BlogDetailApiView.as_view(), name="Single Blog View"),
    path('media/', MediaListApiView.as_view(), name="Media List"),
    path('nid/', NidListApiView.as_view(), name="NID List"),
    path('users/', UserListApiView.as_view(), name="New User List"),
    path('users/<id>/', UserDetailApiView.as_view(), name="Single User List"),
    path('createuser/', UserCreateApiView.as_view(), name="New User Create"),
    path('request/', RequestDonationApiView.as_view(), name="Request Donation"),
    
    
]
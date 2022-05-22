from django.db.models import fields
from rest_framework import serializers
from .models import *


class AboutSerializer(serializers.ModelSerializer):

    img = serializers.SerializerMethodField()
    class Meta:
        model = About
        fields = '__all__'
    
    def get_img(self, data):
        request = self.context.get('request')
        img = data.img.url
        return request.build_absolute_uri(img)

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):


    category_name = serializers.SerializerMethodField('get_category_name')

    def get_category_name(self, obj):
        if obj.category_id:
            return obj.category_id.cat_name
        return ""
    class Meta:
        model = SubCategory
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    
    category_name = serializers.SerializerMethodField('get_category_name')
    subcategory_name = serializers.SerializerMethodField('get_subcategory_name')
    img = serializers.SerializerMethodField()

    def get_category_name(self, obj):
        if obj.cat_id:
            return obj.cat_id.cat_name
        return ""
    
    def get_subcategory_name(self, obj):
        if obj.subcat_id:
            return obj.subcat_id.title
    
    def get_img(self, data):
        request = self.context.get('request')
        img = data.img.url
        return request.build_absolute_uri(img)
    class Meta:
        model = Project
        fields = '__all__'


class BlogSerializer(serializers.ModelSerializer):

    img = serializers.SerializerMethodField()
    project_name = serializers.SerializerMethodField('get_project_name')

    def get_img(self, data):
        request = self.context.get('request')
        img = data.img.url
        return request.build_absolute_uri(img)
    
    def get_project_name(self, obj):
        if obj.project_id:
            return obj.project_id.name
        return ""
    class Meta:
        model = Blog
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    img = serializers.SerializerMethodField()

    def get_img(self, data):
        request = self.context.get('request')
        img = data.img.url
        return request.build_absolute_uri(img)
    class Meta:
        model = Media
        fields = '__all__'


class NIDSerializer(serializers.ModelSerializer):
    img = serializers.SerializerMethodField()

    def get_img(self, data):
        request = self.context.get('request')
        img = data.img.url
        return request.build_absolute_uri(img)
    
    class Meta:
        model = NID
        fields = '__all__'


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = '__all__'

class ProjectDonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDonation
        fields = '__all__'


class EmailSerializer(serializers.ModelSerializer):

    # project = ProjectDonationSerializer
    subcategory_name = serializers.SerializerMethodField('get_subcat_name')

    def get_subcat_name(self, obj):
        if obj.subcategory_id:
            return obj.subcategory_id.title
        return ""
    class Meta:
        model = ProjectDonation
        fields = ['subcategory_name', 'email']
        # depth = 1

class RequestDonationSerializer(serializers.ModelSerializer): 
    class Meta:
        model = RequestDonation
        fields = '__all__'




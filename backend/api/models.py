from django.db import models
from django.db.models.fields import related


class About(models.Model):
    title = models.CharField(max_length=250, null=True, blank=True)
    short_title = models.CharField(max_length=150, null=True, blank=True)
    Description = models.TextField(null=True, blank=True)
    img = models.ImageField(null=True, blank=True)
    # timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "About Section"

    def __str__(self):
        return str(self.title)


class Category(models.Model):
    cat_name = models.CharField(max_length=250, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Project Category"

    def __str__(self):
        return str(self.cat_name)


class SubCategory(models.Model):
    category_id = models.ForeignKey("Category", null=True, blank=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Project SubCategory"
    
    def __str__(self) -> str:
        return self.title

class Project(models.Model):
    cat_id = models.ForeignKey(
        "Category", null=True, blank=True, on_delete=models.CASCADE)
    subcat_id = models.ForeignKey(
        "SubCategory", null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=250, null=True, blank=True)
    img = models.ImageField("Images", null=True, blank=True)
    raised = models.IntegerField(null=True, blank=True)
    pledged = models.IntegerField(null=True, blank=True)
    donators = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Project List"

    def __str__(self):
        return str(self.name)


class Blog(models.Model):
    project_id = models.ForeignKey("Project", null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True, blank=True)
    img = models.ImageField("BlogImages", null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    author_name = models.CharField(max_length=200, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Add Blogs"

    def __str__(self):
        return str(self.name)


class Media(models.Model):
    title = models.CharField(max_length=150, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    img = models.ImageField("MediaImages", null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    uploader_name = models.CharField(max_length=150, null=True, blank=True)
    class Meta:
        verbose_name_plural = "Media Photo Images"
    
    def __str__(self) -> str:
        return self.title


class NID(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    f_name = models.CharField(max_length=200, null=True, blank=True)
    m_name = models.CharField(max_length=200, null=True, blank=True)
    nid_number = models.CharField(max_length=200, null=True, blank=True)
    img = models.ImageField("NIDImage", null=True, blank=True)

    class Meta:
        verbose_name_plural = "NID Dataset"
    
    def __str__(self) -> str:
        return self.name +" "+ self.nid_number

class NewUser(models.Model):
    f_name = models.CharField("First Name", max_length=200, null=True, blank=True)
    l_name = models.CharField("Last Name", max_length=200, null=True, blank=True)
    email = models.CharField("Email", max_length=200, null=True, blank=True)
    password = models.CharField("Password", max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Registered Users"
    
    def __str__(self) -> str:
        return self.f_name



    
class ProjectDonation(models.Model):
    type = models.CharField("Donation Type", max_length=150, null=True, blank=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    subcategory_id = models.ForeignKey(SubCategory, on_delete=models.CASCADE, null=True, blank=True)
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True)
    donation_amount = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Project Donation"
    
    def __str__(self) -> str:
        return self.first_name


# class RequestDonation(models.Model):
#     name = models.CharField(max_length=255)
#     data = models.JSONField()

#     def __str__(self) -> str:
#         return self.name


class RequestDonation(models.Model):
    type = models.CharField(max_length=200, null=True, blank=True)
    charity_name = models.CharField(max_length=200, null=True, blank=True)
    f_name = models.CharField(max_length=100, null=True, blank=True)
    l_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    zip_code = models.CharField(max_length=100, null=True, blank=True)
    nid_number = models.CharField(max_length=100, null=True, blank=True)
    cause = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    file1 = models.FileField(null=True, blank=True)
    file2 = models.FileField(null=True, blank=True)
    file3 = models.FileField(null=True, blank=True)
    file4 = models.FileField(null=True, blank=True)
    file5 = models.FileField(null=True, blank=True)
    file6 = models.FileField(null=True, blank=True)
    file7 = models.FileField(null=True, blank=True)
    file8 = models.FileField(null=True, blank=True)
    file9 = models.FileField(null=True, blank=True)
    file10 = models.FileField(null=True, blank=True)




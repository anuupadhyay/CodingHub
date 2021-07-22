from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from phonenumber_field.modelfields import PhoneNumberField


class Category(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=100, db_index=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250,
                            unique_for_date='publish')
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name='blog_posts')
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10,
                              choices=STATUS_CHOICES,
                              default='draft')
    tags = TaggableManager(blank=True)
    categories = models.ManyToManyField(Category)

    def __str__(self):
        return self.title


class Tutorial(models.Model):
    title = models.CharField(max_length=250)

    def __str__(self):
        return self.title


class Instructor(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    work_description = models.TextField(null=True, blank=True)
    full_detail = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    COURSE_TYPE = (
        ('online', 'Online'),
        ('live', 'Live'),
    )
    PAID_OR_FREE = (
        ('paid', 'Paid'),
        ('free', 'Free'),
    )
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    description = models.TextField(null=True, blank=True)
    overview = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    instructor = models.ForeignKey(
        Instructor, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    course_type = models.CharField(max_length=10,
                                   choices=COURSE_TYPE,
                                   default='online')
    paid_or_free = models.CharField(max_length=10,
                                    choices=PAID_OR_FREE,
                                    default='free')

    def __str__(self):
        return self.name


class Review(models.Model):
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.rating)


class Job(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    company_name = models.CharField(max_length=200, null=True, blank=True)
    job_role = models.CharField(max_length=200, null=True, blank=True)
    salary = models.CharField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    experience = models.TextField(null=True, blank=True)
    website = models.URLField(max_length=200)
    apply_date = models.DateTimeField(default=timezone.now)
    company_description = models.TextField(null=True, blank=True)
    job_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.company_name


class Recruiter(models.Model):
    full_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=254)
    phone_number = PhoneNumberField(null=False, blank=False, unique=True)
    company_name = models.CharField(max_length=200, null=True, blank=True)
    designation = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.full_name


class CandidateApplication(models.Model):
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, null=True)
    full_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(max_length=254)
    phone_number = PhoneNumberField(null=False, blank=False, unique=True)
    highest_qualification = models.CharField(
        max_length=200, null=True, blank=True)
    college = models.CharField(max_length=200, null=True, blank=True)
    passing_year = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    current_organization = models.CharField(
        max_length=200, null=True, blank=True)
    work_experience = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    current_ctc = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    expected_ctc = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    notice_period = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    relocate = models.CharField(
        max_length=200, null=True, blank=True)
    job_role = models.CharField(
        max_length=200, null=True, blank=True)
    current_location = models.CharField(
        max_length=200, null=True, blank=True)

    def __str__(self):
        return self.full_name

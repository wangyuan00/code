# _*_ coding: utf-8 _*_
from django.conf.urls import url, include
from .views import CourseListView, CourseDerailView, CourseInfoView, CommentsView, AddCommentsView, VideoPlayView
urlpatterns = [
    # 公开课列表页
    url(r'^list/$', CourseListView.as_view(), name="course_list"),
    # 课程详情页
    url(r'^detail/(?P<course_id>\d+)/$', CourseDerailView.as_view(), name="course_detail"),
    # 课程章节页
    url(r'^info/(?P<course_id>\d+)/$', CourseInfoView.as_view(), name="course_info"),
    # 课程评论
    url(r'^comment/(?P<course_id>\d+)/$', CommentsView.as_view(), name="course_comments"),
    # 添加课程评论
    url(r'^add_comment/$', AddCommentsView.as_view(), name="add_comment"),
    # 访问视频地址
    url(r'^video/(?P<video_id>\d+)/$', VideoPlayView.as_view(), name="video_play"),


]

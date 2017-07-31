# _*_ coding: utf-8 _*_
from django.conf.urls import url, include
from .views import UserInfoView, UploadImageView, UpdatePwdView, SendEmailCodeView, UpdateEmailView, MyCourseView
from .views import MyFavOrgView, MyFavTeacherView, MyFavCourseView, MyMessageView

urlpatterns = [
    # 用户信息页
    url(r'^info/$', UserInfoView.as_view(), name="user_info"),

    # 用户个人中心用户头像上传
    url(r'^image/upload/$', UploadImageView.as_view(), name="image_upload"),

    # 用户个人中心用户修改密码
    url(r'^update/pwd/$', UpdatePwdView.as_view(), name="update_pwd"),

    # 用户个人中心发生邮箱验证码
    url(r'^sendemail_code/$', SendEmailCodeView.as_view(), name="sendemail_code"),

    # 用户个人中心填写验证码后验证验证码（修改邮箱）
    url(r'^update_email/$', UpdateEmailView.as_view(), name="update_email"),

    # 用户个人中心-我的课程模块
    url(r'^my_course/$', MyCourseView.as_view(), name="my_course"),

    # 用户个人中心-我的收藏-课程机构
    url(r'^myfav/org$', MyFavOrgView.as_view(), name="myfav_org"),

    # 用户个人中心-我的收藏-授课教师
    url(r'^myfav/teacher$', MyFavTeacherView.as_view(), name="myfav_teacher"),

    # 用户个人中心-我的收藏-公开课程
    url(r'^myfav/course', MyFavCourseView.as_view(), name="myfav_course"),

    # 用户个人中心-我的消息
    url(r'^mymessage', MyMessageView.as_view(), name="mymessage"),


]

# _*_ coding: utf-8 _*_
import xadmin

from .models import CityDict, CourseOrg, Teacher


class CityDictAdmin(object):
    list_display = ['name', 'desc', 'add_time']
    search_fields = ['name', 'desc']
    list_filter = ['name', 'desc', 'add_time']


class CourseOrgAdmin(object):
    list_display = ['city', 'name', 'desc', 'click_nums', 'fav_nums']
    search_fields = ['city', 'name', 'desc', 'click_nums', 'fav_nums']
    list_filter = ['city', 'name', 'desc', 'click_nums', 'fav_nums']


class TeacherAdmin(object):
    list_display = ['org', 'name', 'work_years', 'work_company', 'work_position']
    search_fields = ['org', 'name', 'work_years', 'work_company', 'work_position']
    list_filter = ['org', 'name', 'work_years', 'work_company', 'work_position']

# model和admin进行关联注册
xadmin.site.register(CityDict, CityDictAdmin)
xadmin.site.register(CourseOrg, CourseOrgAdmin)
xadmin.site.register(Teacher, TeacherAdmin)

# _*_ coding: utf-8 _*_
import xadmin
from xadmin import views

from .models import EmailVerifyRecord, Banner


# 主题
class BaseSetting(object):
    enable_themes = True
    use_bootswatch = True


# 全局参数
class GlobalSettings(object):
    site_title = "腾讯后台管理管理系统"
    site_footer = "腾讯课堂在线"
    menu_style = "accordion"


# 注册表EmailVerifyRecord
class EmailVerifyRecordAdmin(object):
    # 自定义显示字段
    list_display = ['code', 'email', 'send_type', 'send_time']
    # 搜索
    search_fields = ['code', 'email', 'send_type']
    # 筛选
    list_filter = ['code', 'email', 'send_type', 'send_time']


class BannerAdmin(object):
    list_display = ['title', 'image', 'url', 'index', 'add_time']
    search_fields = ['title', 'image', 'url', 'index']
    list_filter = ['title', 'image', 'url', 'index', 'add_time']

# model和admin进行关联注册
xadmin.site.register(EmailVerifyRecord, EmailVerifyRecordAdmin)
xadmin.site.register(Banner, BannerAdmin)
xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(views.CommAdminView, GlobalSettings)

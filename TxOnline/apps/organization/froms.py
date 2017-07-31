# _*_ coding: utf-8 _*_
import re

from django import forms
from operation.models import UserAsk


# class UserAskForm(forms.Form):
#     name = forms.CharField(required=True, min_length=2, max_length=20)
#     phone = forms.CharField(required=True, min_length=11, max_length=11)
#     course_name = forms.CharField(required=True, min_length=5, max_length=50)


# form通过ModelForm可以继承model中的属性，简化代码
class UserAskForm(forms.ModelForm):
    class Meta:
        # 指明继承的model
        model = UserAsk
        # 指明要从UserAsk继承的字段
        fields = ['name', 'mobile', 'course_name']

        # 验证手机号码是否合法
    def clean_mobile(self):
        mobile = self.cleaned_data['mobile']
        REGEX_MOBILE = "^1[358]\d{9}$|^147\d{8}$|^176\d{8}$"
        p = re.compile(REGEX_MOBILE)
        if p.match(mobile):
            return mobile
        else:
            raise forms.ValidationError(u"手机号码非法", code="mobile_invalid")




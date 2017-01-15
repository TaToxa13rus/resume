var app=angular.module("TabachkovResume",[]);app.controller("MainController",["$scope","resume",function(e,t){t.then(function(t){e.dataFromJson=t,e.questions=t.values})}]),app.controller("CheckData",["$scope",function(e){function t(){$("form input[type='radio']").removeAttr("checked"),$("form input[type='checkbox']").removeAttr("checked"),$("form input[type='text']").val(""),$("form textarea").val("")}e.checkData=function(){var n,a=[],r=[],s=!0,u=[],i=!0,o=[],c=!0,l=[],p=!0,f=[],h=!0,v=[];for(n in e.questions){if(a[n]=e.questions[n],"0"==a[n].answers_type){r[n]=$("input[name='"+a[n].subtitle+"']:checked").length;var m=new Object;m.subtitle=a[n].subtitle,m.reference=n;var b=[];$("input[name='"+a[n].subtitle+"']:checked").each(function(){b.push(this.value)}),m.value=b,v.push(m)}if("1"==a[n].answers_type){u[n]=$("input[name='"+a[n].subtitle+"']:checked").length;var m=new Object;m.subtitle=a[n].subtitle,m.reference=n;var d;$("input[name='"+a[n].subtitle+"']:checked").each(function(){d=this.value}),m.value=d,v.push(m)}if("2"==a[n].answers_type){var m=new Object;m.subtitle=a[n].subtitle,m.reference=n,m.value=$("select[name='"+a[n].subtitle+"']").val(),v.push(m)}if("3"==a[n].answers_type){o[n]=$("textarea[name='"+a[n].subtitle+"']").val();var m=new Object;m.subtitle=a[n].subtitle,m.reference=n,m.value=o[n],v.push(m)}if("4"==a[n].answers_type){l[n]=$("input[name='"+a[n].subtitle+"']").val();var m=new Object;m.subtitle=a[n].subtitle,m.reference=n,m.value=l[n],v.push(m)}"0"==a[n].comment&&(f[n]=$("input[class='comment']").val())}for(n in r)0==r[n]&&(s=!1);for(n in u)0==u[n]&&(i=!1);for(n in o)""==o[n]&&(c=!1);for(n in l)""==l[n]&&(p=!1);for(n in f)""==f[n]&&(h=!1);$().toastmessage({sticky:!0,position:"middle-center"}),s&&i&&c&&p&&h?(console.log(v),t(),$("form").garlic("destroy"),$().toastmessage("showSuccessToast","Спасибо за Ваше мнение!")):$().toastmessage("showWarningToast","Пожалуйста, заполните все поля анкеты.")}}]),app.factory("resume",["$http",function(e){return e.get(document.location.href+"/data/feedbacks.json").then(function(e){var t=e.data;return t})}]),app.filter("orderObjectBy",function(){return function(e,t){if(!angular.isObject(e))return e;var n=[];for(var a in e)n.push(e[a]);return n.sort(function(e,n){return e=parseInt(e[t]),n=parseInt(n[t]),e-n}),n}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsInJlc3VtZSIsInRoZW4iLCJkYXRhIiwiZGF0YUZyb21Kc29uIiwicXVlc3Rpb25zIiwidmFsdWVzIiwicmVzZXRGb3JtRmllbGRzIiwiJCIsInJlbW92ZUF0dHIiLCJ2YWwiLCJjaGVja0RhdGEiLCJwcm9wIiwicUFyciIsInJlc3VsdHNPZkNoZWNrQm94VmFsaWRhdGlvbiIsInJlc3VsdHNPZkNoZWNrQm94VmFsaWRhdGlvbkJvb2wiLCJyZXN1bHRzT2ZSYWRpb0JveFZhbGlkYXRpb24iLCJyZXN1bHRzT2ZSYWRpb0JveFZhbGlkYXRpb25Cb29sIiwicmVzdWx0c09mVGV4dEFyZWFWYWxpZGF0aW9uIiwicmVzdWx0c09mVGV4dEFyZWFWYWxpZGF0aW9uQm9vbCIsInJlc3VsdHNPZk5vdFNsaWRlclZhbGlkYXRpb24iLCJyZXN1bHRzT2ZOb3RTbGlkZXJWYWxpZGF0aW9uQm9vbCIsInJlc3VsdHNPZkNvbW1lbnRWYWxpZGF0aW9uIiwicmVzdWx0c09mQ29tbWVudFZhbGlkYXRpb25Cb29sIiwiYXJyYXlXaXRoQW5zd2VycyIsImFuc3dlcnNfdHlwZSIsInN1YnRpdGxlIiwibGVuZ3RoIiwib2JqIiwiT2JqZWN0IiwicmVmZXJlbmNlIiwiY2hlY2tib3hBbnN3ZXJzIiwiZWFjaCIsInB1c2giLCJ0aGlzIiwidmFsdWUiLCJyYWRpb2JveEFuc3dlcnMiLCJjb21tZW50IiwidG9hc3RtZXNzYWdlIiwic3RpY2t5IiwicG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiZ2FybGljIiwiZmFjdG9yeSIsIiRodHRwIiwiZ2V0IiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsImZpbHRlciIsImlucHV0IiwiYXR0cmlidXRlIiwiaXNPYmplY3QiLCJhcnJheSIsIm9iamVjdEtleSIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50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SUFBUUksR0FDNkIsR0FBckNBLEVBQTRCSixLQUMvQkssR0FBa0MsRUFHcEMsS0FBS0wsSUFBUU0sR0FDNkIsSUFBckNBLEVBQTRCTixLQUMvQk8sR0FBa0MsRUFHcEMsS0FBS1AsSUFBUVEsR0FDOEIsSUFBdENBLEVBQTZCUixLQUNoQ1MsR0FBbUMsRUFHckMsS0FBS1QsSUFBUVUsR0FDNEIsSUFBcENBLEVBQTJCVixLQUM5QlcsR0FBaUMsRUFJbkNmLEtBQUk4QixjQUFjQyxRQUFTLEVBQU1DLFNBQVUsa0JBRXZDekIsR0FBbUNFLEdBQW1DRSxHQUFtQ0UsR0FBb0NFLEdBQ2hKa0IsUUFBUUMsSUFBSWxCLEdBQ1pqQixJQUNBQyxFQUFFLFFBQVFtQyxPQUFRLFdBQ2xCbkMsSUFBSThCLGFBQWEsbUJBQW9CLDRCQUVyQzlCLElBQUk4QixhQUFhLG1CQUFvQiw4Q0FZeEMxQyxJQUFJZ0QsUUFBUSxVQUFXLFFBQVMsU0FBU0MsR0FDckMsTUFBT0EsR0FBTUMsSUFBSUMsU0FBU0MsU0FBU0MsS0FBTyx3QkFDakMvQyxLQUFLLFNBQVVnRCxHQUN4QixHQUFJL0MsR0FBTytDLEVBQVMvQyxJQUVwQixPQUFPQSxRQUdYUCxJQUFJdUQsT0FBTyxnQkFBaUIsV0FDM0IsTUFBTyxVQUFTQyxFQUFPQyxHQUNwQixJQUFLeEQsUUFBUXlELFNBQVNGLEdBQVEsTUFBT0EsRUFFckMsSUFBSUcsS0FDSixLQUFJLEdBQUlDLEtBQWFKLEdBQ2pCRyxFQUFNdEIsS0FBS21CLEVBQU1JLEdBUXJCLE9BTEFELEdBQU1FLEtBQUssU0FBU0MsRUFBR0MsR0FHbkIsTUFGQUQsR0FBSUUsU0FBU0YsRUFBRUwsSUFDZk0sRUFBSUMsU0FBU0QsRUFBRU4sSUFDUkssRUFBSUMsSUFFUkoiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdUYWJhY2hrb3ZSZXN1bWUnLCBbXSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBbJyRzY29wZScsICdyZXN1bWUnLCBmdW5jdGlvbigkc2NvcGUsIHJlc3VtZSkge1xyXG4gIHJlc3VtZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICRzY29wZS5kYXRhRnJvbUpzb24gPSBkYXRhO1xyXG5cdCRzY29wZS5xdWVzdGlvbnMgPSBkYXRhLnZhbHVlcztcdFxyXG4gIH0pO1xyXG4gIFxyXG4gICAgXHJcbn1dKTtcclxuYXBwLmNvbnRyb2xsZXIoJ0NoZWNrRGF0YScsIFsnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgXHJcbiAgJHNjb3BlLmNoZWNrRGF0YSA9IGZ1bmN0aW9uKCkge1x0XHRcclxuXHRcdHZhciBxQXJyID0gW107XHJcblx0XHR2YXIgcHJvcDtcclxuXHRcdC8v0YfQtdC60LHQvtC60YFcclxuXHRcdHZhciByZXN1bHRzT2ZDaGVja0JveFZhbGlkYXRpb24gPSBbXTtcclxuXHRcdHZhciByZXN1bHRzT2ZDaGVja0JveFZhbGlkYXRpb25Cb29sID0gdHJ1ZTtcclxuXHRcdC8v0YDQsNC00LjQvlxyXG5cdFx0dmFyIHJlc3VsdHNPZlJhZGlvQm94VmFsaWRhdGlvbiA9IFtdO1xyXG5cdFx0dmFyIHJlc3VsdHNPZlJhZGlvQm94VmFsaWRhdGlvbkJvb2wgPSB0cnVlO1xyXG5cdFx0Ly90ZXh0YXJlYVxyXG5cdFx0dmFyIHJlc3VsdHNPZlRleHRBcmVhVmFsaWRhdGlvbiA9IFtdO1xyXG5cdFx0dmFyIHJlc3VsdHNPZlRleHRBcmVhVmFsaWRhdGlvbkJvb2wgPSB0cnVlO1xyXG5cdFx0Ly9ub3Qtc2xpZGVyXHJcblx0XHR2YXIgcmVzdWx0c09mTm90U2xpZGVyVmFsaWRhdGlvbiA9IFtdO1xyXG5cdFx0dmFyIHJlc3VsdHNPZk5vdFNsaWRlclZhbGlkYXRpb25Cb29sID0gdHJ1ZTtcclxuXHRcdC8vY29tbWVudFxyXG5cdFx0dmFyIHJlc3VsdHNPZkNvbW1lbnRWYWxpZGF0aW9uID0gW107XHJcblx0XHR2YXIgcmVzdWx0c09mQ29tbWVudFZhbGlkYXRpb25Cb29sID0gdHJ1ZTtcclxuXHRcdFxyXG5cdFx0dmFyIGFycmF5V2l0aEFuc3dlcnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKHByb3AgaW4gJHNjb3BlLnF1ZXN0aW9ucykge1xyXG5cdFx0XHRxQXJyW3Byb3BdID0gJHNjb3BlLnF1ZXN0aW9uc1twcm9wXTtcclxuXHRcdFx0Ly9jaGVja2JveGVzXHJcblx0XHRcdGlmIChxQXJyW3Byb3BdLmFuc3dlcnNfdHlwZSA9PSBcIjBcIikgXHJcblx0XHRcdHsgXHJcblx0XHRcdFx0cmVzdWx0c09mQ2hlY2tCb3hWYWxpZGF0aW9uW3Byb3BdID0gJChcImlucHV0W25hbWU9J1wiICsgcUFycltwcm9wXS5zdWJ0aXRsZSArIFwiJ106Y2hlY2tlZFwiKS5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIG9iaiA9IG5ldyBPYmplY3QoKTtcclxuXHRcdFx0XHRvYmouc3VidGl0bGUgPSBxQXJyW3Byb3BdLnN1YnRpdGxlO1xyXG5cdFx0XHRcdG9iai5yZWZlcmVuY2UgPSBwcm9wO1xyXG5cdFx0XHRcdHZhciBjaGVja2JveEFuc3dlcnMgPSBbXTtcclxuXHRcdFx0XHQkKFwiaW5wdXRbbmFtZT0nXCIgKyBxQXJyW3Byb3BdLnN1YnRpdGxlICsgXCInXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24oKSBcclxuXHRcdFx0XHR7XHRcdFx0XHQgICBcclxuXHRcdFx0XHQgICBjaGVja2JveEFuc3dlcnMucHVzaCh0aGlzLnZhbHVlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRvYmoudmFsdWUgPSBjaGVja2JveEFuc3dlcnM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJyYXlXaXRoQW5zd2Vycy5wdXNoKG9iaik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9yYWRpb2JveGVzXHJcblx0XHRcdGlmIChxQXJyW3Byb3BdLmFuc3dlcnNfdHlwZSA9PSBcIjFcIilcclxuXHRcdFx0eyBcclxuXHRcdFx0XHRyZXN1bHRzT2ZSYWRpb0JveFZhbGlkYXRpb25bcHJvcF0gPSAkKFwiaW5wdXRbbmFtZT0nXCIgKyBxQXJyW3Byb3BdLnN1YnRpdGxlICsgXCInXTpjaGVja2VkXCIpLmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG5cdFx0XHRcdG9iai5zdWJ0aXRsZSA9IHFBcnJbcHJvcF0uc3VidGl0bGU7XHJcblx0XHRcdFx0b2JqLnJlZmVyZW5jZSA9IHByb3A7XHJcblx0XHRcdFx0dmFyIHJhZGlvYm94QW5zd2VycztcclxuXHRcdFx0XHQkKFwiaW5wdXRbbmFtZT0nXCIgKyBxQXJyW3Byb3BdLnN1YnRpdGxlICsgXCInXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24oKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0ICAgcmFkaW9ib3hBbnN3ZXJzID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRvYmoudmFsdWUgPSByYWRpb2JveEFuc3dlcnM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJyYXlXaXRoQW5zd2Vycy5wdXNoKG9iaik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9zZWxlY3RcclxuXHRcdFx0aWYgKHFBcnJbcHJvcF0uYW5zd2Vyc190eXBlID09IFwiMlwiKVxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcblx0XHRcdFx0b2JqLnN1YnRpdGxlID0gcUFycltwcm9wXS5zdWJ0aXRsZTtcclxuXHRcdFx0XHRvYmoucmVmZXJlbmNlID0gcHJvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvYmoudmFsdWUgPSAkKFwic2VsZWN0W25hbWU9J1wiICsgcUFycltwcm9wXS5zdWJ0aXRsZSArIFwiJ11cIikudmFsKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJyYXlXaXRoQW5zd2Vycy5wdXNoKG9iaik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly90ZXh0YXJlYVxyXG5cdFx0XHRpZiAocUFycltwcm9wXS5hbnN3ZXJzX3R5cGUgPT0gXCIzXCIpIFxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHJlc3VsdHNPZlRleHRBcmVhVmFsaWRhdGlvbltwcm9wXSA9ICQoXCJ0ZXh0YXJlYVtuYW1lPSdcIiArIHFBcnJbcHJvcF0uc3VidGl0bGUgKyBcIiddXCIpLnZhbCgpO1xyXG5cdFx0XHRcdHZhciBvYmogPSBuZXcgT2JqZWN0KCk7XHJcblx0XHRcdFx0b2JqLnN1YnRpdGxlID0gcUFycltwcm9wXS5zdWJ0aXRsZTtcclxuXHRcdFx0XHRvYmoucmVmZXJlbmNlID0gcHJvcDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvYmoudmFsdWUgPSByZXN1bHRzT2ZUZXh0QXJlYVZhbGlkYXRpb25bcHJvcF07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YXJyYXlXaXRoQW5zd2Vycy5wdXNoKG9iaik7IFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vbm90LXNsaWRlclxyXG5cdFx0XHRpZiAocUFycltwcm9wXS5hbnN3ZXJzX3R5cGUgPT0gXCI0XCIpIFxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHJlc3VsdHNPZk5vdFNsaWRlclZhbGlkYXRpb25bcHJvcF0gPSAkKFwiaW5wdXRbbmFtZT0nXCIgKyBxQXJyW3Byb3BdLnN1YnRpdGxlICsgXCInXVwiKS52YWwoKTtcclxuXHRcdFx0XHR2YXIgb2JqID0gbmV3IE9iamVjdCgpO1xyXG5cdFx0XHRcdG9iai5zdWJ0aXRsZSA9IHFBcnJbcHJvcF0uc3VidGl0bGU7XHJcblx0XHRcdFx0b2JqLnJlZmVyZW5jZSA9IHByb3A7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0b2JqLnZhbHVlID0gcmVzdWx0c09mTm90U2xpZGVyVmFsaWRhdGlvbltwcm9wXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhcnJheVdpdGhBbnN3ZXJzLnB1c2gob2JqKTsgXHJcblx0XHRcdH1cclxuXHRcdFx0Ly9jb21tZW50XHJcblx0XHRcdGlmIChxQXJyW3Byb3BdLmNvbW1lbnQgPT0gXCIwXCIpIFxyXG5cdFx0XHR7IFxyXG5cdFx0XHRcdHJlc3VsdHNPZkNvbW1lbnRWYWxpZGF0aW9uW3Byb3BdID0gJChcImlucHV0W2NsYXNzPSdjb21tZW50J11cIikudmFsKCk7IFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZvciAocHJvcCBpbiByZXN1bHRzT2ZDaGVja0JveFZhbGlkYXRpb24pIHtcclxuXHRcdFx0aWYgKHJlc3VsdHNPZkNoZWNrQm94VmFsaWRhdGlvbltwcm9wXSA9PSAwKSB7XHJcblx0XHRcdFx0cmVzdWx0c09mQ2hlY2tCb3hWYWxpZGF0aW9uQm9vbCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKHByb3AgaW4gcmVzdWx0c09mUmFkaW9Cb3hWYWxpZGF0aW9uKSB7XHJcblx0XHRcdGlmIChyZXN1bHRzT2ZSYWRpb0JveFZhbGlkYXRpb25bcHJvcF0gPT0gMCkge1xyXG5cdFx0XHRcdHJlc3VsdHNPZlJhZGlvQm94VmFsaWRhdGlvbkJvb2wgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Zm9yIChwcm9wIGluIHJlc3VsdHNPZlRleHRBcmVhVmFsaWRhdGlvbikge1xyXG5cdFx0XHRpZiAocmVzdWx0c09mVGV4dEFyZWFWYWxpZGF0aW9uW3Byb3BdID09IFwiXCIpIHtcclxuXHRcdFx0XHRyZXN1bHRzT2ZUZXh0QXJlYVZhbGlkYXRpb25Cb29sID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAocHJvcCBpbiByZXN1bHRzT2ZOb3RTbGlkZXJWYWxpZGF0aW9uKSB7XHJcblx0XHRcdGlmIChyZXN1bHRzT2ZOb3RTbGlkZXJWYWxpZGF0aW9uW3Byb3BdID09IFwiXCIpIHtcclxuXHRcdFx0XHRyZXN1bHRzT2ZOb3RTbGlkZXJWYWxpZGF0aW9uQm9vbCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKHByb3AgaW4gcmVzdWx0c09mQ29tbWVudFZhbGlkYXRpb24pIHtcclxuXHRcdFx0aWYgKHJlc3VsdHNPZkNvbW1lbnRWYWxpZGF0aW9uW3Byb3BdID09IFwiXCIpIHtcclxuXHRcdFx0XHRyZXN1bHRzT2ZDb21tZW50VmFsaWRhdGlvbkJvb2wgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkKCkudG9hc3RtZXNzYWdlKHtzdGlja3kgOiB0cnVlLCBwb3NpdGlvbjogJ21pZGRsZS1jZW50ZXInfSk7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHRzT2ZDaGVja0JveFZhbGlkYXRpb25Cb29sICYmIHJlc3VsdHNPZlJhZGlvQm94VmFsaWRhdGlvbkJvb2wgJiYgcmVzdWx0c09mVGV4dEFyZWFWYWxpZGF0aW9uQm9vbCAmJiByZXN1bHRzT2ZOb3RTbGlkZXJWYWxpZGF0aW9uQm9vbCAmJiByZXN1bHRzT2ZDb21tZW50VmFsaWRhdGlvbkJvb2wpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coYXJyYXlXaXRoQW5zd2Vycyk7XHJcblx0XHRcdHJlc2V0Rm9ybUZpZWxkcyAoKTtcclxuXHRcdFx0JCgnZm9ybScpLmdhcmxpYyggJ2Rlc3Ryb3knKTtcclxuXHRcdFx0JCgpLnRvYXN0bWVzc2FnZSgnc2hvd1N1Y2Nlc3NUb2FzdCcsICfQodC/0LDRgdC40LHQviDQt9CwINCS0LDRiNC1INC80L3QtdC90LjQtSEnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoKS50b2FzdG1lc3NhZ2UoJ3Nob3dXYXJuaW5nVG9hc3QnLCAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINC30LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8g0LDQvdC60LXRgtGLLicpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiByZXNldEZvcm1GaWVsZHMgKCkge1xyXG5cdFx0JCgnZm9ybSBpbnB1dFt0eXBlPVxcJ3JhZGlvXFwnXScpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcclxuXHRcdCQoJ2Zvcm0gaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKS5yZW1vdmVBdHRyKCdjaGVja2VkJyk7XHJcblx0XHQkKCdmb3JtIGlucHV0W3R5cGU9XFwndGV4dFxcJ10nKS52YWwoJycpO1xyXG5cdFx0JCgnZm9ybSB0ZXh0YXJlYScpLnZhbCgnJyk7XHJcblx0fVxyXG4gICAgXHJcbn1dKTtcclxuYXBwLmZhY3RvcnkoJ3Jlc3VtZScsIFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkgeyBcclxuICAgIHJldHVybiAkaHR0cC5nZXQoZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICcvZGF0YS9mZWVkYmFja3MuanNvbicpIFxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9KTtcclxufV0pO1xyXG5hcHAuZmlsdGVyKCdvcmRlck9iamVjdEJ5JywgZnVuY3Rpb24oKXtcclxuIHJldHVybiBmdW5jdGlvbihpbnB1dCwgYXR0cmlidXRlKSB7XHJcbiAgICBpZiAoIWFuZ3VsYXIuaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XHJcblxyXG4gICAgdmFyIGFycmF5ID0gW107XHJcbiAgICBmb3IodmFyIG9iamVjdEtleSBpbiBpbnB1dCkge1xyXG4gICAgICAgIGFycmF5LnB1c2goaW5wdXRbb2JqZWN0S2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXkuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICBhID0gcGFyc2VJbnQoYVthdHRyaWJ1dGVdKTtcclxuICAgICAgICBiID0gcGFyc2VJbnQoYlthdHRyaWJ1dGVdKTtcclxuICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcnJheTtcclxuIH1cclxufSk7Il19

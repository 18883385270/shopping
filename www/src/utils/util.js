import axios from 'axios'



export const screenSize = () => {
  var width = window.screen.width;
  var height = window.screen.height;
  return { width: width, height: height };
}

//上传文件到本地服务器
export const uploadFile = (event) => {
  var uploadUrl = 'http://localhost:51776/Upload/UploadFile'
  let file = event.target.files[0];
  /* eslint-disable no-undef */
  let param = new FormData()  // 创建form对象
  param.append('file', file, file.name)  // 通过append向form对象添加数据
  param.append('chunk', '0') // 添加form表单中其他数据
  //console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
  // 添加请求头
  let config = {
    headers: { 'Content-Type': 'multipart/form-data' }
  }
  axios.post(uploadUrl, param, config)
    .then(res => {
      if (res.data.Code == 200) {
      }
      else {
        console.log(res.data)
      }
    })
}



//上传文件到阿里oss
export const uploadToOss = (file, topath) => {
  var accessid = 'LTAItX7F19XYP9w5';
  var accesskey = 'NuW1BiPbBRxGTYvyB6zASvjUccaDOd';
  var host = 'http://goodsdetails.wftx666.com';


  //生成随机文件
  let generateTimeStamp = () => {
    var time = new Date();  
    var y = time.getFullYear();  
    var m = time.getMonth()+1;  
    var d = time.getDate();  
    var h = time.getHours();  
    var mm = time.getMinutes();  
    var s = time.getSeconds();  
    return 'wftx'+y+m+d+h+mm+s;
  }
  //获取文件扩展名
  let getExtension = (filename) => {
    if (filename.indexOf('\\') > -1) {
      filename = filename.substring(fileField.lastIndexOf('\\') + 1, filename.length);
    }
    if (filename.indexOf('/') > -1) {
      filename = filename.substring(filename.lastIndexOf('/') + 1, filename.length);
    }

    var extension;
    if (filename.indexOf('.') > -1) {
      extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
    } else {
      extension = "";
    }
    return extension;
  }
  //通过扩展名获取contenttype
  let getContentType = (extension) => {
    var contentType = "application/octet-stream";
    if (extension == "txt") {
      contentType = "text/plain";
    } else if (extension == "htm" || extension == "html") {
      contentType = "text/html";
    } else if (extension == "jpg" || extension == "jpeg") {
      contentType = "image/jpeg";
    } else if (extension == "gif") {
      contentType = "image/gif";
    } else if (extension == "png") {
      contentType = "image/png";
    }
    return contentType;
  }

  //let file = event.target.files[0];


  // var policyText = {
  //   "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
  //   "conditions": [
  //     ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
  //   ]
  // };
  //var policyBase64 = Base64.encode(JSON.stringify(policyText))
  //var Signature = b64_hmac_sha1(accesskey, policyBase64);
  
  let ossfilename=topath +'/'+ generateTimeStamp()+'.'+getExtension(file.name);

  let param = new FormData()  // 创建form对象
  param.append('key', ossfilename)
  param.append('OSSAccessKeyId', accessid)  // 通过append向form对象添加数据
  param.append('policy', 'ewoiZXhwaXJhdGlvbiI6ICIyMTIwLTAxLTAxVDEyOjAwOjAwLjAwMFoiLAoiY29uZGl0aW9ucyI6IFsKWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsIDAsIDEwNDg1NzYwMF0KXQp9Cg==')
  param.append('Signature', 'GSfqrM3MkD2CsTUAhh0teqdTPwU=')
  param.append('file', file, file.name)  // 通过append向form对象添加数据


  //XMLHttpRequest 对象
  var xhr = new XMLHttpRequest();
  xhr.open("POST", host, true);
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 查看后台反馈
      if (callback) {
        var req = xhr.responseText;
        callback(req);
      };
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      callback({ allow: 'error' });
      return;
    };
  };
  xhr.upload.onprogress = function (evt) {
    //侦查附件上传情况 
    //通过事件对象侦查 
    //该匿名函数表达式大概0.05-0.1秒执行一次 
    //console.log(evt); 
    //console.log(evt.loaded);  //已经上传大小情况 
    //evt.total; 附件总大小 
    var loaded = evt.loaded;
    var tot = evt.total;
    var per = Math.floor(100 * loaded / tot);
    //var son =  document.getElementById('son'); 
    //son.innerHTML = per+"%"; 
    //son.style.width=per+"%"; 
    console.log(per);
  }
  xhr.send(param);

  return host+'/'+ossfilename;

}


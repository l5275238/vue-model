1.该页面需要在登录状态下进入

2.请求 /Action/McenterQueryAddressAction.do 读取用户已经添加的地址，如果有就显示用户的地址，如果没有就不显示

3.点击新增地址，从右边弹出收货地址模块，请求/Action/McenterIndexAction.do，将接口获取到的
数据填写对应的地方

4.添加收货地址模块中的相关信息需要全部填写，如果有缺少提示‘请将地址相关信息填写完成’

5.相关信息填写完整后点击保存按钮请求 /Action/McenterUpdateAddressAction.do，同时关闭收货地址模块，请求/Action/McenterQueryAddressAction.do 将用户的收货地址信息更新

6.用户有收货地址，点击编辑从右边弹出收货地址模块，请求/Action/McenterIndexAction.do，将接口获取到的数据填写对应的地方，如果用户没有任何操作直接点保存就提示‘请编辑你需要修改的信息’，如果用户修改的信息与原信息一样也提示‘请编辑你需要修改的信息’，如果用户修改的信息与原信息不一样并且点击保存请求接口 /Action/McenterUpdateAddressAction.do，同时关闭收货地址模块，请求/Action/McenterQueryAddressAction.do 将用户的收货地址信息更新

7.用户点击删除，出现弹框提示是否确定删除，点击取消关闭弹窗，点击确定请求接口/Action/McenterUpdateAddressAction.do，删除数据成功后将页面的数据删除

8.在添加收货地址模块中，点击定位，先判断localstory里有没有qsh-location-city,如果有直接去其中的数据,请求接口/Action/CityLocation.do，将接口获取到的信息更新到所在地区这一栏

9.添加收货地址模块点击左上角的返回，关闭该模块

10.地址管理页面的右上角有小点点，点击出现内容，消息，主页，我的企商
消息：http://a.zj-qsh.com/massage/massage.jsp
主页：http://a.zj-qsh.com/
我的企商：http://a.zj-qsh.com/m-center/my_index/index.html

11./Action/McenterQueryAddressAction.do 返回的数据第一条为默认地址
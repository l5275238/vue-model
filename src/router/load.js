//路由懒加载
export default function (model) {

 return function (url,name) {
   return () => import(`@/view/${model}/${url}/${name}.vue`)
 }
}

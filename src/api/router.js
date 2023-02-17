// 返回route数组
export function createRoutes(menuList, parents=[]){
  let routes = []
  menuList.forEach(item => {
    if(item.children) {
      parents = [...parents, item]
      routes = [...routes, ...createRoutes(item.children, parents)]
    }else{
      routes.push({
        path: item.path,
        name: item.name || undefined,
        component: () => import(`../view/${item.component}`),
        meta: {
          parents,
          label: item.label
        }
      })
    }
  });
  return routes
}


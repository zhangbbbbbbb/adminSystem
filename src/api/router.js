const createView = (view, type) => () => import('../view/createView').then(m => m.default(view, type))

// 返回route数组
export function createRoutes(menuList, parents=[]){
  let routes = []
  menuList.forEach(item => {
    if(item.children) {
      routes = [...routes, ...createRoutes(item.children, [...parents, item])]
    }else{
      routes.push({
        path: item.path,
        name: item.name || undefined,
        component: typeof item.component === 'string' ? () => import(`../view/${item.component}`) : createView(item.component.view, item.component.type),
        meta: {
          parents,
          label: item.label
        }
      })
    }
  });
  return routes
}


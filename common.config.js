export const defaultPage = {
  path: '/home',
  name: 'home',
  label: '首页',
  icon:'s-home',
  component: 'HomeView'
}

export const manageView = {
  max: 5,
  customizeWidth: true,
  vedio: {
    selection: {
      width: 43
    },
    columns: [
      {
        prop: 'label',
        label: '标题',
        setting: true,
        minWidth: 120
      },
      {
        prop: 'likes',
        label: '点赞',
        sortable: true,
        minWidth: 120
      },
      {
        prop: 'comments',
        label: '评论',
        sortable: true,
        minWidth: 120
      },
      {
        prop: 'retransmission',
        label: '转发',
        sortable: true,
        minWidth: 120
      }
    ],
    date: {
      label: '发布日期',
      prop: 'date',
      filters: true,
      sortable: true,
      minWidth: 120
    },
    tags: {
      label: '标签',
      prop: 'tags',
      setting: true,
      minWidth: 200
    },
    opera: {
      search: {
        columns: ['label'],
        placeholder: '搜索标题'
      },
      content: [
        {
          prop: 'status',
          checkList: [
            {
              text: '置顶'
            }, 
            {
              text: '下架',
              disabled: ['置顶']
            }
          ],
          type: 'checkboxGroup'
        },
        {
          text: '删除',
          type: 'button'
        }
      ],
      minWidth: 300
    }
  },
  fans: {
    selection: {
      width: 43
    },
    columns: [
      {
        prop: 'name',
        label: '姓名',
        minWidth: 100
      },
      {
        prop: 'sex',
        label: '性别',
        minWidth: 100,
        filters: [
          {
            text: '男',
            value: '男'
          },
          {
            text: '女',
            value: '女'
          }
        ]
      },
      {
        prop: 'likes',
        label: '点赞',
        sortable: true,
        minWidth: 100
      },
      {
        prop: 'comments',
        label: '评论',
        sortable: true,
        minWidth: 100
      },
      {
        prop: 'retransmission',
        label: '转发',
        sortable: true,
        minWidth: 100
      }
    ],
    date: {
      label: '关注日期',
      prop: 'date',
      filters: true,
      sortable: true,
      minWidth: 100
    },
    tags: {
      label: '标签',
      prop: 'tags',
      minWidth: 200
    },
    opera: {
      search: {
        columns: ['name'],
        placeholder: '搜索名字'
      },
      content: [
        {
          prop: 'status',
          checkList: [
            {
              text: '禁言'
            }, 
            {
              text: '拉黑',
              connect: ['禁言']
            }
          ],
          type: 'checkboxGroup'
        }
      ],
      minWidth: 200
    }
  }
}

export default {
  defaultPage,
  manageView
}
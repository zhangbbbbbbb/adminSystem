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
        minWidth: 90
      },
      {
        prop: 'likes',
        label: '点赞',
        sortable: true,
        minWidth: 90
      },
      {
        prop: 'comments',
        label: '评论',
        sortable: true,
        minWidth: 90
      },
      {
        prop: 'retransmission',
        label: '转发',
        sortable: true,
        minWidth: 90
      }
    ],
    date: {
      label: '发布日期',
      prop: 'date',
      filters: true,
      sortable: true,
      minWidth: 150
    },
    tags: {
      label: '标签',
      prop: 'tags',
      allowChange: true,
      minWidth: 150
    },
    status: {
      label: '状态',
      prop: 'status',
      minWidth: 150,
      tags: [
        {text: '置顶', value: '置顶', color: '#8ce5a4', font: '#00c598'}, 
        {text: '下架', value: '下架', color: 'grey', font: 'black'}
      ]
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
      minWidth: 250
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
        minWidth: 90
      },
      {
        prop: 'sex',
        label: '性别',
        minWidth: 90,
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
        minWidth: 90
      },
      {
        prop: 'comments',
        label: '评论',
        sortable: true,
        minWidth: 90
      },
      {
        prop: 'retransmission',
        label: '转发',
        sortable: true,
        minWidth: 90
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
      minWidth: 150
    },
    status: {
      label: '状态',
      prop: 'status',
      minWidth: 150,
      tags: [
        {text: '禁言', value: '禁言', color: 'grey', font: 'black'}, 
        {text: '拉黑', value: '拉黑', color: 'grey', font: 'black'}, 
        {text: '关注', value: '关注', color: '#8ce5a4', font: '#00c598'}, 
        {text: '特别关注', value: '特别关注', color: '#8ce5a4', font: '#00c598'}
      ]
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
            },
            {
              text: '关注'
            },
            {
              text: '特别关注'
            }
          ],
          type: 'select'
        },
        {
          text: '删除',
          type: 'button'
        }
      ],
      minWidth: 250
    }
  }
}

export default {
  defaultPage,
  manageView
}
export const defaultPage = {
  path: '/home',
  name: 'home',
  label: '首页',
  icon:'s-home',
  component: 'HomeView'
}

export const manageView = {
  max: 5,
  video: {
    selection: true,
    column: {
      label: {
        label: '标题'
      },
      date: {
        label: '日期'
      },
      likes: {
        label: '点赞',
        sort: true
      },
      comments: {
        label: '评论',
        sort: true
      },
      retransmission: {
        label: '转发',
        sort: true
      },
      tags: {
        label: '标签',
        filter: true
      }
    },
    search: true,
    opera: [
      {
        taxt: '下架',
        type: 'button'
      },
      {
        taxt: '删除',
        type: 'button'
      }
    ],
    setting: [
      {
        text: '标题',
        type: 'input'
      },
      {
        text: '标签',
        type: 'checkbox-group',
        checkbox: ['影视', '生活', '技术', '才艺', '科技']
      }
    ]
  },
  fans: {
    selection: true,
    sort: ['date'],
    column: {
      name: {
        label: '姓名'
      },
      date: {
        label: '关注日期'
      },
      likes: {
        label: '点赞',
        sort: true
      },
      comments: {
        label: '评论',
        sort: true
      },
      retransmission: {
        label: '转发',
        sort: true
      },
      tags: {
        label: '标签',
        filter: true
      }
    },
    search: true,
    opera: [
      {
        taxt: '禁言',
        type: 'button'
      },
      {
        taxt: '拉黑',
        type: 'button'
      }
    ],
    setting: false
  }
}

export default {
  defaultPage,
  manageView
}
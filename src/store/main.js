export default {
  namespaced: true,
  state: {
    fansData: [
      {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        sex: "男",
        tags: ['focus'],
        likes: 100,
        comments: 10,
        retransmission: 9,
        status: []
      }, 
      {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        sex: "男",
        tags: ['specialFocus'],
        likes: 110,
        comments: 11,
        retransmission: 8,
        status: []
      }, 
      {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        sex: "女",
        tags: ['specialFocus'],
        likes: 100,
        comments: 11,
        retransmission: 7,
        status: []
      }, 
      {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        sex: "女",
        tags: ['specialFocus'],
        likes: 140,
        comments: 9,
        retransmission: 6,
        status: []
      },
      {
        id: 5,
        date: '2016-05-02',
        name: '王小虎',
        sex: "女",
        tags: ['focus'],
        likes: 120,
        comments: 18,
        retransmission: 7,
        status: []
      }
    ],
    vedioData: [
      {
        id: 6,
        date: '2016-05-02',
        label: 'asdfghjkl',
        tags: ['movie'],
        likes: 1010,
        comments: 50,
        retransmission: 19,
        status: []
      }, {
        id: 7,
        date: '2016-05-04',
        label: 'asdfghjkl',
        tags: ['life', 'skill'],
        likes: 3030,
        comments: 20,
        retransmission: 9,
        status: []
      }, {
        id: 8,
        date: '2016-05-01',
        label: 'asdfghjkl',
        tags: ['technology', 'science', 'life'],
        likes: 1010,
        comments: 100,
        retransmission: 29,
        status: []
      }, {
        id: 9,
        date: '2016-05-02',
        label: 'asdfghjkl',
        tags: ['movie'],
        likes: 4040,
        comments: 70,
        retransmission: 19,
        status: []
      }, {
        id: 10,
        date: '2016-05-04',
        label: 'asdfghjkl',
        tags: ['life', 'skill'],
        likes: 5050,
        comments: 70,
        retransmission: 19,
        status: []
      }
    ],
    fansTags: [
      {
        value: 'focus',
        text: '关注',
        color: 'yellow',
        font: 'pink',
        disabled: true
      },
      {
        value: 'specialFocus',
        text: '特别关注',
        color: 'yellow',
        font: 'pink',
        disabled: true
      }
    ],
    vedioTags: [
      {
        value: 'movie',
        text: '影视',
        color: 'yellow',
        font: 'pink'
      },
      {
        value: 'life',
        text: '生活',
        color: 'yellow',
        font: 'pink'
      },
      {
        value: 'technology',
        text: '技术',
        color: 'yellow',
        font: 'pink'
      },
      {
        value: 'skill',
        text: '才艺',
        color: 'yellow',
        font: 'pink'
      },
      {
        value: 'science',
        text: '科学',
        color: 'yellow',
        font: 'pink'
      }
    ],
    mainContentWidth: 0
  },
  mutations: {
    setMainContentWidth(state, value) {
      state.mainContentWidth = value
    }
  }
}
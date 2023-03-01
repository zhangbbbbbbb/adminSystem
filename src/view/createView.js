import manageView from './ManageView.vue'
import chartsView from './ChartsView.vue'

const views = {
  manageView,
  chartsView
}

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createView (view, type) {
  return {
    render: function(h) {
      return h(views[`${view}View`], { props: { type }})
    }
  }
}

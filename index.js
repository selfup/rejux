class Rejux extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}; this.store = {}; this.actions = {}
    this.bindActionsToStore = this.bindActionsToStore.bind(this)
    this.dispatch = this.dispatch.bind(this)
    this.bindActionsToStore(this.props.store, this.props.actions)
  }

  bindActionsToStore(userStore, userActions) {
    this.store = Object.assign({}, this.store, userStore)
    this.actions = Object.assign({}, this.actions, userActions)
  }

  dispatch(userKey, userObj) {
    this.setState(Object.assign(this.store, this.actions[userKey](userObj)))
  }

  render() {
    const addDispatchToChildren = React.Children
      .map(this.props.children, child => React.cloneElement(child, {
        dispatch: this.dispatch,
        store: this.store
      })
    )
    return <div>{addDispatchToChildren}</div>
  }
}

export default Rejux

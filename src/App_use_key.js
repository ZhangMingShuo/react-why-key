import React, { Component } from 'react'

class App3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {id: 1, value: '值1'},
        {id: 2, value: '值2'},
        {id: 3, value: '值3'}
      ]
    }
  }
  handleClick = () => {
    this.setState({
      list: [
        {id: 4, value: '值4'},
        {id: 1, value: '值1'},
        {id: 2, value: '值2'},
        {id: 3, value: '值3'}
      ]
    })
  }
  render() {
    return (
        <div>
          <button onClick={this.handleClick}>
            点击↓
          </button>
          <ul>
            {
              this.state.list.map((v) => {
                return (
                    // 这里设置了key值
                    <li key={ v.id }>
                      { v.value }
                    </li>
                )
              })
            }
          </ul>
        </div>
    )
  }
}

export default App3;

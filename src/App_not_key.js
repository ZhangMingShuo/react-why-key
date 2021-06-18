import React, { Component } from 'react'

class App_not_key extends Component {
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
                    // 这里没有设置key值
                    <li>
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

export default App_not_key;

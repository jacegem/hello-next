import React, { Component } from "react"
import { styled } from "styled-components"

const DivMain = styled.div`color: 'red';`

export default class Main extends Component {
  render() {
    return <DivMain>this is main</DivMain>
  }
}

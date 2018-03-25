import React from 'react'
import ReactDOM from 'react-dom'
import Restore from 'react-restore'

import App from './App'
import Panel from './App/Panel'

import ws from './ws'
import webview from './webview'
import store from './store'

import './style'

console.log(ws)

let tray = process.env.FRAME_TYPE === 'tray'
tray ? ws.start() : webview()
let Frame = Restore.connect(tray ? Panel : App, store)
ReactDOM.render(<Frame />, document.getElementById('frame'))

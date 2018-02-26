import React from 'react';
import Home from '../home/Home';
import Events from '../Events/Events'
import Message from '../Message/Message'


export const routes = [
    {
      path: '/home',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/events',
      exact: true,
      main: ()=> <Events />
    },
    {
      path: '/message',
      exact: true,
      main: ()=> <Message />
    },
    {
      path: '/',
      exact: true,
      main: ()=> <Home />
    },
]
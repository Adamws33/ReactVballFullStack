import React from 'react';
import { Route } from 'react-router-dom'
import './sidebar.css'
import { routes } from '../Navbar/_routes';

const SideBar = () => (
    <div className="sidebar">
      <div className="messageBoard">
        <div>
          <h2 className="text-center">Message Board</h2><hr/>
        </div>
        <h4 className="text-center">Partner Wanted:</h4>
        <ul>
          {/* This will be where i pull in a list of partner wanted items from the DB */}
          <li>Ashley is looking for a male for April 1st</li>
          <li>Matt is looking for a female for April 1st</li>
          <li>Danay is looking for a male for April 20th</li>
          <li>Ryan is looking for a male for April 1st</li>
          <li>Andrew is looking for a female for April 20th</li>
          <li>Sam is looking for a female for May 5th</li>
          <li>Allie is looking for a male for May 5th</li>
          <li>Sam is looking for a female for May 5th</li>
          <li>Allie is looking for a male for May 5th</li>
        </ul>
        <hr/>
        <h4 className="text-center">Messages:</h4>
        <ul>
          {/* This will be where i pull in a list of comment items from the DB */}
          <li>I had a really good time Thank you!</li>
          <li>I Wish we finished a little sooner</li>
          <li>Won 100 bux! WOO HOO!</li>
          <li>I had a blast but maybe i will play in intermediate next time</li>
          <li>this is another test item</li>
          <li>I had a really good time Thank you!</li>
          <li>I Wish we finished a little sooner</li>
          <li>Won 100 bux! WOO HOO!</li>
          <li>I had a blast but maybe i will play in intermediate next time</li>
          <li>this is another test item</li>
        </ul>
      </div>
      <div className="sidebar-route">
      {routes.map((route, index) => (
          <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          />
      ))}
    </div>
    </div>
  
)

export default SideBar;
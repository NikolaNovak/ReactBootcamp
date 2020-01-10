import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom'

function Topic ({ match }) {
  return <h3>{match.params.topicId}</h3>
}

export default function Topics({match}) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with react</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-states`}>Props vs States</Link>
        </li>
      </ul>

      <hr/>

      <Route exact path={match.path} render={() => {
        return <h3>Please select a topic.</h3>
      }} />
      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  )
}
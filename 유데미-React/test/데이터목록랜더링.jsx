import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
          {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
        </ul>
    );
}
/**----------------------------- */
import React from 'react';

export default function Todo(props) {
    return <li>{props.text}</li>;
}

/**
 * 바로 더미 데이터를 사용하는 거라 그냥 가져다 사용했으면 됐음
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';
import Water from './components/water';

const store = configureStore();

class App extends React.Component {


    test()
    {
        let w = new Water(10);
        w.test1();
    }

    render() {
        return (
            <Provider store={store}>
                <ToDoAppContainer>
                    <Water price={11}/>
                </ToDoAppContainer>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if (module.hot)
    module.hot.accept();
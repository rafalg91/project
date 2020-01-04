import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Workers from './Workers';
import Skills from './Skills';
import Access from './Access';
import Logs from './Logs';

class Root extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<>
					<Header />
					<Switch>
						<Route exact path="/" component={Workers} />
						<Route path="/skills" component={Skills} />
						<Route path="/access" component={Access} />
						<Route path="/logs" component={Logs} />
					</Switch>
				</>
			</BrowserRouter>
		);
	}
}

export default Root;
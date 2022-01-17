import { h } from 'preact';
import { Router } from 'preact-router';
import '../theme/index.less'
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import style from './style.less';


const RouterComponent: any = Router;

const App = () => (
	<div id="app" className={style.something}>
		<Header />
		<RouterComponent>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</RouterComponent>
	</div>
)

export default App;

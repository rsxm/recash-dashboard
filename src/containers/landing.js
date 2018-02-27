import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


export default class extends Component {

	state = {
		open: false,
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { history } = this.props

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Login"
				primary={true}
				keyboardFocused={true}
				onClick={this.handleClose}
			/>,
		];

		return (
			<div>
				<AppBar title="Launcher" showMenuIconButton={false} iconElementRight={<FlatButton onClick={this.handleOpen} label="Login" />} />

				<Dialog
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<div className='container center'>
						<h3>Login</h3>
						<TextField
							hintText="Email"
							type='email'
						/><br />
						<TextField
							hintText="Password"
							type='password'
						/><br />
					</div>
				</Dialog>
				
				<div className='spacer'></div>
				<div className='row'>
					<div className='col-6 center'>
						<br/>
						<img alt='logo' className='landing-img' src='./logo.png' />
					</div>
					<div className='col-6 center landing-row'>
						<h1 className='title'>Product Name</h1>
						<p className='subtitle'>This is a short description of the product</p>
							<TextField
								hintText="Email"
							/><br />
						<RaisedButton onClick={() => history.push('/home')} label="Join" secondary={true} />
						<br/><br/>
					</div>
				</div>
			</div>
		)
	}
}
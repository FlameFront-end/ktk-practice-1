import image from '../../assets/registration-form-1.jpg'
import './Register.scss'

const Index = () => {
	return (
		<div>
			<div className='wrapper'>
				<div className='image-holder'>
					<img src={image} alt='' />
				</div>
				<div className='right'>
					<h3>Registration Form</h3>
					<div className='form-group'>
						<input
							type='text'
							placeholder='First Name'
							className='form-control'
						/>
						<input
							type='text'
							placeholder='Last Name'
							className='form-control'
						/>
					</div>
					<div className='form-wrapper'>
						<input
							type='text'
							placeholder='Username'
							className='form-control'
						/>
					</div>
					<div className='form-wrapper'>
						<input
							type='text'
							placeholder='Email Address'
							className='form-control'
						/>
					</div>
					<div className='form-wrapper'>
						<select name='' id='' className='form-control'>
							<option value='' disabled selected>
								Gender
							</option>
							<option value='male'>Male</option>
							<option value='femal'>Female</option>
							<option value='other'>Other</option>
						</select>
					</div>
					<div className='form-wrapper'>
						<input
							type='password'
							placeholder='Password'
							className='form-control'
						/>
					</div>
					<div className='form-wrapper'>
						<input
							type='password'
							placeholder='Confirm Password'
							className='form-control'
						/>
					</div>
					<button>
						Register
						<i className='zmdi zmdi-arrow-right'></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Index

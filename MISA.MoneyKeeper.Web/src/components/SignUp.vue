<template>
	<div class="container">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="../assets/logoMK.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>

						<div class="input-group mb-4">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="Username">
						</div>

						<div class="input-group mb-4">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="Password">
						</div>

						<div class="input-group mb-4">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-envelope"></i></span>
							</div>
							<input type="text" name="" class="form-control input_email" value="" placeholder="Email">
						</div>						

						<div class="input-group mb-4">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-phone"></i></span>
							</div>
							<input type="text" name="" class="form-control input_phoneNumber" value="" placeholder="Phone Number">
						</div>

						<div class="input-group mb-5">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-birthday-cake"></i></span>
							</div>
							<input type="text" name="" class="form-control input_birthday" value="" placeholder="Date of Birth">
						</div>

						<div class="d-flex justify-content-center mt-3 login_container">
							<button type="button" name="button" class="btn login_btn"><a href="#/Notify">SignUp</a></button>
						</div>

					</form>
				</div>
					<div class="d-flex justify-content-center mt-3 login_container">
						<button type="button" name="button" class="btn homepage_btn"><a href="">Home Page</a></button>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data () {
            return { 
                tille: 'Sign In'
            }
    }
}
</script>

<style scoped>
		.user_card {
			height: 600px;
			width: 450px;
			margin-top: auto;
			margin-bottom: auto;
			background: #f39c12;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;

		}
		.brand_logo_container {
			position: absolute;
			height: 250px;
			width: 250px;
			top: -125px;
			border-radius: 50%;
			background: #60a3bc;
			padding: 0px;
			text-align: center;
		}
		.brand_logo {
			height: 250px;
			width: 250px;
			border-radius: 50%;
			border: 5px solid white;
		}
		.form_container {
			margin-top: 100px;
		}
		.login_btn {
			width: 100%;
			background: #c0392b !important;
			color: white !important;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;
		}
		.homepage_btn {
			width: 55%;
			background: #c0392b !important;
			color: white !important;
			border: 5px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 5px;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #c0392b !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
			background-color: #c0392b !important;
		}
		a {
			color: white;
		}
</style>

export function Sidebar() {
	return (
		<div className="nk-sidebar">
			<div className="nk-sidebar-bar">
				<div className="nk-apps-brand">
					<a href="/index-2.html" className="logo-link"
						><img
							className="logo-light logo-img"
							src="/images/logo-small.png"
							srcSet="/images/logo-small2x.png 2x"
							alt="logo" /><img
							className="logo-dark logo-img"
							src="/images/logo-dark-small.png"
							srcSet="/images/logo-dark-small2x.png 2x"
							alt="logo-dark"
					/></a>
				</div>
				<div className="nk-sidebar-element">
					<div className="nk-sidebar-body">
						<div className="nk-sidebar-content" data-simplebar>
							<div className="nk-sidebar-menu">
								<ul className="nk-menu apps-menu">
									<li className="nk-menu-item active">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navPharmacy"
											><span className="nk-menu-icon"
												><em className="icon ni ni-capsule"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navHospital"
											><span className="nk-menu-icon"
												><em className="icon ni ni-plus-medi"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navDashboards"
											><span className="nk-menu-icon"
												><em className="icon ni ni-dashboard"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navApps"
											><span className="nk-menu-icon"
												><em className="icon ni ni-menu-circled"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navPages"
											><span className="nk-menu-icon"
												><em className="icon ni ni-files"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navMisc"
											><span className="nk-menu-icon"
												><em className="icon ni ni-server"></em></span
										></a>
									</li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navError"
											><span className="nk-menu-icon"
												><em className="icon ni ni-alert-c"></em></span
										></a>
									</li>
									<li className="nk-menu-hr"></li>
									<li className="nk-menu-item">
										<a
											href="#"
											className="nk-menu-link nk-menu-switch"
											data-target="navComponents"
											><span className="nk-menu-icon"
												><em className="icon ni ni-layers"></em></span
										></a>
									</li>
								</ul>
							</div>
							<div className="nk-sidebar-footer">
								<ul className="nk-menu nk-menu-md apps-menu">
									<li className="nk-menu-item">
										<a href="#" className="nk-menu-link" title="Settings"
											><span className="nk-menu-icon"
												><em className="icon ni ni-setting"></em></span
										></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="nk-sidebar-profile nk-sidebar-profile-fixed dropdown">
							<a href="#" data-bs-toggle="dropdown" data-offset="50,-50"
								><div className="user-avatar"><span>AB</span></div></a
							>
							<div className="dropdown-menu dropdown-menu-md ml-4">
								<div className="dropdown-inner user-card-wrap d-none d-md-block">
									<div className="user-card">
										<div className="user-avatar"><span>AB</span></div>
										<div className="user-info">
											<span className="lead-text">Abu Bin Ishtiyak</span
											><span className="sub-text text-soft"
												>info@softnio.com</span
											>
										</div>
									</div>
								</div>
								<div className="dropdown-inner">
									<ul className="link-list">
										<li>
											<a href="/user-profile-regular.html"
												><em className="icon ni ni-user-alt"></em
												><span>View Profile</span></a
											>
										</li>
										<li>
											<a href="/user-profile-setting.html"
												><em className="icon ni ni-setting-alt"></em
												><span>Account Setting</span></a
											>
										</li>
										<li>
											<a href="/user-profile-activity.html"
												><em className="icon ni ni-activity-alt"></em
												><span>Login Activity</span></a
											>
										</li>
									</ul>
								</div>
								<div className="dropdown-inner">
									<ul className="link-list">
										<li>
											<a href="#"
												><em className="icon ni ni-signout"></em
												><span>Sign out</span></a
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

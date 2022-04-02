function navbar(){
    return `<div id="nav">
    <div id="left_nav">
      <div id="sidebar"><hr><hr><hr></div>
  <img onclick="window.location.href='home.html'" id="logo" src="https://assets.zoomcar.com/assets/full-logo-white-eb7855c91e51c8bcf05868377936159a.svg">
  </div>
  <div id="right_nav">
      <div onclick = "window.location.href='host.html'">Become a Host</div>
      <div onclick="window.location.href='zms.html'">ZMS</div>
      <div id="login" ><h3 onclick="window.location.href='./zoomcar/num.html'">login/signup</h3></div>
    </div>
  </div>
  <div id="low_nav">
    <div id="sidebarNav">
      <div id = "log_in" onclick="window.location.href='num.html'">
        <i class="fas fa-user"></i>
        <p>Login or Signup</p>
      </div>
      <div onclick = "window.location.href='index.html'">
        <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg">
        <p>Change City</p>
        <h4 id="cit">Banglore</h4>
      </div>
      <div onclick="window.location.href='superMilerClub.html'">
        <i class="fas fa-cube"></i>
        <p>Supermiler Club</p>
      </div>
      <div onclick="window.location.href='zoomCarPolicy.html'">
        <i class="fas fa-copy"></i>
        <p>Zoomcar Fleet Vechiles Policies</p>
      </div>
      <div onclick="window.location.href='hostPolicy.html'">
        <i class="fas fa-copy"></i>
        <p>Zoomcar Host Vechiles Policies</p>
      </div>
      <div onclick="window.location.href='helpandsupport.html'">
        <i class="fas fa-phone"></i>
        <p>Help & Support</p>
      </div>
      <div id= "log">
      <img src = "https://w7.pngwing.com/pngs/475/85/png-transparent-computer-icons-logout-angle-text-black.png">
        <p>Logout</p>
      </div>
    </div>
  </div>`;
}
export default navbar;
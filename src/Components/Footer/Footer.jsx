import React from 'react'
import "./bootstrap.min.css";

const Footer = () => {
  return (
    <div class="container">
      <div class="row">

        {/* Left Side */}
        <div class="col-md-5">
          <p>Quick Links</p> <br />
          <a href="https://m.facebook.com/PGDAVhyperion?_rdr">Facebook</a> <br />
          <a href="https://www.instagram.com/hyperion_pgdav?igshid=NTdlMDg3MTY%3D">Instagram</a> <br />
          <a href="https://pgdavhyperion.in/">Hyperion P.G.D.A.V</a> <br />        
        </div>

        {/* Middle */}
        <div class='col-md-4'>
          <a href="https://www.pgdavcollege.in/"><img src="" alt="PGDAV College" /></a> <br />
          <p>Ring Road, Nehru Nagar, <br />
          New Delhi - 110065</p>
          <p><strong>Telephone:</strong> 29832092</p>
          <p><strong>Email:</strong> pgdavcollege.edu@gmail.com</p>
        </div>

        {/* Right */}
        <div class='col-md-3'>
          <p>&copy; Hyperion P.G.D.A.V 2024</p>
          <p>Created By: <br />
          Website Development Team <br />
          TechWhiz - IT Society</p>
          <img src="" alt="TechWhiz" />
        </div>


      </div>
    </div>
  )
}

export default Footer
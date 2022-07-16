import React from "react";
import { Link } from "react-router-dom";

export default function SignupTwo() {
  return (
    <>
      <section class="hero-section full-screen gray-light-bg">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-center">
            <div class="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
              <div
                class="bg-cover vh-100 ml-n3 background-img"
                style={{ background: "url(assets/img/hero-bg-2.jpg)" }}
              >
                <div class="position-absolute login-signup-content">
                  <div class="position-relative text-white col-md-12 col-lg-7">
                    <h2 class="text-white">Create Your Account</h2>
                    <p class="lead">
                      Keep your face always toward the sunshine - and shadows
                      will fall behind you. Continually pursue fully researched
                      niches whereas timely platforms. Credibly parallel task
                      optimal catalysts for change after focused catalysts for
                      change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
              <div class="login-signup-wrap px-4 px-lg-5 my-5">
                <h1 class="text-center mb-1">Signup</h1>

                <p class="text-muted text-center mb-5">
                  Free access to our dashboard.
                </p>

                <form class="login-signup-form">
                  <div class="form-group">
                    <label class="pb-1">Your Name</label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-user color-primary"></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="pb-1">Email Address</label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-email color-primary"></span>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="name@address.com"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="pb-1">Password</label>

                    <div class="input-group input-group-merge">
                      <div class="input-icon">
                        <span class="ti-lock color-primary"></span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div class="form-check d-flex align-items-center text-center">
                    <input
                      type="checkbox"
                      class="form-check-input mt-0 mr-3"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label small" for="exampleCheck1">
                      I agree your <a href="#/">terms and conditions</a>
                    </label>
                  </div>

                  <button class="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3">
                    Sign up
                  </button>

                  <div class="text-center">
                    <small class="text-muted text-center">
                      Already have an account? <Link to="/login">Log in</Link>.
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../store/store';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password, navigate, rememberMe);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form
            onSubmit={handleSubmit}
            className="rounded p-4 border shadow-sm mx-auto"
            style={{ width: '100%' }}
          >
            <h2 className="mb-4">Login</h2>
            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control rounded-pill py-4"
                id="email"
                placeholder="Enter email"
                required
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control rounded-pill py-4"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-group form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary rounded-pill py-3"
              style={{
                width: '100%',
                marginTop: '5px',
                marginBottom: '5px',
                backgroundColor: '#4A3AFF',
              }}
            >
              Log in
            </button>
            <div
              style={{
                margin: '15px 0',
                textAlign: 'center',
                fontSize: '16px',
                color: '#666666',
              }}
            >
              아직 회원이 아니신가요?
              <Link
                to="/signup"
                style={{
                  color: '#2681d9',
                  textDecoration: 'none',
                  hover: {
                    textDecoration: 'underline',
                  },
                }}
              >
                회원가입
              </Link>
            </div>
          </form>
          {error && <p>Error: {error}</p>}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

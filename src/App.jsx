import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';

const RemotePage = React.lazy(() => import('remote_app/PageRemote'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('RemotePage error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Не удалось загрузить удалённую страницу.</h3>;
    }

    return this.props.children;
  }
}

const App = () => {
  console.log('Remote React:', React.version);

  console.log(RemotePage);

  return (
    <BrowserRouter>
      <h2>Webpack Module Federation</h2>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Menu />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />ъ
            <Route
              path="/remote"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Загрузка RemotePage...</div>}>
                    <RemotePage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

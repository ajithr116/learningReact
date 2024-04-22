import {lazy, Suspense} from 'react';
import Home from './Home';


const lazyLoading = () => {

    const LazyAbout = lazy(() => import('./About'));

  return (
<div>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <hr />

      {/* Home Component (Not lazy-loaded) */}
      <Home />

      <hr />

      {/* Lazy-loaded About Component */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAbout />
      </Suspense>
    </div>
  )
}

export default lazyLoading;

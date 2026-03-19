import './index.css';
import { lazy, Suspense } from 'react';

import Background from './components/Background';
import Header from './components/Header';
import Home from './components/Home';
import LazySection from './components/LazySection';

import { LanguageProvider } from './context/LanguageContext';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const TimeLine = lazy(() => import('./components/TimeLine'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <LanguageProvider>
      <main className="flex flex-col min-h-screen">
        <Background />
        <Header />
        <Home />
        <Suspense fallback={null}>

          <LazySection>
            <About />
          </LazySection>

          <LazySection>
            <Projects />
          </LazySection>

          <LazySection>
            <Skills />
          </LazySection>

          <LazySection>
            <TimeLine />
          </LazySection>

          <LazySection>
            <Contact />
          </LazySection>
          
        </Suspense>
      </main>
    </LanguageProvider>
  );
}

export default App;
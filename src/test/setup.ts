import '@testing-library/jest-dom';

// Polyfill window.scrollTo if not in jsdom
if (typeof window !== 'undefined') {
  window.scrollTo = () => {};

  // Polyfill IntersectionObserver for framer-motion in jsdom
  class MockIntersectionObserver {
    observe = () => {};
    unobserve = () => {};
    disconnect = () => {};
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
}

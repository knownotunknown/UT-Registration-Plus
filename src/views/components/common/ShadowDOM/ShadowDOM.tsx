import type React from 'react';
import { useEffect } from 'react';

export default function ShadowRootAttacher(): JSX.Element | null {

  const createShadowRoots = (nodes: Element[] | NodeList) => {
    nodes.forEach((node) => {
        if (node instanceof HTMLElement && node.classList.contains('utrp_shadow')) {
            if (!node.shadowRoot) {
                const shadowRoot = node.attachShadow({ mode: 'open' });
                const contentClone = node.cloneNode(true);
                shadowRoot.appendChild(contentClone);
                // node.innerHTML = ''; // Clear the original node content
            }
        }
    });
  };


  useEffect(() => {
    let shadowRootTargets = Array.from(document.getElementsByClassName('utrp_shadow'));
    createShadowRoots(shadowRootTargets);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        createShadowRoots(mutation.addedNodes);
      });
    });

    const config = { childList: true, subtree: true };

    observer.observe(document.body, config);

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};


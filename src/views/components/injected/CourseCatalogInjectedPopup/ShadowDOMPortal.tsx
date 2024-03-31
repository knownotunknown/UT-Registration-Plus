import React from "react";
import ReactDOM from "react-dom";

export function ShadowDOM({
  parentElement,
  children,
}: {
  parentElement: Element;
  children: React.ReactNode;
}) {
  const [shadowHost] = React.useState(() =>
    document.createElement("my-shadow-host")
  );

  const [shadowRoot] = React.useState(() =>
    shadowHost.attachShadow({ mode: "open" })
  );

  React.useLayoutEffect(() => {
    console.log(parentElement);
    if (parentElement) {
      parentElement.appendChild(shadowHost);

      // Detect and clone <style> elements
      document.querySelectorAll('style').forEach(styleElement => {
        const clonedStyle = styleElement.cloneNode(true);
        shadowRoot.appendChild(clonedStyle);
      });

      // Detect and clone stylesheets
      Array.from(document.styleSheets).forEach(styleSheet => {
        try {
          // Accessing .cssRules on certain stylesheets may cause a security error
          const rules = styleSheet.cssRules;
          const newStyleEl = document.createElement('style');
          Array.from(rules).forEach(rule => {
            newStyleEl.appendChild(document.createTextNode(rule.cssText));
          });
          shadowRoot.appendChild(newStyleEl);
        } catch (e) {
          console.warn("Unable to access stylesheet rules due to CORS", e);
        }
      }); 
    }
    console.log(shadowHost);
    return () => {
      shadowHost.remove();
    };
  }, [parentElement, shadowHost]);

  return ReactDOM.createPortal(children, shadowRoot);
}
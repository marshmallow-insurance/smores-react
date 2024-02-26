/**
 * Hide element visually but still have it accessible for assitive device
 * @link https://www.a11yproject.com/posts/how-to-hide-content/
 */
export declare const visuallyHidden = "\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n";

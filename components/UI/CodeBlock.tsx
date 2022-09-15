import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/themes/prism-tomorrow.css";
import React, { ReactNode, useEffect, useState } from "react";

interface CodeBlockProps {
  children: ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      Prism.highlightAll();
    }
  }, [mounted]);

  return (
    <div>
      {mounted && (
        <pre>
          <code className="line-numbers language-javascript">{children}</code>
        </pre>
      )}
    </div>
  );
};

export default CodeBlock;

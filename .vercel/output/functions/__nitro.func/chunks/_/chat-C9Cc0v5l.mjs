import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { c as cn } from './ssr.mjs';
import { B as Button } from './button-B7UU42pS.mjs';
import '@tanstack/react-router';
import '@tanstack/react-query';
import 'next-themes';
import 'sonner';
import '@radix-ui/react-navigation-menu';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/react-query-devtools';
import 'zod';
import 'jotai/utils';
import 'axios';
import 'jotai';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';
import '@radix-ui/react-slot';

function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const SplitComponent = function ChatPage() {
  const {
    messages,
    sendMessage,
    status
  } = useChat({
    transport: new DefaultChatTransport({
      api: "https://012e-tcn-chatbot.deno.dev/api/public/chat"
    })
  });
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = parseInt(textarea.style.maxHeight) || Infinity;
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  }, [input]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({
      text: input
    });
    setInput("");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-y-auto flex-1 p-4 pb-24 md:p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col mx-auto space-y-4 max-w-4xl", children: [
      messages.map(({
        id,
        role,
        parts
      }) => /* @__PURE__ */ jsx("div", { className: cn("flex", role === "user" ? "justify-end" : "justify-start"), children: /* @__PURE__ */ jsx("div", { className: cn("max-w-[85%] rounded-lg px-3 py-2 text-sm shadow-md md:max-w-[75%] md:px-4 md:py-2", role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"), children: parts.map((part, index) => part.type === "text" ? /* @__PURE__ */ jsx(ReactMarkdown, { className: "max-w-none break-words prose prose-sm prose-p:my-2 prose-pre:my-2 prose-pre:rounded-md prose-pre:bg-background/50 prose-pre:p-2 dark:prose-invert", rehypePlugins: [rehypeRaw, rehypeSanitize, [rehypeHighlight, {
        detect: true
      }]], remarkPlugins: [remarkGfm], children: part.text }, `${id}-${index}`) : null) }) }, id)),
      status === "submitted" && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "py-2 px-4 rounded-lg shadow-md bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "\u0110ang suy ngh\u0129..." }) }) }),
      /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-x-0 bottom-0 border-t bg-background/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "flex gap-2 items-end p-2 mx-auto w-full max-w-4xl md:p-4", children: [
      /* @__PURE__ */ jsx(
        Textarea,
        {
          ref: textareaRef,
          value: input,
          onChange: (e) => setInput(e.target.value),
          placeholder: "Nh\u1EADp g\xEC \u0111\xF3...",
          className: "flex-1 max-h-48 resize-none",
          style: {
            maxHeight: "192px"
          },
          rows: 1,
          onKeyDown: (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              handleFormSubmit(e);
            }
          }
        }
      ),
      /* @__PURE__ */ jsxs(Button, { type: "submit", size: "icon", disabled: !input.trim() || status === "submitted", className: "w-9 h-9 md:w-10 md:h-10 shrink-0", children: [
        /* @__PURE__ */ jsx(Send, { size: 18 }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Send message" })
      ] })
    ] }) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=chat-C9Cc0v5l.mjs.map

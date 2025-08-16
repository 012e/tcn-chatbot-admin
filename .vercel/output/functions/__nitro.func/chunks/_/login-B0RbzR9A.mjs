import { jsx, jsxs } from 'react/jsx-runtime';
import { useNavigate } from '@tanstack/react-router';
import { l as loginCredentialAtom, R as Route$6, c as cn } from './ssr.mjs';
import { B as Button } from './button-B7UU42pS.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
import { useAtom } from 'jotai';
import { toast } from 'sonner';
import 'react';
import '@tanstack/react-query';
import 'next-themes';
import '@radix-ui/react-navigation-menu';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/react-query-devtools';
import 'zod';
import 'jotai/utils';
import 'axios';
import 'lucide-react';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';
import '@radix-ui/react-slot';

function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function LoginForm({
  className,
  ...props
}) {
  const [, setCredential] = useAtom(loginCredentialAtom);
  const navigate = useNavigate({
    from: Route$6.fullPath
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    setCredential({
      username,
      password
    });
    toast.success("\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng!");
    navigate({
      to: "/chat"
    });
  };
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col gap-6", className), ...props, children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "\u0110\u0103ng nh\u1EADp v\xE0o t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Nh\u1EADp t\xEAn ng\u01B0\u1EDDi d\xF9ng c\u1EE7a b\u1EA1n d\u01B0\u1EDBi \u0111\xE2y \u0111\u1EC3 \u0111\u0103ng nh\u1EADp" })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "username", children: "T\xEAn ng\u01B0\u1EDDi d\xF9ng" }),
          /* @__PURE__ */ jsx(Input, { id: "username", name: "username", type: "text", placeholder: "t\xEAn ng\u01B0\u1EDDi d\xF9ng", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "M\u1EADt kh\u1EA9u" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "inline-block ml-auto text-sm hover:underline underline-offset-4", children: "Qu\xEAn m\u1EADt kh\u1EA9u?" })
          ] }),
          /* @__PURE__ */ jsx(Input, { id: "password", name: "password", type: "password", required: true })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "\u0110\u0103ng nh\u1EADp" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 text-sm text-center", children: [
        "B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n?",
        " ",
        /* @__PURE__ */ jsx("a", { href: "#", className: "underline underline-offset-4", children: "\u0110\u0103ng k\xFD" })
      ] })
    ] }) })
  ] }) });
}
const SplitComponent = function RouteComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center p-6 w-full md:p-10 min-h-svh", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsx(LoginForm, {}) }) });
};

export { SplitComponent as component };
//# sourceMappingURL=login-B0RbzR9A.mjs.map

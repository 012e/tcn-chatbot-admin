import { jsx } from 'react/jsx-runtime';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Outlet, useNavigate, redirect } from '@tanstack/react-router';
import { l as loginCredentialAtom } from './ssr.mjs';
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
import 'lucide-react';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

function useAuthenticated() {
  const navigate = useNavigate();
  const [credential] = useAtom(loginCredentialAtom);
  useEffect(() => {
    if (!credential || !credential.username || !credential.password) {
      navigate({ to: "/login" });
    }
  }, [credential, redirect, credential == null ? void 0 : credential.username, credential == null ? void 0 : credential.password]);
}
const SplitComponent = function RouteComponent() {
  useAuthenticated();
  return /* @__PURE__ */ jsx(Outlet, {});
};

export { SplitComponent as component };
//# sourceMappingURL=document-E442pt-O.mjs.map

import { jsx } from 'react/jsx-runtime';
import { D as DocumentForm } from './document-form-DvquACiR.mjs';
import { f as Route, u as updateDocument } from './ssr.mjs';
import './button-B7UU42pS.mjs';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@tanstack/react-query';
import '@tanstack/react-router';
import 'lucide-react';
import 'react';
import 'sonner';
import 'reactjs-tiptap-editor';
import 'reactjs-tiptap-editor/bold';
import 'reactjs-tiptap-editor/clear';
import 'reactjs-tiptap-editor/color';
import 'reactjs-tiptap-editor/fontfamily';
import 'reactjs-tiptap-editor/fontsize';
import 'reactjs-tiptap-editor/formatpainter';
import 'reactjs-tiptap-editor/history';
import 'reactjs-tiptap-editor/horizontalrule';
import 'reactjs-tiptap-editor/importword';
import 'reactjs-tiptap-editor/italic';
import 'reactjs-tiptap-editor/link';
import 'reactjs-tiptap-editor/moremark';
import 'reactjs-tiptap-editor/strike';
import 'reactjs-tiptap-editor/table';
import 'reactjs-tiptap-editor/textalign';
import 'reactjs-tiptap-editor/textunderline';
import 'next-themes';
import '@radix-ui/react-navigation-menu';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/react-query-devtools';
import 'zod';
import 'jotai/utils';
import 'axios';
import 'jotai';
import 'node:async_hooks';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function EditDocumentComponent() {
  const doc = Route.useLoaderData();
  const {
    documentId
  } = Route.useParams();
  const handleDocumentUpdate = async ({
    content
  }) => {
    if (!documentId) {
      throw new Error("Document ID is required for update");
    }
    await updateDocument({
      documentId,
      content
    });
  };
  return /* @__PURE__ */ jsx(DocumentForm, { initialContent: doc.content, onSave: handleDocumentUpdate, isUpdate: true });
};

export { SplitComponent as component };
//# sourceMappingURL=_documentId.edit-BOsZ81gp.mjs.map

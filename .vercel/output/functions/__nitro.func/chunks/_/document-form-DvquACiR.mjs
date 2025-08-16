import { jsx, jsxs } from 'react/jsx-runtime';
import { B as Button } from './button-B7UU42pS.mjs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from '@tanstack/react-router';
import { ArrowLeft, Loader2, Save } from 'lucide-react';
import { useState, useCallback, useEffect, memo } from 'react';
import { toast } from 'sonner';
import RichTextEditor, { BaseKit } from 'reactjs-tiptap-editor';
import { Bold } from 'reactjs-tiptap-editor/bold';
import { Clear } from 'reactjs-tiptap-editor/clear';
import { Color } from 'reactjs-tiptap-editor/color';
import { FontFamily } from 'reactjs-tiptap-editor/fontfamily';
import { FontSize } from 'reactjs-tiptap-editor/fontsize';
import { FormatPainter } from 'reactjs-tiptap-editor/formatpainter';
import { History } from 'reactjs-tiptap-editor/history';
import { HorizontalRule } from 'reactjs-tiptap-editor/horizontalrule';
import { ImportWord } from 'reactjs-tiptap-editor/importword';
import { Italic } from 'reactjs-tiptap-editor/italic';
import { Link } from 'reactjs-tiptap-editor/link';
import { MoreMark } from 'reactjs-tiptap-editor/moremark';
import { Strike } from 'reactjs-tiptap-editor/strike';
import { Table } from 'reactjs-tiptap-editor/table';
import { TextAlign } from 'reactjs-tiptap-editor/textalign';
import { TextUnderline } from 'reactjs-tiptap-editor/textunderline';

const extensions = [
  BaseKit.configure({
    placeholder: {
      showOnlyCurrent: true
    },
    characterCount: {
      limit: 5e4
    }
  }),
  History,
  // SearchAndReplace,
  // TableOfContents,
  FormatPainter.configure({ spacer: true }),
  Clear,
  FontFamily,
  FontSize,
  Bold,
  Italic,
  TextUnderline,
  Strike,
  MoreMark,
  Color.configure({ spacer: true }),
  TextAlign.configure({ types: ["heading", "paragraph"], spacer: true }),
  Link,
  HorizontalRule,
  Table,
  ImportWord.configure({
    upload: (files) => {
      const f = files.map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name
      }));
      return Promise.resolve(f);
    }
  })
];
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
function Editor({
  content,
  setContent,
  theme = "light"
}) {
  const onValueChange = useCallback(
    debounce((value) => {
      setContent(value);
    }, 1e3),
    []
  );
  return /* @__PURE__ */ jsx(
    RichTextEditor,
    {
      output: "html",
      content,
      onChangeContent: onValueChange,
      extensions,
      dark: theme === "dark"
    }
  );
}
const Editor$1 = memo(Editor);
function DocumentForm({
  initialContent = "",
  onSave
}) {
  const navigate = useNavigate();
  useParams({ strict: false });
  const [content, setContent] = useState(initialContent);
  const contentMutation = useMutation({
    mutationFn: onSave,
    onError: (error) => {
      toast.error(`Thao t\xE1c th\u1EA5t b\u1EA1i: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Thao t\xE1c th\xE0nh c\xF4ng!");
      navigate({ to: "/document", replace: true });
    }
  });
  const handleSave = useCallback(() => {
    contentMutation.mutate({ content });
  }, [content, contentMutation]);
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);
  const isSubmitting = contentMutation.isPending;
  return /* @__PURE__ */ jsx("div", { className: "container p-4 mx-auto max-w-5xl md:py-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => navigate({ to: "/document" }),
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 w-4 h-4" }),
            "Quay l\u1EA1i"
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 items-center", children: /* @__PURE__ */ jsxs(
        Button,
        {
          disabled: isSubmitting || !content.trim(),
          onClick: handleSave,
          className: "h-9",
          children: [
            isSubmitting ? /* @__PURE__ */ jsx(Loader2, { className: "mr-2 w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "mr-2 w-4 h-4" }),
            isSubmitting ? "\u0110ang l\u01B0u..." : "L\u01B0u"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex overflow-hidden flex-col flex-grow rounded-lg border shadow-sm bg-background", children: /* @__PURE__ */ jsx(Editor$1, { content, setContent }) })
  ] }) });
}

export { DocumentForm as D };
//# sourceMappingURL=document-form-DvquACiR.mjs.map

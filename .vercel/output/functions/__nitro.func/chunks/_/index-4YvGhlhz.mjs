import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useNavigate } from '@tanstack/react-router';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { a as Route$2, b as listDocuments, c as cn, d as deleteDocument } from './ssr.mjs';
import * as React from 'react';
import { B as Button, b as buttonVariants } from './button-B7UU42pS.mjs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Edit, Trash, XIcon } from 'lucide-react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { toast } from 'sonner';
import dompurify from 'dompurify';
import 'next-themes';
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

const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn(
      "w-full caption-bottom text-sm",
      className
    ),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "text-muted-foreground h-10 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("text-muted-foreground mt-4 text-sm", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(XIcon, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
function stripHtmlTags(htmlString) {
  return htmlString.replace(/<[^>]*>/g, "");
}
const SplitComponent = function RouteComponent() {
  var _a, _b, _c;
  const navigate = useNavigate({
    from: Route$2.fullPath
  });
  const queryClient = useQueryClient();
  const {
    page,
    pageSize,
    id: selectedId
  } = Route$2.useSearch();
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["documents", {
      page,
      pageSize
    }],
    queryFn: () => listDocuments({
      page,
      pageSize
    }),
    placeholderData: (prev) => prev
  });
  const items = (_a = data == null ? void 0 : data.items) != null ? _a : [];
  const totalPages = (_b = data == null ? void 0 : data.totalPages) != null ? _b : 1;
  const totalItems = (_c = data == null ? void 0 : data.totalItems) != null ? _c : 0;
  const docFromUrl = React.useMemo(() => {
    const doc = items.find((d) => d.id === selectedId);
    if (!doc) return null;
    doc.content = dompurify.sanitize(doc.content);
    doc.sanitizedContent = doc.content;
    return doc;
  }, [items, selectedId]);
  const [docToDelete, setDocToDelete] = React.useState(null);
  const goTo = (nextPage, nextPageSize = pageSize) => navigate({
    search: (prev) => ({
      ...prev,
      page: Math.max(1, nextPage),
      pageSize: nextPageSize
    })
  });
  const onSelect = (doc) => navigate({
    search: (prev) => ({
      ...prev,
      id: doc.id
    })
  });
  const onCloseDialog = () => navigate({
    search: (prev) => ({
      ...prev,
      id: void 0
    })
  });
  const onOpenDeleteDialog = (e, doc) => {
    e.stopPropagation();
    setDocToDelete(doc);
  };
  const handleDeleteConfirmed = async () => {
    if (!docToDelete) return;
    const deletePromise = deleteDocument(docToDelete.id);
    toast.promise(deletePromise, {
      loading: "\u0110ang x\xF3a t\xE0i li\u1EC7u...",
      success: "T\xE0i li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a",
      error: (err) => `X\xF3a t\xE0i li\u1EC7u th\u1EA5t b\u1EA1i: ${err.message}`
    });
    await deletePromise;
    const updateDataPromise = queryClient.invalidateQueries({
      queryKey: ["documents"]
    });
    toast.promise(updateDataPromise, {
      loading: "\u0110ang c\u1EADp nh\u1EADt danh s\xE1ch t\xE0i li\u1EC7u...",
      success: "Danh s\xE1ch t\xE0i li\u1EC7u \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt",
      error: (err) => `C\u1EADp nh\u1EADt danh s\xE1ch th\u1EA5t b\u1EA1i: ${err.message}`
    });
    navigate({
      search: (prev) => ({
        ...prev,
        id: (prev == null ? void 0 : prev.id) === docToDelete.id ? void 0 : prev == null ? void 0 : prev.id
      })
    });
    setDocToDelete(null);
  };
  if (isLoading) return /* @__PURE__ */ jsx("div", { className: "p-6", children: "Loading..." });
  if (isError) return /* @__PURE__ */ jsx("div", { className: "p-6 text-destructive", children: error.message });
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 p-6 bg-background text-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-between items-begin", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "T\xE0i li\u1EC7u" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
          "T\u1ED5ng: ",
          totalItems
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: () => navigate({
        to: "/document/new"
      }), className: "h-9 text-white bg-green-400 transition-colors cursor-pointer hover:bg-green-500", children: "T\u1EA1o m\u1EDBi" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[80px]", children: "ID" }),
        /* @__PURE__ */ jsx(TableHead, { children: "N\u1ED9i dung" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-[180px]", children: "Ng\xE0y t\u1EA1o" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-[180px]", children: "Ng\xE0y c\u1EADp nh\u1EADt" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right w-[160px]" })
      ] }) }),
      /* @__PURE__ */ jsxs(TableBody, { children: [
        items.map((doc) => {
          const strippedContent = stripHtmlTags(doc.content);
          return /* @__PURE__ */ jsxs(TableRow, { onClick: () => onSelect(doc), className: "cursor-pointer transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", "data-state": selectedId === doc.id ? "selected" : "unselected", children: [
            /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs", children: doc.id }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "max-w-[700px] truncate", title: strippedContent, children: strippedContent }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(doc.createdAt).toLocaleString() }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(doc.updatedAt).toLocaleString() }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-end", children: [
              /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "cursor-pointer", onClick: (e) => {
                e.stopPropagation();
                navigate({
                  to: `/document/${doc.id}/edit`
                });
              }, children: [
                /* @__PURE__ */ jsx(Edit, { className: "size-4" }),
                "S\u1EEDa"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "destructive", size: "sm", className: "cursor-pointer", onClick: (e) => onOpenDeleteDialog(e, doc), children: [
                /* @__PURE__ */ jsx(Trash, { className: "size-4" }),
                "X\xF3a"
              ] })
            ] }) })
          ] }, doc.id);
        }),
        items.length === 0 && /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "h-24 text-center text-muted-foreground", children: "No documents found." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => goTo(page - 1), disabled: page <= 1, children: "Tr\u01B0\u1EDBc" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          "Trang ",
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: page }),
          " /",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            " ",
            totalPages
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => goTo(page + 1), disabled: page >= totalPages, children: "Ti\u1EBFp" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "pageSize", className: "text-sm text-muted-foreground", children: "K\xEDch th\u01B0\u1EDBc trang:" }),
        /* @__PURE__ */ jsx("select", { id: "pageSize", className: "px-2 h-9 text-sm bg-transparent rounded-md border focus:ring-2 focus:ring-offset-2 focus:outline-none border-input focus:ring-ring focus:ring-offset-background", value: pageSize, onChange: (e) => goTo(1, Number(e.target.value)), children: [5, 10, 20, 50, 100].map((n) => /* @__PURE__ */ jsx("option", { value: n, children: n }, n)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: !!selectedId, onOpenChange: (isOpen) => {
      if (!isOpen) {
        onCloseDialog();
      }
    }, children: docFromUrl && /* @__PURE__ */ jsx(DialogContent, { className: "sm:max-w-3xl", children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsxs(DialogTitle, { children: [
        "Document #",
        docFromUrl.id
      ] }) }),
      /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: {
        __html: docFromUrl.sanitizedContent
      } }),
      " "
    ] }) }) }),
    /* @__PURE__ */ jsx(AlertDialog, { open: !!docToDelete, onOpenChange: () => {
      setDocToDelete(null);
    }, children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn kh\xF4ng?" }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: "H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c. T\xE0i li\u1EC7u s\u1EBD b\u1ECB x\xF3a v\u0129nh vi\u1EC5n v\xE0 to\xE0n b\u1ED9 d\u1EEF li\u1EC7u c\u1EE7a n\xF3 s\u1EBD b\u1ECB x\xF3a kh\u1ECFi m\xE1y ch\u1EE7 c\u1EE7a ch\xFAng t\xF4i." })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "H\u1EE7y" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleDeleteConfirmed, children: "Ti\u1EBFp t\u1EE5c" })
      ] })
    ] }) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-4YvGhlhz.mjs.map

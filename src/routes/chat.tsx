"use client";

import React, { useRef, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import {
  DefaultChatTransport,
  UIDataTypes,
  UIMessage,
  UIMessagePart,
  UITools,
} from "ai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function renderMessageParts(
  parts: UIMessagePart<UIDataTypes, UITools>[],
  messageId: string,
) {
  return parts.map((part, index) => {
    if (part.type === "text") {
      return (
        <ReactMarkdown
          key={`${messageId}-${index}`}
          className="max-w-none break-words prose prose-sm prose-p:my-2 prose-pre:my-2 prose-pre:rounded-md prose-pre:bg-background/50 prose-pre:p-2 dark:prose-invert"
          rehypePlugins={[
            rehypeRaw,
            rehypeSanitize,
            [rehypeHighlight, { detect: true }],
          ]}
          remarkPlugins={[remarkGfm]}
        >
          {part.text}
        </ReactMarkdown>
      );
    }
    return null;
  });
}

function renderMessage({
  id,
  role,
  parts,
  metadata,
}: UIMessage<unknown, UIDataTypes, UITools>) {
  const metadataAny = metadata as any;
  const referencedChunks =
    (metadataAny?.referencedChunks as { id: number }[]) || [];
  return (
    <div
      key={id}
      className={cn(
        "flex flex-col gap-2",
        role === "user" ? "items-end" : "items-start",
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-lg px-3 py-2 text-sm shadow-md md:max-w-[75%] md:px-4 md:py-2",
          role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground",
        )}
      >
        {renderMessageParts(parts, id)}
      </div>
      {referencedChunks.length > 0 && (
        <div className="flex flex-row flex-wrap gap-2">
          {referencedChunks.map((chunk) => (
            <Button
              key={chunk.id}
              variant="outline"
              size="sm"
              className="h-auto text-xs"
            >
              Chunk {chunk.id}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

function renderTypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="py-2 px-4 rounded-lg shadow-md bg-secondary text-secondary-foreground">
        <span className="animate-pulse">Đang suy nghĩ...</span>
      </div>
    </div>
  );
}

function ChatPage() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: import.meta.env.VITE_CHAT_ENDPOINT,
    }),
    onError: (error) => {
      toast.error("Đã xảy ra lỗi khi gửi tin nhắn: " + error.message);
    },
  });

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to recalculate
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = parseInt(textarea.style.maxHeight) || Infinity;
      textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
    }
  }, [input]);

  const handleFormSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Message Area */}
      <div className="overflow-y-auto flex-1 p-4 pb-24 md:p-6">
        <div className="flex flex-col mx-auto space-y-4 max-w-4xl">
          {messages.map(renderMessage)}
          {status === "submitted" && renderTypingIndicator()}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="fixed inset-x-0 bottom-0 border-t bg-background/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm">
        <form
          onSubmit={handleFormSubmit}
          className="flex gap-2 items-end p-2 mx-auto w-full max-w-4xl md:p-4"
        >
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập gì đó..."
            className="flex-1 max-h-48 resize-none"
            style={{ maxHeight: "192px" }} // JS needs this for calculation
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleFormSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || status === "submitted"}
            className="w-9 h-9 md:w-10 md:h-10 shrink-0"
          >
            <Send size={18} />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/chat")({
  component: ChatPage,
});

'use client';

import { useEffect, useRef } from 'react';
import type { UIMessage } from 'ai';
import ChatMessage from './ChatMessage';
import MarkdownPreview from '@uiw/react-markdown-preview';
const source = `
start a conversation with the assistant by asking a question or making a statement. The assistant will respond based on the context of the conversation and its knowledge base. You can ask follow-up questions or provide additional information to continue the conversation. The assistant is designed to assist you with various tasks, provide information, and engage in meaningful discussions. Feel free to explore different topics and see how the assistant can help you!
`;

export default function MessageList({ messages }: { messages: UIMessage[] }) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
     return (
    <MarkdownPreview source={source} style={{ padding: 16 }} />
  )
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map(m => (
        <ChatMessage key={m.id} message={m} />
      ))}
      <div ref={endRef} />
    </div>
  );
}

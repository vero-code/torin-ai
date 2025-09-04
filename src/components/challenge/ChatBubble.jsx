import { User, Bot } from 'lucide-react';

export function ChatBubble({ sender, message }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
          <Bot size={20} />
        </div>
      )}
      <div
        className={`max-w-xs rounded-lg px-4 py-2 text-white sm:max-w-md ${
          isUser ? 'rounded-br-none bg-blue-600' : 'rounded-bl-none bg-slate-700'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
      {isUser && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white">
          <User size={20} />
        </div>
      )}
    </div>
  );
}
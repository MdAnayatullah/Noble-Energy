"use client";

import { useEffect, useRef } from "react";
import { Message } from "@/lib/chatbot/messages";
import MessageItem from "./message-item";

interface MessageListProps {
    messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
}
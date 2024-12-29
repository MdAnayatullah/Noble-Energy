"use client";

import { Message } from "@/lib/chatbot/messages";
import { cn } from "@/lib/utils";

interface MessageItemProps {
    message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
    return (
        <div
            className={cn(
                "flex w-full mb-4",
                message.type === "user" ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[80%] rounded-lg px-4 py-2",
                    message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                )}
            >
                <p className="text-sm">{message.content}</p>
                {/* <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                </p> */}
            </div>
        </div>
    );
}
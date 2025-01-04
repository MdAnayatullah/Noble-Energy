// "use client";

// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { MessageCircle, X } from "lucide-react";
// import { Message, initialMessages, generateResponse } from "@/lib/chatbot/messages";
// import MessageList from "./message-list";
// import ChatInput from "./chat-input";

// export default function Chatbot() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState<Message[]>(initialMessages);
//     const [isTyping, setIsTyping] = useState(false);

//     const handleSend = async (content: string) => {
//         // Add user message
//         const userMessage: Message = {
//             id: Date.now().toString(),
//             type: 'user',
//             content,
//             timestamp: new Date()
//         };
//         setMessages(prev => [...prev, userMessage]);
//         setIsTyping(true);

//         // Simulate bot typing delay
//         setTimeout(() => {
//             const responses = generateResponse(content);

//             // Add bot responses
//             responses.forEach((response, index) => {
//                 setTimeout(() => {
//                     const botMessage: Message = {
//                         id: Date.now().toString() + index,
//                         type: 'bot',
//                         content: response,
//                         timestamp: new Date()
//                     };
//                     setMessages(prev => [...prev, botMessage]);
//                     if (index === responses.length - 1) {
//                         setIsTyping(false);
//                     }
//                 }, index * 1000);
//             });
//         }, 1000);
//     };

//     return (
//         <>
//             {/* Chat button */}
//             <Button
//                 size="icon"
//                 className="fixed right-6 bottom-24 z-50 h-12 w-12 rounded-full bg-gray-300 hover:bg-green-200 shadow-lg transition-all duration-300 hover:shadow-xl"
//                 onClick={() => setIsOpen(true)}
//             >
//                 <MessageCircle className="h-6 w-6 text-green-600" />
//             </Button>

//             {/* Chat window */}
//             {isOpen && (
//                 <Card className="fixed right-6 bottom-24 z-50 w-[350px] h-[500px] flex flex-col shadow-xl">
//                     <div className="flex items-center justify-between p-4 border-b">
//                         <h3 className="font-semibold">Noble Energy Assistant</h3>
//                         <Button
//                             size="icon"
//                             variant="ghost"
//                             onClick={() => setIsOpen(false)}
//                         >
//                             <X className="h-4 w-4" />
//                         </Button>
//                     </div>
//                     <MessageList messages={messages} />
//                     <ChatInput onSend={handleSend} disabled={isTyping} />
//                 </Card>
//             )}
//         </>
//     );
// }


"use client";

import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Message, initialMessages, generateResponse } from "@/lib/chatbot/messages";
import MessageList from "./message-list";
import ChatInput from "./chat-input";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [isTyping, setIsTyping] = useState(false);
    const [lastActivity, setLastActivity] = useState(Date.now());

    // Track user activity
    useEffect(() => {
        const updateActivity = () => setLastActivity(Date.now());

        // Track various user interactions
        window.addEventListener('mousemove', updateActivity);
        window.addEventListener('keydown', updateActivity);
        window.addEventListener('scroll', updateActivity);
        window.addEventListener('click', updateActivity);

        return () => {
            window.removeEventListener('mousemove', updateActivity);
            window.removeEventListener('keydown', updateActivity);
            window.removeEventListener('scroll', updateActivity);
            window.removeEventListener('click', updateActivity);
        };
    }, []);

    // Auto-open chatbot after inactivity or initial load
    useEffect(() => {
        // Initial auto-open after 15 seconds
        const initialOpenTimeout = setTimeout(() => {
            if (!isOpen) setIsOpen(true);
        }, 15000);

        // Check for inactivity every 30 seconds
        const inactivityCheck = setInterval(() => {
            const inactiveTime = Date.now() - lastActivity;
            if (inactiveTime > 30000 && !isOpen) { // 30 seconds of inactivity
                setIsOpen(true);
            }
        }, 30000);

        return () => {
            clearTimeout(initialOpenTimeout);
            clearInterval(inactivityCheck);
        };
    }, [isOpen, lastActivity]);

    const handleSend = async (content: string) => {
        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        // Simulate bot typing delay
        setTimeout(() => {
            const responses = generateResponse(content);

            // Add bot responses
            responses.forEach((response, index) => {
                setTimeout(() => {
                    const botMessage: Message = {
                        id: Date.now().toString() + index,
                        type: 'bot',
                        content: response,
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, botMessage]);
                    if (index === responses.length - 1) {
                        setIsTyping(false);
                    }
                }, index * 1000);
            });
        }, 1000);
    };

    return (
        <>
            {/* Chat button */}
            <Button
                size="icon"
                className="fixed right-6 bottom-24 z-50 h-12 w-12 rounded-full bg-gray-300 hover:bg-green-200 shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle className="h-6 w-6 text-green-600" />
            </Button>

            {/* Chat window */}
            {isOpen && (
                <Card className="fixed right-6 bottom-24 z-50 w-[350px] h-[500px] flex flex-col shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h3 className="font-semibold">Noble Energy Assistant</h3>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <MessageList messages={messages} />
                    <ChatInput onSend={handleSend} disabled={isTyping} />
                </Card>
            )}
        </>
    );
}
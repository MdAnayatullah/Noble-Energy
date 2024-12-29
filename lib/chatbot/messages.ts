export type Message = {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
  };
  
  export const initialMessages: Message[] = [
    {
      id: '1',
      type: 'bot',
      content: 'Hello! 👋 I\'m your solar energy assistant. How can I help you today?',
      timestamp: new Date()
    }
  ];
  
  export const predefinedResponses: Record<string, string[]> = {
    'cost': [
      'The cost of solar installation varies based on your energy needs and property size. Typically, residential systems range from $15,000 to $25,000 before incentives.',
      'Would you like to schedule a free consultation for a personalized quote?'
    ],
    'savings': [
      'Most homeowners save between 40-70% on their electricity bills after installing solar panels.',
      'The exact savings depend on your current energy usage and local utility rates.'
    ],
    'installation': [
      'The installation process usually takes 1-3 days for residential properties.',
      'Our professional team handles everything from permits to installation and final inspection.'
    ],
    'maintenance': [
      'Solar panels require minimal maintenance - usually just occasional cleaning and annual inspections.',
      'We offer comprehensive maintenance packages to ensure optimal performance.'
    ],
    'warranty': [
      'Our solar panels come with a 25-year warranty on power output.',
      'We also provide a 10-year warranty on installation workmanship.'
    ],
    'default': [
      'I apologize, but I\'m not sure about that. Would you like to speak with one of our solar experts?',
      'You can also call us at (555) 123-4567 for immediate assistance.'
    ]
  };
  
  export function generateResponse(message: string): string[] {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('expensive')) {
      return predefinedResponses.cost;
    }
    if (lowerMessage.includes('save') || lowerMessage.includes('savings') || lowerMessage.includes('bill')) {
      return predefinedResponses.savings;
    }
    if (lowerMessage.includes('install') || lowerMessage.includes('process') || lowerMessage.includes('long')) {
      return predefinedResponses.installation;
    }
    if (lowerMessage.includes('maintain') || lowerMessage.includes('maintenance') || lowerMessage.includes('clean')) {
      return predefinedResponses.maintenance;
    }
    if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
      return predefinedResponses.warranty;
    }
    
    return predefinedResponses.default;
  }
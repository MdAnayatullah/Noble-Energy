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
      content: 'Hello! 👋 I\'m your Noble Energy assistant. How can I help you today?',
      timestamp: new Date()
    }
  ];
  
  export const predefinedResponses: Record<string, string[]> = {
    'hello': [
      'Hello! 👋 I\'m your Noble Energy assistant. How can I help you today?',
      'You can ask me about solar panel cost, savings, installation, maintenance, and warranty.'    
    ],
    'cost': [
      'The cost of solar installation varies based on your energy needs and property size. Typically, residential systems range from Rs.50,000 to Rs.200,000 and commercial systems range from Rs.1,00,000 to Rs.5,00,000 (inflation adjusted) before incentives.',
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
    'thanks': [
      'You are Welcome.',
      'Thank you for reaching out Noble Energy.'
    ],
    'ok': [
      'Yes !',
      'So, How can i help you ?'
    ],
    'yes': [
      'Thank you !',
      'Please, Call on this number : (+91) 123-4567890',
      'Our Solar Experts will help you.',
      'Thank you for reaching out Noble Energy.',
        'Have a nice day !'
    ],
    'no': [
        'No Problem !',
        'Thank you for reaching out Noble Energy.',
          'Have a nice day !'
      ],
    'default': [
      'I apologize, but I\'m not sure about that. Would you like to speak with one of our solar experts?',
      'You can also call us at (+91) 123-4567890 for immediate assistance.'
    ]
  };
  
  export function generateResponse(message: string): string[] {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hii') || lowerMessage.includes(' hii') || lowerMessage.includes(' hii ') || lowerMessage.includes('hii ') || lowerMessage.includes('hello') || lowerMessage.includes('hello ') || lowerMessage.includes(' hello') || lowerMessage.includes(' hello ') || lowerMessage.includes('hi') || lowerMessage.includes('hi ')|| lowerMessage.includes(' hi')|| lowerMessage.includes(' hi')) {
        return predefinedResponses.hello;
      }
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
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('thank you') || lowerMessage.includes('no thank you') || lowerMessage.includes('no thanks') || lowerMessage.includes('thank u')) {
        return predefinedResponses.thanks;
      }
    if (lowerMessage.includes('ok') || lowerMessage.includes('okay') || lowerMessage.includes('oki') || lowerMessage.includes('oo')) {
        return predefinedResponses.ok;
      }
    if (lowerMessage.includes('yes') || lowerMessage.includes('yeah') || lowerMessage.includes('ok yes') || lowerMessage.includes('sure') || lowerMessage.includes('yup') || lowerMessage.includes('sure yes')) {
        return predefinedResponses.yes;
      }
    if (lowerMessage.includes('no') || lowerMessage.includes('nope') || lowerMessage.includes('no thanks') || lowerMessage.includes('not now') || lowerMessage.includes('not sure') || lowerMessage.includes('not interested')) {
        return predefinedResponses.no;
      }
    
    return predefinedResponses.default;
  }
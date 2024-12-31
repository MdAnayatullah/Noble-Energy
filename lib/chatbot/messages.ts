// export type Message = {
//     id: string;
//     type: 'user' | 'bot';
//     content: string;
//     timestamp: Date;
//   };
  
//   export const initialMessages: Message[] = [
//     {
//       id: '1',
//       type: 'bot',
//       content: 'Hello! 👋 I\'m your Noble Energy assistant. How can I help you today? In single keyword, You can ask me about solar panel cost, savings, installation, maintenance, and warranty.',
      
//       timestamp: new Date()
//     }
//   ];
  
//   export const predefinedResponses: Record<string, string[]> = {
//     'hello': [
//       'Hello! 👋 I\'m your Noble Energy assistant. How can I help you today?',    
//     ],
//     'cost': [
//       'The cost of solar installation varies based on your energy needs and property size. Typically, residential systems range from Rs.50,000 to Rs.200,000 and commercial systems range from Rs.1,00,000 to Rs.5,00,000 (inflation adjusted) before incentives.',
//       'Would you like to schedule a free consultation for a personalized quote?'    
//     ],
//     'savings': [
//       'Most homeowners save between 40-70% on their electricity bills after installing solar panels.',
//       'The exact savings depend on your current energy usage and local utility rates.'
//     ],
//     'installation': [
//       'The installation process usually takes 1-3 days for residential properties.',
//       'Our professional team handles everything from permits to installation and final inspection.'
//     ],
//     'maintenance': [
//       'Solar panels require minimal maintenance - usually just occasional cleaning and annual inspections.',
//       'We offer comprehensive maintenance packages to ensure optimal performance.'
//     ],
//     'warranty': [
//       'Our solar panels come with a 25-year warranty on power output.',
//       'We also provide a 10-year warranty on installation workmanship.'
//     ],
//     'thanks': [
//       'You are Welcome.',
//       'Thank you for reaching out Noble Energy.'
//     ],
//     'ok': [
//       'Yes !',
//       'So, How can i help you ?'
//     ],
//     'yes': [
//       'Thank you !',
//       'Please, Call on this number : (+91) 123-4567890',
//       'Our Solar Experts will help you.',
//       'Thank you for reaching out Noble Energy.',
//         'Have a nice day !'
//     ],
//     'no': [
//         'No Problem !',
//         'Thank you for reaching out Noble Energy.',
//           'Have a nice day !'
//       ],
//     'default': [
//       'I apologize, but I\'m not sure about that. Would you like to speak with one of our solar experts?',
//       'You can also call us at (+91) 123-4567890 for immediate assistance.'
//     ]
//   };
  
//   export function generateResponse(message: string): string[] {
//     const lowerMessage = message.toLowerCase();
    
//     if (lowerMessage.includes('hii') || lowerMessage.includes(' hii') || lowerMessage.includes(' hii ') || lowerMessage.includes('hii ') || lowerMessage.includes('hello') || lowerMessage.includes('hello ') || lowerMessage.includes(' hello') || lowerMessage.includes(' hello ') || lowerMessage.includes('hi') || lowerMessage.includes('hi ')|| lowerMessage.includes(' hi')|| lowerMessage.includes(' hi')) {
//         return predefinedResponses.hello;
//       }
//     if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('expensive')) {
//       return predefinedResponses.cost;
//     }
//     if (lowerMessage.includes('save') || lowerMessage.includes('savings') || lowerMessage.includes('bill')) {
//       return predefinedResponses.savings;
//     }
//     if (lowerMessage.includes('install') || lowerMessage.includes('process') || lowerMessage.includes('long')) {
//       return predefinedResponses.installation;
//     }
//     if (lowerMessage.includes('maintain') || lowerMessage.includes('maintenance') || lowerMessage.includes('clean')) {
//       return predefinedResponses.maintenance;
//     }
//     if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
//       return predefinedResponses.warranty;
//     }
//     if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('thank you') || lowerMessage.includes('no thank you') || lowerMessage.includes('no thanks') || lowerMessage.includes('thank u')) {
//         return predefinedResponses.thanks;
//       }
//     if (lowerMessage.includes('ok') || lowerMessage.includes('okay') || lowerMessage.includes('oki') || lowerMessage.includes('oo')) {
//         return predefinedResponses.ok;
//       }
//     if (lowerMessage.includes('yes') || lowerMessage.includes('yeah') || lowerMessage.includes('ok yes') || lowerMessage.includes('sure') || lowerMessage.includes('yup') || lowerMessage.includes('sure yes')) {
//         return predefinedResponses.yes;
//       }
//     if (lowerMessage.includes('no') || lowerMessage.includes('nope') || lowerMessage.includes('no thanks') || lowerMessage.includes('not now') || lowerMessage.includes('not sure') || lowerMessage.includes('not interested')) {
//         return predefinedResponses.no;
//       }
    
//     return predefinedResponses.default;
//   }



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
    content: 'Hello! 👋 I\'m your Noble Energy assistant. How can I help you today? You can ask me about solar panel cost, savings, installation, maintenance, warranty, and more!',
    timestamp: new Date(),
  },
];

export const predefinedResponses: Record<string, string[]> = {
  'hello': [
    'Hello! 👋 I\'m your Noble Energy assistant. How can I assist you today?',
  ],
  'cost': [
    'The cost of solar installation varies based on your energy needs and property size. Residential systems typically range from Rs.50,000 to Rs.200,000, while commercial systems range from Rs.1,00,000 to Rs.5,00,000 before incentives.',
    'Would you like to schedule a free consultation for a personalized quote?',
  ],
  'savings': [
    'Most homeowners save between 40-70% on their electricity bills after installing solar panels.',
    'The exact savings depend on your current energy usage and local utility rates.',
  ],
  'installation': [
    'The installation process usually takes 1-3 days for residential properties.',
    'Our professional team handles everything from permits to installation and final inspection.',
  ],
  'maintenance': [
    'Solar panels require minimal maintenance - usually just occasional cleaning and annual inspections.',
    'We offer comprehensive maintenance packages to ensure optimal performance.',
  ],
  'warranty': [
    'Our solar panels come with a 25-year warranty on power output.',
    'We also provide a 10-year warranty on installation workmanship.',
  ],
  'environment': [
    'Solar energy is a clean, renewable energy source that reduces carbon emissions and dependency on fossil fuels.',
    'By switching to solar, you contribute to a greener planet.',
  ],
  'benefits': [
    'Solar energy helps you save money, increase property value, and reduce environmental impact.',
    'Would you like to know more about specific benefits for your property?',
  ],
  'financing': [
    'We offer flexible financing options, including solar loans and leasing plans, to make solar accessible for everyone.',
    'Would you like to speak to our financing expert for more details?',
  ],
  'time': [
    'The typical timeline for a solar installation project is 2-6 weeks, including permitting and installation.',
    'Our team works efficiently to ensure timely completion.',
  ],
  'custom': [
    'We offer customized solar solutions tailored to your energy needs and budget.',
    'Would you like to schedule a consultation to discuss your requirements?',
  ],
  'thanks': [
    'You\'re welcome! Let me know if you have any other questions.',
    'Thank you for reaching out to Noble Energy. Have a great day!',
  ],
  'ok': [
    'Yes!',
    'So, how can I help you?'
  ],
  'yes': [
    'Thank you!',
    'Please, call on this number: (+91) 123-4567890',
    'Our solar experts will help you.',
    'Thank you for reaching out to Noble Energy.',
    'Have a nice day!'
  ],
  'no': [
    'No problem!',
    'Thank you for reaching out to Noble Energy.',
    'Have a nice day!'
  ],
  'about_bot': [
    'I am a Noble Energy assistant. I can answer your questions related to solar panel cost, savings, installation, maintenance, warranty, and other solar solutions.',
    'Feel free to ask me anything about our products or services!'
  ],
  'products': [
    'We provide high-quality solar panels and complete installation services for residential, commercial, and business needs.',
    'Our products include solar panels, inverters, and other equipment required for solar energy solutions.',
    'Would you like more details about a specific product or service?'
  ],
  'default': [
    'I\'m sorry, I didn\'t quite understand that. Can you rephrase your question or ask about solar panel cost, savings, installation, maintenance, or warranty?',
    'Feel free to call us at (+91) 123-4567890 for more information.',
  ],
};

export function generateResponse(message: string): string[] {
  const lowerMessage = message.toLowerCase();

  const keywordMappings: Record<string, string[]> = {
    'hello': ['hello', 'hi', 'hii', 'hey', 'greetings', 'howdy', 'yo', 'sup', 'hello there', 'hi there', 'good day', 'good morning', 'good afternoon', 'good evening', 'good night', 'hi bot', 'hello bot', 'hi noble energy', 'hello noble energy'],
    'cost': ['cost', 'price', 'expensive', 'affordable', 'budget', 'quote', 'estimate', 'pricing', 'how much', 'costly', 'charge', 'fee', 'money', 'investment', 'pay', 'spend', 'worth', 'value'],
    'savings': ['save', 'savings', 'bill', 'electricity'],
    'installation': ['install', 'installation', 'process', 'setup', 'time', 'long', 'quick', 'fast', 'easy', 'hard', 'difficult', 'complicated'],
    'maintenance': ['maintain', 'maintenance', 'clean', 'service', 'care', 'repair', 'fix', 'problem', 'issue', 'trouble'],
    'warranty': ['warranty', 'guarantee'],
    'environment': ['environment', 'green', 'eco', 'carbon', 'emission', 'pollution', 'planet', 'earth'],
    'benefits': ['benefit', 'advantages', 'why solar', 'pros'],
    'financing': ['finance', 'loan', 'payment', 'afford', 'budget'],
    'time': ['time', 'duration', 'long', 'timeline'],
    'custom': ['custom', 'specific', 'tailored', 'personalized'],
    'thanks': ['thanks', 'thank you', 'thank', 'appreciate', 'grateful'],
    'ok': ['ok', 'oki', 'okay'],
    'no': ['no', 'nope', 'no thanks', 'not now', 'not sure', 'not interested', 'no thank you'],
    'yes': ['yes', 'yeah', 'yup', 'sure', 'of course'],
    'about_bot': ['how are you', 'who are you', 'what are you', 'tell me about yourself', 'what can you do', 'who is noble energy assistant'],
    'products': ['solar panel', 'solar product', 'solar equipment', 'panel', 'inverter', 'solar solutions'],
  };

  for (const [key, keywords] of Object.entries(keywordMappings)) {
    if (keywords.some((kw) => lowerMessage.includes(kw))) {
      return predefinedResponses[key] || predefinedResponses.default;
    }
  }

  return predefinedResponses.default;
}

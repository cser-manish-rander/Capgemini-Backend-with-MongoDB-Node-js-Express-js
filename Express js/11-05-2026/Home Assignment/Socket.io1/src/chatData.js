export const chats = [
  {
    id: "sarah",
    name: "Sarah Khan",
    avatar: "SK",
    status: "online",
    preview: "Send me the mockups when you can.",
  },
  {
    id: "design",
    name: "Design Team",
    avatar: "DT",
    status: "2 online",
    preview: "We moved the release note to Friday.",
  },
  {
    id: "family",
    name: "Family Group",
    avatar: "FG",
    status: "last seen recently",
    preview: "Dinner is at 8 tonight.",
  },
  {
    id: "support",
    name: "Support Desk",
    avatar: "SD",
    status: "away",
    preview: "Your ticket has been updated.",
  },
];

export const initialMessages = {
  sarah: [
    {
      id: "seed-1",
      authorId: "sarah",
      authorName: "Sarah Khan",
      text: "Are you free for a quick review later?",
      timestamp: "09:12",
    },
    {
      id: "seed-2",
      authorId: "me",
      authorName: "You",
      text: "Yes, send it over and I’ll review it this afternoon.",
      timestamp: "09:15",
    },
  ],
  design: [
    {
      id: "seed-3",
      authorId: "design",
      authorName: "Design Team",
      text: "Moodboard is ready for the new chat layout.",
      timestamp: "Yesterday",
    },
  ],
  family: [
    {
      id: "seed-4",
      authorId: "family",
      authorName: "Family Group",
      text: "Bring the dessert if you can.",
      timestamp: "Yesterday",
    },
  ],
  support: [
    {
      id: "seed-5",
      authorId: "support",
      authorName: "Support Desk",
      text: "We’ve escalated your issue to the on-call engineer.",
      timestamp: "Mon",
    },
  ],
};
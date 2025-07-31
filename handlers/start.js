export default function startHandler(bot) {
return (msg)=>{
    const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "➕ Add Expense", callback_data: "add_expense" },
          { text: "📊 View Summary", callback_data: "view_summary" },
        ],
        [
          { text: "🧠 Smart Insights", callback_data: "smart_insights" },
          { text: "📅 Monthly Report", callback_data: "monthly_report" },
        ],
        [{ text: "⚙️ Settings", callback_data: "settings" }],
      ],
    },
  };
  bot.sendMessage(
    chatId,
    `👋 Hello! I’m FinBuddy — your personal finance assistant.

I can help you:
💸 Track expenses  
📊 Show monthly summaries  
🧠 Get smart savings tips  
📅 Generate reports

Choose an option below to get started:`,
    options
  );
}
  
}

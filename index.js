import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import startHandler from "./handlers/start.js";

dotenv.config();
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/,startHandler(bot));

bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const chatId = message.chat.id;
  const data = callbackQuery.data;

  if (data === "add_expense") {
    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🍔 Food", callback_data: "expense_food" },
            { text: "🚕 Travel", callback_data: "expense_travel" },
          ],
          [
            { text: "🛍️ Shopping", callback_data: "expense_shopping" },
            { text: "🏠 Rent", callback_data: "expense_rent" },
          ],
          [{ text: "Other/Miscllenous", callback_data: "expense_other" }],
        ],
      },
    };
    bot.sendMessage(chatId, "Choose a category for the expense:", options);
  }


  if(data=== "view_summary"){
    bot.sendMessage(chatId,"Working on it will be available soon")
  }
  
  if(data=== "smart_insights"){
                                                                                                                                      
  }
  
  if(data=== "monthly_report"){
    bot.sendMessage(chatId,"Working on it will be available soon")
  }


   if(data.startsWith("expense_")){
    const expense=data.split("_")[1];
    bot.sendMessage(chatId,`Expense Added for ${expense}`)
   }
 
 
 

  bot.answerCallbackQuery(callbackQuery.id);
});

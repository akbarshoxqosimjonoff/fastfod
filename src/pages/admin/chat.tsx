import React, { useState, useEffect } from "react";

interface Message {
  text: string;
  from: string;
  messageId: number;
}

interface Update {
  message?: {
    message_id: number;
    text: string;
    from: {
      first_name: string;
    };
  };
}

const ChatComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastMessageId, setLastMessageId] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  const sendMessage = async () => {
    if (!message) return;

    const newMessage = {
      text: message,
      from: "Siz",
      messageId: -1,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7331159085:AAGeXW1b6BWkVLGKAsia8W-rqzrv0Wtg8Is/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "6243315951",
            text: message,
          }),
        }
      );

      const data = await response.json();
      if (!data.ok) {
        throw new Error(data.description);
      }

      console.log("Xabar muvaffaqiyatli yuborildi:", data);
      setMessage("");
    } catch (error) {
      console.error("Xabar yuborishda xato:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot7331159085:AAGeXW1b6BWkVLGKAsia8W-rqzrv0Wtg8Is/getUpdates`
      );
      const data = await response.json();
      if (data.ok) {
        const newMessages = data.result
          .filter((update: Update) => update.message && update.message.text)
          .filter(
            (update: Update) =>
              lastMessageId === null ||
              update.message!.message_id > lastMessageId
            // update.message!.from.first_name !== "Siz"
          )
          .map((update: Update) => ({
            text: update.message!.text,
            from: update.message!.from.first_name || "Noma",
            messageId: update.message!.message_id,
          }));

        console.log(newMessages, lastMessageId);

        if (newMessages.length > 0) {
          setMessages((prevMessages) => [...prevMessages, ...newMessages]);
          setLastMessageId(newMessages[newMessages.length - 1].messageId);
        }
      }
    } catch (error) {
      console.error("Xabarlarni olishda xato:", error);
    } finally {
      setCount((v) => v + 1);
    }
  };

  useEffect(() => {
    setTimeout(fetchMessages, 1000);
    // fetchMessages();
  }, [count]);

  return (
    <div className="flex flex-col mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
    <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
Chat
    </h2>
    <div className="flex-grow overflow-y-auto mb-4 p-4 bg-white border border-gray-300 rounded-lg shadow-inner">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`my-2 p-3 rounded-lg max-w-xs ${
            msg.from === "Siz"
              ? "bg-green-600 text-white self-start ml-auto"
              : "bg-blue-300 text-black self-start mr-auto"
          }`}
        >
          <div className="flex items-center">
            <strong className="text-sm">{msg.from}:</strong>
          </div>
          <p className="text-lg mt-1" style={{fontWeight:"600"}}>{msg.text}</p>
        </div>
      ))}
    </div>
    <div className="flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Xabar yozing..."
        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300"
      >
        Yuborish
      </button>
    </div>
  </div>




  );
};

export default ChatComponent;

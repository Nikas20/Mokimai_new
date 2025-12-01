const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

let determineMessage = (arr) => {
  return arr.map((e) => ({
    text: `${e.text}`,
    priority: `${e.priority}`,
    read: `${e.read}`,
    messageType: `${
      e.read === true
        ? "read"
        : e.priority === 3
        ? "critical"
        : e.priority === 2
        ? "warning"
        : e.priority === 1
        ? "normal"
        : "spam"
    }`,
  }));
};

console.log(determineMessage(notifications));

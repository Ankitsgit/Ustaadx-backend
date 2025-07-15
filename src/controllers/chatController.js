
// File: src/controllers/chatController.js
const Message = require('../models/Message');
const Booking = require('../models/Booking');
const User = require('../models/User');

// const getContacts = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     // 1. Get all unique userIds from messages
//     const messages = await Message.find({
//       $or: [
//         { sender: userId },
//         { receiver: userId }
//       ]
//     });

//     const messageUserIds = new Set();
//     messages.forEach((msg) => {
//       if (msg.sender.toString() !== userId) messageUserIds.add(msg.sender.toString());
//       if (msg.receiver.toString() !== userId) messageUserIds.add(msg.receiver.toString());
//     });

//     // 2. Get all accepted bookings where the user is involved
//     const bookings = await Booking.find({
//       status: 'accepted',
//       $or: [{ fromUser: userId }, { toUser: userId }]
//     });

//     const bookingUserIds = new Set();
//     bookings.forEach((booking) => {
//       if (booking.fromUser.toString() !== userId) bookingUserIds.add(booking.fromUser.toString());
//       if (booking.toUser.toString() !== userId) bookingUserIds.add(booking.toUser.toString());
//     });

//     // 3. Merge both sets
//     const allContactIds = [...new Set([...messageUserIds, ...bookingUserIds])];

//     // 4. Fetch user info
//     const contacts = await User.find({ _id: { $in: allContactIds } })
//       .select('name profileImage email');

//     res.json(contacts);
//   } catch (err) {
//     console.error('❌ Failed to load contacts:', err);
//     res.status(500).json({ message: 'Server error while fetching contacts' });
//   }
// };

const getContacts = async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. Get all users this user has chatted with
    const messages = await Message.find({
      $or: [{ sender: userId }, { receiver: userId }]
    });

    const contactMap = new Map(); // key: otherUserId, value: lastMessage

    for (let msg of messages) {
      const otherUserId = msg.sender.toString() === userId ? msg.receiver.toString() : msg.sender.toString();

      const existing = contactMap.get(otherUserId);
      if (!existing || new Date(msg.createdAt) > new Date(existing.createdAt)) {
        contactMap.set(otherUserId, msg);
      }
    }

    // 2. Get users from accepted bookings too
    const bookings = await Booking.find({
      status: 'accepted',
      $or: [{ fromUser: userId }, { toUser: userId }]
    });

    bookings.forEach((booking) => {
      const otherUserId =
        booking.fromUser.toString() === userId
          ? booking.toUser.toString()
          : booking.fromUser.toString();

      // Only add if they don’t already exist in map (no chat yet)
      if (!contactMap.has(otherUserId)) {
        contactMap.set(otherUserId, null); // no message yet
      }
    });

    // 3. Fetch user details and prepare contact list
    const allContactIds = Array.from(contactMap.keys());

    const users = await User.find({ _id: { $in: allContactIds } }).select(
      '_id name profileImage'
    );

    const contactList = users.map((user) => {
      const lastMsg = contactMap.get(user._id.toString());
      return {
        _id: user._id,
        name: user.name,
        profilePicture: user.profileImage,
        lastMessage: lastMsg?.content || '',
        lastMessageTime: lastMsg?.createdAt || null
      };
    });

    // Optional: sort contacts by last message time
    contactList.sort((a, b) => {
      const aTime = a.lastMessageTime ? new Date(a.lastMessageTime) : 0;
      const bTime = b.lastMessageTime ? new Date(b.lastMessageTime) : 0;
      return bTime - aTime;
    });

    res.json(contactList);
  } catch (err) {
    console.error('❌ Failed to fetch contacts with last message:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const getMessages = async (req, res) => {
  const { receiverId } = req.params;
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: receiverId },
        { sender: receiverId, receiver: req.user.id }
      ]
    }).sort('createdAt');

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;
  try {
    const message = await Message.create({
      sender: req.user.id,
      receiver: receiverId,
      content
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMessages,
  sendMessage,
  getContacts 
};


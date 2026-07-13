module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি তৈরি করতে না চান, তাহলে চলে যেতে পারেন আমাদের ইউটিউব চ্যানেলে। " +
        "সেখানে গিয়ে ভিডিও দেখে আপনি খুব সহজে বট তৈরি করে নিতে পারবেন যদিও করবেন না জানি। " +
        "তাহলে ১৫-২০ বছর দেরি করে এখনি চলে যান আমাদের ইউটিউব চ্যানেলে।\n\n" +
        "➤ YouTube Channel: এখনও ইউটিউব চ্যানেল খুলি নাই হুদাই 🐸\n\n" +
        "🔗 GitHub Fork Link: 5000 টাকা নিয়ে বস তাওহীদ এর ইনবক্স এ মেসেজ দাও😍";

    return api.sendMessage(message, event.threadID, event.messageID);
};

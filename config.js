const config = {
  challenge: true, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "gointerstellar.app": "",
  },
  users: {
    // You can add multiple users by doing username: 'password'.
    Alex: "AlexTheOwnerP",
    Extra: "ExtraAccountEz",
    1: "Password",
  },
};

export default config;

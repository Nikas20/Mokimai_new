const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com",
    },
    roles: ["user", "editor"],
  },
};

console.log([
  data.status,
  data.user.id,
  data.user.profile.name,
  data.user.roles[0],
]);

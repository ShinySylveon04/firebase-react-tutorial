let db = {
  users: [
    {
      userId: "dh23ggj5h32g543j5gf43",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.798Z",
      imageUrl: "image/euifiuwefh/wibfiuwegf",
      bio: "Hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK"
    }
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2019-03-15T11:46:01.018Z",
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "nsidnbihweihw",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "sbuifiehrigherg",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z"
    }
  ]
};
const userDetails = {
  //Redux data
  credentials: {
    userId: "sfnhiherihnfg",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/euifiuwefh/wibfiuwegf",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "London, UK"
  },
  likes: [
    {
      userHandle: "user",
      screamId: "uibefew98f"
    },
    {
      userHandle: "user",
      screamId: "iufioenofiew"
    }
  ]
};

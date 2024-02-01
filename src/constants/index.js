import { facebook, instagram, linkedin, twitter, send, shield, star, vector  } from "../assets";


export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Photos",
    title: "Captures",
  },
  {
    id: "Contact",
    title: "Contact",
  },
  {
    id: "social_links",
    title: "Social Links",
  },
];

export const projects = [
  {
    id: "project-1",
    icon: star,
    link: "https://github.com/aumsathwara/Diabetic-Retinopathy",
    title: "Diabetic Retinopathy",
    content:
    "Used deep learning models (CNN, EfficientNetB4, InceptionV3) for diabetic retinopathy detection, achieving 96.72% accuracy with model stacking & K-fold cross-validation.",  
  },
  {
    id: "project-2",
    icon: star,
    link: "https://github.com/aumsathwara/waste_management",
    title: "Waste Management",
    content:
      "Created a Machine Learning Model using Artificial Intelligence libraries like Keras and OpenCV that identifies the waste product and categorizes it into recycle, organic, plastic, and inorganic. Achieved accuracy of 96.34%.",
  },
  {
    id: "project-3",
    icon: shield,
    link: "https://github.com/aumsathwara/attendance_system",
    title: "Attendance System",
    content:
      "Created an Attendance System that could detect face and compare it with the database. If the face being detected matches data in the database then student's id is marked as present.",
  },
  {
    id: "project-4",
    icon: send,
    link: "https://github.com/aumsathwara/book_listing",
    title: "Library Management",
    content:
      "Built a library management system in which the user can update, delete, add books. Created a secure login portal for the user to login and access database. Technologies worked on included Django, MySQL, Python, and AJAX",
  },
  {
    id: "project-5",
    icon: star,
    link: "https://github.com/aumsathwara/hand_tracking",
    title: "Hand Tracking",
    content:
      "Developed a web application with the help of Node, AJAX and MediaPipe that tracks hand movement. Produced captivating animations with the help of the DOM concept and detected coordinates   of hand.",
  },
  {
    id: "project-6",
    icon: shield,
    link: "https://github.com/aumsathwara/discord_bot",
    title: " Discord Bot",
    content:
      "Built a Discord Bot from scratch using discord.py in Python that takes a user to a specified channel on specific interaction with a message, greets the user, keeps the community channel clean from spammy and explicit messages, and displays the live status of the community.",
  },
  {
    id: "project-7",
    icon: send,
    link: "https://github.com/aumsathwara/Fradulent-Transaction-Model",
    title: "Fradulent Transaction Model",
    content:
      "Created a Machine Learning model which can classify if a transaction being made is fradulent or not. Used Logistic Regression, Decision Tree and RandomForest Classifier for the classification purposes.",
  },

];

export const Photos = [
  {
    id: "feedback-1",
    url: "https://lh3.googleusercontent.com/pw/ABLVV87XUYW4S9ss-Xty2VO1ivijCbYnweJJKRcGhcLN3fPDh2zilhmL-Seyq2OwIkKoSEY22qsErPJM0mfD4uRJ0Vkv_ZTGjDb9KZyO9DWHPD-RteIGkwJ_UGnTXU7f1VoNFt3vxJGOOh3fKRaSJSCAYY9Rmg=w1288-h859-s-no-gm?authuser=0",
  
  }, 
  {
    id: "feedback-2",
    url: "https://lh3.googleusercontent.com/pw/AL9nZEVm4X35ZHUB1PLt0zedQvLzFKut6VKxy2Qlw9uNCPUbNqWGJz8UTLChWRhvEriLTwPOmvs3v6aInSjhOmV99Q2YKMesY5ipeME7QGgSvWirSx-SCPP-8rrZogzrLcdN8ylmUpK1rcQf5SoICsWKK01M=w1325-h883-no?authuser=0",

  },
  {
    id: "feedback-3",
    url: "https://lh3.googleusercontent.com/pw/AL9nZEUW1t-_Co_XvhJ1LKeta8Ezmrs16azFNZ-eEl9Sd0OCVxt79WtKne9qOEAkjX1njzzSyxTSzYVq_UAaPVz7H6virmcXibr014GQRl6ZbcD9vU_-dQtP5pFBLmWU7mrfRkkoBgNWau8zw_byzKjcpQlR=w1325-h883-no?authuser=0",
  },
  {
    id: "feedback-4",
    url: "https://lh3.googleusercontent.com/pw/AL9nZEVWEbsi0DUARf521NRMRWs0BZp8qecLUznjlVSvaDcw6SnMxcdz-r6tDR25cFdR-8cvsF6AJzoeNLFojeOhzBzaudabbl1PrQ1Q068OBR4wjuHEWlD7w-oCe688fnG9tHdZvS4ysIuim_mjZEzsufmD=w1325-h883-no?authuser=0",
  },
  {
    id: "feedback-5",
    url: "https://lh3.googleusercontent.com/pw/AL9nZEVwdEzj95fXqP5hzaN5RvsnFk39OoMsYJ-WJFh3uf-F8PUl2DAqJKcLiTUpD-dI0AuKJN5SQDBPFKHU9LJl_TMq_Yc3PMQxzHkGAMZydbkJpYPSNzWis611xqnXtRldkZGKEFy6q96SODIMNozrZkUo=w1325-h883-no?authuser=0",
  },
  {
    id: "feedback-6",
    url: "https://lh3.googleusercontent.com/pw/AL9nZEWkt26xybjinO5T_oYZM8HfpaLnmqzlJHCPbaOS1CZtKqFG2PkIZvnlFgI-YvaAv-CmVV1UDmGdX_ybVJqb6NxGVE2UltiUlBI0UmpQJWItBeUM4WJpboacBj_EKq8xqIwSvyecoGbVa7QQNukjDSW4=w1325-h883-no?authuser=0",
  },
  {
    id: "feedback-7",
    url: " https://lh3.googleusercontent.com/pw/AL9nZEUoqT-V4sNtwMDmnpA9BLVvPwA9Jba8LC070v5qtyidrscIvHvzO6_01FEG0IlK3XsAjfmGQHyvSSSQQcsJeNJ7ThdAU49sdXZFRAjOQ8XvYoW-tartM6enV4GRuV6g3uGPSfR1ibKf2-m2mfeQ8mju=w1325-h883-no?authuser=0",
  },   
  {
    id: "feedback-8",
    url: "https://lh3.googleusercontent.com/pw/ABLVV87bzV20j-hdftd2WAzGI0Pts28OI8OE7a5M8YabRbRcMSy_t-yaKpaHei9oVhRNnzuVIOJkR3xVTw8NP-_yL5T2J9yEI8Y2RzR7K6BLChagbkv8lL0iniNdvjIVKsOm1VqYMTcWpo59a6JZzOo-fKGepQ=w1288-h859-s-no-gm?authuser=0",
  
  },
  {
    id: "feedback-9",
    url: "https://lh3.googleusercontent.com/pw/ABLVV853xWihWEoR3vDPVjpQOrKP4yN_glh1y1NunNHdMlR190hDsUP9ufidoH_9SMSjB1xrrBEpcIqRmJxb3m92EVFiN7L1HxBJ69_5aiCxICdXKDFOr2Mo9xNhpm6BUmqdcTKar1mxisbExLrFIZFzKzkkOA=w1288-h859-s-no-gm?authuser=0",
  },
  {
    id: "feedback-10",
    url: "https://lh3.googleusercontent.com/pw/ABLVV86Lxgc9XTgDWezpSA12WyxMgY5cSvhF-5cxXMInvIZ7pb7gK3cnQrBUWskeBA60_UTllrYzqNNIn0tgh4MkV--1DWYAp94GQPmZECaFDzwFfy97yek60U-yB5saho-Et82iz4i8SqK-kwWHr53H8HNBVQ=w1288-h859-s-no-gm?authuser=0",
  
  },
];

export const social_links = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/aumsathwara",
  },
  {
    id: "social-media-2",
    icon: vector,
    link: "https://github.com/aumsathwara",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/sathwaraaum",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/aumsathwara",
  },
];

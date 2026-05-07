import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "React Native Developer",
    company: "Stellen Infotech",
    duration: "Jan 2024 – Present",
    location: "Mohali, Punjab, India",
    type: "Full-time",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Pusher",
      "Axios"
    ],
    responsibilities: [
      "Built scalable cross-platform applications",
      "Integrated real-time communication systems (Pusher/WebSocket)",
      "Optimized mobile app performance and memory usage",
      "Implemented authentication and complex API integrations"
    ],
    achievements: ["6 White-label Apps", "20K+ Active Users", "99.7% Crash-Free"],
    stats: [
      { label: "Tenure", value: "2.5 yrs" },
      { label: "Projects", value: "12" }
    ]
  },

  {
    id: 2,
    role: "Native Android Developer (Kotlin)",
    company: "Stellen Infotech",
    duration: "Jan 2024 – Present",
    location: "Mohali, Punjab, India",
    type: "Full-time",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Coroutines",
      "Flow",
      "Retrofit"
    ],
    responsibilities: [
      "Designed modern Android architecture (MVVM, Clean Architecture)",
      "Built performant UI with Jetpack Compose and XML fallbacks",
      "Implemented local persistence with Room",
      "Integrated REST APIs and Firebase features"
    ],
    achievements: ["Robust Offline Support", "Modular App Architecture"],
    stats: [{ label: "Modules", value: "5+" }]
  },

  {
    id: 3,
    role: "Native iOS Developer (Swift)",
    company: "Stellen Infotech",
    duration: "Jan 2024 – Present",
    location: "Mohali, Punjab, India",
    type: "Full-time",
    technologies: ["Swift", "SwiftUI", "UIKit", "Combine", "CoreData"],
    responsibilities: [
      "Built native iOS flows using SwiftUI and UIKit",
      "Implemented MVVM architecture and Combine data flows",
      "Handled local storage and persistent data syncing",
      "Managed App Store deployments and push notifications"
    ],
    achievements: ["Smooth Native UX", "Fast App Launch Time"],
    stats: [{ label: "Stores", value: "App Store" }]
  },

  {
    id: 4,
    role: "React Native Trainee",
    company: "Dev Technosys Pvt Ltd",
    duration: "April 2023 – September 2023",
    location: "Malviya Nagar, Jaipur, India",
    type: "Training",
    technologies: ["React Native", "JavaScript", "Redux"],
    responsibilities: [
      "Built training apps and learned cross-platform patterns",
      "Practiced state management and responsive UI design"
    ],
    achievements: ["3 Training Projects"]
  },

  {
    id: 5,
    role: "Associate Software Engineer Trainee",
    company: "HabileLabs Private Limited",
    duration: "Nov 2022 – March 2023",
    location: "Mansarovar, Jaipur, India",
    type: "Training",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
    responsibilities: ["Completed full-stack training", "Built responsive web apps"],
    achievements: ["Full-Stack Training"]
  }
];

export default experiences;

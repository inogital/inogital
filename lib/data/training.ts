import type { FeatureTone } from "@/components/common/feature-card"

export type TrainingSection = {
  title: string
  body: string
  points?: string[]
}

export type TrainingCourse = {
  slug: string
  title: string
  subtitle: string
  duration: string
  audience: string[]
  summary: string
  tone: FeatureTone
  sections: TrainingSection[]
}

export const trainings: TrainingCourse[] = [
  {
    slug: "social-media-sprint",
    title: "Social Media Guide",
    subtitle: "A Practical 30-Day Social Media Sprint for Beginners",
    duration: "30 days",
    audience: ["beginners", "schools", "npos", "smes"],
    summary:
      "A comprehensive, structured roadmap designed to establish your accounts, understand platforms, and build a repeatable publishing habit.",
    tone: "pink",
    sections: [
      {
        title: "What this sprint is",
        body: "This is a 30-day working plan, not a tour of every social network. You leave with live accounts, a clear reason for each platform you keep, and a publishing rhythm you can repeat after the month ends.",
      },
      {
        title: "Who it is for",
        body: "Beginners at a school, nonprofit, or small organisation who have been asked to 'do social media' and need a starting structure. You do not need a following, a design team, or a daily content studio.",
        points: [
          "One person can run it, or a small team can share the roles",
          "Works for a school, a nonprofit programme, or a small business",
          "Assumes you are starting, or starting over, on purpose",
        ],
      },
      {
        title: "Week 1 — Establish the accounts",
        body: "The first week is setup. You decide which platforms you will actually maintain, claim the names, and make each profile understandable to a stranger.",
        points: [
          "Pick two platforms you can sustain. Leave the rest for later.",
          "Use one name, one logo, and one short description everywhere.",
          "Turn on two-factor authentication and note who holds the login.",
          "Write a one-sentence answer to: who is this for, and why should they follow?",
        ],
      },
      {
        title: "Week 2 — Understand the platforms",
        body: "The second week is observation. You learn how each chosen platform actually works before you try to fill it.",
        points: [
          "Spend time as a reader: what gets saved, shared, or ignored in your field.",
          "Note the format each platform rewards: short text, photo, short video, or a link.",
          "List five accounts you respect and write down one habit from each.",
          "Draft a simple content mix: updates, useful tips, and proof of the work you do.",
        ],
      },
      {
        title: "Week 3 — Build the publishing habit",
        body: "The third week is repetition. You publish on a schedule small enough to keep, and you prepare posts in a batch so a busy day does not wipe out the plan.",
        points: [
          "Choose fixed days. Three posts a week is enough to start.",
          "Batch the writing once, then only publish and reply on the other days.",
          "Each post needs one job: tell people something, show the work, or invite a next step.",
          "Reply to comments in the same sitting you publish. That is part of the habit.",
        ],
      },
      {
        title: "Week 4 — Review and keep going",
        body: "The last week is a review, not a new strategy. You look at what you actually published, what people responded to, and what you will repeat next month.",
        points: [
          "Keep the posts that earned a reply, a save, or a visit. Drop the rest from the mix.",
          "Write next month's calendar from the posts that worked.",
          "Confirm who posts, who replies, and where the logins live.",
          "Stop any platform you did not touch. An empty account is not a presence.",
        ],
      },
      {
        title: "What you leave with",
        body: "A named set of accounts, a written description of who they are for, a four-week record of posts, and a calendar you can run again without starting from zero.",
      },
    ],
  },
  {
    slug: "google-admin-console",
    title: "Navigating the Google Admin Console",
    subtitle: "Run the console your organisation already pays for",
    duration: "2 hours",
    audience: ["npos", "schools", "smes"],
    summary:
      "Learn how to navigate the Google Admin Console for your organisation, including password resets, adding a user, and suspending a user.",
    tone: "blue",
    sections: [
      {
        title: "What you will practise",
        body: "A guided pass through the Admin console so the person who looks after accounts can do the everyday tasks without guessing.",
        points: [
          "Provision admin roles",
          "Review security settings",
          "Work with service accounts",
          "Reset a password, add a user, and suspend a user",
        ],
      },
      {
        title: "Who should attend",
        body: "IT champions, office managers, and anyone who has been handed the Admin console and asked to keep accounts in order.",
      },
    ],
  },
  {
    slug: "bulk-account-creation",
    title: "Bulk Account Creation",
    subtitle: "Add a whole group of users in one pass",
    duration: "2 hours",
    audience: ["npos", "schools"],
    summary: "Learn how to add bulk users at once on the Google Admin Dashboard.",
    tone: "green",
    sections: [
      {
        title: "What you will practise",
        body: "You prepare a user list, place people in the right organisational units, and run a creation process you can reuse at the next intake.",
        points: [
          "Provision a CSV user list",
          "Create organisational units",
          "Make a reusable account creator",
        ],
      },
      {
        title: "Who should attend",
        body: "Schools and nonprofits that onboard learners or staff in groups rather than one account at a time.",
      },
    ],
  },
  {
    slug: "web-design-for-teachers",
    title: "Web Design for Teachers",
    subtitle: "A school site without writing code",
    duration: "2.5 hours",
    audience: ["schools"],
    summary: "Design your school website in less than 3 hours. No coding skills required.",
    tone: "orange",
    sections: [
      {
        title: "What you will practise",
        body: "Teachers leave with a site they can update themselves, using no-code tools rather than a developer for every change.",
        points: [
          "Use no-code tools",
          "Design a website",
          "Deploy your website",
          "Update your website",
        ],
      },
      {
        title: "Who should attend",
        body: "Educators who need a public page for a class, a department, or the school, and who will be the ones editing it afterwards.",
      },
    ],
  },
  {
    slug: "shared-drive",
    title: "The Shared Drive",
    subtitle: "Files the organisation owns, not one person's account",
    duration: "1.5 hours",
    audience: ["npos", "schools"],
    summary:
      "Access resources from anywhere at any time, securely, on your organisation domain.",
    tone: "indigo",
    sections: [
      {
        title: "What you will practise",
        body: "You set up a Shared Drive so documents stay with the organisation when someone leaves, and so the right people can find them.",
        points: [
          "Create a Shared Drive",
          "Share files with the right groups",
          "Secure the Shared Drive",
        ],
      },
      {
        title: "Who should attend",
        body: "Office and programme staff who currently pass files through personal Drive accounts or email attachments.",
      },
    ],
  },
]

export function getTraining(slug: string) {
  return trainings.find((item) => item.slug === slug)
}

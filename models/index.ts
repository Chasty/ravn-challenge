import { PointEstimate, TaskTag } from "@/graphql/__generated__/graphql";

export type Assignee = {
  id: string;
  fullName: string;
  avatar: string;
  email: string;
  type: string;
  updatedAt: string;
  createdAt: string;
};

export type Point = {
  id: string;
  points: string;
  image: string;
  value: PointEstimate;
};

export type TagLabel = {
  id: string;
  label: string;
  isChecked: boolean;
  value: TaskTag;
};

export const LABELS: TagLabel[] = [
  {
    id: "1",
    label: "iOS",
    value: TaskTag.Ios,
    isChecked: false,
  },
  {
    id: "2",
    label: "Android",
    value: TaskTag.Android,
    isChecked: false,
  },
  {
    id: "3",
    label: "React",
    value: TaskTag.React,
    isChecked: false,
  },
  {
    id: "4",
    label: "Node JS",
    value: TaskTag.NodeJs,
    isChecked: false,
  },
  {
    id: "5",
    label: "Rails",
    value: TaskTag.Rails,
    isChecked: false,
  },
];

export const POINTS: Point[] = [
  {
    id: "1",
    points: "0 points",
    value: PointEstimate.Zero,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    points: "1 points",
    value: PointEstimate.One,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "3",
    points: "2 points",
    value: PointEstimate.Two,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "4",
    points: "4 points",
    value: PointEstimate.Four,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "5",
    points: "8 points",
    value: PointEstimate.Eight,
    image: "/placeholder.svg?height=32&width=32",
  },
];

export const ASSIGNESS: Assignee[] = [
  {
    id: "703de395-1d49-4471-aafa-d990dcf32cd1",
    fullName: "Grace Stone",
    avatar: "https://avatars.dicebear.com/api/initials/gs.svg",
    email: "gstone@fake.com",
    type: "CANDIDATE",
    updatedAt: "2022-12-28T15:33:06.079Z",
    createdAt: "2022-12-28T15:33:06.078Z",
  },
  {
    id: "a35d73eb-6829-4a92-ab82-43fe987ae02f",
    fullName: "Jhon Doe",
    avatar: "https://avatars.dicebear.com/api/initials/jd.svg",
    email: "jdoe@fake.com",
    type: "CANDIDATE",
    updatedAt: "2022-12-28T15:33:06.079Z",
    createdAt: "2022-12-28T15:33:06.079Z",
  },
  {
    id: "885fe214-60ac-4860-80cc-9c58179c59b4",
    fullName: "Romeo Barnes",
    avatar: "https://avatars.dicebear.com/api/initials/rb.svg",
    email: "rbarnes@fake.com",
    type: "CANDIDATE",
    updatedAt: "2022-12-28T15:33:06.079Z",
    createdAt: "2022-12-28T15:33:06.078Z",
  },
  {
    id: "c3eee345-db13-4057-99cc-d0620603c2ee",
    fullName: "Willy Rosa Huanca",
    avatar: "https://avatars.dicebear.com/api/initials/rb.svg",
    email: "willy.rosah@gmail.com",
    type: "CANDIDATE",
    updatedAt: "2024-09-06T18:04:13.264Z",
    createdAt: "2024-09-06T18:04:13.264Z",
  },
];

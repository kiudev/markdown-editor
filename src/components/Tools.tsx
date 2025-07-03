import {
  Bold,
  Heading1,
  Heading2,
  Italic,
  Link,
  Image,
  Quote,
  List,
  ListOrdered,
  Minus,
  Code,
} from "lucide-react";

export const tools = [
  {
    id: 1,
    value: "# Heading 1",
    icon: <Heading1 />,
    tag: "Heading 1",
  },
  {
    id: 2,
    value: "## Heading 2",
    icon: <Heading2 />,
    tag: "Heading 2",
  },
  {
    id: 3,
    value: "*Italic*",
    icon: <Italic />,
    tag: "Italic",
  },
  {
    id: 4,
    value: "**Bold**",
    icon: <Bold />,
    tag: "Bold",
  },
  {
    id: 5,
    value: "[Link](https://github.com/kiudev)",
    icon: <Link />,
    tag: "Link",
  },
  {
    id: 6,
    value: "![Image](https://picsum.photos/200/300)",
    icon: <Image />,
    tag: "Image",
  },
  {
    id: 7,
    value: "> Blockquote",
    icon: <Quote />,
    tag: "Blockquote",
  },
  {
    id: 8,
    value: "* Item 1\n* Item 2\n* Item 3",
    icon: <List />,
    tag: "List",
  },
  {
    id: 9,
    value: "1. One\n2. Two\n3. Three",
    icon: <ListOrdered />,
    tag: "Ordered List",
  },
  {
    id: 10,
    value: "Horizontal rule:\n\n---",
    icon: <Minus />,
    tag: "Horizontal rule",
  },
  {
    id: 11,
    value: "`Inline code` with backticks",
    icon: <Code />,
    tag: "Inline code",
  },
  {
    id: 12,
    value:
      "```\n# code block\nprint '3 backticks or'\nprint 'indent 4 spaces'\n```",
    icon: <Link />,
    tag: "Block code",
  },
];

import {
  BugOutlined,
  FlagOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
const ISSUE_TYPES = {
  BUG: "bug",
  TASK: "task",
  STORY: "story",
};
export const ISSUE_OPTIONS = {
  [ISSUE_TYPES.BUG]: {
    label: "Bug",
    value: ISSUE_TYPES.BUG,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
  [ISSUE_TYPES.TASK]: {
    label: "Task",
    value: ISSUE_TYPES.TASK,
    icon: <CheckSquareOutlined style={{ color: "#4fade6" }} />,
  },
  [ISSUE_TYPES.STORY]: {
    label: "Story",
    value: ISSUE_TYPES.STORY,
    icon: <FlagOutlined style={{ color: "#65ba43" }} />,
  },
};
const ISSUE_PRIORITY = {
  HIGHEST: "highest",
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
  LOWEST: "lowest",
};
export const ISSUE_PRIORITY_OPTIONS = {
  [ISSUE_PRIORITY.HIGHEST]: {
    label: "Highest",
    value: ISSUE_PRIORITY.HIGHEST,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
  [ISSUE_PRIORITY.HIGH]: {
    label: "High",
    value: ISSUE_PRIORITY.HIGH,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
  [ISSUE_PRIORITY.MEDIUM]: {
    label: "Medium",
    value: ISSUE_PRIORITY.MEDIUM,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
  [ISSUE_PRIORITY.LOW]: {
    label: "Low",
    value: ISSUE_PRIORITY.LOW,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
  [ISSUE_PRIORITY.LOWEST]: {
    label: "Lowest",
    value: ISSUE_PRIORITY.LOWEST,
    icon: <BugOutlined style={{ color: "#e44d42" }} />,
  },
};

interface ButtonTypes {
  children: React.ReactNode;
  variant?: "active" | "transparent" | "dark";
  outline?: "active" | "dark" | "transparent" | "light" | "none";
  rounded?: boolean;
  handleClick?: any;
}

export type { ButtonTypes };

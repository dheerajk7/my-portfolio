interface ButtonTypes {
  children: React.ReactNode;
  variant?: "active" | "transparent" | "dark";
  outline?: "active" | "dark" | "transparent" | "light" | "none";
  rounded?: boolean;
  handleClick?: any;
  buttonClasses?: string;
}

export type { ButtonTypes };

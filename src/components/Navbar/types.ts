interface NavItemType {
  id: string;
  title: string;
  isActive?: boolean;
  endPoint: string;
  icon?: string;
}

interface NavbarFooterItemType {
  id: string;
  title: string;
  icon: string;
  endPoint: string;
}

export type {
    NavItemType,
    NavbarFooterItemType,
}
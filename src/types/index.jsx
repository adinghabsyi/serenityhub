import { Icons } from '@/components/ui/icons';

const NavItem = {
  title: '',
  href: '',
  disabled: false,
  external: false,
  icon: '',
  label: '',
  description: '',
};

const NavItemWithChildren = {
  ...NavItem,
  items: [],
};

const NavItemWithOptionalChildren = {
  ...NavItem,
  items: undefined,
};

const FooterItem = {
  title: '',
  items: [
    {
      title: '',
      href: '',
      external: false,
    },
  ],
};

const MainNavItem = NavItemWithOptionalChildren;

const SidebarNavItem = NavItemWithChildren;

export { NavItem, NavItemWithChildren, NavItemWithOptionalChildren, FooterItem, MainNavItem, SidebarNavItem };

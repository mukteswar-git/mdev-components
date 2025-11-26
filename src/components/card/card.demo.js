import { renderCard } from "./card";
import * as Icons from "../icons/index";


// Elevated Card
renderCard("#card-elevated", 
  {
    variant: "elevated",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

renderCard("#card-elevated", 
  {
    variant: "elevated",
    state: "disabled",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

// Outline Card
renderCard("#card-outline", 
  {
    variant: "outline",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

renderCard("#card-outline", 
  {
    variant: "outline",
    state: "disabled",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

// Filled Card
renderCard("#card-filled", 
  {
    variant: "filled",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

renderCard("#card-filled", 
  {
    variant: "filled",
    state: "disabled",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

// Subtle Card
renderCard("#card-subtle", 
  {
    variant: "subtle",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)

renderCard("#card-subtle", 
  {
    variant: "subtle",
    state: "disabled",
    title: "Card", 
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    button: "Button",
    buttonProps: {
      iconLeft: Icons.PlusIcon(),
      iconRight: Icons.PlusIcon(),
    }
  },
)


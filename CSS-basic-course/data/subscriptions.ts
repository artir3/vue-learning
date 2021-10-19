export const subscriptions: Plan[] = [
  {
    id: 0,
    title: "FREE",
    price: 0,
    description: "For hobby projects or small teams.",
    specs: {
      workspaces: 1,
      traffic: "Unlimited Traffic",
      storage: "10GB Storage",
      support: "Basic Support",
    },
  },
  {
    id: 1,
    recommended: true,
    title: "PLUS",
    price: 29,
    description: "For ambitious projects.",
    specs: {
      workspaces: 5,
      traffic: "Unlimited Traffic",
      storage: "100GB Storage",
      support: "Plus Support",
    },
  },
  {
    id: 2,
    title: "PREMIUM",
    price: 99,
    description: "Your enterprise solution.",
    specs: {
      workspaces: 10,
      traffic: "Unlimited Traffic",
      storage: "Unlimited Traffic",
      support: "Priority Support",
    },
  },
];

export interface Plan {
  id: number;
  title: string;
  price: number;
  description: string;
  recommended?: boolean;
  specs: {
    workspaces: number;
    traffic: string;
    storage: string;
    support: string;
  };
}

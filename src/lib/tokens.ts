export interface WolfToken {
  name: string;
  ticker: string;
  address: string;
  emoji: string;
  description: string;
}

export const WOLF_PACK_TOKENS: WolfToken[] = [
  {
    name: "PREY",
    ticker: "PREY", 
    address: "", // TODO: Add actual address
    emoji: "🎯",
    description: "The hunt begins"
  },
  {
    name: "VORE",
    ticker: "VORE",
    address: "",
    emoji: "😈",
    description: "The feast continues"
  },
  {
    name: "HOWL",
    ticker: "HOWL",
    address: "",
    emoji: "🌙",
    description: "The call echoes"
  },
  {
    name: "SHADOW",
    ticker: "SHADOW",
    address: "",
    emoji: "🌑",
    description: "The darkness spreads"
  },
  {
    name: "FANG",
    ticker: "FANG",
    address: "",
    emoji: "🦷",
    description: "The bite draws blood"
  },
  {
    name: "REKTSAUCE",
    ticker: "REKTSAUCE",
    address: "",
    emoji: "🩸",
    description: "BTC crash hot sauce"
  },
  {
    name: "SUPLEXED",
    ticker: "SUPLEXED",
    address: "",
    emoji: "💪",
    description: "Wrestling your portfolio"
  },
  {
    name: "MARGINCALLED",
    ticker: "MARGINCALLED",
    address: "",
    emoji: "📱",
    description: "3 AM liquidation vibes"
  }
];

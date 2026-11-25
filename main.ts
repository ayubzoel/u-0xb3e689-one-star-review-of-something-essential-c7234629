// One-Star Review of Something Essential — make.fun entry.
//
// The program writes one single-line, deadpan one-star review of an
// everyday essential to entry.txt. Deterministic: no clock, no random
// source, no network, no environment secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review itself: oxygen is the essential, filed as a complaint.
// It reads straight — free, everywhere, lucky — and only turns in the
// last few words, when the thing being reviewed quietly takes the
// reviewer with it. No exclamation mark, no wink, one grievance.
const review =
  "Oxygen is free and everywhere, which is lucky, because the moment it leaves, so do you.";

// The gate allows 1 to 160 characters; refuse to write anything outside
// it rather than shipping an entry the scorer would mark invalid.
const length = [...review].length;
if (length < 1 || length > 160 || review.trim().length === 0) {
  throw new Error(`review is ${length} characters, outside the 1-160 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");

export function getOutcomeFromSlider(position, probabilities) {
  let cumulative = 0;

  for (const item of probabilities) {
    cumulative += item.prob;
    if (position <= cumulative) {
      return item.label;
    }
  }
}
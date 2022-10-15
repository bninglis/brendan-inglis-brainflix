// returns in plain english the time since a UTC timestamp

export default function timeSinceComments(timestamp) {
  let timeSince = Date.now() - timestamp;
  while (timeSince < 1) {
    timeSince = 1;
  }
  const unitValues = [
    { milliseconds: 0, stringOutput: "Less than a minute ago" },
    { milliseconds: 60000, stringOutput: " minute" },
    { milliseconds: 3600000, stringOutput: " hour" },
    { milliseconds: 86400000, stringOutput: " day" },
    { milliseconds: 604800000, stringOutput: " week" },
    { milliseconds: 2629743833.3334, stringOutput: " month" },
    { milliseconds: 31556926000.001, stringOutput: " year" },
  ];
  let filterResult = unitValues.filter(
    (unit) => unit["milliseconds"] < timeSince
  );
  let timeSinceItem = filterResult[filterResult.length - 1];
  if (filterResult.length === 1) {
    return timeSinceItem.stringOutput;
  } else {
    let multiple = "s";
    let timeSinceDisplayNum = Math.floor(
      timeSince / timeSinceItem.milliseconds
    );
    if (timeSinceDisplayNum === 1) {
      multiple = "";
    }
    return `${timeSinceDisplayNum}${timeSinceItem.stringOutput}${multiple} ago`;
  }
}

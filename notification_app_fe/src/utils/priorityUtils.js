const priorityWeights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getPriorityNotifications = (notifications) => {
  return [...notifications]
    .sort((a, b) => {
      const weightDiff =
        priorityWeights[b.Type] -
        priorityWeights[a.Type];

      if (weightDiff !== 0) return weightDiff;

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, 10);
};
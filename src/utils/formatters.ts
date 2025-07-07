export const formatTimestamp = (timestamp: string): string => {
  return new Date(timestamp).toLocaleString();
};

export const formatResponseTime = (responseTime: number): string => {
  return `${responseTime}ms`;
};

export const formatRiskScore = (score: number): string => {
  return `${score}/100`;
};

export const formatModelName = (model: string): string => {
  return model.replace(/-/g, ' ').toUpperCase();
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};